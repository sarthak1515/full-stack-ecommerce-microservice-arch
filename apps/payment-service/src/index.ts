import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
app.use("*", clerkMiddleware());

app.get("/test", (c) => {
  const auth = getAuth(c);
  console.log(auth?.userId);
  if (!auth?.userId) {
    return c.json({ message: "Not Authenticated" });
  }

  return c.json({ message: "Hello Hono!" });
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
