import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class GroupDto {
  @IsNotEmpty()
  @IsString()
  group: string;

  @IsOptional()
  added_by: User;
}
