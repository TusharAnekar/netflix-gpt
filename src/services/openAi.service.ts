import OpenAI from "openai";

export const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchMoviesFromOpenAi = async (
  query: string,
): Promise<string | null> => {
  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful movie assistant. Given a user query, respond with exactly 5 movie titles, comma-separated. Do not include any extra text or numbering.",
      },
      {
        role: "user",
        content: query,
      },
    ],
    temperature: 0.7,
    max_tokens: 50, // ✅ limits output to approx 30–40 words (depending on language)
  });

  return response.choices[0].message.content;
};
