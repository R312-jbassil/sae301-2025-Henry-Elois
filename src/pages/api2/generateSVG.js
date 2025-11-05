import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.OPENROUTER_API_KEY,
});

export const POST = async ({ request }) => {
  try {
    const { messages } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "system",
          content:
            "Crée UNIQUEMENT du code SVG valide pour des lunettes. Réponds uniquement avec le SVG, sans explication.",
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const svg = completion.choices[0]?.message?.content || "";

    return new Response(JSON.stringify({ success: true, svg }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
