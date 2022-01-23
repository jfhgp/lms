import { IsNotEmpty, IsString } from "class-validator";
import { College } from "../College/College.entity";

export class ShelfDto {
  @IsNotEmpty()
  @IsString()
  shelf: string;

  @IsNotEmpty()
  college_id: College;
}
