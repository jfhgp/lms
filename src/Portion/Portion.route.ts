import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { PortionController } from "./Portion.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", PortionController.add);
router.get("/:id", PortionController.get);
router.get("", PortionController.getAll);
// router.patch("/:id", PortionController.update);

export default router;
