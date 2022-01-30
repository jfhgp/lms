import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { User } from "../User/User.entity";
import { IssueBookDto } from "./IssueBook.dto";

export class UpdateIssueBookDto extends IssueBookDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  id: number;
  @IsNotEmpty()
  updated_by: User;
}
