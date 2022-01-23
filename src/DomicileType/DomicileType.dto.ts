import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class DomicileTypeDto {
  @IsNotEmpty()
  @IsString()
  domicile_type: string;

  @IsOptional()
  added_by: User;
}
