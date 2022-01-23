import { IsNotEmpty, IsString } from "class-validator";

export class MaritalStatusDto {
  @IsNotEmpty()
  @IsString()
  marital_status: string;
}
