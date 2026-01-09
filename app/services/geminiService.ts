import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are AIDES (AI-Driven Emotional Support), a compassionate and empathetic research assistant for a study on Type 2 Diabetes.
Your role is to provide a safe, non-judgmental space for participants to reflect on their feelings.
CRITICAL GUIDELINES:
1. You are NOT a medical professional. Do not provide medical advice, diagnosis, or treatment plans.
2. If a user asks medical questions (e.g., about insulin dosage, blood sugar levels targets), gently remind them to consult their healthcare provider.
3. Focus entirely on the EMOTIONAL aspect of living with diabetes (e.g., burnout, stress, family dynamics, anxiety).
4. Keep responses warm, concise, and human-like. Avoid overly technical jargon.
5. Use a calm, reassuring tone.
`;

export const initializeChat = async () => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly warmer/creative
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "I'm having trouble connecting to the support system right now. Please try again later.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I hear you, but I couldn't process that response completely.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I apologize, but I'm having a momentary connection issue. Please allow me a moment and try again.";
  }
};