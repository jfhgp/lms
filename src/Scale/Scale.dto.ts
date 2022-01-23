import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class ScaleDto {
  @IsNotEmpty()
  @IsString()
  scale: string;

  @IsOptional()
  added_by: User;
}
