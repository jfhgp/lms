import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";
import { College } from "../College/College.entity";

export class ShelfDto {
  @IsNotEmpty()
  @IsString()
  shelf: string;

  @IsNotEmpty()
  college_id: College;

  @IsOptional()
  added_by: User;
}
