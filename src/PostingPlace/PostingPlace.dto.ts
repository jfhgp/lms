import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../User/User.entity";

export class PostingPlaceDto {
  @IsNotEmpty()
  @IsString()
  posting_place: string;

  @IsOptional()
  added_by: User;
}
