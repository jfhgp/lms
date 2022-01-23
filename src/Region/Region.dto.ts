import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";
import { Province } from "../Province/Province.entity";

export class RegionDto {
  @IsNotEmpty()
  @IsString()
  region: string;

  @IsNotEmpty()
  province_id: Province;

  @IsOptional()
  added_by: User;
}
