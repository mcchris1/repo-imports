import { Router } from "express";
import * as controllers from "../controllers/cats.js";

const router = Router();

router.get("/", controllers.getCats);
router.get("/:id", controllers.getCat);
router.post("/", controllers.createCat);
router.put("/:id", controllers.updateCat);
router.delete("/:id", controllers.deleteCat);

export default router;
