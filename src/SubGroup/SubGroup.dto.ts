import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class SubGroupDto {
  @IsNotEmpty()
  @IsString()
  sub_group: string;

  @IsOptional()
  added_by: User;
}
