import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { SubdivisionController } from "./Subdivision.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", SubdivisionController.add);
router.get("/:id", SubdivisionController.get);
router.get("", SubdivisionController.getAll);
// router.patch("/:id", SubdivisionController.update);

export default router;
