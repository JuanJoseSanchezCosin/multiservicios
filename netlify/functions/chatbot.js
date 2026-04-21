exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { message, step, userData } = JSON.parse(event.body);
    let reply = "";
    let nextStep = step;
    let botones = null;
    let precioCalculado = null;
    
    let metros = userData?.metros || null;
    let reparaciones = userData?.reparaciones || null;
    let calidad = userData?.calidad || null;

    // ============================================
    // FLUJO DE PINTURA CON BOTONES
    // ============================================

    // PASO 1: Preguntar metros (con botones)
    if (step === 'pintura_preguntar_metros') {
      if (message === 'otro') {
        reply = "📏 Escribe los metros cuadrados (solo números):";
        nextStep = 'pintura_preguntar_metros_manual';
        botones = null;
      } else {
        metros = parseInt(message);
        reply = "🛠️ ¿Las paredes necesitan reparaciones? (grietas, masillado, gotelé)";
        nextStep = 'pintura_preguntar_reparaciones';
        botones = [
          { text: "✅ Sí", value: "si" },
          { text: "❌ No", value: "no" }
        ];
      }
    }
    else if (step === 'pintura_preguntar_metros_manual') {
      metros = parseInt(message);
      if (isNaN(metros)) {
        reply = "📏 Por favor, escribe un número válido (ej: 80):";
        nextStep = 'pintura_preguntar_metros_manual';
      } else {
        reply = "🛠️ ¿Las paredes necesitan reparaciones? (grietas, masillado, gotelé)";
        nextStep = 'pintura_preguntar_reparaciones';
        botones = [
          { text: "✅ Sí", value: "si" },
          { text: "❌ No", value: "no" }
        ];
      }
    }
    // PASO 2: Preguntar reparaciones (con botones)
    else if (step === 'pintura_preguntar_reparaciones') {
      reparaciones = (message === 'si');
      reply = "🎨 ¿Qué calidad de pintura prefieres?";
      nextStep = 'pintura_preguntar_calidad';
      botones = [
        { text: "🏠 Estándar (1000-1200€)", value: "1" },
        { text: "⭐ Media (1200-1600€)", value: "2" },
        { text: "✨ Alta (1600-2800€)", value: "3" }
      ];
    }
    // PASO 3: Calcular precio
    else if (step === 'pintura_preguntar_calidad') {
      let calidadValue = parseInt(message);
      if (isNaN(calidadValue)) calidadValue = 2;
      
      const preciosBase = { 1: 1100, 2: 1400, 3: 2200 };
      let precioBase = preciosBase[calidadValue];
      precioBase = (precioBase / 100) * metros;
      
      let extraReparaciones = reparaciones ? (metros * 2.5) : 0;
      let precioFinal = precioBase + extraReparaciones;
      precioFinal = Math.round(precioFinal * 1.2);
      
      let reparacionesTexto = reparaciones ? "✅ Incluye reparación de grietas y masillado" : "❌ Sin reparaciones adicionales";
      let calidadTexto = calidadValue === 1 ? "Estándar" : (calidadValue === 2 ? "Media" : "Alta");
      
      reply = `📋 *He calculado tu presupuesto:*\n\n🔧 *Pintura de vivienda*\n📏 Metros: ${metros}m²\n🎨 Calidad: ${calidadTexto}\n${reparacionesTexto}\n✅ +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n💰 *Presupuesto orientativo: ${precioFinal}€*\n\n📧 ¿Quieres que te envíe este presupuesto por email?`;
      nextStep = 'pintura_preguntar_email';
      botones = [
        { text: "✅ Sí, enviar presupuesto", value: "si" },
        { text: "❌ No, gracias", value: "no" }
      ];
      precioCalculado = precioFinal;
    }
    // PASO 4: Preguntar si quiere email
    else if (step === 'pintura_preguntar_email') {
      if (message === 'si') {
        reply = "📝 Perfecto. Dime tu *nombre completo*:";
        nextStep = 'pintura_pedir_nombre';
        botones = null;
      } else {
        reply = "✅ Gracias. Si cambias de opinión, aquí estamos.\n\n¡Gracias por confiar en Multiservicios Sagunto! 💙";
        nextStep = 'fin';
      }
    }
    // PASO 5: Pedir nombre
    else if (step === 'pintura_pedir_nombre') {
      reply = "📍 ¿En qué *población* vives? (Sagunto, Puerto, Canet, Faura...)";
      nextStep = 'pintura_pedir_poblacion';
    }
    // PASO 6: Pedir población
    else if (step === 'pintura_pedir_poblacion') {
      reply = "📱 ¿Cuál es tu *número de teléfono*? (Ej: 603018190)";
      nextStep = 'pintura_pedir_telefono';
    }
    // PASO 7: Pedir teléfono
    else if (step === 'pintura_pedir_telefono') {
      reply = "📧 ¿Y tu *correo electrónico*?";
      nextStep = 'pintura_pedir_email';
    }
    // PASO 8: Fin (los emails se envían desde frontend)
    else if (step === 'pintura_pedir_email') {
      reply = "✅ *¡Gracias!* Te he enviado el presupuesto a tu email.\n\nEn breve nos pondremos en contacto contigo por WhatsApp para concretar la visita.\n\n¡Gracias por confiar en Multiservicios Sagunto! 💙";
      nextStep = 'fin';
    }
    // INICIO: Detectar servicio
    else if (step === 'inicio') {
      if (message.includes('pintar') || message.includes('pintura') || message.includes('pint')) {
        reply = "📏 ¿Cuántos metros cuadrados tiene la superficie a pintar?";
        nextStep = 'pintura_preguntar_metros';
        botones = [
          { text: "50 m²", value: "50" },
          { text: "80 m²", value: "80" },
          { text: "100 m²", value: "100" },
          { text: "120 m²", value: "120" },
          { text: "150 m²", value: "150" },
          { text: "✏️ Otro", value: "otro" }
        ];
      } else {
        reply = "🔧 Hola, soy Cousine, asistente de Multiservicios Sagunto.\n\nPor ahora puedo ayudarte con presupuestos de *pintura*.\n\n¿Quieres pintar tu casa o piso?";
        nextStep = 'inicio';
        botones = [
          { text: "🎨 Sí, quiero pintar", value: "pintar" },
          { text: "📞 Hablar con un asesor", value: "asesor" }
        ];
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply,
        nextStep,
        botones,
        precio: precioCalculado,
        userDataUpdate: { metros, reparaciones, calidad }
      })
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: '⚠️ Error técnico. Escríbenos al WhatsApp 603 018 190.'
      })
    };
  }
};