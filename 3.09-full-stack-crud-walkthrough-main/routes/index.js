import { Router } from "express";
import catsRoutes from "./cats.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the cute cat api root!"));

router.use("/cats", catsRoutes);

export default router;
