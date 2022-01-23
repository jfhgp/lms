import { IsNotEmpty, IsString } from "class-validator";

export class TeachingStatusDto {
  @IsNotEmpty()
  @IsString()
  teaching_status: string;
}
