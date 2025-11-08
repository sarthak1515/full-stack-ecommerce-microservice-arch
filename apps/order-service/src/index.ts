import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

try {
  await fastify.listen({ port: 8001 });
  console.log("Order service is running on port 8001");
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
