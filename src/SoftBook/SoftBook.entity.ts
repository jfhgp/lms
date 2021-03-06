import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BookCategory } from "../BookCategory/BookCategory.entity";
import { BookSubCategory } from "../BookSubCategory/BookSubCategory.entity";
import { BookType } from "../BookType/BookType.entity";
import { College } from "../College/College.entity";
import { Language } from "../Language/Language.entity";
import { User } from "../User/User.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("soft_books")
export class SoftBook extends BaseAuto {
  @Column({ nullable: true, type: "boolean", default: false })
  approved: boolean;
  
  @Column({ nullable: false, type: "varchar" })
  isbn: string;

  @Column({ nullable: false, type: "varchar" })
  title: string;

  @Column({ nullable: true, type: "varchar" })
  sub_title: string;

  @Column({ nullable: true, type: "varchar" })
  publisher: string;

  @Column({ nullable: true, type: "varchar" })
  date_published: string;

  @OneToOne(() => Language, (language) => language, { nullable: false })
  @JoinColumn({ name: "language_id" })
  language_id: Language;

  @Column({ nullable: true, type: "integer" })
  number_of_pages: number;

  @Column({ nullable: true, type: "integer", default: 1 })
  number_of_volumes: number;

  @Column({ nullable: true, type: "integer", default: 1 })
  volume: number;

  @OneToOne(() => BookCategory, (book_category) => book_category, {
    nullable: false,
  })
  @JoinColumn({ name: "category_id" })
  category_id: BookCategory;

  @OneToOne(() => BookSubCategory, (book_sub_category) => book_sub_category, {
    nullable: true,
  })
  @JoinColumn({ name: "sub_category_id" })
  sub_category_id: BookSubCategory;

  @Column({ nullable: false, type: "varchar" })
  image_front: string;

  @Column({ nullable: true, type: "varchar" })
  image_back: string;

  @Column({ nullable: true, type: "boolean", default: false })
  hand_written: boolean;

  @OneToOne(() => BookType, (book_type) => book_type, {
    nullable: true,
  })
  @JoinColumn({ name: "book_type_id" })
  book_type_id: BookType;

  @Column({ nullable: true, type: "boolean", default: false })
  is_unique: boolean;

  @Column({ nullable: true, type: "varchar" })
  source_of_book: string;

  @OneToOne(() => College, (college) => college, {
    nullable: true,
  })
  @JoinColumn({ name: "college_id" })
  college_id: College;

  @Column({ nullable: true, type: "varchar" })
  book_uri: string;

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

  @OneToOne(() => User, (user) => user, {
    nullable: true,
  })
  @JoinColumn({ name: "approved_by" })
  approved_by: User;
}
