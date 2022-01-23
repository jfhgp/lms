import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { BoardController } from "./Board.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", BoardController.add);
router.get("/:id", BoardController.get);
router.get("", BoardController.getAll);
// router.patch("/:id", BoardController.update);

export default router;
