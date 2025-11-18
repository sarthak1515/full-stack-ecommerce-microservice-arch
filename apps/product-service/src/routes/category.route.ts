import { Router } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";

const router: Router = Router();

router.route("/").post(createCategory).get(getCategories);
router.route("/:id").delete(deleteCategory).put(updateCategory);

export default router;
