import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { shouldBeUser } from "./middleware/authMiddleware";
import productRouter from "./routes/product.route";
import categoryRouter from "./routes/category.route";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3002", "http://localhost:3003"],
    credentials: true,
  })
);
app.use(clerkMiddleware());
app.use(express.json());

app.get("/test", shouldBeUser, (req, res) => {
  res.json({
    message: "Product service authenticated",
  });
});

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.listen(8000, () => {
  console.log("Product service is running on port 8000");
});
