import { IsNotEmpty } from "class-validator";
import { User } from "../User/User.entity";
import { HardBookDto } from "./HardBook.dto";

export class CreateHardBookDto extends HardBookDto {
  @IsNotEmpty()
  added_by: User;
}
