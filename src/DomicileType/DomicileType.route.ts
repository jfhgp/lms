import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { DomicileTypeController } from "./DomicileType.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", DomicileTypeController.add);
router.get("/:id", DomicileTypeController.get);
router.get("", DomicileTypeController.getAll);
// router.patch("/:id", DomicileTypeController.update);

export default router;
