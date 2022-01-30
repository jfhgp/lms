import { Router } from "express";
import { UserController } from "../User/User.controller";
import { BookPenaltyController } from "./BookPenalty.controller";

const router = Router();
router.use(UserController.protect);

router.post("/:id", BookPenaltyController.add);
router.get("/:paid?", BookPenaltyController.getAll);
// router.get("", HardBookController.getAll);
// router.patch("/:id", HardBookController.update);

export default router;