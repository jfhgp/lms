import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { College } from "../College/College.entity";
import { HardBook } from "../HardBook/HardBook.entity";
import { IssueBook } from "../IssueBook/IssueBook.entity";
import { User } from "../User/User.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("return_books")
export class ReturnBook extends BaseAuto {
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
  return_date: Date;

  @Column({ nullable: true, type: "boolean", default: true })
  is_returned: boolean;

  @Column({ nullable: true, type: "boolean", default: false })
  is_penalty: boolean;

  @ManyToOne(() => College, (college) => college, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "college_id" })
  college_id: College;

  @OneToOne(() => IssueBook, (issueBook) => issueBook, {nullable: false})
  @JoinColumn({name: 'issue_book_id'})
  issue_book_id: IssueBook;

  @Column({ nullable: true, type: "float", default: 0 })
  amount: number;
}
