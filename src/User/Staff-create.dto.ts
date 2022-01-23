import { Designation } from "../Designation/Designation.entity";
import { UserDto } from "./User.dto";

export class CreateStaffDto extends UserDto {
  personnel_no: string;
  name: string;
  father_name: string;
  email: string;
  designation_id: Designation;
  address: string;
  family_name: string;
  contact_no: string;
}
