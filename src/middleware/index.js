import PocketBase from "pocketbase";
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
  locals.pb = new PocketBase("https://tavue.eloishenry.fr");

  locals.pb.authStore.loadFromCookie(request.headers.get("cookie") || "");
  try {
    if (locals.pb.authStore.isValid) {
      await locals.pb.collection("users").authRefresh();
      locals.user = locals.pb.authStore.model;
    } else {
      locals.user = null;
    }
  } catch (_) {
    locals.pb.authStore.clear();
    locals.user = null; 
  }
  const response = await next();
  response.headers.append("set-cookie", locals.pb.authStore.exportToCookie());
  return response;
});
