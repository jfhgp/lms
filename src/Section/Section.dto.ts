import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class SectionDto {
  @IsNotEmpty()
  @IsString()
  section: string;

  @IsOptional()
  added_by: User;
}
