import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class ProvinceDto {
  @IsNotEmpty()
  @IsString()
  province: string;

  @IsOptional()
  added_by: User;
}
