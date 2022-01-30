import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { User } from "../User/User.entity";
import { ReturnBookDto } from "./ReturnBook.dto";

export class UpdateReturnBookDto extends ReturnBookDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id: number;
  @IsNotEmpty()
  updated_by: User;
}
