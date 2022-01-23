import { IsNotEmpty, IsString } from "class-validator";

export class SubGroupDto {
  @IsNotEmpty()
  @IsString()
  sub_group: string;
}
