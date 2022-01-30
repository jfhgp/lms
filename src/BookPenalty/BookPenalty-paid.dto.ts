import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from "class-validator";
import { IssueBook } from "../IssueBook/IssueBook.entity";

export class PaidBookPenaltyDto {
  @IsNotEmpty()
  @IsBoolean()
  is_paid: boolean;

  @IsNotEmpty()
  @IsDateString()
  paid_date: Date;

  @IsNotEmpty()
  issuer_book_id: IssueBook;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  paid_amount: number;

  @IsOptional()
  @IsBoolean()
  is_partially_paid: boolean;

  @IsOptional()
  @IsBoolean()
  fully_paid: boolean;
}
