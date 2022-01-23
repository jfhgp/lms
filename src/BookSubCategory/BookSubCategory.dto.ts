import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BookCategory } from "../BookCategory/BookCategory.entity";
import { User } from "../User/User.entity";

export class BookSubCategoryDto {
  @IsNotEmpty()
  @IsString()
  book_sub_category: string;

  @IsNotEmpty()
  book_category_id: BookCategory;

  @IsOptional()
  added_by: User;
}
