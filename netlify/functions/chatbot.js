exports.handler = async (event) => {
  // Solo aceptar peticiones POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Obtener el mensaje del cuerpo de la petición
    const { message } = JSON.parse(event.body);
    const msg = message.toLowerCase();

    // Variables para almacenar la respuesta
    let servicio = "Consulta general";
    let precio = "a convenir";
    let reply = "";

    // ============================================
    // FONTANERÍA (15 tareas)
    // ============================================
    if (msg.includes('grifo') || msg.includes('gotea') || msg.includes('goteo')) {
      servicio = "Fontanería - Reparar grifo que gotea";
      precio = "50-80€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cambiar grifo') || (msg.includes('grifo') && msg.includes('cambiar'))) {
      servicio = "Fontanería - Cambiar grifo completo";
      precio = "60-100€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('desatascar') || msg.includes('tuberia') || msg.includes('tapado') || msg.includes('fregadero')) {
      servicio = "Fontanería - Desatasco de tuberías";
      precio = "60-120€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cisterna') || (msg.includes('wc') && msg.includes('para')) || (msg.includes('inodoro') && msg.includes('correr'))) {
      servicio = "Fontanería - Reparar cisterna que no para";
      precio = "60-100€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cambiar cisterna') || (msg.includes('cisterna') && msg.includes('cambiar'))) {
      servicio = "Fontanería - Cambiar cisterna completa";
      precio = "150-250€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('fuga') || msg.includes('perdida') || msg.includes('agua')) {
      servicio = "Fontanería - Reparar fuga de agua";
      precio = "80-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('latiguillo')) {
      servicio = "Fontanería - Cambiar latiguillos";
      precio = "50-80€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('valvula') || msg.includes('llave de paso')) {
      servicio = "Fontanería - Cambiar válvula de paso";
      precio = "70-120€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('lavavajillas') || msg.includes('lavadora')) {
      servicio = "Fontanería - Instalar lavavajillas o lavadora";
      precio = "80-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('caldera')) {
      servicio = "Fontanería - Reparar caldera";
      precio = "100-250€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('termo') || msg.includes('termo eléctrico')) {
      servicio = "Fontanería - Reparar termo eléctrico";
      precio = "80-180€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('averia compleja') || (msg.includes('tuberia') && msg.includes('rota'))) {
      servicio = "Fontanería - Avería compleja";
      precio = "250-600€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('fontaneria baño') || (msg.includes('baño') && msg.includes('fontaneria'))) {
      servicio = "Fontanería - Instalación baño completo";
      precio = "400-800€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('fontaneria cocina') || (msg.includes('cocina') && msg.includes('fontaneria'))) {
      servicio = "Fontanería - Instalación cocina completa";
      precio = "300-600€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // ELECTRICIDAD (14 tareas)
    // ============================================
    else if (msg.includes('cambiar enchufe') || (msg.includes('enchufe') && msg.includes('cambiar'))) {
      servicio = "Electricidad - Cambiar enchufe o interruptor";
      precio = "40-70€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cambiar bombilla') || msg.includes('plafon')) {
      servicio = "Electricidad - Cambiar bombilla o plafón";
      precio = "30-60€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cuadro electrico') || msg.includes('plomos') || msg.includes('diferencial')) {
      servicio = "Electricidad - Reparar avería en cuadro eléctrico";
      precio = "60-120€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('punto de luz') || (msg.includes('luz') && msg.includes('instalar'))) {
      servicio = "Electricidad - Instalar punto de luz nuevo";
      precio = "80-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('ventilador') || msg.includes('techo')) {
      servicio = "Electricidad - Instalar ventilador de techo";
      precio = "80-140€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('averia general') || msg.includes('saltan plomos')) {
      servicio = "Electricidad - Avería general";
      precio = "60-180€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('toma de tierra')) {
      servicio = "Electricidad - Instalar toma de tierra";
      precio = "150-300€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('electricidad baño') || (msg.includes('baño') && msg.includes('electricidad'))) {
      servicio = "Electricidad - Instalación eléctrica baño";
      precio = "200-400€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('electricidad cocina') || (msg.includes('cocina') && msg.includes('electricidad'))) {
      servicio = "Electricidad - Instalación eléctrica cocina";
      precio = "250-500€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cuadro nuevo') || (msg.includes('cuadro') && msg.includes('nuevo'))) {
      servicio = "Electricidad - Cuadro eléctrico nuevo";
      precio = "600-1000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('coche electrico') || msg.includes('recarga coche')) {
      servicio = "Electricidad - Punto recarga coche eléctrico";
      precio = "300-700€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('boletin electrico') || msg.includes('revision electrica')) {
      servicio = "Electricidad - Revisión y boletín eléctrico";
      precio = "120-200€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cambio cableado') || msg.includes('cable')) {
      servicio = "Electricidad - Cambio de cableado";
      precio = "15-30€/m";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // PINTURA (12 tareas)
    // ============================================
    else if ((msg.includes('pintar') || msg.includes('pintura')) && (msg.includes('pared') || msg.includes('paredes'))) {
      servicio = "Pintura - Pintar paredes lisas";
      precio = "12-18€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('pintar') || msg.includes('pintura')) && msg.includes('techo')) {
      servicio = "Pintura - Pintar techo";
      precio = "15-22€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('pintar') || msg.includes('pintura')) && (msg.includes('piso') || msg.includes('casa')) && (msg.includes('80') || msg.includes('completo'))) {
      servicio = "Pintura - Pintar piso completo 80m²";
      precio = "1200-1800€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('pintar') || msg.includes('pintura')) && (msg.includes('piso') || msg.includes('casa')) && (msg.includes('100'))) {
      servicio = "Pintura - Pintar piso completo 100m²";
      precio = "1500-2200€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('gotelé') || msg.includes('alisar paredes')) {
      servicio = "Pintura - Alisar paredes (eliminar gotelé)";
      precio = "20-30€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('grietas') || msg.includes('masillado')) {
      servicio = "Pintura - Reparar grietas y masillado";
      precio = "+200-500€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('imprimacion') || msg.includes('selladora')) {
      servicio = "Pintura - Imprimación selladora";
      precio = "+5-8€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('habitacion') && msg.includes('pintar')) {
      servicio = "Pintura - Pintar una habitación (20m²)";
      precio = "250-400€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('fachada') || msg.includes('exterior')) {
      servicio = "Pintura - Pintar fachada o exterior";
      precio = "18-30€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('puerta') || msg.includes('ventana')) {
      servicio = "Pintura - Pintar puertas o ventanas";
      precio = "30-60€/unidad";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('pintar') && (msg.includes('casa') || msg.includes('piso') || msg.includes('vivienda'))) {
      servicio = "Pintura - Pintar vivienda (precio general)";
      precio = "1000-2800€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // LIMPIEZA PROFESIONAL (9 tareas)
    // ============================================
    else if (msg.includes('limpieza hogar') || (msg.includes('limpiar') && msg.includes('casa'))) {
      servicio = "Limpieza - Limpieza de hogar";
      precio = "60-120€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('limpieza oficina') || (msg.includes('oficina') && msg.includes('limpiar'))) {
      servicio = "Limpieza - Limpieza de oficina";
      precio = "80-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('comunidades') || (msg.includes('portal') && msg.includes('limpiar'))) {
      servicio = "Limpieza - Limpieza de comunidades";
      precio = "100-300€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('cristales') || msg.includes('ventanas')) {
      servicio = "Limpieza - Limpieza de cristales";
      precio = "50-120€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('alfombras') || msg.includes('tapiceria')) {
      servicio = "Limpieza - Limpieza de alfombras y tapicerías";
      precio = "50-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('post-obra') || (msg.includes('obra') && msg.includes('limpiar'))) {
      servicio = "Limpieza - Limpieza post-obra";
      precio = "200-400€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('nave industrial') || msg.includes('almacen')) {
      servicio = "Limpieza - Limpieza de nave industrial";
      precio = "a medida";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('terraza') || msg.includes('balcon')) {
      servicio = "Limpieza - Limpieza de terrazas o balcones";
      precio = "40-80€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // JARDINERÍA Y PODA (10 tareas)
    // ============================================
    else if (msg.includes('cortar cesped') || msg.includes('césped')) {
      servicio = "Jardinería - Cortar césped";
      precio = "30-120€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('poda arbustos') || msg.includes('setos')) {
      servicio = "Jardinería - Poda de arbustos y setos";
      precio = "25-50€/hora";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('poda arboles pequeños') || (msg.includes('arbol') && msg.includes('pequeño'))) {
      servicio = "Jardinería - Poda de árboles pequeños";
      precio = "50-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('poda arboles grandes') || (msg.includes('arbol') && msg.includes('grande'))) {
      servicio = "Jardinería - Poda de árboles grandes";
      precio = "150-400€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('limpieza jardin') || msg.includes('jardin sucio')) {
      servicio = "Jardinería - Limpieza de jardín";
      precio = "40-80€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('mantenimiento jardin') || (msg.includes('jardin') && msg.includes('mensual'))) {
      servicio = "Jardinería - Mantenimiento de jardín mensual";
      precio = "60-150€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('desbroce') || msg.includes('terreno')) {
      servicio = "Jardinería - Desbroce de terreno";
      precio = "3-6€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('plantacion') || msg.includes('flores') || msg.includes('arbustos')) {
      servicio = "Jardinería - Plantación de flores o arbustos";
      precio = "20-50€/hora + materiales";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('riego automatico')) {
      servicio = "Jardinería - Instalación de riego automático";
      precio = "a medida";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('plagas') || msg.includes('tratamiento jardin')) {
      servicio = "Jardinería - Tratamiento de plagas";
      precio = "50-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // REFORMAS (20 tareas)
    // ============================================
    else if ((msg.includes('baño') || msg.includes('bano')) && msg.includes('basico')) {
      servicio = "Reforma - Baño básico";
      precio = "2000-4000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('baño') || msg.includes('bano')) && (msg.includes('gama media') || msg.includes('completo'))) {
      servicio = "Reforma - Baño completo gama media";
      precio = "4000-8000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('baño') || msg.includes('bano')) && msg.includes('gama alta')) {
      servicio = "Reforma - Baño completo gama alta";
      precio = "8000-15000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('cambiar bañera') || msg.includes('plato ducha')) && !msg.includes('reforma')) {
      servicio = "Reforma - Cambio de bañera por plato de ducha";
      precio = "700-1300€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('cocina') || msg.includes('cosina')) && msg.includes('basica')) {
      servicio = "Reforma - Cocina básica";
      precio = "4000-8000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('cocina') || msg.includes('cosina')) && (msg.includes('gama media') || msg.includes('completa'))) {
      servicio = "Reforma - Cocina completa gama media";
      precio = "8000-15000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('cocina') || msg.includes('cosina')) && msg.includes('premium')) {
      servicio = "Reforma - Cocina premium";
      precio = "15000-25000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('reforma integral') && (msg.includes('80') || msg.includes('100'))) {
      servicio = "Reforma - Reforma integral piso 80-100m²";
      precio = "25000-60000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('reforma por m2') || (msg.includes('precio por metro') && msg.includes('reforma'))) {
      servicio = "Reforma - Precio por m² reforma integral";
      precio = "500-1250€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('demolicion') || msg.includes('escombros')) {
      servicio = "Reforma - Demolición y escombros";
      precio = "300-600€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('albañileria') || msg.includes('tabique')) {
      servicio = "Reforma - Albañilería";
      precio = "60-100€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('solados') || msg.includes('suelo') || msg.includes('porcelanico')) {
      servicio = "Reforma - Solados";
      precio = "40-80€/m² + materiales";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('alicatado') || msg.includes('azulejos')) {
      servicio = "Reforma - Alicatado de paredes";
      precio = "35-65€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('escayola') || msg.includes('falso techo')) {
      servicio = "Reforma - Escayola y falsos techos";
      precio = "25-45€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('instalacion electrica completa')) {
      servicio = "Reforma - Instalación eléctrica completa";
      precio = "3200-3800€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('fontaneria completa vivienda')) {
      servicio = "Reforma - Fontanería completa vivienda";
      precio = "1500-3000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('carpinteria interior') || msg.includes('puertas')) {
      servicio = "Reforma - Carpintería interior";
      precio = "200-400€/unidad";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // CREACIÓN WEB Y APPS (8 tareas)
    // ============================================
    else if ((msg.includes('web') || msg.includes('pagina web')) && (msg.includes('corporativa') || msg.includes('5 paginas'))) {
      servicio = "Web - Web corporativa (5 páginas)";
      precio = "500-1200€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if ((msg.includes('tienda online') || msg.includes('ecommerce'))) {
      servicio = "Web - Tienda online";
      precio = "800-2000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('landing page') || msg.includes('one page')) {
      servicio = "Web - Landing page";
      precio = "300-600€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('app movil') || msg.includes('aplicacion movil')) {
      servicio = "Web - App móvil básica";
      precio = "2000-5000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('app avanzada') || (msg.includes('app') && msg.includes('compleja'))) {
      servicio = "Web - App móvil avanzada";
      precio = "5000-12000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('mantenimiento web') || msg.includes('actualizar web')) {
      servicio = "Web - Mantenimiento web mensual";
      precio = "30-80€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('seo') || msg.includes('posicionamiento')) {
      servicio = "Web - SEO básico";
      precio = "200-500€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // AUTOMATIZACIÓN CON IA (6 tareas)
    // ============================================
    else if (msg.includes('chatbot basico') || (msg.includes('chatbot') && msg.includes('simple'))) {
      servicio = "IA - Chatbot básico";
      precio = "300-600€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('chatbot avanzado') || (msg.includes('chatbot') && msg.includes('ia'))) {
      servicio = "IA - Chatbot avanzado con IA";
      precio = "600-1500€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('asistente virtual')) {
      servicio = "IA - Asistente virtual";
      precio = "500-2000€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('automatizacion marketing')) {
      servicio = "IA - Automatización de marketing";
      precio = "300-800€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('consultoria ia')) {
      servicio = "IA - Consultoría en IA";
      precio = "80-150€/hora";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // SERVICIOS PARA COMUNIDADES (6 tareas)
    // ============================================
    else if (msg.includes('mantenimiento integral comunidad') || (msg.includes('comunidad') && msg.includes('mantenimiento'))) {
      servicio = "Comunidades - Mantenimiento integral comunidad";
      precio = "200-600€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('limpieza portal') || (msg.includes('comunidad') && msg.includes('limpieza'))) {
      servicio = "Comunidades - Limpieza portal y zonas comunes";
      precio = "150-400€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('jardineria comunidad') || (msg.includes('comunidad') && msg.includes('jardin'))) {
      servicio = "Comunidades - Jardinería zonas comunes";
      precio = "100-300€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('piscina comunitaria')) {
      servicio = "Comunidades - Mantenimiento piscina comunitaria";
      precio = "150-400€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('pintura fachada comunidad')) {
      servicio = "Comunidades - Pintura de fachada";
      precio = "18-30€/m²";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // MANTENIMIENTO PARA EMPRESAS (5 tareas)
    // ============================================
    else if (msg.includes('mantenimiento local comercial') || (msg.includes('local') && msg.includes('mantenimiento'))) {
      servicio = "Empresas - Mantenimiento integral local comercial";
      precio = "150-500€/mes";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('reparaciones urgentes empresa')) {
      servicio = "Empresas - Reparaciones urgentes";
      precio = "60-150€ + materiales";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('climatizacion') || msg.includes('aire acondicionado')) {
      servicio = "Empresas - Mantenimiento de climatización";
      precio = "80-150€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }
    else if (msg.includes('certificado instalaciones')) {
      servicio = "Empresas - Certificado de instalaciones";
      precio = "120-250€";
      reply = `👋 ¡Hola! He detectado tu solicitud: *${servicio}*\n💰 Presupuesto orientativo: ${precio}\n✅ Incluye +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // ============================================
    // SERVICIOS NO LISTADOS
    // ============================================
    else {
      reply = `👋 ¡Hola! Por favor, dime qué necesitas reparar o mejorar. Por ejemplo:\n- Se me ha roto el grifo\n- Quiero pintar mi piso\n- Necesito reformar el baño\n\n📱 ¿Cuál es tu número de WhatsApp?`;
    }

    // Devolver la respuesta
    return {
      statusCode: 200,
      body: JSON.stringify({ reply, servicio, precio })
    };
  } catch (error) {
    console.error("Error en la función:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: '⚠️ Error técnico. Escríbenos directamente al WhatsApp 603 018 190 y te atenderemos enseguida.'
      })
    };
  }
};