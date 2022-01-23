import { IsNotEmpty, IsString } from "class-validator";
import { Province } from "../Province/Province.entity";

export class RegionDto {
  @IsNotEmpty()
  @IsString()
  region: string;

  @IsNotEmpty()
  province_id: Province;
}
