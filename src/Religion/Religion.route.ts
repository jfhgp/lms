import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { ReligionController } from "./Religion.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", ReligionController.add);
router.get("/:id", ReligionController.get);
router.get("", ReligionController.getAll);
// router.patch("/:id", ReligionController.update);

export default router;
