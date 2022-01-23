import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { SubGroupController } from "./SubGroup.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", SubGroupController.add);
router.get("/:id", SubGroupController.get);
router.get("", SubGroupController.getAll);
// router.patch("/:id", SubGroupController.update);

export default router;
