export const POST = async ({ locals, cookies }) => {
  const pb = locals.pb;
  pb.authStore.clear();
  cookies.delete("pb_auth", {
    path: "/",
    domain: process.env.COOKIE_DOMAIN || undefined, // set your domain if needed
    secure: true, // use true if your site is HTTPS in production
    sameSite: "strict",
  });
  
  return new Response(null, {
    status: 303,
    headers: {
      Location: "/",
    },
  });
};
