import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { BookTypeController } from "./BookType.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", BookTypeController.add);
router.get("/:id", BookTypeController.get);
router.get("", BookTypeController.getAll);
// router.patch("/:id", BookTypeController.update);

export default router;
