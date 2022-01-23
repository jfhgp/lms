import { IsNotEmpty, IsOptional } from "class-validator";
import { HardBook } from "../HardBook/HardBook.entity";

export class Author {
  @IsNotEmpty()
  author: string;

  @IsOptional()
  books: HardBook[];
}
