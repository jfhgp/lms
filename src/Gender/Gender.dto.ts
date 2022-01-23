import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class GenderDto {
  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsOptional()
  added_by: User;
}
