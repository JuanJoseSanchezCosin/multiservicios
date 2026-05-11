// ============================================
// CHATBOT - MULTISERVICIOS SAGUNTO
// ============================================

(function() {

    // Esperar a que EmailJS esté cargado
    window.addEventListener('load', function() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init('gcidZqK4tE_i-PfBW');
        }
    });

    // ============================================
    // BASE DE DATOS DE SERVICIOS (6 servicios reales)
    // ============================================
    const serviciosDB = {
        fontaneria: [
            { nombre: "Reparar grifo que gotea", precio: "45-75€", preguntas: [
                { texto: "¿Pierde mucha agua?", botones: ["Sí", "No"] },
                { texto: "¿Crees que habría que cambiar el grifo?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar grifo completo", precio: "55-95€", preguntas: [
                { texto: "¿Alguna marca o calidad en especial?", botones: ["Básica", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar cartucho de grifo monomando", precio: "45-65€", preguntas: [
                { texto: "¿Sabes la marca del grifo?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Desatasco de tuberías", precio: "55-110€", preguntas: [
                { texto: "¿De qué parte de la casa?", botones: ["Cocina", "Baño", "Fregadero", "Inodoro"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar cisterna que no para de correr", precio: "55-95€", preguntas: [
                { texto: "¿La cisterna no para de correr o hace ruido?", botones: ["No para de correr", "Hace ruido"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar cisterna completa", precio: "140-240€", preguntas: [
                { texto: "¿Alguna calidad en especial?", botones: ["Básica", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar fuga de agua localizada", precio: "75-140€", preguntas: [
                { texto: "¿Dónde está la fuga?", botones: ["Baño", "Cocina", "Terraza", "Patio"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar latiguillos", precio: "45-75€", preguntas: [
                { texto: "¿De qué electrodoméstico?", botones: ["Lavadora", "Lavavajillas", "Inodoro"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar válvula de paso", precio: "65-110€", preguntas: [
                { texto: "¿Dónde está la válvula?", botones: ["General de la casa", "Baño", "Cocina"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalar lavavajillas o lavadora", precio: "75-140€", preguntas: [
                { texto: "¿Qué electrodoméstico?", botones: ["Lavadora", "Lavavajillas"] },
                { texto: "¿Tienes ya el electrodoméstico?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Avería compleja (rotura tubería empotrada)", precio: "200-500€", preguntas: [
                { texto: "¿Dónde está la rotura?", botones: ["Baño", "Cocina", "Pasillo"] },
                { texto: "¿Se ve humedad en la pared?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
        ],
        electricidad: [
            { nombre: "Cambiar enchufe o interruptor", precio: "35-65€", preguntas: [
                { texto: "¿Alguna marca o tipo especial?", botones: ["Normal", "Domótico"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar avería en cuadro eléctrico", precio: "50-110€", preguntas: [
                { texto: "¿Qué avería?", botones: ["Salta el diferencial", "Salta un plomo", "No salta nada"] },
                { texto: "¿Puedes rearmarlo?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalar punto de luz nuevo", precio: "70-140€", preguntas: [
                { texto: "¿Cuántos puntos de luz?", botones: ["1", "2", "3", "Más"] },
                { texto: "¿Los techos son de pladur?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambiar mecanismos completos", precio: "35-75€", preguntas: [
                { texto: "¿Cuántos mecanismos?", botones: ["1", "2", "3", "Más"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar avería general (saltan plomos)", precio: "50-160€", preguntas: [
                { texto: "¿Saltan al encender algo en concreto?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambio de cableado (por metro)", precio: "12-25€/m", preguntas: [
                { texto: "¿Cuántos metros aproximadamente?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Instalar punto recarga coche eléctrico", precio: "280-650€", preguntas: [
                { texto: "¿Tienes el cuadro eléctrico cerca?", botones: ["Sí", "No"] },
                { texto: "¿Cuántos metros aproximadamente?", botones: null },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
        ],
        pintura: [
            { nombre: "Pintar paredes lisas (por m²)", precio: "10-16€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay que reparar grietas?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar techo (por m²)", precio: "14-20€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay humedades?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar piso completo 80m²", precio: "1100-1700€", preguntas: [
                { texto: "¿Hay que reparar paredes?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar piso completo 100m²", precio: "1400-2100€", preguntas: [
                { texto: "¿Hay que reparar paredes?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Alisar paredes (eliminar gotelé)", precio: "18-28€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿El gotelé es muy grueso?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar una habitación (20m²)", precio: "220-380€", preguntas: [
                { texto: "¿Hay que reparar paredes?", botones: ["Sí", "No"] },
                { texto: "¿Calidad de pintura?", botones: ["Estándar", "Media", "Alta"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pintar fachada o exterior", precio: "16-28€/m²", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay andamios necesarios?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
        ],
        limpieza: [
            { nombre: "Limpieza de hogar (3-4 horas)", precio: "55-110€", preguntas: [
                { texto: "¿Cuántas habitaciones?", botones: ["1-2", "3-4", "5+"] },
                { texto: "¿Cuántos baños?", botones: ["1", "2", "3+"] },
                { texto: "¿Es puntual o recurrente?", botones: ["Puntual", "Semanal", "Quincenal"] }
            ]},
            { nombre: "Limpieza de oficina (50m²)", precio: "75-140€", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Número de puestos?", botones: ["1-5", "6-10", "11+"] },
                { texto: "¿Con qué frecuencia?", botones: ["Diaria", "Semanal", "Quincenal"] }
            ]},
            { nombre: "Limpieza de final de obra", precio: "100-250€", preguntas: [
                { texto: "¿Cuántos metros cuadrados?", botones: null },
                { texto: "¿Hay mucho polvo o escombros?", botones: ["Mucho polvo", "Polvo y escombros"] }
            ]},
            { nombre: "Limpieza de cristales", precio: "45-110€", preguntas: [
                { texto: "¿Cuántas ventanas?", botones: ["1-5", "6-10", "11+"] },
                { texto: "¿Altura?", botones: ["Baja", "Media", "Alta"] }
            ]}
        ],
        cerrajeria: [
            { nombre: "Apertura de puerta", precio: "70-140€", preguntas: [
                { texto: "¿Es la puerta principal?", botones: ["Sí", "No"] },
                { texto: "¿Tienes las llaves dentro?", botones: ["Sí, dentro", "Las he perdido"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambio de bombín", precio: "55-100€", preguntas: [
                { texto: "¿Es puerta blindada?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cambio de cerradura", precio: "90-170€", preguntas: [
                { texto: "¿Es puerta blindada?", botones: ["Sí", "No"] },
                { texto: "¿Alguna marca en especial?", botones: ["Básica", "De seguridad"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Cerradura de seguridad", precio: "140-300€", preguntas: [
                { texto: "¿Es puerta blindada?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
        ],
        mantenimiento: [
            { nombre: "Montaje de muebles", precio: "35-60€/hora", preguntas: [
                { texto: "¿Cuántas horas estimas?", botones: ["1-2h", "2-4h", "4h+"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Reparar persiana", precio: "45-90€", preguntas: [
                { texto: "¿Es persiana enrollable?", botones: ["Sí", "No"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Pequeña reparación de albañilería", precio: "50-120€", preguntas: [
                { texto: "¿Qué tipo de reparación?", botones: ["Grieta", "Azulejo suelto", "Agujero en pared", "Otro"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]},
            { nombre: "Manitas (varias tareas)", precio: "35-55€/hora", preguntas: [
                { texto: "¿Cuántas horas necesitas?", botones: ["1-2h", "Media jornada (4h)", "Jornada (8h)"] },
                { texto: "¿Es urgente?", botones: ["Sí, urgente", "No, puede esperar"] }
            ]}
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

    // Categorías del chatbot (solo 6 servicios reales + hablar conmigo)
    const categorias = [
        "🔧 Fontanería",
        "⚡ Electricidad",
        "🎨 Pintura",
        "🧹 Limpieza",
        "🔑 Cerrajería",
        "🔨 Mantenimiento",
        "📞 Hablar conmigo"
    ];

    const categoriaMap = {
        "🔧 Fontanería": "fontaneria",
        "⚡ Electricidad": "electricidad",
        "🎨 Pintura": "pintura",
        "🧹 Limpieza": "limpieza",
        "🔑 Cerrajería": "cerrajeria",
        "🔨 Mantenimiento": "mantenimiento"
    };

    function mensajeBienvenida() {
        agregarMensaje("👋 ¡Hola! Soy el asistente de Multiservicios Sagunto.\n\nTe ayudo a calcular el presupuesto de tu reparación. ¿Qué servicio necesitas?", false, categorias);
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
            if (mensaje === '📞 Hablar conmigo') {
                agregarMensaje("📞 Puedes llamarme al 603 018 190 o escribirme por WhatsApp. Estaré encantado de atenderte.", false);
                paso = 'fin';
                return;
            }
            categoriaSeleccionada = categoriaMap[mensaje];
            const servicios = serviciosDB[categoriaSeleccionada];
            if (servicios && servicios.length > 0) {
                agregarMensaje(`✅ He encontrado estos servicios de ${mensaje.toLowerCase()}. ¿Cuál te interesa?`, false, servicios.map(s => s.nombre));
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
                    agregarMensaje(`📋 *${servicioActual.nombre}*\n💰 Presupuesto orientativo: ${servicioActual.precio}\n\n📧 ¿Quieres que te envíe este presupuesto por email?`, false, ["✅ Sí, enviar", "❌ No, gracias"]);
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
                    resumen += `${servicioActual.preguntas[i].texto}: ${respuestas[`respuesta_${i}`]}\n`;
                }
                resumen += `\n📧 ¿Quieres que te envíe este presupuesto por email?`;
                agregarMensaje(resumen, false, ["✅ Sí, enviar", "❌ No, gracias"]);
                paso = 'preguntar_email';
            }
            return;
        }

        if (paso === 'preguntar_email') {
            if (mensaje === '❌ No, gracias') {
                agregarMensaje("✅ Gracias por tu consulta. Si cambias de opinión, aquí estoy. ¡Hasta pronto! 💙", false);
                paso = 'fin';
                return;
            }
            agregarMensaje("📝 Dime tu *nombre completo*:", false);
            paso = 'pedir_nombre';
            return;
        }

        if (paso === 'pedir_nombre') {
            datosCliente.nombre = mensaje;
            agregarMensaje("📍 ¿En qué *población* vives? (Sagunto, Puerto, Canet, Faura...)", false);
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
            agregarMensaje("✅ *¡Presupuesto enviado!* Te he enviado los detalles a tu email.\n\nEn breve me pondré en contacto contigo por WhatsApp.\n\n¡Gracias por confiar en Multiservicios Sagunto! 💙", false);
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