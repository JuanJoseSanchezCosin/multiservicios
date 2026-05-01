// ============================================
// CHATBOT COUSINE - MULTISERVICIOS SAGUNTO
// ============================================

(function() {

    // Esperar a que EmailJS esté cargado
    window.addEventListener('load', function() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init('gcidZqK4tE_i-PfBW');
        }
    });

    // ============================================
    // BASE DE DATOS DE SERVICIOS
    // ============================================
    const serviciosDB = {
        fontaneria: [
            { nombre: "Reparar grifo que gotea", precio: "50-80€", preguntas: [
                { texto: "¿Pierde mucha agua?", botones: ["Sí", "No"] },
                { texto: "¿Crees que habría que cambiar el grifo?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar grifo completo", precio: "60-100€", preguntas: [
                { texto: "¿Alguna marca o calidad en especial?", botones: ["Baja", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar cartucho de grifo monomando", precio: "50-70€", preguntas: [
                { texto: "¿Sabes la marca del grifo?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Desatasco de tuberías", precio: "60-120€", preguntas: [
                { texto: "¿De qué parte de la casa?", botones: ["Cocina", "Baño", "Fregadero", "Inodoro"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar cisterna que no para de correr", precio: "60-100€", preguntas: [
                { texto: "¿La cisterna no para de correr o hace ruido?", botones: ["No para de correr", "Hace ruido"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar cisterna completa", precio: "150-250€", preguntas: [
                { texto: "¿Alguna marca o calidad en especial?", botones: ["Baja", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar fuga de agua localizada", precio: "80-150€", preguntas: [
                { texto: "¿Dónde está la fuga?", botones: ["Baño", "Cocina", "Terraza", "Patio"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar latiguillos", precio: "50-80€", preguntas: [
                { texto: "¿De qué electrodoméstico?", botones: ["Lavadora", "Lavavajillas", "Inodoro"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar válvula de paso", precio: "70-120€", preguntas: [
                { texto: "¿Dónde está la válvula?", botones: ["General de la casa", "Baño", "Cocina"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalar lavavajillas o lavadora", precio: "80-150€", preguntas: [
                { texto: "¿Qué electrodoméstico?", botones: ["Lavadora", "Lavavajillas"] },
                { texto: "¿Tienes ya el electrodoméstico?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar caldera (avería básica)", precio: "100-250€", preguntas: [
                { texto: "¿Qué problema tiene la caldera?", botones: ["No enciende", "Pierde presión", "Hace ruido"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar termo eléctrico", precio: "80-180€", preguntas: [
                { texto: "¿Qué problema tiene el termo?", botones: ["No calienta", "Pierde agua", "Hace ruido"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Avería compleja (rotura tubería empotrada)", precio: "250-600€", preguntas: [
                { texto: "¿Dónde está la rotura?", botones: ["Baño", "Cocina", "Pasillo"] },
                { texto: "¿Se ve humedad en la pared?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalación fontanería baño completo", precio: "400-800€", preguntas: [
                { texto: "¿Medidas del baño? (metros cuadrados)", botones: null },
                { texto: "¿Es obra nueva o reforma?", botones: ["Obra nueva", "Reforma"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalación fontanería cocina completa", precio: "300-600€", preguntas: [
                { texto: "¿Medidas de la cocina? (metros cuadrados)", botones: null },
                { texto: "¿Es obra nueva o reforma?", botones: ["Obra nueva", "Reforma"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
        ],
        electricidad: [
            { nombre: "Cambiar enchufe o interruptor", precio: "40-70€", preguntas: [
                { texto: "¿Alguna marca o tipo especial?", botones: ["Normal", "Domótico"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar bombilla o plafón", precio: "30-60€", preguntas: [
                { texto: "¿Qué tipo de bombilla?", botones: ["LED", "Normal", "Fluorescente"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar avería en cuadro eléctrico", precio: "60-120€", preguntas: [
                { texto: "¿Qué avería?", botones: ["Salta el diferencial", "Salta un plomo", "No salta nada"] },
                { texto: "¿Puedes rearmarlo?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalar punto de luz nuevo", precio: "80-150€", preguntas: [
                { texto: "¿Cuántos puntos de luz?", botones: ["1", "2", "3", "Más"] },
                { texto: "¿Los techos son de pladur?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar mecanismos completos", precio: "40-80€", preguntas: [
                { texto: "¿Cuántos mecanismos?", botones: ["1", "2", "3", "Más"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar avería general (saltan plomos)", precio: "60-180€", preguntas: [
                { texto: "¿Saltan al encender algo en concreto?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalar toma de tierra", precio: "150-300€", preguntas: [
                { texto: "¿Es vivienda antigua?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalación eléctrica baño completo", precio: "200-400€", preguntas: [
                { texto: "¿Medidas del baño?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalación eléctrica cocina completa", precio: "250-500€", preguntas: [
                { texto: "¿Medidas de la cocina?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cuadro eléctrico nuevo (vivienda 80-100m²)", precio: "600-1000€", preguntas: [
                { texto: "¿Metros de la vivienda?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalar punto recarga coche eléctrico", precio: "300-700€", preguntas: [
                { texto: "¿Tienes el cuadro eléctrico cerca?", botones: ["Sí", "No"] },
                { texto: "¿Cuántos metros aproximadamente?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Revisión y boletín eléctrico", precio: "120-200€", preguntas: [
                { texto: "¿Para qué necesitas el boletín?", botones: ["Venta de vivienda", "Alquiler", "Reforma"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambio de cableado (por metro)", precio: "15-30€/m", preguntas: [
                { texto: "¿Cuántos metros?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
        ],
        pintura: [
            { nombre: "Pintar paredes lisas (por m²)", precio: "12-18€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay que reparar grietas?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar techo (por m²)", precio: "15-22€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay humedades?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar piso completo 80m²", precio: "1200-1800€", preguntas: [
                { texto: "¿Hay que reparar paredes?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar piso completo 100m²", precio: "1500-2200€", preguntas: [
                { texto: "¿Hay que reparar paredes?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Alisar paredes (eliminar gotelé)", precio: "20-30€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿El gotelé es muy grueso?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar grietas y masillado", precio: "+200-500€", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Las grietas son profundas?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar una habitación (20m²)", precio: "250-400€", preguntas: [
                { texto: "¿Hay que reparar paredes?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar fachada o exterior", precio: "18-30€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay andamios necesarios?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
        ],
        limpieza: [
            { nombre: "Limpieza de hogar (3-4 horas)", precio: "60-120€", preguntas: [
                { texto: "¿Cuántas habitaciones?", botones: ["1-2", "3-4", "5+"] },
                { texto: "¿Cuántos baños?", botones: ["1", "2", "3+"] },
                { texto: "¿Es puntual o periódica?", botones: ["Puntual", "Semanal", "Quincenal"] }
            ]},
            { nombre: "Limpieza de oficina (50m²)", precio: "80-150€", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Número de puestos?", botones: ["1-5", "6-10", "11+"] },
                { texto: "¿Con qué frecuencia?", botones: ["Diaria", "Semanal", "Quincenal"] }
            ]},
            { nombre: "Limpieza de comunidades (mensual)", precio: "100-300€/mes", preguntas: [
                { texto: "¿Cuántos portales?", botones: ["1", "2", "3+"] },
                { texto: "¿Cuántos vecinos?", botones: ["Menos de 20", "20-50", "Más de 50"] }
            ]},
            { nombre: "Limpieza de cristales", precio: "50-120€", preguntas: [
                { texto: "¿Cuántas ventanas?", botones: ["1-5", "6-10", "11+"] },
                { texto: "¿Altura?", botones: ["Baja", "Media", "Alta (necesita andamios)"] }
            ]}
        ],
        jardineria: [
            { nombre: "Cortar césped (50-100m²)", precio: "30-60€", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Con qué frecuencia?", botones: ["Puntual", "Semanal", "Quincenal"] }
            ]},
            { nombre: "Cortar césped (100-300m²)", precio: "60-120€", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Con qué frecuencia?", botones: ["Puntual", "Semanal", "Quincenal"] }
            ]},
            { nombre: "Poda de arbustos y setos", precio: "25-50€/hora", preguntas: [
                { texto: "¿Cuántos metros lineales?", botones: null },
                { texto: "¿Altura?", botones: ["Baja", "Media", "Alta"] }
            ]},
            { nombre: "Poda de árboles pequeños (hasta 5m)", precio: "50-150€", preguntas: [
                { texto: "¿Cuántos árboles?", botones: ["1", "2", "3+"] },
                { texto: "¿Urgente por peligro?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Poda de árboles grandes (más de 5m)", precio: "150-400€", preguntas: [
                { texto: "¿Cuántos árboles?", botones: ["1", "2", "3+"] },
                { texto: "¿Urgente por peligro?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Mantenimiento de jardín (mensual)", precio: "60-150€/mes", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Qué servicios incluye?", botones: ["Corte césped", "Poda", "Limpieza", "Todo"] }
            ]}
        ],
        reformas: [
            { nombre: "Baño básico", precio: "2000-4000€", preguntas: [
                { texto: "¿Medidas del baño?", botones: null },
                { texto: "¿Hay que demoler?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Baño completo gama media", precio: "4000-8000€", preguntas: [
                { texto: "¿Medidas del baño?", botones: null },
                { texto: "¿Hay que demoler?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Baño completo gama alta", precio: "8000-15000€", preguntas: [
                { texto: "¿Medidas del baño?", botones: null },
                { texto: "¿Hay que demoler?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Cambio de bañera por plato de ducha", precio: "700-1300€", preguntas: [
                { texto: "¿Medidas de la bañera?", botones: null }
            ]},
            { nombre: "Cocina básica", precio: "4000-8000€", preguntas: [
                { texto: "¿Medidas de la cocina?", botones: null },
                { texto: "¿Hay que demoler?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Cocina completa gama media", precio: "8000-15000€", preguntas: [
                { texto: "¿Medidas de la cocina?", botones: null },
                { texto: "¿Hay que demoler?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Cocina premium", precio: "15000-25000€", preguntas: [
                { texto: "¿Medidas de la cocina?", botones: null },
                { texto: "¿Hay que demoler?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Reforma integral piso 80-100m² (estándar)", precio: "25000-40000€", preguntas: [
                { texto: "¿Medidas del piso?", botones: null },
                { texto: "¿Calidad estándar o alta?", botones: ["Estándar", "Alta"] }
            ]},
            { nombre: "Reforma integral piso 80-100m² (calidad alta)", precio: "40000-60000€", preguntas: [
                { texto: "¿Medidas del piso?", botones: null },
                { texto: "¿Calidad estándar o alta?", botones: ["Estándar", "Alta"] }
            ]}
        ],
        web: [
            { nombre: "Web corporativa (5 páginas, responsive)", precio: "500-1200€", preguntas: [
                { texto: "¿Tienes logo y contenido?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Tienda online (hasta 50 productos)", precio: "800-2000€", preguntas: [
                { texto: "¿Cuántos productos?", botones: ["1-20", "21-50", "Más de 50"] }
            ]},
            { nombre: "Landing page o One page", precio: "300-600€", preguntas: [
                { texto: "¿Para qué producto o servicio?", botones: null }
            ]},
            { nombre: "App móvil básica", precio: "2000-5000€", preguntas: [
                { texto: "¿iOS, Android o ambos?", botones: ["iOS", "Android", "Ambos"] }
            ]},
            { nombre: "App móvil avanzada", precio: "5000-12000€", preguntas: [
                { texto: "¿iOS, Android o ambos?", botones: ["iOS", "Android", "Ambos"] },
                { texto: "¿Qué funcionalidades necesita?", botones: null }
            ]},
            { nombre: "Mantenimiento web mensual", precio: "30-80€/mes", preguntas: [] },
            { nombre: "SEO básico", precio: "200-500€", preguntas: [] },
            { nombre: "Posicionamiento SEO avanzado", precio: "500-1500€/mes", preguntas: [] }
        ],
        ia: [
            { nombre: "Chatbot básico (web o WhatsApp)", precio: "300-600€", preguntas: [
                { texto: "¿Para web o WhatsApp?", botones: ["Web", "WhatsApp", "Ambos"] }
            ]},
            { nombre: "Chatbot avanzado con IA", precio: "600-1500€", preguntas: [
                { texto: "¿Qué información debe gestionar?", botones: null }
            ]},
            { nombre: "Asistente virtual", precio: "500-2000€", preguntas: [
                { texto: "¿Para qué procesos?", botones: null }
            ]},
            { nombre: "Automatización de marketing", precio: "300-800€", preguntas: [
                { texto: "¿Email, WhatsApp o ambos?", botones: ["Email", "WhatsApp", "Ambos"] }
            ]},
            { nombre: "Automatización de procesos empresariales", precio: "1000-3000€", preguntas: [
                { texto: "¿Qué procesos?", botones: null }
            ]},
            { nombre: "Consultoría en IA", precio: "80-150€/hora", preguntas: [] }
        ],
        comunidades: [
            { nombre: "Mantenimiento integral comunidad (mensual)", precio: "200-600€/mes", preguntas: [
                { texto: "¿Cuántos vecinos?", botones: ["Menos de 20", "20-50", "Más de 50"] }
            ]},
            { nombre: "Limpieza portal y zonas comunes (mensual)", precio: "150-400€/mes", preguntas: [
                { texto: "¿Cuántos portales?", botones: ["1", "2", "3+"] }
            ]},
            { nombre: "Jardinería zonas comunes (mensual)", precio: "100-300€/mes", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null }
            ]},
            { nombre: "Mantenimiento piscina comunitaria", precio: "150-400€/mes", preguntas: [
                { texto: "¿Tamaño de la piscina?", botones: ["Pequeña", "Mediana", "Grande"] }
            ]},
            { nombre: "Pintura de fachada", precio: "18-30€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay andamios necesarios?", botones: ["Sí", "No"] }
            ]}
        ],
        empresas: [
            { nombre: "Mantenimiento integral local comercial (mensual)", precio: "150-500€/mes", preguntas: [
                { texto: "¿Metros del local?", botones: null }
            ]},
            { nombre: "Reparaciones urgentes", precio: "60-150€ + materiales", preguntas: [
                { texto: "¿Qué tipo de reparación?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí", "No"] }
            ]},
            { nombre: "Mantenimiento de climatización", precio: "80-150€", preguntas: [] },
            { nombre: "Certificado de instalaciones", precio: "120-250€", preguntas: [] }
        ]
    };

    // ============================================
    // ESTADO DEL CHAT
    // ============================================
    let paso = 'inicio';
    let categoriaSeleccionada = '';
    let servicioActual = null;
    let respuestas = {};
    let datosCliente = { nombre: '', poblacion: '', telefono: '', email: '', servicio: '', precio: '' };

    // ============================================
    // ELEMENTOS DOM
    // ============================================
    const chatbotBtn    = document.getElementById('chatbotButton');
    const chatbotWin    = document.getElementById('chatbotWindow');
    const chatbotCerrar = document.getElementById('chatbotClose');
    const chatMessages  = document.getElementById('chatbotMessages');
    const chatInput     = document.getElementById('chatbotInput');
    const chatSend      = document.getElementById('chatbotSend');

    if (!chatbotBtn) return; // Si no hay chatbot en la página, salir

    // ============================================
    // FUNCIONES
    // ============================================
    function agregarMensaje(texto, esUsuario = false, botones = null) {
        const div = document.createElement('div');
        div.className = `message ${esUsuario ? 'user' : 'bot'}`;
        const burbuja = document.createElement('div');
        burbuja.className = 'message-bubble';
        burbuja.innerHTML = texto.replace(/\n/g, '<br>');
        div.appendChild(burbuja);

        if (botones && !esUsuario && botones.length > 0) {
            const contenedorBotones = document.createElement('div');
            contenedorBotones.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;';
            botones.forEach(btn => {
                const boton = document.createElement('button');
                boton.textContent = btn;
                boton.style.cssText = 'background:#1e3a5f;color:white;border:none;padding:10px 18px;border-radius:30px;cursor:pointer;font-size:13px;';
                boton.onmouseover = () => boton.style.background = '#e67e22';
                boton.onmouseout  = () => boton.style.background = '#1e3a5f';
                boton.onclick = () => {
                    contenedorBotones.remove();
                    procesarMensaje(btn);
                };
                contenedorBotones.appendChild(boton);
            });
            div.appendChild(contenedorBotones);
        }
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function construirDetalles() {
        let detalles = `Servicio: ${datosCliente.servicio}\n`;
        for (let key in respuestas) {
            detalles += `${key}: ${respuestas[key]}\n`;
        }
        return detalles;
    }

    function enviarEmails() {
        const detalles = construirDetalles();
        emailjs.send('presupuestos_ms', 'template_f6k59wp', {
            nombre: datosCliente.nombre,
            email: datosCliente.email,
            servicio: datosCliente.servicio,
            detalles: detalles,
            presupuesto: datosCliente.precio,
            fecha: new Date().toLocaleString()
        }).catch(e => console.error('Error email cliente:', e));

        emailjs.send('presupuestos_ms', 'template_o1jeusq', {
            nombre: datosCliente.nombre,
            email: datosCliente.email,
            telefono: datosCliente.telefono,
            poblacion: datosCliente.poblacion,
            servicio: datosCliente.servicio,
            detalles: detalles,
            presupuesto: datosCliente.precio,
            fecha: new Date().toLocaleString()
        }).catch(e => console.error('Error email admin:', e));
    }

    const categorias = ["🚰 Fontanería","⚡ Electricidad","🎨 Pintura","🧹 Limpieza","🌿 Jardinería","🏗️ Reformas","💻 Web y apps","🤖 Automatización IA","🏢 Comunidades","🏢 Empresas","📞 Hablar con asesor"];
    const categoriaMap = {
        "🚰 Fontanería": "fontaneria",
        "⚡ Electricidad": "electricidad",
        "🎨 Pintura": "pintura",
        "🧹 Limpieza": "limpieza",
        "🌿 Jardinería": "jardineria",
        "🏗️ Reformas": "reformas",
        "💻 Web y apps": "web",
        "🤖 Automatización IA": "ia",
        "🏢 Comunidades": "comunidades",
        "🏢 Empresas": "empresas"
    };

    function mensajeBienvenida() {
        agregarMensaje("👋 ¡Hola! Soy el asistente de Multiservicios Sagunto.\n\n🔧 ¿Qué categoría de servicio necesitas?", false, categorias);
        paso = 'seleccion_categoria';
    }

    async function procesarMensaje(mensaje) {
        if (!mensaje.trim()) return;
        agregarMensaje(mensaje, true);
        chatInput.value = '';

        if (paso === 'inicio') {
            mensajeBienvenida();
            return;
        }

        if (paso === 'seleccion_categoria') {
            if (mensaje === '📞 Hablar con asesor') {
                agregarMensaje("📞 Puedes llamarnos al 603 018 190 o escribirnos por WhatsApp. Estaremos encantados de atenderte.", false);
                paso = 'fin';
                return;
            }
            categoriaSeleccionada = categoriaMap[mensaje];
            const servicios = serviciosDB[categoriaSeleccionada];
            if (servicios && servicios.length > 0) {
                agregarMensaje(`✅ He encontrado estos servicios de ${mensaje}. ¿Cuál te interesa?`, false, servicios.map(s => s.nombre));
                paso = 'seleccion_servicio';
            }
            return;
        }

        if (paso === 'seleccion_servicio') {
            const servicios = serviciosDB[categoriaSeleccionada];
            servicioActual = servicios.find(s => s.nombre === mensaje);
            if (servicioActual) {
                datosCliente.servicio = servicioActual.nombre;
                datosCliente.precio   = servicioActual.precio;
                respuestas = {};
                if (servicioActual.preguntas && servicioActual.preguntas.length > 0) {
                    paso = 'pregunta_0';
                    agregarMensaje(servicioActual.preguntas[0].texto, false, servicioActual.preguntas[0].botones);
                } else {
                    agregarMensaje(`📋 *${servicioActual.nombre}*\n💰 Presupuesto orientativo: ${servicioActual.precio}\n✅ +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📧 ¿Quieres que te envíe este presupuesto por email?`, false, ["✅ Sí, enviar", "❌ No, gracias"]);
                    paso = 'preguntar_email';
                }
            }
            return;
        }

        if (paso.startsWith('pregunta_')) {
            const idx = parseInt(paso.split('_')[1]);
            respuestas[`respuesta_${idx}`] = mensaje;
            if (idx + 1 < servicioActual.preguntas.length) {
                paso = `pregunta_${idx + 1}`;
                agregarMensaje(servicioActual.preguntas[idx + 1].texto, false, servicioActual.preguntas[idx + 1].botones);
            } else {
                let resumen = `📋 *Resumen de tu solicitud*\n\n🔧 Servicio: ${servicioActual.nombre}\n💰 Presupuesto orientativo: ${servicioActual.precio}\n`;
                for (let i = 0; i < servicioActual.preguntas.length; i++) {
                    resumen += `${servicioActual.preguntas[i].texto} ${respuestas[`respuesta_${i}`]}\n`;
                }
                resumen += `✅ +20% para imprevistos.\n🔧 Visita: 30€ (descontable).\n\n📧 ¿Quieres que te envíe este presupuesto por email?`;
                agregarMensaje(resumen, false, ["✅ Sí, enviar", "❌ No, gracias"]);
                paso = 'preguntar_email';
            }
            return;
        }

        if (paso === 'preguntar_email') {
            if (mensaje === '❌ No, gracias') {
                agregarMensaje("✅ Gracias. Si cambias de opinión, aquí estamos. ¡Hasta pronto! 💙", false);
                paso = 'fin';
                return;
            }
            agregarMensaje("📝 Dime tu *nombre completo*:", false);
            paso = 'pedir_nombre';
            return;
        }

        if (paso === 'pedir_nombre') {
            datosCliente.nombre = mensaje;
            agregarMensaje("📍 ¿En qué *población* vives?", false);
            paso = 'pedir_poblacion';
            return;
        }

        if (paso === 'pedir_poblacion') {
            datosCliente.poblacion = mensaje;
            agregarMensaje("📱 ¿Cuál es tu *número de teléfono*?", false);
            paso = 'pedir_telefono';
            return;
        }

        if (paso === 'pedir_telefono') {
            datosCliente.telefono = mensaje;
            agregarMensaje("📧 ¿Y tu *correo electrónico*?", false);
            paso = 'pedir_email';
            return;
        }

        if (paso === 'pedir_email') {
            datosCliente.email = mensaje;
            agregarMensaje("📧 Enviando presupuesto...", false);
            enviarEmails();
            agregarMensaje("✅ *¡Presupuesto enviado!* Te hemos enviado los detalles a tu email.\n\nEn breve nos pondremos en contacto contigo por WhatsApp.\n\n¡Gracias por confiar en nosotros! 💙", false);
            paso = 'fin';
            return;
        }
    }

    // ============================================
    // EVENTOS
    // ============================================
    chatbotBtn.onclick = () => {
        chatbotWin.classList.toggle('active');
        if (paso === 'inicio') {
            setTimeout(mensajeBienvenida, 300);
        }
    };

    chatbotCerrar.onclick = () => chatbotWin.classList.remove('active');
    chatSend.onclick      = () => procesarMensaje(chatInput.value);
    chatInput.onkeypress  = (e) => { if (e.key === 'Enter') procesarMensaje(chatInput.value); };

})();
