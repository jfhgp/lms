import { IsNotEmpty } from "class-validator";
import { User } from "../User/User.entity";
import { IssueBookDto } from "./IssueBook.dto";

export class CreateIssueBookDto extends IssueBookDto {
  @IsNotEmpty()
  added_by: User;
}
