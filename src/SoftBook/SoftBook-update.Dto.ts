import { IsNotEmpty } from "class-validator";
import { User } from "../User/User.entity";
import { SoftBookDto } from "./SoftBook.dto";

export class UpdateSoftBookDto extends SoftBookDto {
  @IsNotEmpty()
  updated_by: User;
}
