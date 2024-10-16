import {
  createProduct,
  getAllProduct,
} from "../controllers/products.controllers.js";

import { saveImg } from "../../middlewares/storage.js";

import { Router } from "express";

export const prodRouter = Router();

prodRouter.post("/create", saveImg.single("image"), createProduct);

prodRouter.get("/", getAllProduct);
