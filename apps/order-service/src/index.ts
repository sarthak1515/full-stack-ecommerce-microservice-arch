import { clerkPlugin } from "@clerk/fastify";
import Fastify from "fastify";
import { shouldBeUser } from "./middleware/authMiddleware";

const fastify = Fastify({
  logger: true,
});

fastify.register(clerkPlugin);

fastify.get("/test", { preHandler: shouldBeUser }, (request, reply) => {
  return reply.send({
    message: "Order service authenticated",
    userId: request.userId,
  });
});

try {
  await fastify.listen({ port: 8001 });
  console.log("Order service is running on port 8001");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
