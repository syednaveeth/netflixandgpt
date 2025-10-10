import OpenAI from "openai";
import { GptApiKey } from "./constant";
export const client = new OpenAI({
  apiKey: process.env[GptApiKey],
});
