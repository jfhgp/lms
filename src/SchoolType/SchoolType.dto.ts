import { IsNotEmpty, IsString } from "class-validator";

export class SchoolTypeDto {
  @IsNotEmpty()
  @IsString()
  school_type: string;
}
