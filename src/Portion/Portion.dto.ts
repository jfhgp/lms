import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";
import { Shelf } from "../Shelf/Shelf.entity";

export class PortionDto {
  @IsNotEmpty()
  @IsString()
  portion: string;

  @IsNotEmpty()
  shelf_id: Shelf;

  @IsOptional()
  added_by: User;
}
