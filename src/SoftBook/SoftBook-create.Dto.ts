import { IsNotEmpty } from "class-validator";
import { User } from "../User/User.entity";
import { SoftBookDto } from "./SoftBook.dto";

export class CreateSoftBookDto extends SoftBookDto {
  @IsNotEmpty()
  added_by: User;
}
