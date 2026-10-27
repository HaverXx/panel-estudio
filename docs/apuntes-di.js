// Apuntes de «Desarrollo de interfaces» (2º DAM, cuenta de Julen). Curso 2025-26. Profesor: Luis J. Salmerón Contreras.
// Fuentes: U0 (presentación del módulo), UT1 (usabilidad y accesibilidad), UT2 (diseño visual y prototipado),
<<<<<<< HEAD
// UT3 (color, tipografía y mensajes), enunciados de las tareas y tests de Aules.
=======
// UT3 (color, tipografía y mensajes, más la transcripción de la clase de UT3), enunciados de las tareas y tests de Aules.
>>>>>>> 635a20b (Clase de interfaces)
// Para añadir otra unidad: nuevo objeto en `semanas`, sus ejercicios en `ejercicios` y sus temas en `temas`.
// Las fechas de U3 son una estimación (Aules aún no las publica): ajústalas cuando salgan.
const DI_APUNTES = {
  profesor: "Luis J. Salmerón Contreras",
  semanas: [
    { n: "U0", ini: "2026-09-07", fin: "2026-09-27", titulo: "Unidad 0 · Presentación del módulo y puesta a punto",
      temas: ["u0_pres", "u0_eval"], ejercicios: [] },
    { n: "U1", ini: "2026-09-28", fin: "2026-10-11", titulo: "UT1 · Introducción a la usabilidad y accesibilidad",
      temas: ["u1_repaso", "u1_usab", "u1_niel", "u1_wcag", "u1_eval", "u1_act"],
      ejercicios: ["Actividad UT1", "Ejercicio WAVE", "Test UT1"] },
    { n: "U2", ini: "2026-10-12", fin: "2026-11-01", titulo: "UT2 · Diseño visual y prototipado",
      temas: ["u2_repaso", "u2_figma", "u2_wire", "u2_mock", "u2_flujo", "u2_ctrl", "u2_rest", "u2_replica"],
      ejercicios: ["Replicar wireframe", "Wireframe restaurante", "Test UT2"] },
    { n: "U3", ini: "2026-11-02", fin: "2026-11-22", titulo: "UT3 · Aspectos visuales: color, tipografía y mensajes",
<<<<<<< HEAD
      temas: ["u3_repaso", "u3_prin", "u3_estet", "u3_color", "u3_tipo", "u3_msg"],
=======
      temas: ["u3_repaso", "u3_ruta", "u3_prin", "u3_clase", "u3_estet", "u3_color", "u3_tipo", "u3_msg"],
>>>>>>> 635a20b (Clase de interfaces)
      ejercicios: [] },
  ],
  ejercicios: {
    "Actividad UT1": ["Actividad · Experiencia de interfaz de usuario (userinyerface.com)", "PDF «Apellidos_Nombre_Usabilidad.pdf»: explica tu experiencia con el formulario, agrupa los errores de usabilidad en categorías con ejemplos visuales y propón una mejora para cada uno. Entregada."],
    "Ejercicio WAVE": ["Ejercicio · Evaluación de accesibilidad con WAVE/Lighthouse", "PDF «Apellido_Nombre_Accesibilidad.pdf»: URL evaluada, nº de errores/alertas/características (con captura), ≥3 errores con su corrección, partes accesibles vs. no accesibles y análisis de contraste con Contrast Checker (captura). Entregado."],
    "Test UT1": ["Test UT1", "Cuestionario con contraseña, 1 intento, 45 min, nota para aprobar 5/10. Hecho: 8,64/10."],
    "Replicar wireframe": ["Actividad · Replicar wireframe", "Replica en Figma 3–5 pantallas de una GUI real y entrega un PDF «Apellido_Nombre_ReplicaWireframe.pdf» con datos de la interfaz, capturas originales, wireframe, panel de capas, flujo de usuario, descripción y comentario de repeticiones. Entregada."],
    "Wireframe restaurante": ["Ejercicio · Wireframe app de restaurante", "Wireframe de baja fidelidad de 8 pantallas en Figma (carpeta compartida con tu nombre). Vence el viernes 30/10/2026 a las 12:00; hay que confirmar el envío y modificar después penaliza un -50 %."],
    "Test UT2": ["Test UT2", "Cuestionario con contraseña, 1 intento, 20 min, nota para aprobar 5/10. Hecho: 7,33/10."],
  },
  temas: {

    // ───────────────────────── U0 ─────────────────────────
    u0_pres: { t: "Presentación del módulo Desarrollo de interfaces", resumen: "Qué se estudia, contenidos por semanas, horario, metodología y contacto.",
      html: `
<h4>Datos generales</h4>
<ul><li><b>Módulo:</b> Desarrollo de interfaces · <b>2º DAM</b> · curso 2025/2026 · <b>Profesor:</b> Luis J. Salmerón Contreras.</li>
<li><b>Carga:</b> 5 horas semanales (lunes 19:00–20:50, miércoles 19:00–20:50 y jueves 16:50–17:45).</li>
<li><b>Contacto:</b> principalmente por email (<code>lj.salmeroncontrer@edu.gva.es</code>).</li>
<li><b>Enfoque:</b> diseñar y crear interfaces de usuario intuitivas y efectivas para aplicaciones multiplataforma, combinando principios de diseño gráfico con técnicas de programación (interfaces atractivas, accesibles y usables) y elaborando también informes, documentación y manuales.</li></ul>
<h4>Objetivos del módulo</h4>
<ul><li>Generar interfaces gráficas con <b>editores visuales</b>, aprovechando el editor y adaptando el código generado.</li>
<li>Generar <b>interfaces naturales</b> de usuario con herramientas visuales.</li>
<li>Crear <b>componentes visuales</b> con herramientas específicas.</li>
<li>Diseñar interfaces aplicando criterios de <b>usabilidad y accesibilidad</b> (RA4, es el que trabajan UT1–UT3).</li>
<li>Crear <b>informes</b> con herramientas gráficas y <b>documentar</b> aplicaciones.</li>
<li>Preparar aplicaciones para su <b>distribución</b>.</li>
<li>Evaluar el funcionamiento diseñando y ejecutando <b>pruebas</b>.</li></ul>
<h4>Contenidos y temporalización</h4>
<table><tr><th>Bloque</th><th>Duración</th></tr>
<tr><td>1. Presentación del módulo y herramientas de trabajo</td><td>1 semana</td></tr>
<tr><td>2. Introducción al desarrollo de interfaces</td><td>1 semana</td></tr>
<tr><td>3. Fundamentos de usabilidad y accesibilidad</td><td>1 semana</td></tr>
<tr><td>4. Plataformas y SO disponibles para el desarrollo</td><td>1 semana</td></tr>
<tr><td>5. Desarrollo nativo vs. multiplataforma</td><td>1 semana</td></tr>
<tr><td>6. Desarrollo nativo: herramientas</td><td>1 semana</td></tr>
<tr><td><b>7. Desarrollo de interfaces con Qt</b></td><td><b>4 semanas</b></td></tr>
<tr><td><b>8. Desarrollo de interfaces con Flutter</b></td><td><b>4 semanas</b></td></tr>
<tr><td>9. Generación de informes</td><td>1 semana</td></tr>
<tr><td>10. Documentación de aplicaciones</td><td>2 semanas</td></tr>
<tr><td>11. Realización de pruebas</td><td>2 semanas</td></tr>
<tr><td>12. Distribución de aplicaciones</td><td>1 semana</td></tr></table>
<p>Qt y Flutter son los bloques más largos (4 semanas cada uno): ahí está el grueso de la parte de programación.</p>
<h4>Metodología</h4>
<ul><li>Apuntes y materiales creados por el profesor, videotutoriales, recursos y cursos de Internet y <b>tutorías semanales</b> en el instituto.</li></ul>`},

    u0_eval: { t: "Evaluación del módulo y puesta a punto en Aules", resumen: "Cómo se aprueba, herramientas del curso (Figma) y estructura de Aules.",
      html: `
<h4>Cómo se supera el módulo</h4>
<ul><li>Hay que <b>entregar todas las prácticas</b> y <b>superar los exámenes</b> (las dos condiciones a la vez).</li>
<li>Nota de cada evaluación = <b>% prácticas + % examen</b>, y nota final = media ponderada de 1ª y 2ª evaluación (los porcentajes exactos no figuran en la presentación: «xx %»).</li></ul>
${warn("Las prácticas con plazo penalizan: en el wireframe del restaurante, modificar la entrega después de la fecha límite resta un 50 %. Confirma siempre el envío en Aules.")}
<h4>Estructura del curso en Aules (Desarrollo d'Interfícies · 2CFSO)</h4>
<ul><li><b>General:</b> anuncios (foro), presentación del módulo, «puesta a punto», <b>certificado propio de Figma</b> (URL) y <b>grupo de Figma</b> (URL).</li>
<li><b>UT1</b> usabilidad y accesibilidad · <b>UT2</b> diseño visual y prototipado · <b>UT3</b> aspectos visuales (color, tipografía y mensajes).</li>
<li>Cada unidad tiene su PDF de teoría, tareas con fecha de apertura/cierre y un <b>test con contraseña</b> (1 intento, tiempo limitado, aprobado con 5/10).</li></ul>
<h4>Calendario de entregas y tests conocido</h4>
<table><tr><th>Actividad</th><th>Apertura</th><th>Cierre</th></tr>
<tr><td>Experiencia de interfaz de usuario (UT1)</td><td>lun 28/09 19:00</td><td>mar 29/09 12:00 (prórroga hasta mié 30/09 23:00)</td></tr>
<tr><td>Evaluación de accesibilidad WAVE/Lighthouse (UT1)</td><td>jue 01/10 16:50</td><td>jue 08/10 12:00</td></tr>
<tr><td>Test UT1 (45 min)</td><td>mié 07/10 20:00</td><td>mié 07/10 20:50</td></tr>
<tr><td>Replicar wireframe (UT2)</td><td>jue 15/10 16:50</td><td>vie 23/10 12:00</td></tr>
<tr><td>Test UT2 (20 min)</td><td>mié 21/10 19:00</td><td>mié 21/10 20:00</td></tr>
<tr><td><b>Wireframe app de restaurante (UT2)</b></td><td>jue 22/10 16:55</td><td><b>vie 30/10 12:00</b></td></tr></table>
<h4>Herramienta principal: Figma</h4>
<p>Se usa la cuenta gratuita para educación (verificación de estudiante), con diseño colaborativo en una <b>carpeta compartida del curso</b>. Los recursos de la unidad (Google Fonts/Material Symbols, ejemplos de flujos y wireframes de la comunidad de Figma, vídeos de prototipado y scroll vertical/horizontal) están en la página «Enlaces de recursos para Figma» de Aules.</p>`},

    // ───────────────────────── U1 ─────────────────────────
    u1_repaso: { t: "⭐ Resumen exprés UT1 para el examen", resumen: "Lo esencial de usabilidad y accesibilidad en una página.",
      html: `
<h4>Lo que más cae</h4>
<ul><li><b>Usabilidad</b> = calidad de la experiencia al usar un sistema. Tres factores: <b>eficacia</b> (completar tareas con precisión y completitud), <b>eficiencia</b> (recursos: tiempo, esfuerzo) y <b>satisfacción</b> (agrado y comodidad).</li>
<li><b>Las 10 heurísticas de Nielsen</b> (hay que saberlas de memoria, ver tema siguiente).</li>
<li><b>WCAG</b> = Pautas de Accesibilidad para el Contenido Web, del <b>W3C</b>. Cuatro principios <b>POUR</b>: Perceptible, Operable, Comprensible, Robusto.</li>
<li><b>Niveles:</b> A (mínimo) · <b>AA (recomendado, estándar en sitios públicos y gubernamentales)</b> · AAA (óptimo, difícil en todos los contextos).</li>
<li><b>Versiones:</b> 1.0 (1999, obsoleta) · 2.0 (2008, introduce POUR) · 2.1 (2018, móviles y discapacidad cognitiva) · 2.2 (2023, teclado y controles táctiles) · 3.0 (borrador).</li>
<li><b>Contraste mínimo AA:</b> 4,5:1 texto normal y 3:1 texto grande. Negro sobre blanco = 21:1.</li>
<li><b>Herramientas:</b> WAVE (extensión que marca errores sobre la página), Lighthouse (auditoría en Chrome DevTools, índice 0–100), Contrast Checker de WebAIM.</li></ul>
<h4>Criterios de evaluación de la unidad (RA4, 10 % cada uno)</h4>
<ul><li><b>a)</b> Identificar los principales estándares de usabilidad y accesibilidad.</li>
<li><b>b)</b> Valorar la importancia de usar estándares para crear interfaces.</li>
<li><b>i)</b> Realizar pruebas para evaluar la usabilidad y accesibilidad de la aplicación.</li></ul>
${tip("Pregunta típica: «¿qué principio WCAG incumple…?». Imágenes sin texto alternativo → Perceptible; menú que solo funciona con ratón → Operable; jerga técnica o animaciones parpadeantes → Comprensible; no funciona con lector de pantalla → Robusto.")}`},

    u1_usab: { t: "Principios de usabilidad", resumen: "Definición de usabilidad, sus tres factores y qué es una interfaz usable.",
      html: `
<h4>¿Qué es la usabilidad?</h4>
<p>La <b>usabilidad</b> es una medida de la calidad de la experiencia del usuario cuando interactúa con un sistema, sitio web, aplicación o producto. Se define principalmente por tres factores:</p>
<table><tr><th>Factor</th><th>Significado</th><th>Pregunta que responde</th></tr>
<tr><td><b>Eficacia</b></td><td>Grado en que los usuarios pueden completar tareas específicas con precisión y completitud.</td><td>¿Consigue hacerlo?</td></tr>
<tr><td><b>Eficiencia</b></td><td>Cantidad de recursos (tiempo, esfuerzo) empleados para lograr esas tareas.</td><td>¿Cuánto le cuesta?</td></tr>
<tr><td><b>Satisfacción</b></td><td>Qué tan agradable o cómodo resulta el sistema para los usuarios.</td><td>¿Le gusta usarlo?</td></tr></table>
<p>Una interfaz usable permite a los usuarios <b>lograr sus objetivos de manera rápida, sin frustraciones y con una curva de aprendizaje mínima</b>.</p>
<h4>Buen diseño vs. mal diseño</h4>
<p>En clase se compara «The World's Worst Website Ever» (colores chillones, imágenes rotas, sin jerarquía, menús caóticos) con la portada de Airbnb (rejilla ordenada de tarjetas, buscador claro, jerarquía visual, espacio en blanco). La diferencia está en jerarquía, consistencia y minimalismo, no en el presupuesto.</p>
<h4>Relación con el resto de la unidad</h4>
<ul><li><b>Usabilidad</b> = que sea fácil y agradable de usar para el público general (Nielsen).</li>
<li><b>Accesibilidad</b> = que pueda usarla <i>cualquier</i> persona, incluidas las que tienen discapacidades (WCAG).</li>
<li>Se evalúan con pruebas: heurísticas (Nielsen) y herramientas automáticas + pruebas manuales (WAVE, Lighthouse, teclado).</li></ul>`},

    u1_niel: { t: "Las 10 heurísticas de usabilidad de Nielsen", resumen: "Los «10 mandamientos» del diseño UX/UI con ejemplos para recordarlos.",
      html: `
<p><b>Jakob Nielsen</b>, ingeniero danés doctorado en interacción persona-ordenador, conocido por el diseño centrado en el usuario. Sus 10 heurísticas son los «mandamientos» del diseño UX (<i>User Experience</i>) y UI (<i>User Interface</i>).</p>
<table><tr><th>#</th><th>Principio</th><th>Qué exige</th><th>Ejemplo típico</th></tr>
<tr><td>1</td><td><b>Visibilidad del estado del sistema</b></td><td>Informar de lo que ocurre con retroalimentación inmediata.</td><td>Barra de progreso, «Guardando…», spinner.</td></tr>
<tr><td>2</td><td><b>Correspondencia entre el sistema y el mundo real</b></td><td>Lenguaje claro y familiar para el usuario.</td><td>Icono de papelera para borrar; «Carrito» en vez de «Lista de ítems».</td></tr>
<tr><td>3</td><td><b>Control y libertad del usuario</b></td><td>Permitir deshacer y rehacer fácilmente.</td><td>Botón «Deshacer», «Cancelar», salida de emergencia.</td></tr>
<tr><td>4</td><td><b>Consistencia y estándares</b></td><td>Términos y acciones uniformes en toda la interfaz.</td><td>No alternar «Iniciar sesión» y «Acceder».</td></tr>
<tr><td>5</td><td><b>Prevención de errores</b></td><td>Diseñar para evitar errores antes de que ocurran.</td><td>Confirmación antes de borrar; selector de fecha en vez de texto libre.</td></tr>
<tr><td>6</td><td><b>Reconocimiento mejor que recuerdo</b></td><td>Mostrar lo relevante para que el usuario no tenga que memorizar.</td><td>Menús visibles, historial reciente, autocompletado.</td></tr>
<tr><td>7</td><td><b>Flexibilidad y eficiencia de uso</b></td><td>Atajos para expertos sin estorbar a los principiantes.</td><td>Atajos de teclado, acciones rápidas.</td></tr>
<tr><td>8</td><td><b>Diseño estético y minimalista</b></td><td>Mostrar solo lo esencial, sin sobrecargar.</td><td>Pantalla con pocos elementos y mucho espacio en blanco.</td></tr>
<tr><td>9</td><td><b>Ayuda a reconocer, diagnosticar y corregir errores</b></td><td>Mensajes de error claros que indiquen cómo resolver el problema.</td><td>«La contraseña debe tener 8 caracteres» en vez de «Error 500».</td></tr>
<tr><td>10</td><td><b>Ayuda y documentación</b></td><td>Ayuda accesible aunque el sistema sea fácil de usar.</td><td>FAQ, tutorial inicial, tooltips.</td></tr></table>
${tip("Truco para memorizarlas: estado (1) · mundo real (2) · control (3) · consistencia (4) · prevenir (5) · reconocer (6) · flexibilidad (7) · minimalismo (8) · errores claros (9) · ayuda (10). El número 4 reaparece en UT2 y UT3 como «consistencia».")}
<p>Referencia oficial: <code>nngroup.com/articles/ten-usability-heuristics/</code>.</p>`},

    u1_wcag: { t: "Accesibilidad y pautas WCAG", resumen: "Qué son las WCAG, versiones, principios POUR, niveles A/AA/AAA y ejemplos.",
      html: `
<h4>¿Qué son las WCAG?</h4>
<p>Las <b>WCAG</b> (<i>Web Content Accessibility Guidelines</i>, «Pautas de Accesibilidad para el Contenido Web») son un conjunto de <b>normas internacionales del W3C</b> (World Wide Web Consortium). Su objetivo es garantizar que las <b>personas con discapacidad</b> puedan acceder, entender, navegar e interactuar con sitios web y aplicaciones digitales.</p>
<h4>Versiones</h4>
<table><tr><th>Versión</th><th>Año</th><th>Novedad clave</th></tr>
<tr><td>WCAG 1.0</td><td>1999</td><td>Enfoque inicial en HTML básico. <b>Obsoleta.</b></td></tr>
<tr><td>WCAG 2.0</td><td>2008</td><td>Introduce los 4 principios (POUR). Estándar muy adoptado.</td></tr>
<tr><td>WCAG 2.1</td><td>2018</td><td>Añade criterios para dispositivos móviles y discapacidades cognitivas.</td></tr>
<tr><td>WCAG 2.2</td><td>2023</td><td>Mejora la navegación con teclado y añade criterios para controles táctiles.</td></tr>
<tr><td>WCAG 3.0</td><td>Borrador</td><td>Más flexible y orientado a resultados; aún en desarrollo.</td></tr></table>
<h4>Los 4 principios (POUR)</h4>
<table><tr><th>Principio</th><th>Idea</th><th>Ejemplos</th></tr>
<tr><td><b>P</b>erceptible</td><td>No sirve si está ahí pero nadie puede verlo o escucharlo.</td><td>Texto alternativo en imágenes, subtítulos, buen contraste.</td></tr>
<tr><td><b>O</b>perable</td><td>No obligues a hacer clic con «precisión quirúrgica».</td><td>Navegación completa con teclado, foco visible, controles táctiles grandes.</td></tr>
<tr><td><b>C</b>omprensible</td><td>Sin jerga técnica, sin animaciones parpadeantes, sin acertijos.</td><td>Lenguaje claro, mensajes de error útiles, comportamiento predecible.</td></tr>
<tr><td><b>R</b>obusto</td><td>Debe funcionar con tecnologías de asistencia, no solo en tu navegador.</td><td>HTML semántico, atributos ARIA, compatible con lectores de pantalla.</td></tr></table>
<h4>Niveles de conformidad</h4>
<table><tr><th>Nivel</th><th>Descripción</th><th>Ejemplo</th></tr>
<tr><td><b>A</b> (mínimo)</td><td>Requisitos básicos de accesibilidad.</td><td>Evitar parpadeos que provoquen convulsiones.</td></tr>
<tr><td><b>AA</b> (recomendado)</td><td>Nivel estándar para sitios públicos y gubernamentales.</td><td>Contraste adecuado entre texto y fondo.</td></tr>
<tr><td><b>AAA</b> (óptimo)</td><td>Avanzado, difícil de lograr en todos los contextos.</td><td>Subtítulos para todo contenido multimedia en tiempo real.</td></tr></table>
<h4>Los tres ejemplos de clase</h4>
<ul><li><b>Contraste de color (criterio 1.4.3, AA):</b> texto negro #000000 sobre blanco #FFFFFF → <b>21:1</b>, cumple AA y AAA. Texto gris claro #AAAAAA sobre blanco → <b>≈2,5:1</b>, no cumple ni el nivel A (la diapositiva de UT3 también lo da como «no legible»).</li>
<li><b>Navegación con teclado (criterio 2.1.1):</b> bien = poder moverse con Tab entre enlaces, botones y formularios, con foco visible (borde azul o subrayado) y botones activables con Enter o Espacio. Mal = menús desplegables que solo funcionan con ratón o elementos interactivos sin foco donde el usuario queda «atrapado». Prueba rápida: navega un sitio sin ratón, ¿puedes acceder a todo?</li>
<li><b>Texto alternativo (criterio 1.1.1):</b> bien = <code>alt="Gráfico de barras que muestra ventas de enero a junio"</code>; mal = <code>alt="imagen"</code>.</li></ul>
${warn("Valores de contraste mínimos (los verás también en UT3): 4,5:1 para texto normal y 3:1 para texto grande. Si en el examen te dan #AAAAAA sobre blanco, la respuesta esperada es ≈2,5:1 (el cálculo exacto da ≈2,3:1; en ambos casos suspende).")}`},

    u1_eval: { t: "Evaluación de la accesibilidad y pruebas (WAVE, Lighthouse, Contrast Checker)", resumen: "Herramientas para evaluar accesibilidad, qué detecta cada una y cómo se usan.",
      html: `
<p>La evaluación de accesibilidad <b>no se limita a pruebas automatizadas</b>, pero estas herramientas son un excelente punto de partida (criterio i: «se han realizado pruebas para evaluar la usabilidad y accesibilidad»).</p>
<table><tr><th>Herramienta</th><th>Qué es</th><th>Qué detecta / devuelve</th><th>Cuándo usarla</th></tr>
<tr><td><b>WAVE</b> (Web Accessibility Evaluation Tool, de WebAIM)</td><td>Extensión para Chrome y Firefox que muestra errores, alertas y buenas prácticas <b>sobre la propia página</b> con iconos.</td><td>Falta de texto alternativo, contrastes insuficientes, estructura de encabezados incorrecta, enlaces vacíos o no descriptivos. Cuenta <b>errores, alertas y características</b>.</td><td>Revisión rápida y visual con explicaciones claras.</td></tr>
<tr><td><b>Lighthouse</b> (Chrome DevTools)</td><td>Auditoría automática integrada en Chrome (clic derecho → Inspeccionar → pestaña Lighthouse). También mide SEO, rendimiento y buenas prácticas.</td><td>Etiquetas semánticas (&lt;button&gt;, &lt;label&gt;), contraste, navegación con teclado, títulos, nombres accesibles y atributos ARIA. <b>Índice numérico 0–100</b> con recomendaciones.</td><td>Informe global con puntuación; permite elegir móvil o escritorio.</td></tr>
<tr><td><b>Contrast Checker</b> (WebAIM)</td><td>Calculadora de contraste entre color de texto y fondo.</td><td>Ratio y si cumple AA / AAA para texto normal y grande.</td><td>Comprobar la paleta antes de diseñar.</td></tr></table>
<h4>Cómo se aplicaría al ejercicio de la unidad</h4>
<ol><li>Elegir una web y anotar la <b>URL</b>.</li><li>Pasar WAVE y Lighthouse y hacer <b>captura</b> con los recuentos de errores/alertas/características y la puntuación.</li><li>Listar ≥3 errores, describirlos y explicar la corrección (p. ej. añadir <code>alt</code> descriptivo, subir el contraste a ≥4,5:1, vincular <code>&lt;label&gt;</code> con su campo, dar nombre a un enlace vacío).</li><li>Indicar qué partes son accesibles y cuáles no.</li><li>Comprobar el contraste de pares de colores con Contrast Checker (captura).</li></ol>
<h4>Más recursos de la unidad</h4>
<ul><li><b>WCAG QuickRef:</b> w3.org/WAI/WCAG21/quickref/ · <b>WebAIM:</b> webaim.org/intro/ · <b>Material Design – accesibilidad:</b> m3.material.io/foundations/accessibility · <b>Manual de accesibilidad web (Fundación ONCE)</b>, guía en español.</li></ul>`},

    u1_act: { t: "Tareas de la unidad: qué se pedía", resumen: "Enunciados resumidos de las dos entregas de UT1 y del test.",
      html: `
<h4>Actividad · Experiencia de interfaz de usuario</h4>
<ul><li>Probar el formulario de <b>userinyerface.com</b> (diseñado a propósito con malos patrones).</li>
<li>Explicar la experiencia como usuario, enumerar los <b>errores de usabilidad</b>, explicar por qué fue insatisfactorio, <b>agruparlos en categorías</b> con ejemplos visuales y proponer una mejora.</li>
<li>Archivo: <code>Apellidos_Nombre_Usabilidad.pdf</code>.</li>
<li>Categorías que encajan con las heurísticas: lenguaje confuso (2), controles inesperados e inconsistentes (4), falta de feedback (1), validaciones que hacen perder datos (5, 9), controles difíciles de cerrar o con trampas (3), distracciones/sobrecarga (8).</li></ul>
<h4>Ejercicio · Evaluación de accesibilidad con WAVE/Lighthouse</h4>
<ul><li>PDF legible, completo y bien organizado; nombre <code>Apellido_Nombre_Accesibilidad.pdf</code> (los mal nombrados no se corrigen hasta rectificar).</li>
<li>Contenido: URL, recuentos con captura, ≥3 errores con corrección, partes accesibles/no accesibles y análisis de contraste AA/AAA con Contrast Checker.</li></ul>
<h4>Test UT1</h4>
<ul><li>45 minutos, 1 intento, con contraseña, aprobado con 5/10. Cubre usabilidad (tres factores), heurísticas de Nielsen, WCAG (POUR, niveles, versiones, ejemplos) y herramientas de evaluación.</li></ul>`},

    // ───────────────────────── U2 ─────────────────────────
    u2_repaso: { t: "⭐ Resumen exprés UT2 para el examen", resumen: "Wireframe vs. mockup, Figma, flujos de usuario y controles en una página.",
      html: `
<h4>Lo que más cae</h4>
<table><tr><th>Concepto</th><th>Idea clave</th></tr>
<tr><td><b>Wireframe</b></td><td>Esquema visual de <b>bajo nivel</b>: estructura básica, <b>sin</b> colores, tipografías decorativas ni imágenes. Se centra en funcionalidad y jerarquía del contenido.</td></tr>
<tr><td><b>Mockup</b></td><td>Representación <b>más detallada y realista</b>: colores, fuentes, imágenes y componentes gráficos definitivos. Parte del wireframe pero sube el realismo.</td></tr>
<tr><td><b>Prototipo</b></td><td>Se añade la <b>interacción</b> (conexiones entre pantallas). En Figma, de baja y media fidelidad.</td></tr>
<tr><td><b>Flujo de usuario</b></td><td>Diagrama del camino que sigue la persona para lograr un objetivo: pantallas (frames) + decisiones + conexiones.</td></tr>
<tr><td><b>Coherencia</b></td><td>Unidad visual: estilos de texto, botones del mismo tamaño y forma, márgenes y alineaciones, color uniforme.</td></tr>
<tr><td><b>Consistencia</b></td><td>Comportamientos iguales: «volver» siempre en el mismo sitio, transiciones previsibles, menús/formularios iguales.</td></tr></table>
<ul><li><b>Buenas prácticas de wireframe:</b> colores neutros (gris, blanco, negro), simplicidad, tipografías genéricas (Roboto o Arial), priorizar jerarquía visual, <b>nombrar bien frames y elementos</b>.</li>
<li><b>¿Cuándo usar cada control?</b> Botones → acciones inmediatas (guardar, enviar) · Menús → navegación o selección de opciones múltiples · Inputs → cuando el usuario debe introducir o seleccionar información.</li>
<li><b>Chips</b> = piezas de información compactas (categorías, etiquetas, usuarios, selecciones), redondeadas y ligeramente interactivas. <b>ListView</b> = lista desplazable de elementos clicables (contactos, mensajes, resultados).</li></ul>
<h4>Criterios de evaluación de la unidad (RA4, 10 % cada uno)</h4>
<ul><li><b>c)</b> Diferentes tipos de menús con estructura y contenido según los estándares.</li>
<li><b>d)</b> Acciones distribuidas en menús, barras de herramientas, botones de comando… con un criterio coherente.</li>
<li><b>e)</b> Controles distribuidos adecuadamente en la interfaz. · <b>f)</b> Tipo de control más apropiado en cada caso.</li></ul>`},

    u2_figma: { t: "Figma: primeros pasos", resumen: "Qué es Figma, por qué se usa, registro educativo y funciones básicas.",
      html: `
<h4>¿Qué es y por qué usarlo?</h4>
<p>Herramienta de diseño de interfaces <b>basada en la web</b> para crear prototipos, wireframes y mockups y <b>colaborar en tiempo real</b>.</p>
<ul><li>Gratuita para estudiantes y uso básico (verificación en <i>Figma for Education</i>).</li>
<li>En la nube: no requiere instalación; funciona en Windows, macOS y Linux vía navegador.</li>
<li>Trabajo colaborativo en tiempo real y comentarios.</li>
<li>Comunidad activa con recursos, plantillas y plugins.</li></ul>
<h4>Interfaz de usuario</h4>
<p>Pantalla de inicio con <b>Recientes</b>, plantillas y herramientas, borradores, todos los proyectos, papelera y favoritos; arriba se elige el tipo de archivo (<b>Diseño</b>, FigJam, Diapositivas, Buzz…). Dentro de un archivo de diseño: <b>panel izquierdo</b> (páginas, capas y árbol de elementos), lienzo central y panel derecho de propiedades/prototipo.</p>
<h4>Funciones básicas</h4>
<ul><li>Herramientas de formas: rectángulo, línea, círculo…</li><li>Herramienta de texto.</li><li><b>Grupos y marcos (frames)</b>: cada pantalla es un frame.</li>
<li><b>Componentes reutilizables</b> (botón, input, card…): se edita el maestro y se actualizan todas las instancias.</li>
<li>Alineación y distribución, rejillas y reglas, comentarios colaborativos.</li></ul>
${tip("La entrega del restaurante puntúa la «reutilización de esquemas de forma óptima»: define componentes (botón, input, card, cabecera, barra de navegación) y usa instancias en lugar de copiar y pegar.")}
<h4>Prototipado y scroll (vídeos de Aules)</h4>
<ul><li>Para navegar entre pantallas: pestaña <b>Prototype</b> → arrastrar la conexión del elemento al frame destino y elegir disparador (<i>On click</i>) y animación.</li>
<li>Para <b>scroll</b>: el contenido debe ser más alto que el frame y el frame tener «Overflow: Vertical scrolling» (o horizontal); fijar cabecera/barra inferior con «Fix position when scrolling».</li>
<li>Los menús desplegables y modales se hacen con <b>Open overlay</b>.</li></ul>`},

    u2_wire: { t: "Diseño de wireframes: estructura primero", resumen: "Qué es un wireframe, objetivos, buenas prácticas y casos de uso.",
      html: `
<h4>Definición</h4>
<p>Los <b>wireframes</b> son esquemas visuales de bajo nivel que representan la <b>estructura básica de una interfaz</b>, sin detalles visuales (colores, tipografía, imágenes).</p>
<h4>Objetivos</h4>
<ul><li>Enfocarse en la <b>funcionalidad y jerarquía del contenido</b>.</li><li>Explorar la <b>disposición de los elementos</b> antes del diseño visual final.</li></ul>
<h4>Buenas prácticas</h4>
<ul><li>Usar <b>colores neutros</b> (gris, blanco, negro).</li><li><b>Mantener la simplicidad</b>.</li><li>Usar <b>tipografías genéricas</b> (Roboto o Arial).</li><li><b>Priorizar la jerarquía visual</b>.</li><li><b>Nombrar adecuadamente</b> los frames y elementos.</li></ul>
<h4>Casos de uso</h4>
<ul><li>Diseño inicial de aplicaciones móviles o web.</li><li>Presentación de flujos de navegación al cliente o al equipo.</li><li>Base de discusión entre diseñadores y desarrolladores.</li></ul>
<p><i>«Un buen diseño empieza con una estructura clara. Lo demás es maquillaje.»</i></p>
<h4>Convenciones habituales en baja fidelidad</h4>
<ul><li>Imagen = rectángulo gris con una <b>X</b> (placeholder). Texto = líneas o texto genérico. Botón = rectángulo con etiqueta; el principal más oscuro/relleno y el secundario solo con borde.</li>
<li>Anotar con texto cualquier funcionalidad que no se vea (p. ej. «al pulsar abre el detalle»).</li></ul>`},

    u2_mock: { t: "De wireframe a mockup", resumen: "Qué añade un mockup y para qué sirve.",
      html: `
<p>El <b>mockup</b> es una representación visual más detallada que incluye <b>colores, fuentes, imágenes y componentes gráficos definitivos</b>. Parte desde el wireframe, pero eleva el nivel de realismo (el ejemplo de clase compara un login en gris con placeholders con el mismo login en amarillo y gris oscuro, con iconos y avatar).</p>
<h4>Transición wireframe → mockup</h4>
<ul><li>Aplicar <b>paletas de color</b>.</li><li>Integrar <b>tipografías reales</b>.</li><li>Usar <b>imágenes y gráficos ilustrativos</b>.</li><li>Incluir <b>branding y logotipos</b>.</li></ul>
<h4>Objetivo del mockup</h4>
<ul><li>Validar la apariencia final del producto.</li><li>Presentar una visión realista al cliente.</li><li>Servir de guía para la implementación.</li></ul>
<table><tr><th></th><th>Wireframe</th><th>Mockup</th></tr>
<tr><td>Fidelidad</td><td>Baja</td><td>Media-alta</td></tr><tr><td>Color y tipografía</td><td>Neutros / genéricas</td><td>Paleta y fuentes definitivas</td></tr>
<tr><td>Imágenes</td><td>Placeholders</td><td>Reales o ilustrativas</td></tr><tr><td>Pregunta que responde</td><td>¿Está bien organizado?</td><td>¿Se ve como será?</td></tr></table>
<p>La mejora de aspecto (colores, tipografía, mensajes) se desarrolla en <b>UT3</b>; los estilos, iconografía y diseño responsive son el paso siguiente al wireframe.</p>`},

    u2_flujo: { t: "Flujos de usuario y coherencia", resumen: "Qué es un user flow, para qué sirve y la diferencia entre coherencia y consistencia.",
      html: `
<h4>¿Qué es un flujo de usuario?</h4>
<p>Un <b>flujo de usuario</b> (<i>user flow</i>) es un <b>diagrama visual</b> del camino que sigue una persona dentro de una interfaz para alcanzar un objetivo concreto (registrarse, pedir un plato, cerrar sesión). Se compone de:</p>
<ul><li><b>Pantallas o vistas</b> (frames).</li><li><b>Decisiones del usuario</b> (p. ej. elegir entre «Iniciar sesión» o «Registrarse»).</li><li><b>Conexiones</b> entre pantallas que indican navegación o interacción.</li></ul>
<p>En Figma se representa con <b>flechas, líneas o conexiones</b>, y puede prototiparse directamente o esquematizarse en modo wireframe.</p>
<h4>¿Por qué es importante?</h4>
<ul><li><b>Facilita la planificación:</b> ves la estructura completa antes de detallar y detectas rutas repetidas, bucles o pantallas innecesarias.</li>
<li><b>Mejora la UX:</b> camino lógico, predecible y fluido; ayuda a detectar obstáculos o decisiones mal planteadas.</li>
<li><b>Comunicación:</b> equipo, cliente y testers entienden el recorrido sin ambigüedades.</li></ul>
<h4>Coherencia vs. consistencia</h4>
<table><tr><th></th><th>Se refiere a…</th><th>Ejemplos</th></tr>
<tr><td><b>Coherencia</b> (unidad visual)</td><td>Que todas las pantallas del flujo parezcan del mismo producto.</td><td>Estilos de texto consistentes, botones del mismo tamaño y forma, márgenes y alineaciones similares, uso uniforme del color.</td></tr>
<tr><td><b>Consistencia</b> (comportamientos)</td><td>Que las cosas funcionen igual en todas partes.</td><td>El botón «volver» siempre en el mismo lugar, transiciones previsibles, menús y formularios que funcionan igual en distintas secciones.</td></tr></table>
<h4>¿Por qué importan?</h4>
<ul><li><b>Reducen la carga cognitiva</b>: no hay que reaprender la app en cada pantalla.</li><li><b>Confianza y profesionalismo</b>: una interfaz coherente transmite calidad.</li><li><b>Accesibilidad</b>: los elementos consistentes ayudan a personas con dificultades cognitivas o que usan navegación asistida.</li></ul>`},

    u2_ctrl: { t: "Controles y patrones UI comunes", resumen: "Botones, chips, menús, inputs y ListView: tipos, estados, buenas prácticas y cuándo usarlos.",
      html: `
<h4>Botones</h4>
<ul><li><b>Tipos:</b> primario, secundario y deshabilitado (en el ejemplo de clase: <i>Fill</i> relleno, <i>Outline</i> con borde y <i>Ghost</i> sin borde).</li>
<li><b>Estados:</b> normal (default), hover, activo, foco (focus) y deshabilitado (disabled).</li>
<li><b>Buenas prácticas:</b> contraste adecuado, texto claro y tamaño accesible. En wireframes hay que <b>identificar cuál es el botón principal</b>.</li></ul>
<h4>Chips</h4>
<p>Pieza de información <b>compacta</b>. Usos: mostrar <b>categorías o etiquetas</b>, representar <b>usuarios</b> (destinatarios de un correo), mostrar <b>selecciones</b> (filtros) y a veces incluyen un icono o una «X» para quitarlos. Características: <b>redondeados, compactos y ligeramente interactivos</b>. Ideales para los <b>filtros de categorías</b> del Home del restaurante.</p>
<h4>Menús</h4>
<ul><li><b>Menús de navegación</b> (top bar, sidebar, barra inferior con Explorar / Favoritos / Rutas / Mensajes / Perfil).</li><li><b>Menús desplegables</b> (dropdown) que aparecen sobre la pantalla con opciones.</li><li>Consistencia en iconos y estilo.</li></ul>
<h4>Inputs</h4>
<ul><li>Campos de texto, checkboxes, radio buttons, switches y selectores.</li><li>Incluir <b>etiquetas, texto de ayuda y validación de errores</b>.</li><li>Usabilidad: tamaño adecuado, separación entre elementos y accesibilidad.</li></ul>
<h4>ListView</h4>
<p>Lista <b>desplazable</b> de elementos uno debajo de otro. Se usa en contactos, mensajes y resultados de búsqueda. Características: <b>scroll infinito</b> y <b>elementos clicables</b>.</p>
<h4>¿Cuándo usar cada uno?</h4>
<table><tr><th>Control</th><th>Úsalo para…</th><th>Ejemplo en la app del restaurante</th></tr>
<tr><td><b>Botones</b></td><td>Acciones inmediatas (guardar, enviar).</td><td>«Iniciar sesión», «Registrarse».</td></tr>
<tr><td><b>Menús</b></td><td>Navegación o selección entre opciones múltiples.</td><td>Menú desplegable con Favoritos, Perfil y Cerrar sesión.</td></tr>
<tr><td><b>Inputs</b></td><td>Cuando el usuario debe ingresar o seleccionar información.</td><td>Correo, contraseña, fecha de nacimiento.</td></tr>
<tr><td><b>Chips</b></td><td>Filtrar o etiquetar.</td><td>Categorías: menú, entrantes, primeros, bebidas, postres.</td></tr>
<tr><td><b>ListView</b></td><td>Muchos elementos homogéneos en vertical.</td><td>Lista de platos y menús en Home.</td></tr>
<tr><td><b>Grid de cards</b></td><td>Comparar elementos visuales.</td><td>Favoritos.</td></tr></table>`},

    u2_rest: { t: "Ejercicio: Wireframe app de restaurante (enunciado y guía)", resumen: "Las 8 pantallas pedidas, qué se valora y cómo planificarlo en Figma.",
      html: `
<h4>Objetivo y contexto</h4>
<p>Diseñar el <b>wireframe de una app móvil de restaurante</b> (una cadena te contrata como diseñador/a UI/UX) centrado en la experiencia de usuario, la organización de la información y la navegación clara. La app permite registrarse, explorar la carta, ver platos en detalle y gestionar la cuenta.</p>
<p>Solo estructura y disposición: <b>sin estilos visuales avanzados</b> (colores, iconos, imágenes o tipografías decorativas). Se recomienda <b>definir los componentes en un marco aparte con su descripción</b>, hacer la <b>navegación</b> entre pantallas y colocar los elementos para un flujo coherente y consistente.</p>
<h4>Pantallas requeridas</h4>
<table><tr><th>#</th><th>Pantalla</th><th>Elementos obligatorios</th></tr>
<tr><td>1</td><td><b>Login</b></td><td>Logo del restaurante (placeholder) · inputs de correo y contraseña · botón «Iniciar sesión» · enlace «¿No tienes cuenta?, regístrate».</td></tr>
<tr><td>2</td><td><b>Registro</b></td><td>Nombre completo, email, fecha de nacimiento y contraseña <b>por duplicado</b> · botones «Registrarse» y «Atrás» (<b>identificando el principal</b>).</td></tr>
<tr><td>3</td><td><b>Inicio / Home</b></td><td>Bienvenida con nombre de usuario, logo, etc. · <b>filtros destacados</b> con las categorías genéricas de la carta (menú, entrantes, primeros, bebidas, postres…) · <b>ListView vertical</b> con celdas que muestren imagen del menú o plato, categoría (remarcada en el caso de menú), nombre y precio (<b>destacando el precio</b>).</td></tr>
<tr><td>4</td><td><b>Menú desplegable (dropdown)</b></td><td>Aparece <b>sobre la pantalla</b>; opciones de navegación y de <b>cerrar sesión</b>.</td></tr>
<tr><td>5</td><td><b>Menú (de comida)</b></td><td>Nombre y precio · secciones por categorías con los platos en forma de <b>cards con nombres</b> · opción de <b>añadir a favoritos</b>.</td></tr>
<tr><td>6</td><td><b>Detalle de plato</b></td><td>Descripción (imagen, precio, categoría, ingredientes, alérgenos, etc.) · opción de añadir a favoritos.</td></tr>
<tr><td>7</td><td><b>Favoritos</b></td><td><b>Grid</b> con los elementos favoritos: foto, nombre y categoría.</td></tr>
<tr><td>8</td><td><b>Perfil de usuario</b></td><td>Formulario con los datos del usuario.</td></tr></table>
<h4>Qué se valora</h4>
<ul><li>Adecuación del diseño a los requisitos pedidos.</li><li><b>Ubicación óptima y relativa</b> de los elementos.</li><li><b>Reutilización de esquemas de forma óptima</b> (componentes).</li><li><b>Navegación clara y fluida</b>.</li><li><b>Uso de elementos de scroll</b>.</li></ul>
<h4>Entrega</h4>
<ul><li>Crear un diseño nuevo <b>desde cero</b> en la carpeta compartida del curso con tu nombre.</li><li>Fecha límite: <b>viernes 30/10/2026, 12:00</b>. Hay que <b>confirmar el envío</b>; modificar después de la fecha penaliza un <b>-50 %</b>.</li></ul>
<h4>Plan de trabajo sugerido</h4>
<ol><li><b>Página «Componentes»</b>: botón primario/secundario, input (con etiqueta y texto de ayuda), chip de categoría, card de plato, celda de ListView, botón de favorito, cabecera con «volver» y menú.</li>
<li><b>Frames de 390×844</b> (móvil) con nombres claros: <code>01 Login</code>, <code>02 Registro</code>, <code>03 Home</code>, <code>04 Menu desplegable</code>, <code>05 Carta</code>, <code>06 Detalle plato</code>, <code>07 Favoritos</code>, <code>08 Perfil</code>.</li>
<li><b>Home y Carta con scroll vertical</b>; chips de categorías con scroll horizontal.</li>
<li><b>Prototipo / flujo:</b> Login ⇄ Registro → Home → (menú desplegable → Favoritos / Perfil / Cerrar sesión→Login) · Home → Detalle · Carta → Detalle · Detalle y Carta → Favoritos (añadir).</li>
<li>Revisar <b>consistencia</b>: «Atrás/volver» siempre en el mismo sitio, mismos tamaños de botón, mismos márgenes, mismo nombre para cada acción.</li></ol>
${tip("Cosas fáciles de olvidar: contraseña por duplicado en Registro, destacar el precio en las celdas del Home, remarcar la categoría solo en los menús, grid (no lista) en Favoritos, el dropdown como overlay sobre la pantalla y el botón de cerrar sesión.")}
${warn("En el enunciado, Home (3) pide ListView con menús y platos individuales, mientras que la pantalla «Menú (de comida)» (5) es la carta por categorías con cards. No las mezcles: son pantallas distintas con componentes distintos.")}`},

    u2_replica: { t: "Actividad: Replicar wireframe (qué se pedía)", resumen: "Requisitos del PDF de la actividad de replicar una interfaz real en Figma.",
      html: `
<ul><li>Reproducir la estructura de una GUI real (app móvil, de escritorio, web…): identificar <b>3 a 5 pantallas o estados</b>, obtener su esquema principal y representarlo en Figma.</li>
<li><b>Entrega:</b> PDF <code>Apellido_Nombre_ReplicaWireframe.pdf</code> con:
<ul><li>Datos identificativos de la interfaz (nombre del programa, app o sitio).</li><li>Capturas de pantalla de las interfaces originales.</li>
<li>Wireframe en Figma: elementos representados respecto a la captura, <b>anotaciones en texto</b> de funcionalidades, <b>panel izquierdo</b> de páginas/capas/árbol y <b>diagrama de flujo de usuario</b> entre pantallas (menús, botones…).</li>
<li>Descripción resumida de los elementos importantes, su disposición y cómo se desarrolla la navegación.</li>
<li>Indicar si hay <b>elementos o esquemas repetidos</b> y comentar detalles organizativos (en positivo y en negativo).</li></ul></li>
<li>Fecha límite: viernes 23/10/2026 12:00 (ya entregada).</li></ul>
<p>Este ejercicio entrena justo lo que luego se aplica en el restaurante: reconocer componentes repetidos (cabeceras, cards, listas) y modelarlos como componentes reutilizables.</p>
<h4>Test UT2</h4>
<p>20 minutos, 1 intento, con contraseña. Cubre Figma, wireframe vs. mockup, flujos de usuario, coherencia/consistencia y controles (botones, chips, menús, inputs, ListView) con su uso adecuado.</p>`},

    // ───────────────────────── U3 ─────────────────────────
    u3_repaso: { t: "⭐ Resumen exprés UT3 para el examen", resumen: "Principios visuales, color, tipografía y microtextos en una página.",
      html: `
<h4>Lo más importante</h4>
<ul><li><b>5 principios del diseño visual:</b> equilibrio, contraste, jerarquía, alineación y consistencia.</li>
<li><b>Efecto de usabilidad estética</b> (aesthetic-usability effect): los usuarios creen que lo más atractivo es más fácil de usar, aunque el rendimiento sea el mismo.</li>
<li><b>Paletas:</b> monocromática (un color base), análoga (colores vecinos) y complementaria (opuestos en el círculo cromático).</li>
<li><b>Tokens de color:</b> nombres semánticos (<code>color.primary</code>, <code>color.error</code>…) que dicen <i>para qué</i> sirve el color, no cuál es.</li>
<li><b>Tipografía:</b> serif / sans serif / monoespaciada; máximo <b>2 familias</b>; cuerpo de 16–18 px; misma escala en todas las pantallas.</li>
<li><b>Microtextos:</b> breves, claros, en voz activa, empáticos y coherentes con el tono de marca.</li>
<li><b>Contraste WCAG:</b> 4,5:1 texto normal, 3:1 texto grande. Nunca usar solo el color para transmitir información.</li>
<li><b>Material Design</b> (Google, 2014): paleta base, tipografía (Roboto, Noto, Google Sans), componentes, accesibilidad WCAG 2.1 AA/AAA.</li></ul>
<h4>Criterios de evaluación de la unidad (RA4, 10 % cada uno)</h4>
<ul><li><b>c)</b> Diseñar el aspecto de la interfaz (colores y fuentes, entre otros) atendiendo a su <b>legibilidad</b>.</li>
<li><b>d)</b> Verificar que los mensajes generados por la aplicación son adecuados en <b>extensión y claridad</b>.</li></ul>
<<<<<<< HEAD
<p>Este tema aún no tiene tarea ni test publicados en Aules: lo que hay es el PDF de teoría (65 diapositivas).</p>`},
=======
<h4>Añadido de la clase</h4><ul><li><b>Prueba en escala de grises</b> para validar el contraste, <b>entrecerrar los ojos / voltear</b> la composición para validar el equilibrio, y <b>dos o tres dimensiones de contraste como máximo</b> (lo habitual: peso + tamaño).</li><li>Espaciado en múltiplos de <b>4/8</b>, proporción áurea (≈1,618) y <b>dientes de sierra</b> como error de alineación (suele preguntarse en examen escrito).</li><li>Fases del proyecto: <b>wireframe → hoja de estilos → aplicar el diseño</b>. Detalles en «Hoja de ruta» y «Notas de la clase».</li></ul><p>Este tema aún no tiene tarea ni test publicados en Aules: lo que hay es el PDF de teoría (65 diapositivas) y las clases.</p>`},

    u3_ruta: { t: "Hoja de ruta del diseño y hoja de estilos (clase)", resumen: "Para qué sirve UT3 dentro del proyecto: wireframe → hoja de estilos → aplicar el diseño.",
      html: `
<p>Lo que el profesor explicó al empezar el tema (la transcripción habla de «wildfire/wireframe más boca»: es el <b>wireframe</b>, y «boca» se refiere al paso siguiente, el estilo).</p>
<h4>Dónde encaja UT3</h4>
<ul><li>UT1 enseñó a <b>probar</b> una interfaz (usabilidad y accesibilidad). UT2 enseñó a <b>estructurarla</b> (wireframe). UT3 enseña <b>con qué colores, tipografías, iconos y mensajes</b> se viste.</li>
<li>El objetivo práctico de UT3 es elaborar una <b>hoja de estilos</b>: elegir qué colores, iconos, tipografías, títulos y estilos de componente usará la aplicación.</li></ul>
<h4>Las tres fases del diseño (también para el proyecto intermodular)</h4>
<ol><li><b>Wireframe:</b> objetivos, casos de uso, necesidades que cubre la app, qué pantallas tiene y cómo interactúa el usuario con ellas.</li>
<li><b>Hoja de estilos:</b> definir los colores (primario, secundario, texto…) y las tipografías que importan para el proyecto, y la jerarquía visual.</li>
<li><b>Aplicar:</b> copiar el wireframe a otro archivo/proyecto y empezar a asignar a cada elemento su color primario, secundario, de texto, etc. Así se pasa a mockup <b>antes de escribir una sola línea de código</b>.</li></ol>
<p>El profesor comentó que esto es la segunda pata de la fase de diseño del proyecto intermodular, y que el curso pasado se partía de un wireframe (un bar) y luego se le aplicaba el color.</p>
${warn("El profesor no tenía claro en clase si la actividad de UT3 se hace sobre el wireframe del restaurante («creo que sí», pero «no, eso es un wireframe solo»). Confírmalo cuando se publique la tarea en Aules antes de dar por hecho que hay que reutilizar el restaurante.")}
<h4>Criterios para la hoja de estilos</h4>
<ul><li><b>Define solo lo que vayas a necesitar.</b> Una hoja de estilos profesional define todos los pesos tipográficos posibles (extra fina, fina, regular, media, negrita, extra negrita…); en las prácticas, no hace falta definir los que no uses. Es una norma de cualquier hoja de estilos.</li>
<li>En la hoja de estilos normalmente <b>no se define cada propiedad por separado</b>, sino «nivel 1 de jerarquía = tamaño X, peso Y, color Z», aplicando las dimensiones de contraste que consideres necesarias.</li>
<li>Muchas cosas ya se intuyen en el wireframe (línea más gorda para el título, espacio, botón principal); la hoja de estilos las fija con valores.</li></ul>
<h4>Por qué importan jerarquía y color (comentario inicial)</h4>
<ul><li>Jerarquía = que lo importante sea más llamativo y más grande; son recursos para guiar al usuario y decirle por dónde moverse y dónde pulsar.</li>
<li>Que los botones tengan los mismos colores es <b>consistencia</b>, no jerarquía (el profesor lo corrigió en clase).</li>
<li>El color puede empujar a una acción de forma implícita (por ejemplo, en una tienda online, el color del botón de comprar) y hay <b>psicología del color</b>: por eso las marcas de un mismo sector suelen compartir color.</li></ul>`},

    u3_clase: { t: "Notas de la clase de UT3 (equilibrio, contraste, jerarquía y alineación)", resumen: "Explicaciones, ejemplos y trucos del profesor que complementan las diapositivas.",
      html: `
<p>Contrastado con el PDF de UT3: lo que sigue <b>amplía</b> las diapositivas con lo que se dijo en clase (los datos que ya están en «Principios básicos» no se repiten). La transcripción termina al empezar <b>consistencia</b>, que se verá en la siguiente clase.</p>
<h4>Idea general</h4>
<ul><li>Los principios del diseño visual (equilibrio, contraste, jerarquía, alineación y consistencia) hacen que la interfaz sea <b>útil, agradable y que no canse</b> al usuario. Parecen conceptos muy distintos o muy iguales y marean: se verán uno a uno.</li>
<li>No hay fórmulas mágicas: la <b>experiencia como usuario</b> pesa más que cualquier consejo. Ya has usado miles de apps y sabes «de forma instintiva» qué está bien o mal; si inventas una interfaz, saldrá algo parecido a las existentes (como al inventar una canción acabas usando los mismos acordes del pop). Aun así, hay trucos para validar.</li></ul>
<h4>1. Equilibrio</h4>
<ul><li>Al meter elementos, la interfaz adquiere un <b>centro de gravedad</b> y los ojos navegan entre ellos. Equilibrar es distribuir el <b>peso visual</b> (tamaño, color, cantidad de cosas, contraste) para que no parezca todo amontonado o con todo el color en una parte. Piensa que estás metiendo «bultos» en una superficie.</li>
<li>Dos filosofías: <b>simetría</b> (cuadrícula, todo periódico y ordenado; al cerebro le gusta el orden y da estabilidad) o <b>asimetría</b> jugando con los espacios en blanco para repartir la información sin cargar.</li>
<li><b>Retículas, columnas y márgenes:</b> no empieces «pegando» elementos sobre un lienzo en blanco; reparte primero el espacio en columnas y deja márgenes respecto a los bordes (como al escribir en una hoja).</li>
<li><b>Espaciado de 4/8:</b> usa solo múltiplos de 4 u 8 px para todos los espacios (los botones de 48 y 40 px del ejemplo son múltiplos de 8).</li>
<li><b>Proporción áurea (≈1,618):</b> proporción muy usada en arte, fotografía y composición. Sale de un rectángulo que, al recortarle un cuadrado, deja otro rectángulo con la <b>misma proporción</b> entre lados; se relaciona con la sucesión de Fibonacci (el cociente entre términos consecutivos tiende a ese número). Repetida, dibuja la <b>espiral áurea</b>: un patrón <b>asimétrico</b> que da sensación de regularidad y armonía. Las cuadrículas de «regla de tercios»/espiral que muestran algunos móviles al hacer fotos siguen esta idea. (En la transcripción se oye «1,6/1,8»: el valor correcto es 1,618.)</li>
<li>Equilibra bloques grandes (imágenes, textos, controles) con <b>espacio en blanco y tipografía de más peso</b>, y no satures una zona con muchas llamadas a la acción: <b>si todo llama la atención, nada llama la atención</b>.</li>
<li>El peso no depende solo del tamaño: también del <b>color, la cantidad de información y la densidad</b>. Un texto pequeño puede pesar mucho si lo metes en una caja con contraste.</li>
<li>Ejemplo típico de desequilibrio: encabezado cargado (logo, título, menú, botones) y pie vacío. Solución: compensar, por ejemplo poniendo la navegación abajo.</li></ul>
<p><b>Cómo validar el equilibrio (trucos de clase):</b></p>
<ol><li><b>Entrecerrar los ojos</b> (o mirar de lejos): solo deberías ver «manchas»; ¿están repartidas o la masa tira hacia un lado?</li>
<li><b>Descansar la vista:</b> si llevas mucho tiempo mirando lo mismo, apaga la pantalla o aléjate y vuelve a mirar; la primera impresión al volver indica dónde está el peso.</li>
<li><b>Dar la vuelta (rotar/voltear) la composición</b> (no el monitor): así se ve enseguida si «se cae» hacia un lado. En el ejemplo de clase, una composición con una gran masa de color en la parte inferior parecía estable, pero al girarla «se caía» y todo el peso visual se iba a esa mancha, dejando el texto y los botones casi invisibles.</li>
<li>La <b>rejilla</b> da estabilidad por simetría: filas y columnas con elementos periódicos y homogéneos aportan equilibrio por sí mismos. Esto vale también para carteles, cuadros y fotografías.</li></ol>
<h4>2. Contraste</h4>
<ul><li><b>Para qué sirve:</b> leer, ordenar la información en tu cabeza y dar <b>ritmo</b>. Es como los títulos en negrita en un trabajo o los capítulos de un libro: marcan una pausa y avisan de que empieza otra sección (un texto sin puntos ni párrafos «te ahoga»). Permite ver de un vistazo dónde está lo importante y luego profundizar.</li>
<li><b>Dimensiones:</b> tamaño, peso, color, <b>forma</b>, textura y <b>posición</b>. Ejemplos de clase: en una cuadrícula de productos, uno con forma de estrella o de etiqueta de oferta destaca por <b>forma</b>; desplazar un elemento unos píxeles de la línea de los demás destaca por <b>posición</b> porque el ojo busca patrones y regularidad y lo ve como señal de alarma.</li>
<li><b>Regla de clase:</b> está «prohibido» usarlas todas a la vez («menos es más»). Con <b>una o dos</b> (como mucho dos o tres) basta; quien use cuatro tendrá que justificarlo. Lo habitual es <b>peso + tamaño</b> en los títulos; si usas color, quita tamaño o peso. Con textura y posición, cuidado.</li>
<li><b>Tamaño:</b> el ojo percibe primero lo más grande, así que el tamaño define la jerarquía. Ejemplo: formulario con «Aceptar» y «Cancelar»; quieres que acepte, así que el botón primario es algo mayor (48 px frente a 40 px). Pero si la diferencia es muy visible, puede dar un contraste «negativo»: lo habitual es que ambos botones midan igual y se diferencien con el <b>color</b> (relleno vs. borde).</li>
<li><b>Peso tipográfico:</b> grosor del trazo dentro de una misma familia (extra fina, fina, regular, media, negrita, extra negrita). Útil para destacar la palabra clave de una definición sin cambiar tamaño ni color. En formularios, etiquetas y placeholders con peso más ligero para no competir con el dato; botones primarios en negrita. Error: abusar.</li>
<li><b>Color y luminosidad:</b> el contraste de color se juega con <b>tono, saturación y brillo</b>, las tres dimensiones de todo color (se definirán al ver el color). El profesor es daltónico y recomienda «pecar de básico antes que de artista conceptual». Sirve sobre todo para los <b>call to action</b> (CTA): llamadas a que el usuario deje de ser pasivo y actúe (botón «Enviar» con otro color y tamaño que dice «apriétame»). Los neutros se dejan para fondos, elementos secundarios o desactivados, para dar calma.</li></ul>
<p><b>Errores comunes (con los ejemplos de clase):</b></p>
<ul><li>Texto/fondo con contraste insuficiente (típico en móvil con pantalla muy brillante; como los textos casi ilegibles del formulario de userinyerface de UT1).</li>
<li><b>Usar solo el color para transmitir información:</b> un formulario de 20 campos en el que el error solo se marca con rojo; el usuario no encuentra el campo fallido. Solución: añadir <b>texto o icono</b> (además de revisar el daltonismo).</li>
<li><b>Contraste extremo en todo:</b> cansa la vista y se pierde la jerarquía; si todo destaca, no sé qué es cada parte.</li>
<li><b>Fondos variables:</b> una foto de fondo que, al hacer scroll, deja el texto sobre una nube blanca e ilegible. Solución: poner una capa/contenedor semitransparente casi gris entre el fondo y el texto.</li>
<li><b>Modo oscuro:</b> implica hacer <b>dos hojas de estilos</b> (claro y oscuro) y asegurar contraste y legibilidad en ambas. No es simplemente invertir (negativo) los colores: los editores como Visual Studio tienen muchos temas oscuros que no son el negativo del claro. Al programar suele preferirse fondo oscuro porque emite menos luz, pero si el contraste es insuficiente se pierde en esfuerzo de lectura lo que se gana en descanso. Un equipo del curso pasado lo hizo; solo se recomienda si te sobra tiempo.</li></ul>
<p><b>Consejos del profesor:</b></p>
<ul><li>Sé <b>simple, eficaz y eficiente</b>; «eficacia sobre florituras». Si el contraste funciona a la 1.ª o 2.ª, bien; a la 3.ª, sigue adelante y no pierdas tres días.</li>
<li><b>Prueba en escala de grises</b> (en pantalla o imprimiendo en blanco y negro): si aún se distingue la jerarquía, el contraste está bien aplicado; si todo parece igual, solo te apoyabas en el color. Es una buena prueba para justificar decisiones.</li>
<li>Combina 2–3 dimensiones, mantén el contraste en modo oscuro (si lo tienes) y recuerda que la paleta debe respetar 4,5:1 / 3:1.</li></ul>
<p><b>Ejemplo del login explicado en clase</b> (tabla de las diapositivas, con matices):</p>
<ul><li>Título «Iniciar sesión»: más grande, negrita y el color de texto más oscuro → nivel 1 de jerarquía.</li>
<li>Subtítulo «Introduce tus credenciales»: algo más pequeño y gris más claro → jerarquía secundaria.</li>
<li>Botón de acción: color saturado, mayor tamaño, bien visible → <b>CTA principal</b>.</li>
<li>«¿Olvidaste tu contraseña?»: más ligero, menor tamaño y color tenue → acción <b>secundaria</b>, porque lo prioritario es meter el correo. Si el usuario falla, es cuando el enlace puede ganar contraste.</li>
<li>Fondo blanco amplio con espacios, para dar centralidad y claridad a la composición.</li></ul>
<h4>3. Jerarquía</h4>
<ul><li>Jerarquizar = <b>ordenar los elementos por importancia</b>. Lo grande y lo que contrasta se entiende como importante, y de un primer vistazo se capta qué hay; después la curiosidad lleva a profundizar.</li>
<li><b>Periódico:</b> columnas, titular grande, foto en medio y texto alrededor. En web puede bastar una sola columna con grandes elementos de contraste (fotos, títulos); en apps y webs se añaden barras de navegación o <b>índices</b> (como el de la Wikipedia).</li>
<li><b>Patrón F:</b> el más habitual en contenido con texto; se prioriza el título y cada «rama horizontal» de la F debe estar muy marcada (cabeceras claras) para que el usuario decida si lee ese apartado o pasa al siguiente.</li>
<li><b>Patrón Z:</b> típico de <b>portadas y páginas con poco texto</b>, con una zona despejada y una imagen ligera. Se recorre: identidad/logo y primera acción arriba → información breve → segunda llamada a la acción abajo. Ejemplo de clase: portada de Microsoft 365, donde «Probar gratis» tiene más contraste (acción principal, arriba a la derecha, pensada para captar usuarios) que «Iniciar sesión»; y, abajo, un segundo CTA para quien no se convenció a la primera.</li>
<li><b>Cards repetibles:</b> muy usadas hoy en apps táctiles (Netflix, Disney+…) porque los usuarios ya están acostumbrados a patrones de tarjetas con imagen que invitan a pulsar. Es el patrón de la carta y los favoritos del restaurante. El patrón de columnas queda más para texto/periódicos que para apps.</li></ul>
<h4>4. Alineación</h4>
<ul><li>Es el eje que usas para colocar elementos y dar orden. Ya lo trabajaste en Figma con el wireframe (guías, rejillas, alineación y distribución).</li>
<li>Pasos: definir <b>contenedor</b> (ancho máximo del texto) y <b>columnas</b> (p. ej. 12); mantener la <b>misma alineación en cada sección</b> (puedes cambiarla entre secciones, pero dentro de una sección no); usar paddings de 4/8 y repetir el espaciado «como una canción machacona».</li>
<li><b>Dientes de sierra</b> (se pregunta en exámenes escritos): bordes irregulares en una columna o grupo de elementos cuyos extremos no coinciden. En texto rompe la lectura de líneas, y se corrige <b>justificando</b> o ajustando; en cajas/botones, reordenándolos, jugando con los tamaños o agrupándolos en columnas para que compartan borde (nunca «uno hacia dentro y otro hacia fuera»). También sirve centrar verticalmente un elemento grande y alinear el resto en columna.</li>
<li><b>Elementos que flotan sin eje común:</b> no están alineados con nada. En Figma, las guías y rejillas hacen que un elemento «enganche» con el borde izquierdo, derecho o centro de otro.</li>
<li><b>Diseño responsive:</b> coloca los elementos de forma <b>relativa</b> y no con posiciones absolutas (como cajas dentro de cajas en CSS, con mínimos, máximos y alturas), porque los móviles y tablets tienen distintos anchos y alturas.</li>
<li><b>Línea base</b> (baseline): la línea imaginaria sobre la que «se apoyan» las letras (algunas letras sobresalen por debajo). Se comprueba que títulos y párrafos «respiran» a múltiplos del espaciado (4/8). Viene de la imprenta antigua (tipos de plomo y medidas en puntos); en pantalla se usan píxeles.</li></ul>
${tip("Preguntas probables de examen (dichas en clase o muy sugeridas): ¿por qué es importante la jerarquía?, diferencia entre jerarquía y consistencia, qué son los dientes de sierra y cómo se corrigen, cómo comprobar el equilibrio (entrecerrar ojos, voltear, descansar la vista), cuántas dimensiones de contraste usar, por qué no basta el color solo, prueba en escala de grises y por qué el espaciado 4/8.")}`},
>>>>>>> 635a20b (Clase de interfaces)

    u3_prin: { t: "Principios básicos del diseño visual", resumen: "Equilibrio, contraste, jerarquía, alineación y consistencia, con errores típicos y cómo validarlos.",
      html: `
<h4>Equilibrio</h4>
<p>Distribución del «peso visual» (tamaño, color, densidad, contraste) para que la composición no «caiga» hacia un lado.</p>
<ul><li><b>Simétrico:</b> elementos espejados respecto a un eje → estabilidad y formalidad.</li><li><b>Asimétrico:</b> pesos distintos que se compensan con contraste/espacio → dinamismo y modernidad.</li>
<li><b>Cómo aplicarlo:</b> trabajar con retículas (columnas y márgenes) y escala de espaciado de <b>4/8 px</b>; equilibrar grandes bloques (imágenes) con espacio en blanco y tipografía de más peso; no saturar una zona con demasiadas llamadas a la acción.</li>
<li><b>Errores típicos:</b> un lado «pesa» demasiado (mucha información o color saturado); encabezado ligero y pie muy denso (o al revés).</li>
<li><b>Validación:</b> test de «entrecerrar los ojos» (¿la masa visual se agrupa de forma equilibrada?) y <i>mirroring check</i> (duplicar y voltear la composición; si «cae», falta equilibrio).</li></ul>
<h4>Contraste</h4>
<p>Diferencia perceptible entre elementos. Su función es <b>organizar la información y guiar la atención</b>, no solo embellecer. Bien aplicado mejora jerarquía, legibilidad y comprensión; mal gestionado produce confusión y fatiga visual. Se aplica en seis dimensiones: <b>tamaño, peso, color, forma, textura y posición</b>.</p>
<table><tr><th>Tipo</th><th>Idea</th><th>Ejemplo</th><th>Error común</th></tr>
<tr><td><b>Tamaño / escala</b></td><td>El ojo percibe antes lo más grande: el tamaño define la jerarquía.</td><td>«Registrarse» (primario) 48 px de alto; «Cancelar» (secundario) 40 px.</td><td>Muchos tamaños sin patrón: no se sabe qué es lo importante.</td></tr>
<tr><td><b>Peso tipográfico</b></td><td>Light / regular / bold dentro de una familia.</td><td>Titulares bold, subtítulos semibold, cuerpo regular; etiquetas ligeras en formularios.</td><td>Abusar del bold: si todo está en negrita, nada destaca.</td></tr>
<tr><td><b>Color y luminosidad</b></td><td>Diferencia de tono, saturación o brillo.</td><td>Colores vivos para CTA y neutros para fondos y elementos desactivados; texto #333333 sobre blanco (muy legible) frente a #AAAAAA sobre blanco (≈2,5:1, ilegible).</td><td>Combinaciones estéticas pero ilegibles; usar solo color para dar información (errores en rojo) → añade icono o texto.</td></tr></table>
<p><b>Ejemplo del login:</b> título «Iniciar sesión» (grande + bold + oscuro) = nivel 1; subtítulo (tamaño medio + gris medio) = nivel 2; botón «Entrar» (azul saturado + mayor + centrado) = <b>punto focal</b>; enlace «¿Olvidaste tu contraseña?» (ligero, pequeño, gris-azulado) = baja prioridad; fondo blanco con mucho espacio.</p>
<table><tr><th>Error de contraste</th><th>Consecuencia</th></tr>
<tr><td>Contraste insuficiente texto/fondo</td><td>Difícil de leer, sobre todo en pantallas brillantes.</td></tr>
<tr><td>Color como único diferenciador</td><td>Inaccesible para personas con daltonismo.</td></tr>
<tr><td>Contraste extremo en todo</td><td>Cansa la vista y se pierde la jerarquía.</td></tr>
<tr><td>No considerar fondos variables</td><td>Elementos ilegibles en dark mode o sobre imágenes.</td></tr></table>
<p><b>Buenas prácticas:</b> combinar solo <b>2–3 dimensiones</b> de contraste a la vez; color y tamaño para dirigir la atención y peso tipográfico para reforzar; mantenerlo en modo oscuro; <b>prueba en escala de grises</b> (si aún se entiende la jerarquía, está bien).</p>
<h4>Jerarquía</h4>
<p>Orden visual que guía la mirada y prioriza la información. Patrones de lectura:</p>
<ul><li><b>Patrón F:</b> el usuario escanea en vertical y se detiene brevemente en algunas líneas horizontales; busca respuestas rápidas. Es el <b>más común</b> (páginas con mucho texto).</li>
<li><b>Patrón Z:</b> páginas con poco texto y más carga visual (p. ej. inicio); los elementos clave se colocan en el recorrido en Z y el <b>CTA al final</b>.</li>
<li><b>Columnas y cards repetibles:</b> bloques visuales consistentes que permiten escanear rápido sin leer cada detalle (como la carta y los favoritos del restaurante).</li></ul>
<h4>Alineación</h4>
<p>Colocar elementos según ejes comunes para dar orden y ritmo. Cómo: definir contenedor (ancho máximo de texto) y columnas (12 en web); alineaciones consistentes dentro de cada sección (no mezclar centro/izquierda sin motivo); ajustar interlineado y espaciado vertical. Alarmas: «dientes de sierra» en los márgenes y elementos que «flotan» sin eje. Validar con pixel grid, guías y línea base.</p>
<h4>Consistencia</h4>
<table><tr><th>Dimensión</th><th>Qué es</th><th>Cómo aplicarla</th><th>Error típico</th></tr>
<tr><td><b>Visual</b></td><td>Colores, fuentes, espaciados, iconos, sombras.</td><td>Tokens de diseño (<code>color.primary</code>, <code>spacing.2</code>, <code>radius.md</code>) y biblioteca de componentes con estados (hover, focus, disabled, error).</td><td>Tres tipos de botón primario.</td></tr>
<tr><td><b>Funcional</b></td><td>Los componentes se comportan igual en todos los contextos.</td><td>Seguir convenciones de plataforma (Android/iOS/Web).</td><td>Estados de interacción ausentes o incoherentes.</td></tr>
<tr><td><b>Verbal</b></td><td>Mismo tono y nomenclatura.</td><td>Elegir un término («Iniciar sesión» o «Acceder») y mantenerlo.</td><td>Mezclar sinónimos.</td></tr></table>
<p>Validar con <i>inventory audit</i> (lista de componentes y variantes, eliminar duplicados) y <i>checklist de estados</i> (focus/hover/active/error/success).</p>`},

    u3_estet: { t: "Estética y funcionalidad", resumen: "El efecto de usabilidad estética y cómo el diseño refuerza la usabilidad.",
      html: `
<p>En diseño de interfaces la estética <b>no es solo apariencia</b>: es una herramienta funcional para comunicar, guiar y generar confianza. El <b>efecto de usabilidad estética</b> (<i>aesthetic-usability effect</i>) dice que los usuarios tienden a creer que una interfaz más atractiva es más fácil de usar, incluso cuando su rendimiento objetivo es igual al de otra menos estética.</p>
<table><tr><th>Aspecto</th><th>Función estética</th><th>Función práctica</th></tr>
<tr><td>Color</td><td>Transmite emociones, refuerza la marca.</td><td>Diferencia secciones y estados (activo/inactivo, error/éxito).</td></tr>
<tr><td>Tipografía</td><td>Da personalidad.</td><td>Aumenta legibilidad y jerarquía.</td></tr>
<tr><td>Espacio en blanco</td><td>Armonía y limpieza.</td><td>Mejora la concentración y reduce la carga cognitiva.</td></tr>
<tr><td>Iconografía</td><td>Interfaz más amigable.</td><td>Refuerza la comprensión sin texto.</td></tr>
<tr><td>Composición visual</td><td>Equilibrio y coherencia.</td><td>Facilita el escaneo y la orientación.</td></tr></table>
<h4>Ejemplos del temario</h4>
<ul><li>App bancaria con tonos sobrios y tipografía sólida → transmite seguridad y confianza al hacer transacciones.</li><li>App infantil con colores vivos y botones grandes → bonita y también accesible para su público.</li><li>Sistema de salud con fondo blanco y acentos verdes → tranquilidad, orden y bienestar.</li></ul>
<h4>El diseño como refuerzo de la usabilidad</h4>
<ul><li><b>Color y feedback:</b> botón «Guardar» que se vuelve verde y muestra «✓ Cambios guardados».</li><li><b>Jerarquía visual:</b> campos obligatorios en negrita o con asterisco.</li><li><b>Iconografía funcional:</b> la papelera indica eliminar sin texto.</li><li><b>Espaciado y ritmo:</b> agrupar campos relacionados (datos personales vs. dirección de envío).</li></ul>
<h4>Recomendaciones prácticas</h4>
<ul><li>Priorizar la <b>claridad sobre el estilo</b> (cada elemento con propósito funcional).</li><li>Usar la <b>jerarquía</b> para guiar la mirada.</li><li>Mantener la <b>previsibilidad</b>.</li><li>Dar <b>feedback inmediato</b>.</li><li>Diseñar para <b>distintos contextos</b> (móvil y escritorio).</li></ul>`},

    u3_color: { t: "Color en la interfaz", resumen: "Psicología del color, paletas, contraste, jerarquía cromática, tokens y Material Design.",
      html: `
<p>El color es uno de los elementos visuales más poderosos: comunica, despierta emociones, refuerza la identidad y orienta al usuario. Un mal uso causa confusión, falta de legibilidad o problemas de accesibilidad.</p>
<h4>Psicología del color (puede variar según cultura y contexto)</h4>
<table><tr><th>Color</th><th>Significado común</th><th>Uso habitual</th></tr>
<tr><td>Azul</td><td>Confianza, calma, seguridad</td><td>Banca, salud, tecnología (botones principales, cabeceras)</td></tr>
<tr><td>Verde</td><td>Éxito, crecimiento, naturalidad</td><td>Confirmaciones, productos ecológicos o sostenibles</td></tr>
<tr><td>Rojo</td><td>Energía, urgencia, advertencia</td><td>Alertas, errores, promociones</td></tr>
<tr><td>Naranja</td><td>Entusiasmo, acción, cercanía</td><td>Botones CTA, banners informativos</td></tr>
<tr><td>Amarillo</td><td>Optimismo, advertencia</td><td>Indicadores de atención, énfasis</td></tr>
<tr><td>Negro / gris oscuro</td><td>Elegancia, sobriedad, profesionalidad</td><td>Fondos minimalistas, apps premium</td></tr>
<tr><td>Blanco / gris claro</td><td>Limpieza, espacio, simplicidad</td><td>Fondos, secciones secundarias, contraste con texto oscuro</td></tr></table>
<h4>Paletas de color</h4>
<table><tr><th>Paleta</th><th>Cómo es</th><th>Ventajas</th><th>Inconvenientes</th></tr>
<tr><td><b>Monocromática</b></td><td>Variaciones de un solo color (tono, saturación, luminosidad). Ej.: azul base, claros para fondos y oscuros para textos.</td><td>Unidad y simplicidad; fácil de mantener coherente; ideal minimalista o corporativo.</td><td>Puede ser monótona si falta contraste.</td></tr>
<tr><td><b>Análoga</b></td><td>Colores vecinos en el círculo cromático (azul–verde–turquesa).</td><td>Armonía y naturalidad; apps relajadas o de bienestar.</td><td>Menor contraste; dificulta la jerarquía.</td></tr>
<tr><td><b>Complementaria</b></td><td>Colores opuestos (azul/naranja, rojo/verde).</td><td>Fuerte contraste y energía; destaca botones y alertas.</td><td>Si se abusa, resulta agresiva y cansa la vista.</td></tr></table>
<p><b>Herramientas:</b> Coolors.co (paletas armónicas), Adobe Color (monocromáticas, análogas, complementarias) y Material Palette (según Material Design).</p>
<h4>Contraste y accesibilidad</h4>
<p>El texto, los iconos y los elementos interactivos deben distinguirse claramente para todos, incluidas personas con <b>daltonismo o baja visión</b>. WCAG: <b>4,5:1</b> en texto normal y <b>3:1</b> en texto grande. Herramientas: Contrast Checker y WAVE.</p>
<h4>Color y jerarquía visual</h4>
<p>El color organiza la información y guía la atención. Una buena jerarquía cromática permite ver qué es <b>primario, secundario e informativo</b>.</p>
<h4>Tokens de color</h4>
<p>Nombres o variables que representan colores dentro de un sistema de diseño. En vez de usar valores fijos (#4285F4 o rgb(66,133,244)) se definen identificadores <b>semánticos</b>: un token no dice «qué color es», sino «<b>para qué sirve</b>». Dan coherencia cromática, control del sistema visual y escalabilidad.</p>
<table><tr><th>Tipo</th><th>Token</th><th>Valor</th><th>Uso</th></tr>
<tr><td>Primario</td><td><code>color.primary</code></td><td>#4285F4</td><td>Botones principales, enlaces destacados</td></tr>
<tr><td>Secundario</td><td><code>color.secondary</code></td><td>#34A853</td><td>Acciones complementarias</td></tr>
<tr><td>Éxito</td><td><code>color.success</code></td><td>#4CAF50</td><td>Mensajes de confirmación</td></tr>
<tr><td>Error</td><td><code>color.error</code></td><td>#EA4335</td><td>Alertas o errores</td></tr>
<tr><td>Fondo</td><td><code>color.background</code></td><td>#FFFFFF</td><td>Fondo de pantalla o contenedor</td></tr>
<tr><td>Texto principal</td><td><code>color.text.primary</code></td><td>#212121</td><td>Texto principal</td></tr>
<tr><td>Texto secundario</td><td><code>color.text.secondary</code></td><td>#757575</td><td>Texto auxiliar</td></tr></table>
<h4>Material Design</h4>
<p>Sistema de diseño de <b>Google (2014)</b> con principios, guías y componentes para interfaces claras, accesibles y coherentes en cualquier dispositivo; estándar muy usado en Android, web y productos educativos. Ofrece: paleta base (primario, secundario, fondo, superficie, error…), tipografía recomendada (<b>Roboto, Noto o Google Sans</b>), componentes (botones, chips, tarjetas, menús, barras de navegación), guías de accesibilidad WCAG 2.1 AA/AAA y herramientas (<b>Material Theme Builder, Material Symbols, Material Design Guidelines</b>). Es la base de los widgets de Flutter que verás más adelante.</p>
<h4>Resumen del bloque</h4>
<table><tr><th>Principio</th><th>Objetivo</th><th>Herramientas</th></tr>
<tr><td>Psicología del color</td><td>Transmitir emociones y reforzar la identidad</td><td>Paletas corporativas, guías de estilo</td></tr>
<tr><td>Paletas equilibradas</td><td>Armonía visual</td><td>Coolors, Adobe Color</td></tr>
<tr><td>Contraste y accesibilidad</td><td>Legibilidad universal</td><td>Contrast Checker, WAVE</td></tr>
<tr><td>Jerarquía cromática</td><td>Guiar la atención</td><td>Tokens de color, Material Design</td></tr>
<tr><td>Consistencia</td><td>Previsibilidad visual</td><td>Sistema de diseño o guía de componentes</td></tr></table>`},

    u3_tipo: { t: "Tipografía de la interfaz", resumen: "Tipos de letra, jerarquía tipográfica y buenas prácticas.",
      html: `
<p>La tipografía es uno de los pilares del diseño visual: mejora la <b>legibilidad, la jerarquía y la experiencia de lectura</b> digital.</p>
<h4>Tipos de tipografía</h4>
<table><tr><th>Tipo</th><th>Características</th><th>Uso recomendado</th></tr>
<tr><td><b>Serif</b></td><td>Con remates o «patitas» (Times New Roman, Merriweather).</td><td>Textos largos en contextos formales o de lectura reposada; elegancia y tradición.</td></tr>
<tr><td><b>Sans serif</b></td><td>Sin remates, trazos simples y uniformes (Roboto, Open Sans, Lato).</td><td>Ideal para pantallas: limpia, moderna y legible a baja resolución.</td></tr>
<tr><td><b>Monoespaciada</b></td><td>Todos los caracteres ocupan el mismo ancho (Courier, Source Code Pro).</td><td>Entornos técnicos, código o datos.</td></tr></table>
<h4>Jerarquía tipográfica</h4>
<table><tr><th>Nivel</th><th>Función</th><th>Tamaño y estilo habitual</th></tr>
<tr><td>Título (H1)</td><td>Tema principal</td><td>Grande, bold, alto contraste</td></tr>
<tr><td>Subtítulo (H2–H3)</td><td>Divide secciones o introduce contenido</td><td>Medio, semibold</td></tr>
<tr><td>Texto principal (body)</td><td>Contenido informativo</td><td>Regular, tamaño cómodo (<b>16–18 px</b>)</td></tr>
<tr><td>Etiquetas / placeholders</td><td>Indicaciones o campos de formulario</td><td>Pequeño, color secundario</td></tr>
<tr><td>Botones y enlaces</td><td>Llamadas a la acción</td><td>Bold o mayúsculas, contraste fuerte</td></tr></table>
<h4>Buenas prácticas</h4>
<ul><li><b>No usar más de dos familias</b> tipográficas.</li><li>Usar <b>variaciones de peso</b> (regular, bold, light) dentro de una misma familia.</li><li>Mantener <b>coherencia en estilos</b> (bold, italic, caps).</li><li><b>Comprobar el contraste</b> entre texto y fondo.</li><li>Usar la <b>misma escala tipográfica</b> en todas las pantallas.</li><li><b>Probar en distintos tamaños</b> de pantalla.</li></ul>
${tip("Relación con UT2: en wireframes se usan tipografías genéricas (Roboto o Arial). Al pasar a mockup se eligen las fuentes reales de la marca, siguiendo esta jerarquía.")}`},

    u3_msg: { t: "Mensajes y microtextos", resumen: "Qué es el microcopy, cómo debe ser un mensaje efectivo y ejemplos de mejora.",
      html: `
<p>Los <b>mensajes y microtextos</b> (<i>microcopy</i>) son los pequeños fragmentos de texto que acompañan al usuario: <b>etiquetas, placeholders, feedback, alertas, confirmaciones y mensajes de error</b>. Su objetivo es <b>guiar, informar o tranquilizar</b> mientras interactúa, y hacer la interacción más clara, humana y comprensible.</p>
<h4>Características de un mensaje efectivo</h4>
<ol><li><b>Breve y claro:</b> comunica solo lo necesario («Crea una contraseña segura» mejor que un párrafo).</li>
<li><b>Directo (voz activa):</b> verbos de acción y lenguaje natural («Guarda los cambios» en lugar de «Los cambios pueden guardarse»).</li>
<li><b>Empático y contextual:</b> muestra comprensión («Ups, algo salió mal. Inténtalo de nuevo»).</li>
<li><b>Coherente con el tono de la marca:</b> formal, cercano o divertido, pero siempre consistente.</li></ol>
<h4>Ejemplos: inefectivo → mejorado</h4>
<table><tr><th>Tipo</th><th>Inefectivo</th><th>Mejorado</th></tr>
<tr><td>Placeholder</td><td>«Campo obligatorio»</td><td>«Introduce tu correo»</td></tr>
<tr><td>Confirmación</td><td>«Datos actualizados correctamente»</td><td>«Hemos guardado tus cambios»</td></tr>
<tr><td>Error</td><td>«Error 404»</td><td>«No encontramos lo que buscas»</td></tr>
<tr><td>Feedback</td><td>«Enviado»</td><td>«Tu mensaje fue enviado con éxito»</td></tr></table>
<h4>Relación con otras unidades</h4>
<ul><li>Heurística 9 de Nielsen: errores claros que indiquen cómo resolverlos. Heurística 4: mismo término siempre (consistencia verbal).</li>
<li>Criterio de evaluación d): los mensajes deben ser <b>adecuados en extensión y claridad</b>.</li>
<li>Accesibilidad: no transmitir un error solo con color (acompáñalo de texto o icono).</li></ul>
<p><b>Bibliografía de la unidad:</b> justinmind.com/es/ui-diseno/principios y heyjaime.com/blog/jerarquia-visual.</p>`},

  },
};
