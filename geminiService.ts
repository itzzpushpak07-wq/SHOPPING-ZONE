
import { GoogleGenAI } from "@google/genai";

export const getStylingAdvice = async (productName: string, productDescription: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Give me a concise, high-fashion styling tip (max 2 sentences) for the following product: ${productName}. 
      Product Description: ${productDescription}. 
      Speak like a professional stylist at a luxury D2C brand.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Pair this piece with neutral tones and structural accessories for a timeless, sophisticated look.";
  }
};
