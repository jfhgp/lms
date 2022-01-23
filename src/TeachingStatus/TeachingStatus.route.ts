import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { TeachingStatusController } from "./TeachingStatus.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", TeachingStatusController.add);
router.get("/:id", TeachingStatusController.get);
router.get("", TeachingStatusController.getAll);
// router.patch("/:id", TeachingStatusController.update);

export default router;
