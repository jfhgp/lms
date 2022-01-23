import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserDto } from "./User.dto";

export class CreateStudentDto extends UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  father_name: string;

  @IsOptional()
  @IsString()
  family_name: string;

  @IsOptional()
  @IsString()
  class_name: string;

  @IsOptional()
  @IsString()
  group: string;

  @IsOptional()
  @IsString()
  roll_no: string;

  @IsNotEmpty()
  @IsString()
  contact_no: string;

  @IsNotEmpty()
  @IsString()
  father_contact_no: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsNotEmpty()
  passwordConfirm: string;
}
