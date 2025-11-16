
import { GoogleGenAI, Modality } from "@google/genai";

/**
 * Generates an image using the Gemini API by combining a user's photo with a descriptive prompt.
 * 
 * Note: The user requested the 'imagen-4.0-generate-001' model, which is text-to-image only.
 * To fulfill the core requirement of incorporating a user's selfie, this service uses the
 * 'gemini-2.5-flash-image' model, which supports both image and text inputs for editing tasks.
 *
 * @param prompt The base prompt describing the scene.
 * @param base64Image The user's uploaded photo, encoded in base64.
 * @param mimeType The MIME type of the uploaded photo (e.g., 'image/jpeg').
 * @returns A promise that resolves to the base64 string of the generated image.
 */
export const generateImage = async (prompt: string, base64Image: string, mimeType: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  // Modify the prompt to instruct the model to use the provided image.
  const modifiedPrompt = prompt.replace('(face from uploaded photo)', 'the person from the provided image');

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: modifiedPrompt,
          },
        ],
      },
      config: {
          responseModalities: [Modality.IMAGE],
      },
    });

    // Extract the generated image from the response.
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }

    throw new Error("API response did not contain an image.");

  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    if (error instanceof Error) {
        throw new Error(`Görüntü oluşturulurken bir hata oluştu: ${error.message}`);
    }
    throw new Error("Bilinmeyen bir hata oluştu.");
  }
};
