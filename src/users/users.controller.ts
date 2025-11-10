import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): object {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getById(parseInt(id));
  }

  @Post()
  store(@Body() data: object) {
    return this.userService.createUser(data);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() data: any) {
    return this.userService.updateUser(parseInt(id), data);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteById(parseInt(id));
  }
}
