import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class LanguageDto {
  @IsNotEmpty()
  @IsString()
  language: string;

  @IsOptional()
  added_by: User;
}
