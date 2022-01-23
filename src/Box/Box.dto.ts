import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Portion } from "../Portion/Portion.entity";
import { User } from "../User/User.entity";

export class BoxDto {
  @IsNotEmpty()
  @IsString()
  box: string;

  @IsNotEmpty()
  portion_id: Portion;

  @IsOptional()
  added_by: User;
}
