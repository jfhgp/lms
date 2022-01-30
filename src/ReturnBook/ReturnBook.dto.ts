import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
} from "class-validator";
import { College } from "../College/College.entity";
import { HardBook } from "../HardBook/HardBook.entity";
import { IssueBook } from "../IssueBook/IssueBook.entity";
import { User } from "../User/User.entity";

export class ReturnBookDto {
  @IsNotEmpty()
  student_id: User;

  @IsNotEmpty()
  book_id: HardBook;

  @IsNotEmpty()
  @IsDateString()
  return_date: Date;

  @IsOptional()
  @IsBoolean()
  is_returned: boolean;

  @IsNotEmpty()
  college_id: College;

  @IsNotEmpty()
  issue_book_id: IssueBook;

  @IsOptional()
  @IsBoolean()
  is_penalty: boolean;

  @IsOptional()
  amount: number;
}
