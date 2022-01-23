import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class ReligionDto {
  @IsNotEmpty()
  @IsString()
  religion: string;

  @IsOptional()
  added_by: User;
}
