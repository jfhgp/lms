import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class BoardDto {
  @IsNotEmpty()
  @IsString()
  board: string;

  @IsOptional()
  added_by: User;
}
