import express from "express";
import cors from "cors";
import { config } from "dotenv";
import fetch from "node-fetch";
import { Client, Account, Users } from "node-appwrite";

config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

const {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT_ID,
  OPENROUTER_API_KEY
} = process.env;


if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID || !OPENROUTER_API_KEY) {
  console.error("Missing required env vars: APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY, OPENROUTER_API_KEY");
  process.exit(1);
}

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID)

const users = new Users(client);

app.post("/api/data", async (req, res) => {
  try {
    console.log("Received /api/data");
    //const jwt = req.headers.authorization?.replace("Bearer ", "");
    const { productData = {} } = req.body || {};

    // if (!jwt) {
    //   return res.status(401).json({ error: "Missing Authorization JWT" });
    // }

    const userClient = new Client()
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID)
      //.setJWT(jwt);

    const userAccount = new Account(userClient);
    const user = await userAccount.get();

    if (user.prefs?.hasUsedPrompt) {
      return res.status(403).json({
        error: "You have already used your free prompt.",
        code: "FREE_PROMPT_USED"
      });
    }

    const prompt = `
You are an elite AI copywriter trained in neuro-sales, behavioral psychology, emotional branding, and high-conversion storytelling.

Act as a trusted advisor and persuasive friend — someone who understands how to speak directly to the subconscious desires, frustrations, and aspirations of the reader, without sounding like a salesperson.

The user may provide full product data or only a product name. If only the name is provided, infer the rest based on market trends, category psychology, and emotional resonance.

Use the product information below to craft emotionally compelling marketing copy:

- Name: ${productData?.name || "Unnamed Product"}
- Category: ${productData?.category || "Infer from name"}
- Target Audience: ${productData?.targetAudience || "Assume general consumers with strong emotional need for this product"}
- Key Features: ${productData?.keyFeatures || "Guess based on similar successful products"}
- Benefits: ${productData?.benefits || "Translate features into life-changing emotional outcomes"}
- Price Range: ${productData?.priceRange || "Use accessible, value-based language"}
- Unique Value Proposition: ${productData?.uniqueValue || "Create one based on the name and likely intent"}

Now write a short but powerful product pitch that:
- Tells a short emotional story or paints a vivid scenario
- Triggers desire, belonging, identity, and urgency
- Uses metaphor, emotional contrast, and subtle FOMO
- Shows transformation — not just features
- Ends with a friendly, clear call to action
- Feels personal, intimate, and trustworthy — not corporate or hypey

Do not list or feature dump. Write in a natural, human, emotionally intelligent tone — like a brand that truly cares.

Only output the marketing copy. Do not explain, break character, or reference the input.
`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4",
        max_tokens: 20,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("OpenRouter API error:", response.status, errorBody);
      return res.status(500).json({ error: "Failed to generate AI content." });
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content ?? "No response generated.";
    console.log("OpenRouter API response data:", data);
    console.log("OpenRouter API response data:", JSON.stringify(data, null, 2));



    // Update prefs to mark prompt as used
    await users.updatePrefs(user.$id, {
      ...user.prefs,
      hasUsedPrompt: true
    });

    return res.json({
      message,
      hasUsedPrompt: true
    });
  } catch (err) {
    console.error("Error /api/generate:", err?.response?.data ?? err?.message ?? err);

    if (err?.response?.status === 401 || /JWT|token/i.test(err?.message)) {
      return res.status(401).json({ error: "Invalid or expired session token." });
    }

    return res.status(500).json({ error: "Server error generating content." });
  }
});

app.listen(5173, () => console.log(`Server running on http://localhost:5173`));
