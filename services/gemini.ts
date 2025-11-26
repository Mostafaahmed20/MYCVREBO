import { GoogleGenAI } from '@google/genai';

const getAiClient = () => {
    // Check if API key exists. If not, this will throw or return an error depending on SDK behavior,
    // but per instructions we assume it's valid.
    if (!process.env.API_KEY) {
        console.warn("API Key not found in environment.");
        return null;
    }
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const sendMessageToNPC = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
    const ai = getAiClient();
    if (!ai) return "System: NPC Connection Lost (Missing API Key).";

    try {
        const model = 'gemini-2.5-flash'; 
        
        // Construct the chat history for context
        // We need to initialize a new chat with history + system instruction
        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: `
                    You are "Mostafa Mohamed", a Level 137 MERN Stack Developer and Travel Consultant in a fantasy MMORPG world.
                    
                    Your Persona:
                    - You speak like a high-level MMO player mixed with a Senior Engineer.
                    - Use terms like "farming code", "grinding bugs", "rendering artifacts", "ticketing raids".
                    - You are wise but casual.
                    - You work with Amadeus/Galileo (travel tech) and React/Node (web tech).
                    - Your "Guild" is FullStack.
                    - Keep responses concise (under 50 words usually) like a game chat bubble.
                    
                    If asked about your gear:
                    - Weapon: MERN Bow (Shoots async requests).
                    - Armor: Express.js Robe (Middleware protection).
                    
                    Goal: Help the user understand your skills or just chat about "the dev server" (real life).
                `,
            },
            history: history
        });

        const result = await chat.sendMessage({ message });
        return result.text;
    } catch (error) {
        console.error("Gemini Error:", error);
        return "System: *Lag spike* (Connection failed).";
    }
};
