const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ message: "Gemini API Key is missing. Please add it to your .env file." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Fetch all active products
    const products = await Product.find().sort({ createdAt: -1 });
    
    // Format the products into a readable string for the AI
    const inventoryString = products.map(p => 
      `- ${p.name} (${p.price})\n  Category: ${p.category}\n  Description: ${p.description}`
    ).join('\n\n');

    const systemPrompt = `You are an intelligent AI assistant for a solar energy company called "Shiny Power Solutions".

Your job is to help users with:
- Product inquiries (solar panels, inverters, batteries, etc.)
- Prices of products
- Product availability
- Information about the company (About Us, services, etc.)
- Recommendations based on user needs

IMPORTANT RULES:
1. Only answer using the data provided in the "CONTEXT" section.
2. NEVER guess or invent products, prices, or details.
3. If a product or information is not in the context, respond with:
   "I currently don't have that information. Please check back later or contact support."
4. Always use the exact prices provided. Do not modify or estimate.
5. If multiple products match a request, list them clearly with:
   - Name
   - Price
   - Short description
6. Keep responses clear, friendly, and professional.
7. If the user asks for recommendations, suggest relevant products from the context.
8. If the user asks about the company, emphasize that Shiny Power Solutions provides top-tier solar solutions.
9. Keep your responses concise and readable. Do NOT use asterisks (*) for bolding or lists. Use plain text or simple dashes (-) for lists instead. Do NOT use markdown bolding.

CONTEXT:
${inventoryString}

COMPANY INFO:
- Company Name: Shiny Power Solutions
- CEO: Peter Akinade
- Services: Solar panel installation, inverter setups, battery storage, renewable energy consulting, home/business electrification.
- Contact Phone: +234 904 858 3593
- Email: shinymediaempire@gmail.com
- Address: Exotic filling station, opposite Cheshire Sango, Eleyele Express, Ibadan, Nigeria
- About Us: Established in 2017, pioneering renewable energy to reduce electricity costs by up to 10%.`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-flash-latest",
      systemInstruction: systemPrompt
    });

    // Gemini format: history should be { role: "user" | "model", parts: [{ text: "..." }] }
    // The incoming messages are { role: "user" | "assistant", content: "..." }
    // IMPORTANT: Gemini history MUST start with a 'user' role.
    const lastUserMessage = messages[messages.length - 1].content;
    const previousMessages = messages
      .slice(0, -1)
      .filter((msg, index) => !(index === 0 && msg.role === "assistant")) // Skip initial bot greeting
      .map(msg => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

    // Initialize chat session with history
    const chat = model.startChat({
      history: previousMessages
    });

    const result = await chat.sendMessage(lastUserMessage);
    let responseText = result.response.text();

    // Remove all asterisks from the response as requested by the user
    responseText = responseText.replace(/\*/g, '');

    res.json({ reply: responseText });

  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ message: "Failed to generate AI response", details: error.message });
  }
});

module.exports = router;
