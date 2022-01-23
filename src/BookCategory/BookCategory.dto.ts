import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class BookCategoryDto {
  @IsNotEmpty()
  @IsString()
  book_category: string;

  @IsOptional()
  added_by: User;
}
