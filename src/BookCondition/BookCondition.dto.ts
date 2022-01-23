import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class BookConditionDto {
  @IsNotEmpty()
  @IsString()
  book_condition: string;

  @IsOptional()
  added_by: User;
}
