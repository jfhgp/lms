import { IsNotEmpty, IsString } from "class-validator";
import { BookCategory } from "../BookCategory/BookCategory.entity";

export class BookSubCategoryDto {
  @IsNotEmpty()
  @IsString()
  book_sub_category: string;

  @IsNotEmpty()
  book_category_id: BookCategory;
}
