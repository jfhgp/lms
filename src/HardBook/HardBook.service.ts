import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { BookCategory } from "../BookCategory/BookCategory.entity";
import { BookCondition } from "../BookCondition/BookCondition.entity";
import { BookSubCategory } from "../BookSubCategory/BookSubCategory.entity";
import { BookType } from "../BookType/BookType.entity";
import { Box } from "../Box/Box.entity";
import { College } from "../College/College.entity";
import { Language } from "../Language/Language.entity";
import { LMSUtils } from "../Utils/fectory";
import { CreateHardBookDto } from "./HardBook-create.Dto";
import { UpdateHardBookDto } from "./HardBook-update.Dto";
import { HardBook } from "./HardBook.entity";

export class HardBookService {
  static add = async (data: CreateHardBookDto) => {
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
        let sub_category = await getRepository(BookSubCategory).query(
          "SELECT id FROM book_sub_categories WHERE id = $1",
          [data.sub_category_id]
        );

        if (sub_category.length === 0) {
          return { error: "sub_category id not exists" };
        }
      }

      if (data.book_condition_id) {
        let condition = await getRepository(BookCondition).query(
          "SELECT id FROM book_conditions WHERE id = $1",
          [data.book_condition_id]
        );
        if (condition.length === 0) {
          return { error: "condition id not exists" };
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
      
      if (data.box_id) {
        let box = await getRepository(Box).query(
          "SELECT id FROM boxes WHERE id = $1",
          [data.box_id]
        );
        if (box.length === 0) {
          return { error: "box id not exists" };
        }
      }
     
      const dto = plainToClass(CreateHardBookDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return error;
      return await HardBook.save(await HardBook.create(dto));
    } catch (error) {
      return error;
    }
  };

  static update = async (data: UpdateHardBookDto) => {
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

      if (data.book_condition_id) {
        let condition = await getRepository(BookCondition).query(
          "SELECT id FROM book_conditions WHERE id = $1",
          [data.book_condition_id]
        );
        if (condition.length === 0) {
          return { error: "condition id not exists" };
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

      if (data.box_id) {
        let box = await getRepository(Box).query(
          "SELECT id FROM boxes WHERE id = $1",
          [data.box_id]
        );
        if (box.length === 0) {
          return { error: "box id not exists" };
        }
      }
      const dto = plainToClass(UpdateHardBookDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return error;

      let id = await getRepository(HardBook).query(
        "SELECT id FROM hardbooks WHERE id = $1",
        [dto.id]
      );
      if (id.length < 1) {
        return { error: "id not exists" };
      }
      return await HardBook.save(await HardBook.create(dto));
    } catch (error) {
      return error;
    }
  };
}
