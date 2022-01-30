import { Router } from "express";
import { UserController } from "../User/User.controller";
import { ReturnBookController } from "./ReturnBook.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", ReturnBookController.add);
router.get("/", ReturnBookController.getAll);
// router.get("", HardBookController.getAll);
// router.patch("/:id", HardBookController.update);

export default router;