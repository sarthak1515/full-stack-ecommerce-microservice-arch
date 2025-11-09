import { clerkMiddleware } from "@hono/clerk-auth";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { shouldBeUser } from "./middleware/authMiddleware";

const app = new Hono();
app.use("*", clerkMiddleware());

app.get("/test", shouldBeUser, (c) => {
  return c.json({
    message: "Payment service is authenticated",
    userId: c.get("userId"),
  });
});

const start = async () => {
  try {
    serve(
      {
        fetch: app.fetch,
        port: 8002,
      },
      (info) => {
        console.log(`Payment Service is running on port ${info.port}`);
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
