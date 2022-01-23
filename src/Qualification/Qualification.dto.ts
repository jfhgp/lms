import { IsNotEmpty, IsString } from "class-validator";

export class QualificationDto {
  @IsNotEmpty()
  @IsString()
  qualification: string;
}
