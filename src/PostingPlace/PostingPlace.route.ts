import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { PostingPlaceController } from "./PostingPlace.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", PostingPlaceController.add);
router.get("/:id", PostingPlaceController.get);
router.get("", PostingPlaceController.getAll);
// router.patch("/:id", PostingPlaceController.update);

export default router;
