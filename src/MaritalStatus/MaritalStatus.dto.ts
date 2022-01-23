import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class MaritalStatusDto {
  @IsNotEmpty()
  @IsString()
  marital_status: string;

  @IsOptional()
  added_by: User;
}
