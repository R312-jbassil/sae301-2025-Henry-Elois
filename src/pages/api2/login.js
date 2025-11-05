export const POST = async ({ request, cookies, locals }) => {
  try {
    const { email, password } = await request.json();
    const pb = locals.pb;
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    return new Response(
      JSON.stringify({
        success: true,
        user: authData.record,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Erreur de connexion :", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err?.data?.message || "Email ou mot de passe invalide.",
      }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }
};
