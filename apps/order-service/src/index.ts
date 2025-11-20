import { clerkPlugin } from "@clerk/fastify";
import Fastify from "fastify";
import { shouldBeUser } from "./middleware/authMiddleware";
import { connectOrderDB } from "@repo/order-db";
import { orderRoute } from "./routes/order";

const fastify = Fastify({
  logger: true,
});

fastify.register(clerkPlugin);
fastify.register(orderRoute);
fastify.get("/test", { preHandler: shouldBeUser }, (request, reply) => {
  return reply.send({
    message: "Order service authenticated",
    userId: request.userId,
  });
});

try {
  await connectOrderDB();
  await fastify.listen({ port: 8001 });
  console.log("Order service is running on port 8001");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
