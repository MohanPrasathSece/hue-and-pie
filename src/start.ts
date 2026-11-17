import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { isAbortError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    if (request?.signal?.aborted) {
      return new Response(null, { status: 499, statusText: "Client Closed Request" });
    }
    return await next();
  } catch (error) {
    if (request?.signal?.aborted || isAbortError(error)) {
      return new Response(null, { status: 499, statusText: "Client Closed Request" });
    }
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// requestMiddleware runs on every request; functionMiddleware only on server functions, where
// client sendContext is unvalidated input. Append to these arrays, never replace them.
export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware],
}));
