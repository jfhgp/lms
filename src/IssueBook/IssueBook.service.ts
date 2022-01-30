import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { HardBook } from "../HardBook/HardBook.entity";
import { User } from "../User/User.entity";
import { LMSUtils } from "../Utils/fectory";
import { CreateIssueBookDto } from "./IssueBook-create.dto";
import { IssueBook } from "./IssueBook.entity";

export class IssueBookService {
  static add = async (data: CreateIssueBookDto) => {
    try {
      const dto = plainToClass(CreateIssueBookDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return error;
      
      let user = await getRepository(User).query(
        "SELECT id, is_student FROM users WHERE id = $1",
        [dto.student_id]
      );
      if (user.length < 1) {
        return { error: "user id does not exists" };
      }

      if (user[0].is_student === false) {
        return { error: "issuer not a student" };
      }

      let book = await getRepository(HardBook).query(
        "SELECT id, number_of_copies FROM hard_books WHERE id = $1",
        [dto.book_id]
      );
      if (book.length < 1) {
        return { error: "book id does not exists" };
      }

      let issue = await getRepository(IssueBook).query(
        "SELECT id FROM issue_books WHERE book_id = $1 AND student_id = $2 AND is_returned = false",
        [dto.book_id, dto.student_id]
      );

      if (issue.length > 0) {
        return { error: "book already issued by subject student" };
      }

      let issued = await getRepository(IssueBook).query(
        "SELECT COUNT(ID) AS total FROM issue_books WHERE book_id = $1 AND is_returned = false",
        [dto.book_id]
      );

      issued = issued[0].total;

      book = book[0].number_of_copies;

      let remaining = book - issued;

      if (remaining < 1) {
        return { error: "all book coppies are consumed on subject book id" };
      }

      return await IssueBook.save(await IssueBook.create(dto));
    } catch (error) {
      return error;
    }
  };
}
