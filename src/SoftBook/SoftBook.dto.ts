import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { BookCategory } from "../BookCategory/BookCategory.entity";
import { BookSubCategory } from "../BookSubCategory/BookSubCategory.entity";
import { BookType } from "../BookType/BookType.entity";
import { College } from "../College/College.entity";
import { Language } from "../Language/Language.entity";
import { User } from "../User/User.entity";

export class SoftBookDto {

  @IsOptional()
  @IsBoolean()
  approved: boolean;

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

  @IsString()
  @IsString()
  image_front: string;

  @IsOptional()
  @IsString()
  image_back: string;

  @IsOptional()
  book_type_id: BookType;

  @IsOptional()
  @IsBoolean()
  is_unique: boolean;

  @IsOptional()
  @IsString()
  source_of_book: string;

  @IsOptional()
  college_id: College;

  @IsOptional()
  @IsString()
  book_uri: string;

  @IsOptional()
  approved_by: User;

  @IsOptional()
  file?: any; 
}
