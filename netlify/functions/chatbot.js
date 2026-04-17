export default async (req) => {
  const apiKey = process.env.OPENAI_API_KEY;
  
  return new Response(JSON.stringify({ 
    reply: apiKey ? `✅ API Key existe. Longitud: ${apiKey.length}` : '❌ No se encuentra la API Key'
  }), { status: 200 });
};