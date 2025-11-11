import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
// import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './entities/user.entity';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user) private userRepository: Repository<user>,
  ) {}

  getAllUsers(): Promise<user[]> {
    return this.userRepository.find();
  }

  getById(id: number): Promise<user> {
    return this.userRepository.findOneByOrFail({ id });
  }

  createUser(createUserDto: CreateUserDto): Promise<user> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  updateUser(id: number, data: UpdateUserDto): object {
    return this.userRepository.update({ id }, data);
  }

  deleteById(id: number): object {
    return this.userRepository.delete({ id });
  }
}
