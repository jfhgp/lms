import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class SchoolTypeDto {
  @IsNotEmpty()
  @IsString()
  school_type: string;

  @IsOptional()
  added_by: User;
}
