export async function POST({ request, locals }) {
  const pb = locals.pb;
  const data = await request.json();

  if (!pb.authStore.isValid) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Vous devez être connecté pour sauvegarder",
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const record = await pb.collection("lunettes").create({
      nom: data.nom,
      code_svg: data.code_svg,
      genere_IA: data.genere_IA || false,
      chat_history: data.chat_history || null,
      id_client: pb.authStore.model?.id,
    });

    return new Response(
      JSON.stringify({
        success: true,
        id: record.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erreur PocketBase:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Erreur lors de la sauvegarde",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
