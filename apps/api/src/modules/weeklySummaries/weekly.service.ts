import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../../config/env.js";
export class WeeklySummaryService {
  async summarize(studentTwin: unknown) {
    if (!env.GEMINI_API_KEY) return "Gemini is not configured. Atlas collected the week and generated deterministic recommendations.";
    const model = new GoogleGenerativeAI(env.GEMINI_API_KEY).getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(`Write a concise weekly student digital twin summary using this data: ${JSON.stringify(studentTwin).slice(0, 12000)}`);
    return result.response.text();
  }
}
