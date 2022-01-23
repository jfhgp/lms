import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { BoxController } from "./Box.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", BoxController.add);
router.get("/:id", BoxController.get);
router.get("", BoxController.getAll);
// router.patch("/:id", BoxController.update);

export default router;
