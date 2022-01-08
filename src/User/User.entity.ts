import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { College } from "../College/College.entity";
import { Region } from "../Region/Region.entity";
import { BaseAuto } from "../Utils/BaseAuto";
import { UserRole } from "./UserRoleEnum";

@Entity("users")
export class User extends BaseAuto {
  @Column({ nullable: true, type: "boolean", default: true })
  is_active: boolean;

  @Column({ nullable: false, type: "varchar" })
  name: string;

  @Column({ nullable: false, type: "varchar", unique: true })
  email: string;

  @Column({ nullable: true, type: "boolean", default: true })
  is_email_valid: boolean;

  @Column({ nullable: false, type: "varchar" })
  password: string;

  // confirmPassword

  @Column({ nullable: false, type: "varchar", unique: true })
  phone: string;

  @Column({ nullable: true, type: "boolean", default: true })
  is_phone_valid: boolean;

  @Column({ nullable: false, type: "enum", enum: UserRole })
  role: UserRole;

  @ManyToOne(() => College, (college) => college, { nullable: true })
  @JoinColumn({ name: "college_id" })
  college_id: College;

  @ManyToOne(() => Region, (region) => region, { nullable: true })
  @JoinColumn({ name: "region_id" })
  region_id: Region;
}
