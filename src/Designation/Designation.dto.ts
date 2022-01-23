import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Scale } from "../Scale/Scale.entity";
import { User } from "../User/User.entity";

export class DesignationDto {
  @IsNotEmpty()
  @IsString()
  designation: string;

  @IsNotEmpty()
  scale_id: Scale;

  @IsOptional()
  added_by: User;
}
