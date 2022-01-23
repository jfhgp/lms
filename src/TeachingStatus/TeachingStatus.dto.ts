import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class TeachingStatusDto {
  @IsNotEmpty()
  @IsString()
  teaching_status: string;

  @IsOptional()
  added_by: User;
}
