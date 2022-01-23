import { IsNotEmpty, IsString } from "class-validator";

export class BookCategoryDto {
  @IsNotEmpty()
  @IsString()
  book_category: string;
}
