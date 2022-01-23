import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { User } from "../User/User.entity";
import { HardBookDto } from "./HardBook.dto";

export class UpdateHardBookDto extends HardBookDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id: number;
  @IsNotEmpty()
  updated_by: User;
}
