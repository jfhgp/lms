import { IsNotEmpty, IsString } from "class-validator";
import { District } from "../District/District.entity";

export class SubdivisionDto {
  @IsNotEmpty()
  @IsString()
  subdivision: string;

  @IsNotEmpty()
  district_id: District;
}
