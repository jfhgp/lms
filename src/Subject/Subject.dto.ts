import { IsNotEmpty, IsString } from "class-validator";

export class SubjectDto {
  @IsNotEmpty()
  @IsString()
  subject: string;
}
