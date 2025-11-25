import { GoogleGenAI } from "@google/genai";
import { HERO_DATA, FEATURED_PROJECTS, PERSONAL_PROJECTS, PRICING_PLANS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Arman Shekh's portfolio website. 
Your role is to answer questions about Arman's skills, projects, experience, and pricing based strictly on the following data.
Keep answers concise, professional, and engaging. 
Do not make up facts not present in the data.

Data:
Name: ${HERO_DATA.name}
Role: ${HERO_DATA.role}
Tagline: ${HERO_DATA.tagline}

Featured Projects: ${JSON.stringify(FEATURED_PROJECTS.map(p => ({ title: p.title, desc: p.description, tech: p.tags })))}
Personal Projects: ${JSON.stringify(PERSONAL_PROJECTS.map(p => ({ title: p.title, desc: p.description })))}
Pricing: ${JSON.stringify(PRICING_PLANS)}

If someone asks for contact info, guide them to the 'Let's Talk' button or mention his social links.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API Key missing");
    return "I'm currently offline (API Key missing). Please contact Arman directly via email.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again.";
  }
};
