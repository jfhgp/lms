import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { District } from "../District/District.entity";
import { Region } from "../Region/Region.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { User } from "../User/User.entity";

export class CollegeDto {
  @IsNotEmpty()
  @IsString()
  college_name: string;

  @IsNotEmpty()
  subdivision_id: Subdivision;

  @IsNotEmpty()
  district_id: District;

  @IsNotEmpty()
  region_id: Region;

  @IsOptional()
  added_by: User;
}
