import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { BookPenalty } from "../BookPenalty/BookPenalty.entity";
import { HardBook } from "../HardBook/HardBook.entity";
import { IssueBook } from "../IssueBook/IssueBook.entity";
import { User } from "../User/User.entity";
import { LMSUtils } from "../Utils/fectory";
import { CreateReturnBookDto } from "./ReturnBook-create.dto";
import { ReturnBook } from "./ReturnBook.entity";

export class ReturnBookService {
  static add = async (data: CreateReturnBookDto) => {
    try {
      const dto = plainToClass(CreateReturnBookDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return error;

      dto.is_penalty = false;
      dto.is_returned = true;

      let user = await getRepository(User).query(
        "SELECT id FROM users WHERE id = $1",
        [dto.student_id]
      );
      if (user.length < 1) {
        return { error: "user id does not exists" };
      }

      let book = await getRepository(HardBook).query(
        "SELECT id FROM hard_books WHERE id = $1",
        [dto.book_id]
      );
      if (book.length < 1) {
        return { error: "book id does not exists" };
      }

      let eDate = await getRepository(IssueBook).query(
        "SELECT id, issue_date, return_date, is_returned, college_id FROM issue_books WHERE id = $1",
        [dto.issue_book_id]
      );

      if (eDate.length < 1) {
        return { error: "book were not issued" };
      }

      let one_to_one_check = await getRepository(ReturnBook).query(
        "SELECT id FROM return_books WHERE issue_book_id = $1 AND student_id = $2",
        [dto.issue_book_id, dto.student_id]
      );

      if (one_to_one_check.length > 0) {
        return { error: "book already returned" };
      }

      eDate = eDate[0];
      if (!eDate) {
        return { error: "book not issued" };
      }
      if (eDate.is_returned === true) {
        return { error: "book already returned" };
      }

      let issueReturnDate = new Date(eDate.return_date).getTime() + 18000000;
      let returnDate = new Date(dto.return_date).getTime();

      let lateDays = returnDate - issueReturnDate;
      lateDays = lateDays / 60 / 60 / 1000 / 24;

      if (issueReturnDate < returnDate) {
        dto.is_penalty = true;
        dto.amount = (process.env.LATE_RETURN_AMOUNT as any) * lateDays;

        let book_Penalties = {
          student_id: dto.student_id,
          book_id: dto.book_id,
          issue_date: eDate.issue_date,
          return_date: dto.return_date,
          college_id: dto.college_id,
          amount: (process.env.LATE_RETURN_AMOUNT as any) * lateDays,
          days_late: lateDays,
          added_by: dto.added_by,
          issuer_book_id: dto.issue_book_id,
        };
        let result = await BookPenalty.save(
          await BookPenalty.create(book_Penalties)
        );

        if (!(result instanceof BookPenalty)) {
          return { error: "something went wrong" };
        }
      }

      await IssueBook.update(
        {
          student_id: dto.student_id,
          book_id: dto.book_id,
          id: dto.issue_book_id as any,
        },
        { is_returned: true }
      );

      const result = await ReturnBook.save(await ReturnBook.create(dto));
      return result;
    } catch (error) {
      return error;
    }
  };
}
