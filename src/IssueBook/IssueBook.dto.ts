import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
} from "class-validator";
import { College } from "../College/College.entity";
import { HardBook } from "../HardBook/HardBook.entity";
import { User } from "../User/User.entity";


export class IssueBookDto {
  @IsNotEmpty()
  student_id: User;

  @IsNotEmpty()
  book_id: HardBook;

  @IsNotEmpty()
  @IsDateString()
  issue_date: Date;

  @IsNotEmpty()
  @IsDateString()
  return_date: Date;

  @IsOptional()
  @IsBoolean()
  is_returned: boolean;

  @IsNotEmpty()
  college_id: College;
}
