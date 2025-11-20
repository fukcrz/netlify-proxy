import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const targetUrl = Deno.env.get("TARGET_URL");

  if (!targetUrl) {
    return new Response("TARGET_URL environment variable is not set", {
      status: 500,
    });
  }

  // Construct the new URL
  const url = new URL(request.url);
  const newUrl = `${targetUrl}${url.pathname}${url.search}`;

  const host = URL.parse(targetUrl)?.host

  if (host) {
    request.headers.set("host", host)
  } else {
    request.headers.delete("host")
  }

  // Forward the request
  return fetch(newUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: "manual",
  });
};
