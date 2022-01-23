import { IsNotEmpty, IsString } from "class-validator";

export class SectionDto {
  @IsNotEmpty()
  @IsString()
  section: string;
}
