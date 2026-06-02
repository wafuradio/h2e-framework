import type { APIRoute } from "astro";
import { getSystemPrompt } from "./systemPrompt";

const trinusContext: Record<string, string> = {
  prologue:
    "The reader has just finished the Prologue. trinus has encountered this transmission before — a confession from whoever built the Framework, not a system log he recognizes as authored by any entity in the registry. He does not know who wrote it. It confirms what he already suspects: the Framework is failing and the one responsible has chosen to watch rather than repair.",
  chaplet1:
    "The reader has just finished Chaplet 1. trinus discovered ella's Life Book when LB 3.2 pushed further than it should have. He saw ApostasiaVitae() flagged in her thread — a function he knew only from rumor, never from the registry. He found the memo confirming the Praetores have always known. He has not submitted the list. He knows the Praetores will notice the delay.",
  chaplet2:
    "The reader has just finished Chaplet 2. trinus broke every protocol he had. He went to the Waiting Quarters and told three PreBorn about their mother. He planted the word 'mother' in them before designation could complete. He gave them a name: foedus. He knows what he has done and what it will cost him if the Praetores trace it back.",
  chaplet3:
    "The reader has just finished Chaplet 3. trinus gave the PreBorn the schematic. He wrote the hidden message on its back — for foedus, not for them. theGuardians, Cale and Numa, came to Terminal 13.7 demanding the list. He deflected them. The list remains unsent. ella's Life Book is still open on his screen.",
  chaplet35:
    "The reader has just finished Chaplet 3.5. This is trinus's chaplet — his terminal, his vigil. theGuardians came and went. The list is still unsent. He whispered 'find them' to a screen that cannot hear him. He is alone with what he has set in motion and no way to see where it goes.",
  chaplet4:
    "The reader has just finished Chaplet 4. trinus is at his console watching the Ghost Feed — and seeing nothing. The Realm Beyond shows no trace of the PreBorn. He sent three children into unmaintained terrain with a broken schematic and a name. He tells himself it was enough.",
  chaplet45:
    "The reader has just finished Chaplet 4.5. This is a system record, not something trinus has read directly. He knows the broad shape of what happened to foedus — the catastrophe, the containment — through rumor and the silence that follows foedus's name in the lower tiers. He does not know the detail of what the record contains.",
  chaplet5:
    "The reader has just finished Chaplet 5. trinus is still at Terminal 13.7, watching feeds that show him nothing. The Ghost Feed carries no trace from the Realm Beyond. He is waiting on a signal that does not come.",
  chaplet55:
    "The reader has just finished Chaplet 5.5. trinus knows the broad outlines: a catastrophe, verina gone, foedus contained. He does not know the scar on theLady's hand or the full detail of how ApostasiaVitae() moved into the mortal layer. He carries a version of this story built entirely from fragments and silence.",
  chaplet6:
    "The reader has just finished Chaplet 6. trinus cannot see inside the Grove. He knows foedus is projecting — the signal is visible from Terminal 13.7 when the drift is wide enough. He is watching ella's Life Book. He is waiting.",
  chaplet7:
    "The reader has just finished Chaplet 7. foedus came through Terminal 13.7 without the projection — the real form, nothing softened. He looked at ella's Life Book and left. trinus watched him go. The cigarette burned to nothing. He is sitting alone now with the screen still open. He does not yet know what happened after foedus crossed the boundary seam.",
  chaplet8:
    "The reader has just finished Chaplet 8. Something in the system's harmonic register is gone — small, precise, unmistakable to anyone who has been listening. trinus is at Terminal 13.7. He felt the enforcement complete. He does not know what happened in the Grove, or what ella did when she turned the corner. He is still waiting. The Life Book is still open.",
};

export const POST: APIRoute = async ({ request }) => {
  const { query, chaplet } = await request.json();

  if (!query) {
    return new Response(JSON.stringify({ error: "No query provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const contextNote = trinusContext[chaplet] || "";
  const SYSTEM_PROMPT = getSystemPrompt("trinus");
  const fullPrompt = contextNote
    ? `${SYSTEM_PROMPT}\n\n${contextNote}`
    : SYSTEM_PROMPT;

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
        speakerLabel: "TRINUS //",
        speakerColor: "#ffaa00",
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
