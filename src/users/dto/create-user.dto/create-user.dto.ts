import {
  IsInt,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator'; 

export class CreateUserDto {
  @IsInt() 
  @Max(100) 
  @Min(1)
  id: number;

  @IsString()
  @MaxLength(15)
  @MinLength(3)
  name: string;

  mobile?: string;
}
