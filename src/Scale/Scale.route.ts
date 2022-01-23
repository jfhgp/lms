import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { ScaleController } from "./Scale.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", ScaleController.add);
router.get("/:id", ScaleController.get);
router.get("", ScaleController.getAll);
// router.patch("/:id", ScaleController.update);

export default router;
