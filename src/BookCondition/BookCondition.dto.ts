import { IsNotEmpty, IsString } from "class-validator";

export class BookConditionDto {
  @IsNotEmpty()
  @IsString()
  book_condition: string;
}
