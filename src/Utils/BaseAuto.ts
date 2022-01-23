import {
  BaseEntity,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../User/User.entity";

export class BaseAuto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @OneToOne(() => User, (user) => user, {
    nullable: true,
  })
  @JoinColumn({ name: "added_by" })
  added_by: User;

  @OneToOne(() => User, (user) => user, {
    nullable: true,
  })
  @JoinColumn({ name: "updated_by" })
  updated_by: User;
}
