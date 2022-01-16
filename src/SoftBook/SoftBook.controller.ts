import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { CreateSoftBookDto } from "./SoftBook-create.Dto";
import { SoftBook } from "./SoftBook.entity";
import { SoftBookService } from "./SoftBook.service";
export class SoftBookController {
  static add = async (req: Request, res: Response) => {
    try {
      const data: CreateSoftBookDto = req.body;
      data.added_by = req.user.id;
      let file = req?.files?.book_uri as UploadedFile;

      const result = await SoftBookService.add(data, file);
      if (!(result instanceof SoftBook)) {
        return res.status(400).json({ status: 400, error: result });
      }
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
