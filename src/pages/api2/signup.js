export const POST = async ({ request, locals }) => {
  try {
    const { name, email, password, passwordConfirm } = await request.json();
    if (password !== passwordConfirm) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Les mots de passe ne correspondent pas.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (password.length < 8) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Le mot de passe doit contenir au moins 8 caractères.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const pb = locals.pb;
    const newUser = await pb.collection("users").create({
      name,
      email,
      password,
      passwordConfirm,
      emailVisibility: true, 
    });
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
    console.error("Erreur d'inscription :", err);
    let errorMessage = "Une erreur est survenue lors de l'inscription.";

    if (err?.data?.data?.email) {
      errorMessage = "Cet email est déjà utilisé.";
    } else if (err?.data?.message) {
      errorMessage = err.data.message;
    } else if (err?.message) {
      errorMessage = err.message;
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
