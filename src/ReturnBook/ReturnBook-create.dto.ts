import { IsNotEmpty } from "class-validator";
import { User } from "../User/User.entity";
import { ReturnBookDto } from "./ReturnBook.dto";

export class CreateReturnBookDto extends ReturnBookDto {
  @IsNotEmpty()
  added_by: User;
}
