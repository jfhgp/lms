import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("school_types")
export class SchoolType extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  school_type: string;
}
