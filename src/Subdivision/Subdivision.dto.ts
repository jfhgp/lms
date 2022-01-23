import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";
import { District } from "../District/District.entity";

export class SubdivisionDto {
  @IsNotEmpty()
  @IsString()
  subdivision: string;

  @IsNotEmpty()
  district_id: District;

  @IsOptional()
  added_by: User;
}
