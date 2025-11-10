import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';
import { CustomPipe } from '../pipes/custom/custom.pipe';
import { MobilePipe } from '../pipes/validate/mobile/mobile.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): object {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: string) {
    return this.userService.getById(parseInt(id));
  }

  // pipe & pipeline
  @Post()
  store(@Body(new MobilePipe(11)) data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe, new MobilePipe(11)) id: string,
    @Body() data: UpdateUserDto,
  ) {
    return this.userService.updateUser(parseInt(id), data);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: string) {
    return this.userService.deleteById(parseInt(id));
  }
}
