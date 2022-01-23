import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { BookConditionController } from "./BookCondition.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", BookConditionController.add);
router.get("/:id", BookConditionController.get);
router.get("", BookConditionController.getAll);
// router.patch("/:id", BookConditionController.update);

export default router;
