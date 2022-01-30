import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { User } from "../User/User.entity";
import { CollegeDto } from "./College.dto";

export class CreateCollegeDto extends CollegeDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id: number;
  @IsNotEmpty()
  updated_by: User;
}
