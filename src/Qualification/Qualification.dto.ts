import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class QualificationDto {
  @IsNotEmpty()
  @IsString()
  qualification: string;

  @IsOptional()
  added_by: User;
}
