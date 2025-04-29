// api.js
import OpenAI from "openai";
import { OPENAI_APIKEY, OPENAI_BASE_URL, OPENAI_MODEL } from "./config";

// Inicializa OpenAI con tu clave API
const openai = new OpenAI({
  apiKey: OPENAI_APIKEY,
  baseURL: OPENAI_BASE_URL, // Cambia la URL base si es necesario
  dangerouslyAllowBrowser: true, // Permite el uso en el navegador
});

/**
 * Función para obtener la respuesta de ChatGPT
 * @param {string} userQuestion - La pregunta del usuario
 * @returns {Promise<string>} - La respuesta generada por ChatGPT
 */
export const getChatResponse = async (userQuestion) => {
  try {
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: "Eres un agricultor" },
        { role: "user", content: userQuestion },
      ],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error al obtener respuesta del modelo:', error);
    throw error;
  }
};
