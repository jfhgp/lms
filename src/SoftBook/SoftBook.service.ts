import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { LogisticsUtils } from "../Utils/fectory";
import { CreateSoftBookDto } from "./SoftBook-create.Dto";
import { BookCategory } from "../BookCategory/BookCategory.entity";
import { BookType } from "../BookType/BookType.entity";
import { College } from "../College/College.entity";
import { Language } from "../Language/Language.entity";
import { SoftBook } from "./SoftBook.entity";
import path from "path";
import { UploadedFile } from "express-fileupload";

export class SoftBookService {
  static add = async (data: CreateSoftBookDto, file: UploadedFile) => {
    try {
      if (data.language_id) {
        let language = await getRepository(Language).query(
          "SELECT id FROM languages WHERE id = $1",
          [data.language_id]
        );
        if (language.length === 0) {
          return { error: "language id not exists" };
        }
      }

      if (data.category_id) {
        let category = await getRepository(BookCategory).query(
          "SELECT id FROM book_categories WHERE id = $1",
          [data.category_id]
        );
        if (category.length === 0) {
          return { error: "category id not exists" };
        }
      }

      if (data.sub_category_id) {
        let category = await getRepository(BookCategory).query(
          "SELECT id FROM book_categories WHERE id = $1",
          [data.sub_category_id]
        );
        if (category.length === 0) {
          return { error: "sub category id not exists" };
        }
      }

      if (data.book_type_id) {
        let bookType = await getRepository(BookType).query(
          "SELECT id FROM book_types WHERE id = $1",
          [data.book_type_id]
        );
        if (bookType.length === 0) {
          return { error: "bookType id not exists" };
        }
      }

      if (data.college_id) {
        let college = await getRepository(College).query(
          "SELECT id FROM colleges WHERE id = $1",
          [data.college_id]
        );
        if (college.length === 0) {
          return { error: "college id not exists" };
        }
      }

      const dto = plainToClass(CreateSoftBookDto, data);

      const error = await LogisticsUtils.validator(dto);
      if (error) return error;

      if (file.name) {
        const formats = [
          "application/pdf",
          "application/x-pdf",
          "application/acrobat",
          "applications/vnd.pdf",
          "text/pdf",
          "text/x-pdf",
        ];

        if (formats.includes(file.mimetype)) {
          let fileName = `${data.added_by}-${
            file.name
          }-${Date.now()}${path.extname(file.name)}`;

          const savePath = await path.join(
            __dirname,
            "../../public",
            "books",
            fileName
          );
          data.book_uri = fileName;

          if (!data.book_uri) {
            return { error: "book_uri is required field" };
          }
          await file.mv(savePath);
        } else {
          return { error: "Format not accepted" };
        }
      }

      return await SoftBook.save(await SoftBook.create(dto));
    } catch (error) {
      return error;
    }
  };
}
