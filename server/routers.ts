import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

const GAS_BOOKING_URL =
  "https://script.google.com/macros/s/AKfycbxrJyPHfBJ-5SPHHLyQMJ6-o2_KsvZf53EWTDTt82krOQrfd-3ATY3_3Ngqb8wYv18mLw/exec";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  booking: router({
    getBusySlots: publicProcedure.query(async () => {
      try {
        const res = await fetch(`${GAS_BOOKING_URL}?t=${Date.now()}`, {
          redirect: "follow",
          headers: { "Accept": "application/json" },
        });
        if (!res.ok) {
          return { busySlots: [] as string[] };
        }
        const data = await res.json() as { busySlots?: string[] };
        return { busySlots: data.busySlots || [] as string[] };
      } catch {
        // GAS unreachable — return empty list so all slots appear available
        return { busySlots: [] as string[] };
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
