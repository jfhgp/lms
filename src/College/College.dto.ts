import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { District } from "../District/District.entity";
import { Region } from "../Region/Region.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { User } from "../User/User.entity";
import { GenderEnum } from "./GenderEnum";

export class BoardDto {
  @IsNotEmpty()
  @IsString()
  ddo_code: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsNotEmpty()
  subdivision_id: Subdivision;

  @IsNotEmpty()
  district_id: District;

  @IsNotEmpty()
  region_id: Region;

  @IsOptional()
  added_by: User;
}
