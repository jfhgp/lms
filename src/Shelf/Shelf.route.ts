import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { ShelfController } from "./Shelf.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", ShelfController.add);
router.get("/:id", ShelfController.get);
router.get("", ShelfController.getAll);
// router.patch("/:id", ShelfController.update);

export default router;
