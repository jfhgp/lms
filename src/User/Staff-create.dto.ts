import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Designation } from "../Designation/Designation.entity";
import { UserDto } from "./User.dto";

export class CreateStaffDto extends UserDto {
  @IsNotEmpty()
  personnel_no: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  father_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  designation_id: Designation;

  @IsOptional()
  address: string;

  @IsOptional()
  family_name: string;

  @IsNotEmpty()
  contact_no: string;

  @IsNotEmpty()
  passwordConfirm: string;
}
