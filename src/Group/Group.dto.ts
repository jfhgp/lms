import { IsNotEmpty, IsString } from "class-validator";

export class GroupDto {
  @IsNotEmpty()
  @IsString()
  group: string;
}
