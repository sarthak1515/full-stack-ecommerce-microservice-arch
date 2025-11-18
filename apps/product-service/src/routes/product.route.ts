import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/product.controller";

const router: Router = Router();

router.route("/").post(createProduct).get(getProducts);
router.route("/:id").delete(deleteProduct).put(updateProduct).get(getProduct);

export default router;
