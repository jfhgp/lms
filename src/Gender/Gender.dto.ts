import { IsNotEmpty, IsString } from "class-validator";

export class GenderDto {
  @IsNotEmpty()
  @IsString()
  gender: string;
}
