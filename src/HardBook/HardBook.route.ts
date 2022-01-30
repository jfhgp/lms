import { Router } from "express";
import { UserController } from "../User/User.controller";
import { HardBookController } from "./HardBook.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", HardBookController.add);
router.get("/:id", HardBookController.get);
router.get("", HardBookController.getAll);
router.patch("/:id", HardBookController.update);

export default router;
