import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Region } from "../Region/Region.entity";
import { User } from "../User/User.entity";

export class DistrictDto {
  @IsNotEmpty()
  @IsString()
  district: string;

  @IsNotEmpty()
  region_id: Region;

  @IsOptional()
  added_by: User;
}
