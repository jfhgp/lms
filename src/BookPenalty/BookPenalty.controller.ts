import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { PaidBookPenaltyDto } from "./BookPenalty-paid.dto";
import { BookPenalty } from "./BookPenalty.entity";

export class BookPenaltyController {
  static add = async (req: Request, res: Response): Promise<Response> => {
    try {
      let r = await getRepository(BookPenalty).query(
        "SELECT * FROM book_penalties WHERE issuer_book_id = $1",
        [Number(req.params.id)]
      );
      if (r.length < 1) {
        return res
          .status(400)
          .json({ status: 400, data: "issuer id not exists" });
      }
      r = r[0];
      if (r.amount <= r.paid_amount) {
        return res
        .status(400)
        .json({ status: 400, data: "already paid" });
      }
      let data: PaidBookPenaltyDto = req.body;
      data.issuer_book_id = Number(req.params.id) as any;

      if ((r.paid_amount + data.paid_amount) < r.amount) {
          data.is_paid = false;
          data.is_partially_paid = true;
          data.paid_amount = r.paid_amount + data.paid_amount;
      } else {
        data.is_paid = true;
        data.is_partially_paid = false;
        data.fully_paid = true;
        data.paid_amount = r.paid_amount + data.paid_amount; 
      }
      let paid = await BookPenalty.update(
        { issuer_book_id: Number(req.params.id) as any },
        data
      );
    if (paid.affected !== 1) {
        return res.status(400).json({ status: 400, error: 'some thing went wwrong' });
    }
      const result = await getRepository(BookPenalty).query(
        "select * FROM book_penalties WHERE issuer_book_id = $1",
        [req.params.id]
      );
     
      
      return res.status(201).json({ status: 201, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      let result = [];
      if (req.params.paid) {
        const r = await getRepository(BookPenalty).query(
          "select * FROM book_penalties WHERE is_paid = $1",
          [req.params.paid]
        );
        result.push(r);
      } else {
        const r = await getRepository(BookPenalty).query(
          "select * FROM book_penalties"
        );
        result.push(r);
      }

      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
