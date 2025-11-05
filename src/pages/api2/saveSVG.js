export async function POST({ request, locals }) {
  const pb = locals.pb;
  const data = await request.json();

  try {
    const record = await pb.collection("lunettes").create({
      ...data,
      id_client: pb.authStore.model?.id,
    });

    return new Response(JSON.stringify({ success: true, id: record.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
