import { IsNotEmpty, IsString } from "class-validator";

export class ScaleDto {
  @IsNotEmpty()
  @IsString()
  scale: string;
}
