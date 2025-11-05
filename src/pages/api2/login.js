import pb from "../../utils/pb";
import { Collections } from "../../utils/pocketbase-types";

export const POST = async ({ request, cookies }) => {
  try {
    const { email, password } = await request.json();
    // Authentifie l'utilisateur avec Pocketbase
    const authData = await pb
      .collection(Collections.Users)
      .authWithPassword(email, password);
    // Enregistre le token d'authentification dans un cookie sécurisé
    cookies.set("pb_auth", pb.authStore.exportToCookie(), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 an
    });
    // Retourne les infos utilisateur
    return new Response(JSON.stringify({ user: authData.record }), {
      status: 200,
    });
  } catch (err) {
    console.error("Erreur de connexion :", err);
    return new Response(
      JSON.stringify({
        error:
          err?.data?.message ||
          err?.message ||
          "Email ou mot de passe invalide.",
      }),
      { status: 401 }
    );
  }
};
