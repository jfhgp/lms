import { Router } from "express";
import { UserController } from "../User/User.controller";
import { IssueBookController } from "./IssueBook.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", IssueBookController.add);
router.get("/", IssueBookController.getAll);
// router.get("", HardBookController.getAll);
// router.patch("/:id", HardBookController.update);

export default router;