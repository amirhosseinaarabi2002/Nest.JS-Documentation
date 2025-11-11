import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(15)
  @MinLength(3)
  name: string;

  mobile?: string;
}
