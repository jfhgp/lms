import { IsNotEmpty, IsString } from "class-validator";

export class BoardDto {
  @IsNotEmpty()
  @IsString()
  board: string;
}
