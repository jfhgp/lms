import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { BookCategory } from "../BookCategory/BookCategory.entity";
import { BookCondition } from "../BookCondition/BookCondition.entity";
import { BookSubCategory } from "../BookSubCategory/BookSubCategory.entity";
import { BookType } from "../BookType/BookType.entity";
import { Box } from "../Box/Box.entity";
import { College } from "../College/College.entity";
import { Language } from "../Language/Language.entity";

export class HardBookDto {
  @IsNotEmpty()
  @IsString()
  isbn: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  sub_title: string;

  @IsOptional()
  @IsString()
  publisher: string;

  @IsOptional()
  @IsString()
  date_published: string;

  @IsNotEmpty()
  language_id: Language;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  number_of_pages: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  number_of_volumes: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  volume: number;

  @IsNotEmpty()
  category_id: BookCategory;

  @IsOptional()
  sub_category_id: BookSubCategory;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  number_of_copies: number;

  @IsNotEmpty()
  book_condition_id: BookCondition;

  @IsOptional()
  @IsString()
  image_front: string;

  @IsOptional()
  @IsString()
  image_back: string;

  @IsNotEmpty()
  @IsBoolean()
  hand_written: boolean;

  @IsNotEmpty()
  @IsBoolean()
  xerox_copy: boolean;

  @IsNotEmpty()
  book_type_id: BookType;

  @IsOptional()
  @IsBoolean()
  is_unique: boolean;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  source_of_book: string;

  @IsOptional()
  college_id: College;

  @IsNotEmpty()
  accessible_no: string;

  @IsNotEmpty()
  box_id: Box;
}
