import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { SchoolTypeController } from "./SchoolType.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", SchoolTypeController.add);
router.get("/:id", SchoolTypeController.get);
router.get("", SchoolTypeController.getAll);
// router.patch("/:id", SchoolTypeController.update);

export default router;
