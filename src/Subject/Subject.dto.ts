import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class SubjectDto {
  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsOptional()
  added_by: User;
}
