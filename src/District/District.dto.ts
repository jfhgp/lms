import { IsNotEmpty, IsString } from "class-validator";
import { Region } from "../Region/Region.entity";

export class DistrictDto {
  @IsNotEmpty()
  @IsString()
  district: string;

  @IsNotEmpty()
  region_id: Region;
}
