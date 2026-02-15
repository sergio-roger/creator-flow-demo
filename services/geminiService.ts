
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateVideoIdeas = async (niche: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Genera 5 ideas de videos virales para un creador de YouTube en el nicho "${niche}". El contenido debe estar en ESPAÑOL. Incluye un título pegajoso, una descripción corta y sugiere una prioridad (High, Medium, Low).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              priority: { type: Type.STRING },
              tags: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
            },
            required: ["title", "description", "priority", "tags"]
          }
        },
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error al llamar a la API de Gemini:", error);
    return null;
  }
};
