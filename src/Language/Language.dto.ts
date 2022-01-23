import { IsNotEmpty, IsString } from "class-validator";

export class LanguageDto {
  @IsNotEmpty()
  @IsString()
  language: string;
}
