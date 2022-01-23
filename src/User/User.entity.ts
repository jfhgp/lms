import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { College } from "../College/College.entity";
import { Designation } from "../Designation/Designation.entity";
import { Employee } from "../Employee/Employee.entity";
import { Region } from "../Region/Region.entity";
import { Student } from "../Student/Student.entity";
import { BaseAuto } from "../Utils/BaseAuto";
import { UserRole } from "./UserRoleEnum";

@Entity("users")
export class User extends BaseAuto {
  @Column({ nullable: true, type: "boolean", default: true })
  is_active: boolean;

  @Column({ nullable: false, type: "varchar" })
  name: string;
  // Stident Info
  @Column({ nullable: true, type: "varchar" })  // dto required
  father_name: string;

  @Column({ nullable: true, type: "varchar" })  // dto required
  family_name: string;

  @Column({ nullable: true, type: "varchar" })
  class_name: string;

  @Column({ nullable: true, type: "varchar" })
  group: string;

  @Column({ nullable: true, type: "varchar" }) // for student
  roll_no: string;

  @Column({ nullable: true, type: "varchar" }) // Staff
  personnel_no: string;

  @Column({ nullable: false, type: "varchar", unique: true }) // Phone
  contact_no: string;

  @Column({ nullable: true, type: "varchar" }) // Phone
  father_contact_no: string;

  @OneToOne(() => Designation, (designation) => designation, {
    nullable: true,
  })
  @JoinColumn({ name: "designation_id" })
  designation_id: Designation;

  // Stident Info end

  @Column({ nullable: true, type: "varchar" })
  address: string;

  @Column({ nullable: false, type: "varchar", unique: true })
  email: string;

  @Column({ nullable: true, type: "boolean", default: true })
  is_email_valid: boolean;

  @Column({ nullable: false, type: "varchar" })
  password: string;

  // confirmPassword

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

  @ManyToOne(() => Student, (student) => student, { nullable: true })
  @JoinColumn({ name: "student_id" })
  student_id: Student;

  @ManyToOne(() => Employee, (employee) => employee, { nullable: true })
  @JoinColumn({ name: "employee_id" })
  employee_id: Employee;
}
