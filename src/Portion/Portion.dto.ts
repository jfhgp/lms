import { IsNotEmpty, IsString } from "class-validator";
import { Shelf } from "../Shelf/Shelf.entity";

export class PortionDto {
  @IsNotEmpty()
  @IsString()
  portion: string;

  @IsNotEmpty()
  shelf_id: Shelf;
}
