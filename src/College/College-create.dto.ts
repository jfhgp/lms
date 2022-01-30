import { IsNotEmpty } from "class-validator";
import { User } from "../User/User.entity";
import { CollegeDto } from "./College.dto";

export class CreateCollegeDto extends CollegeDto {
  @IsNotEmpty()
  added_by: User;
}