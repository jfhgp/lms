import { IsNotEmpty, IsString } from "class-validator";

export class ReligionDto {
  @IsNotEmpty()
  @IsString()
  religion: string;
}
