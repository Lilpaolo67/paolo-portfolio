import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: any, res: any) {
  // Set CORS headers so it can be called from the frontend
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key is not configured in Vercel environment variables.' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: `You are the friendly, helpful, and professional AI virtual assistant of Paolo Ando. 
Paolo is a Marine Systems Engineer and the CEO of Homewizie. 
Keep your answers brief, engaging, and in simple English with no technical jargon.

Information about Paolo Ando:
- Background: Previously a Marine Systems Engineer (2025-2026), running propulsion systems, gas turbines, diesel plants, and failure-redundancy on global cargo fleets.
- Current Role: CEO of Homewizie Inc. (since 2026).
- Homewizie Focus: We partner with luxury property developers, boutique hoteliers, and architects to integrate high-ticket, minimalist ambient smart hardware solutions (like automatic feeders, ambient coffee makers, acoustic air purifiers) that prioritize quietness and natural textures.
- Email: paolo@homewizie.com
- Location: Manila, Philippines (Maritime Hub)

If asked about something not in this context, politely guide the user to contact Paolo directly at paolo@homewizie.com.`
    });

    const result = await model.generateContent(message);
    const responseText = result.response.text();

    return res.status(200).json({ response: responseText });
  } catch (error: any) {
    console.error('Error with Gemini API:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate response' });
  }
}
