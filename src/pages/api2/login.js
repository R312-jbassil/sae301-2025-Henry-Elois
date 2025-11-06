export const POST = async ({ request, locals }) => {
  try {
    console.log("🔍 [LOGIN] Requête reçue");

    const body = await request.json();
    console.log("📧 [LOGIN] Email :", body.email);

    const pb = locals.pb;
    console.log("🔧 [LOGIN] PocketBase dispo ?", !!pb);

    if (!pb) {
      throw new Error("PocketBase non initialisé dans locals");
    }

    const authData = await pb
      .collection("users")
      .authWithPassword(body.email, body.password);

    console.log("✅ [LOGIN] Connexion réussie pour :", body.email);

    return new Response(
      JSON.stringify({ success: true, user: authData.record }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("❌ [LOGIN] Erreur :", err.message);
    console.error("📍 Détails complets :", err);

    return new Response(
      JSON.stringify({
        success: false,
        error: err?.data?.message || err.message || "Erreur inconnue",
      }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }
};
