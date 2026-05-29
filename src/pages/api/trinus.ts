import type { APIRoute } from "astro";
import { getSystemPrompt } from "./systemPrompt";

export const POST: APIRoute = async ({ request }) => {
  const { query } = await request.json();

  if (!query) {
    return new Response(JSON.stringify({ error: "No query provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const SYSTEM_PROMPT = getSystemPrompt("trinus");

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: query }],
      }),
    });

    const data = await response.json();

    return new Response(
      JSON.stringify({
        response: data.content[0].text,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Transmission failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
