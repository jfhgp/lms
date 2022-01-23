import { IsNotEmpty, IsString } from "class-validator";

export class PostingPlaceDto {
  @IsNotEmpty()
  @IsString()
  posting_place: string;
}
