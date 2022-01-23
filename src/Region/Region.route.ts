import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { RegionController } from "./Region.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", RegionController.add);
router.get("/:id", RegionController.get);
router.get("", RegionController.getAll);
// router.patch("/:id", RegionController.update);

export default router;
