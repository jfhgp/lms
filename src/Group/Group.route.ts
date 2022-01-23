import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { GroupController } from "./Group.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", GroupController.add);
router.get("/:id", GroupController.get);
router.get("", GroupController.getAll);
// router.patch("/:id", GroupController.update);

export default router;
