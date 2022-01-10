import { Column, Entity, JoinColumn, JoinTable, ManyToMany } from "typeorm";
import { HardBook } from "../HardBook/HardBook.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("authors")
export class Author extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  author: string;

  @ManyToMany(() => HardBook)
  @JoinTable({
    name: "authors_books",
    joinColumn: {
      name: "author_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "book_id",
      referencedColumnName: "id",
    },
  })
  books: HardBook[];
}
