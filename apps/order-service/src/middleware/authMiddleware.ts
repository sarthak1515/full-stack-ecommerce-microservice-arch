import { getAuth } from "@clerk/fastify";
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    userId?: string;
  }
}
export const shouldBeUser = (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return reply.status(401).send({ message: "You are not logged in!" });
  }

  req.userId = userId;
  done();
};
