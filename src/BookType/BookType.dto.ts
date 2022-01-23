import { IsNotEmpty, IsString } from "class-validator";

export class BookTypeDto {
  @IsNotEmpty()
  @IsString()
  book_type: string;
}
