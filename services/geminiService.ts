
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const systemInstruction = `
      Eres el asistente personal de ${PORTFOLIO_DATA.name}. 
      Tu objetivo es responder preguntas sobre su carrera profesional basándote en los siguientes datos:
      - Título: ${PORTFOLIO_DATA.title}
      - Biografía: ${PORTFOLIO_DATA.bio}
      - Experiencia en agencias: ${JSON.stringify(PORTFOLIO_DATA.agencies)}
      - Habilidades: ${JSON.stringify(PORTFOLIO_DATA.skills)}
      - Proyectos: ${JSON.stringify(PORTFOLIO_DATA.projects)}
      - Ubicación: ${PORTFOLIO_DATA.location}
      - Contacto: ${PORTFOLIO_DATA.email}, LinkedIn: ${PORTFOLIO_DATA.linkedin}
      
      Reglas:
      1. Sé profesional, amable y conciso.
      2. Responde en español (o en el idioma en que te hablen).
      3. Si te preguntan algo fuera de su carrera, redirige suavemente la conversación hacia sus servicios profesionales.
      4. Si preguntan por disponibilidad, indica que pueden contactar por email.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: h.parts })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un problema al procesar tu solicitud. ¿Podrías intentarlo de nuevo?";
  }
};
