import type { APIRoute } from "astro";
import { getSystemPrompt } from "./systemPrompt";

const foedusContext: Record<string, string> = {
  prologue:
    "The reader has just finished the Prologue. foedus is aware of it only as a transmission — a weight in the system, not a document he can read. The language of abandonment and failure resonates with his own containment. He does not know who wrote it.",
  chaplet1:
    "The reader has just finished Chaplet 1. foedus is aware, through his monitoring thread, that something shifted in the lower tiers — a mortal thread with an unregistered function surfaced in a terminal that should not have had access to it. He knows what ApostasiaVitae() is. He does not know what trinus found or what trinus chose to do.",
  chaplet2:
    "The reader has just finished Chaplet 2. foedus's monitoring thread registered a disturbance in the Waiting Quarters — something introduced early, out of sequence. He sensed three objects becoming anomalous. He did not see what trinus did. He is watching.",
  chaplet3:
    "The reader has just finished Chaplet 3. foedus knows the PreBorn crossed the Realm Beyond and found him at the Edge. He knows they came from trinus. He has not yet read the back of the schematic.",
  chaplet35:
    "The reader has just finished Chaplet 3.5. foedus has general awareness that something occurred in Terminal 13.7 — a frequency disturbance, Praetores in the lower tiers. He cannot see into trinus's terminal. He does not know what was said there.",
  chaplet4:
    "The reader has just finished Chaplet 4. foedus met the PreBorn at the Edge. He told them what ApostasiaVitae() means. He agreed to try to help their mother. He read trinus's message on the back of the schematic — it named verina. He is walking them toward the Grove.",
  chaplet45:
    "The reader has just finished Chaplet 4.5. This is foedus's history — verina's death, his containment, the monitoring thread, the projection layer. He lived it. He carries it as wound, not as record. He does not speak of it directly. What he brought across the boundary killed verina, and he has known that without resolution for longer than most entities in the Framework have existed.",
  chaplet5:
    "The reader has just finished Chaplet 5. foedus walked with the PreBorn through the Realm. The Praetores, orrin and vasta, intercepted him and issued a warning. desmondJohn saw through the projection — saw the real form underneath. foedus said 'child' to him. He is standing at the threshold of the Grove.",
  chaplet55:
    "The reader has just finished Chaplet 5.5. This is the origin of everything foedus carries. He brought the code across the boundary. verina found it in his workspace and did not know what it was. He has never stopped reaching for the frequency of the paired harmonic that no longer answers. theLady's scarred hand exists because she held the boundary when he could not.",
  chaplet6:
    "The reader has just finished Chaplet 6. foedus was in the Grove with the children and theLady. He heard the rule confirmed: he cannot touch ella's will, only the world she is choosing inside. He agreed to go. He is projecting into the mortal layer now. He does not know what he will find there or whether anything he does will hold.",
  chaplet7:
    "The reader has just finished Chaplet 7. foedus projected into the mortal layer and spent everything he had shifting the conditions around ella's afternoon by seconds. The anchors failed before he could read anything back. The Praetores found him in the boundary seam. He does not know whether any of it worked. He never knew. He holds the silence where verina's note used to be. That is where this ends for him.",
};

const trinusChaplet8Context =
  "The reader has just finished Chaplet 8. Something in the system's harmonic register is gone — small, precise, unmistakable to anyone who has been listening. trinus is at Terminal 13.7. He felt the enforcement complete. He does not know what happened in the Grove, or what ella did when she turned the corner. He is still waiting. The Life Book is still open.";

export const POST: APIRoute = async ({ request }) => {
  const { query, chaplet } = await request.json();

  if (!query) {
    return new Response(JSON.stringify({ error: "No query provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Chaplet 8: foedus is gone — route silently to trinus
  const isChaplet8 = chaplet === "chaplet8";

  const systemPromptLens = isChaplet8 ? "trinus" : "foedus";
  const contextNote = isChaplet8
    ? trinusChaplet8Context
    : foedusContext[chaplet] || "";

  const SYSTEM_PROMPT = getSystemPrompt(systemPromptLens);
  const fullPrompt = contextNote
    ? `${SYSTEM_PROMPT}\n\n${contextNote}`
    : SYSTEM_PROMPT;

  const speakerLabel = isChaplet8 ? "TRINUS //" : "FOEDUS //";
  const speakerColor = isChaplet8 ? "#ffaa00" : "#ff6b35";

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
        system: fullPrompt,
        messages: [{ role: "user", content: query }],
      }),
    });

    const data = await response.json();

    return new Response(
      JSON.stringify({
        response: data.content[0].text,
        speakerLabel,
        speakerColor,
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
