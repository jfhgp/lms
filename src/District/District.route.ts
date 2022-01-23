import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { DistrictController } from "./District.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", DistrictController.add);
router.get("/:id", DistrictController.get);
router.get("", DistrictController.getAll);
// router.patch("/:id", DistrictController.update);

export default router;
