import { clerkPlugin, getAuth } from "@clerk/fastify";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.register(clerkPlugin);

fastify.get("/test", async function handler(request, reply) {
  const { isAuthenticated, userId } = getAuth(request);
  console.log(userId);
  if (!userId) {
    return { message: "Not Authenticated" };
  }
  return { hello: "world" };
});

try {
  await fastify.listen({ port: 8001 });
  console.log("Order service is running on port 8001");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
