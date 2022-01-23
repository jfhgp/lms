import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class BookTypeDto {
  @IsNotEmpty()
  @IsString()
  book_type: string;

  @IsOptional()
  added_by: User;
}
