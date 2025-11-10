import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MaxLength(15)
  @MinLength(3)
  name: string;
}
