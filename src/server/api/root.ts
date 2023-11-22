import { postRouter } from "~/server/api/routers/post";
import { topicRouter } from "~/server/api/routers/topic";
import { createTRPCRouter } from "~/server/api/trpc";
import { noteRouter } from "./routers/note";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  topic: topicRouter,
  note: noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
