import { IsNotEmpty, IsString } from "class-validator";
import { Scale } from "../Scale/Scale.entity";

export class DesignationDto {
  @IsNotEmpty()
  @IsString()
  designation: string;

  @IsNotEmpty()
  scale_id: Scale;
}
