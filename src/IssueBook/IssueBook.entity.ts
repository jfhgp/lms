import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { College } from "../College/College.entity";
import { HardBook } from "../HardBook/HardBook.entity";
import { User } from "../User/User.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("issue_books")
export class IssueBook extends BaseAuto {
  @ManyToOne(() => User, (user) => user, {
    nullable: false,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: "student_id" })
  student_id: User;

  @ManyToOne(() => HardBook, (book) => book, {
    nullable: false,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: "book_id" })
  book_id: HardBook;

  @Column({ nullable: false, type: "date" })
  issue_date: Date;

  @Column({ nullable: false, type: "date" })
  return_date: Date;

  @Column({ nullable: true, type: "boolean", default: false })
  is_returned: boolean;

  @ManyToOne(() => College, (college) => college, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: "college_id" })
  college_id: College;
}
