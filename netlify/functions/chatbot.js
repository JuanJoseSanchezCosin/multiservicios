import OpenAI from 'openai';

const openai = new OpenAI();

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message, conversationHistory, userData } = await req.json();

    const systemPrompt = `Eres el asistente de MULTISERVICIOS SAGUNTO.
Usuario: ${userData?.nombre || 'desconocido'}, Tel: ${userData?.telefono || 'desconocido'}, Email: ${userData?.email || 'desconocido'}

Reglas:
- Calcula presupuestos con un 20% EXTRA para imprevistos.
- Si falta info, pregunta.
- Sé amable.
- Precios: Fontanería 80-400€, Electricidad 60-350€, Pintura 18-25€/m², Limpieza 100-250€, Jardinería 3-6€/m², Reformas 70-150€/m²`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(conversationHistory || []),
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500
    });

    const reply = completion.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      reply: '⚠️ Lo siento, tengo problemas técnicos. ¿Puedes escribirnos al WhatsApp 665 327 929? Te atenderemos enseguida.'
    }), { status: 500 });
  }
};
