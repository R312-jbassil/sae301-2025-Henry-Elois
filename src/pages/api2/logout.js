export const POST = async ({ locals, cookies }) => {
  const pb = locals.pb;
  pb.authStore.clear();
  cookies.delete("pb_auth", { path: "/" });
  return new Response(null, {
    status: 303,
    headers: {
      Location: "https://tavue.eloishenry.fr",
    },
  });
};
