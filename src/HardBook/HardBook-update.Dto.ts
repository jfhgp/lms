import { IsNotEmpty } from "class-validator";
import { User } from "../User/User.entity";
import { HardBookDto } from "./HardBook.dto";

export class UpdateHardBookDto extends HardBookDto {
  @IsNotEmpty()
  updated_by: User;
}
