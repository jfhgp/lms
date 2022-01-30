import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { College } from "../College/College.entity";
import { HardBook } from "../HardBook/HardBook.entity";
import { IssueBook } from "../IssueBook/IssueBook.entity";
import { User } from "../User/User.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("book_penalties")
export class BookPenalty extends BaseAuto {
  @ManyToOne(() => User, (user) => user, {
    nullable: false,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "student_id" })
  student_id: User;

  @ManyToOne(() => HardBook, (book) => book, {
    nullable: false,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "book_id" })
  book_id: HardBook;

  @Column({ nullable: false, type: "date" })
  issue_date: Date;

  @Column({ nullable: false, type: "date" })
  return_date: Date;

  @Column({ nullable: true, type: "boolean", default: true })
  is_returned: boolean;

  @ManyToOne(() => College, (college) => college, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "college_id" })
  college_id: College;

  @ManyToOne(() => IssueBook, (issue) => issue, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "issuer_book_id" })
  issuer_book_id: IssueBook;

  @Column({ nullable: false, type: "float" })
  days_late: number;

  @Column({ nullable: false, type: "float" })
  amount: number;

  @Column({ nullable: true, type: "float", default: 0 })
  paid_amount: number;

  @Column({ nullable: true, type: "boolean", default: false })
  is_paid: boolean;

  @Column({ nullable: true, type: "boolean", default: false })
  is_partially_paid: boolean;

  @Column({ nullable: true, type: "boolean" })
  fully_paid: boolean;

  @Column({ nullable: true, type: "date" })
  paid_date: Date;
}
