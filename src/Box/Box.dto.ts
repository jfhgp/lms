import { IsNotEmpty, IsString } from "class-validator";
import { Portion } from "../Portion/Portion.entity";

export class BoxDto {
  @IsNotEmpty()
  @IsString()
  box: string;

  @IsNotEmpty()
  portion_id: Portion;
}
