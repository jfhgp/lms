import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import { College } from "../College/College.entity";
import { Employee } from "../Employee/Employee.entity";
import { Region } from "../Region/Region.entity";
import { Student } from "../Student/Student.entity";
import { UserRole } from "./UserRoleEnum";

export class UserDto {
  @IsOptional()
  @IsBoolean()
  is_active: boolean;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  is_email_valid: boolean;

  @IsNotEmpty()
  @IsString()
  password: string;

  // confirmPassword

  @IsNotEmpty()
  phone: string;

  @IsOptional()
  @IsBoolean()
  is_phone_valid: boolean;

  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  college_id: College;

  @IsOptional()
  region_id: Region;

  @IsOptional()
  student_id: Student;

  @IsOptional()
  employee_id: Employee;
}
