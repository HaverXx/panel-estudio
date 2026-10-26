// Apuntes de «Disseny i elaboració de material de comunicació» (cuenta de Mireia). Curso 2026-27.
// Profesora: María Dolores Martínez Domenech. Fechas de la temporalización de la guía del módulo.
const DEM_APUNTES = {
  semanas: [
    { n: "U1", ini: "2026-09-14", fin: "2026-09-30", titulo: "UD 1 · Elementos visuales y composición",
      temas: ["g_guia", "g_eval", "u1_percep", "u1_equil", "u1_tec", "u1_color", "u1_papel", "u1_act", "u1_reto"],
      ejercicios: ["Test UD1", "Act UD1", "Reto UD1"] },
    { n: "U2", ini: "2026-10-01", fin: "2026-10-18", titulo: "UD 2 · Comunicación persuasiva, creatividad y estrategia publicitaria",
      temas: ["u2_cont"], ejercicios: ["Test UD2", "Act UD2", "Reto UD2"] },
    { n: "U3", ini: "2026-10-19", fin: "2026-11-01", titulo: "UD 3 · Preparación de materiales de comunicación",
      temas: ["u3_cont"], ejercicios: ["Test UD3", "Act UD3", "Reto UD3"] },
    { n: "U4", ini: "2026-11-02", fin: "2026-11-15", titulo: "UD 4 · Fuentes de información y normativa", temas: ["u4_cont"] },
    { n: "U5", ini: "2026-11-30", fin: "2026-12-13", titulo: "UD 5 · Redacción y maquetación de materiales de comunicación", temas: ["u5_cont"] },
    { n: "U6", ini: "2026-12-14", fin: "2027-01-17", titulo: "UD 6 · Herramientas para la elaboración de materiales publicitarios", temas: ["u6_cont"] },
    { n: "U7", ini: "2027-01-18", fin: "2027-01-31", titulo: "UD 7 · Organización del plan de difusión de materiales", temas: ["u7_cont"] },
  ],
  ejercicios: {
    "Test UD1": ["UD 1 · Test evaluable", "Cuestionario de Aules: 2 intentos, 5 minutos, cuenta la nota más alta. Cierre: 9 oct 2026, 23:59."],
    "Act UD1": ["UD 1 · Actividades evaluables (10 preguntas)", "Entrega en PDF y JPG en «UD1. Entrega actividades». Cierre: 9 oct 2026, 23:59."],
    "Reto UD1": ["UD 1 · Reto profesional: sala de fiestas", "Imagen corporativa para una sala de fiestas (colores, tipografías, logotipo y papel). Entrega en PDF. Cierre: 9 oct 2026, 23:59."],
    "Test UD2": ["UD 2 · Test evaluable", "2 intentos, 5 minutos. Abierto del 1 al 18 oct 2026 (23:59)."],
    "Act UD2": ["UD 2 · Actividades evaluables", "Entrega en PDF. Cierre: 18 oct 2026, 23:59."],
    "Reto UD2": ["UD 2 · Reto profesional", "Entrega en PDF. Cierre: 18 oct 2026, 23:59."],
    "Test UD3": ["UD 3 · Test evaluable", "2 intentos, 5 minutos. Abierto del 19 oct al 1 nov 2026 (23:59)."],
    "Act UD3": ["UD 3 · Actividades evaluables", "Se pueden hacer con Canva (enlace en Aules). Entrega en PDF. Cierre: 1 nov 2026, 23:59."],
    "Reto UD3": ["UD 3 · Reto profesional", "Entrega en PDF. En el apartado F) de email marketing: enviar el correo a la dirección indicada Y adjuntar captura de su contenido en el PDF. Cierre: 1 nov 2026, 23:59."],
  },
  temas: {

    g_guia: { t: "Guía del módulo: datos, tutorías y calendario", resumen: "Quién es la profesora, tutorías, exámenes y fechas importantes del curso 2026-27.",
      html: `
<ul><li><b>Módulo</b>: Diseño y elaboración de materiales de comunicación · código 1007 · 166 horas · 9 ECTS · CFGS Marketing y Publicidad (semipresencial).</li>
<li><b>Profesora</b>: María Dolores Martínez Domenech · m.martinezdomenech@edu.gva.es</li>
<li><b>Libro de referencia</b>: <i>Diseño y elaboración de material de comunicación</i>, Sergio López Salas, Paraninfo (2021), ISBN 978-84-283-4437-1.</li>
<li>Las actividades se entregan en formato compatible con <b>PDF</b>.</li>
<li>En cada bloque de Aules hay contenidos, actividades, test, reto profesional y <b>enlaces de interés (subrayados en amarillo): hay que revisarlos porque pueden salir en el examen</b>.</li></ul>
<h4>Tutorías</h4>
<table><tr><th>Tipo</th><th>Mañana</th><th>Tarde</th></tr>
<tr><td><b>Colectiva</b> (1 h cada 15 días, presencial)</td><td>Jueves 14:10–15:05 · Aula C1C</td><td>Viernes 19:20–20:15 · Aula A-101</td></tr>
<tr><td><b>Individual</b> (imprescindible cita previa por Aules)</td><td colspan="2">Lunes 18:25–19:20</td></tr></table>
<h4>Temporalización</h4>
<table><tr><th>UD</th><th>Fechas</th></tr>
<tr><td>UD 1</td><td>14 sep – 30 sep (entregas hasta 9 oct)</td></tr>
<tr><td>UD 2</td><td>1 oct – 18 oct</td></tr>
<tr><td>UD 3</td><td>19 oct – 1 nov</td></tr>
<tr><td>UD 4</td><td>2 nov – 15 nov</td></tr>
<tr><td>Dudas 1</td><td>16 – 22 nov</td></tr>
<tr><td><b>EXAMEN 1.er cuatrimestre</b></td><td><b>23 – 27 nov</b></td></tr>
<tr><td>UD 5</td><td>30 nov – 13 dic</td></tr>
<tr><td>UD 6</td><td>14 dic – 17 ene</td></tr>
<tr><td>UD 7</td><td>18 ene – 31 ene</td></tr>
<tr><td>Dudas 2</td><td>1 – 14 feb</td></tr>
<tr><td><b>EXAMEN 2.º cuatrimestre</b></td><td><b>15 – 19 feb</b></td></tr>
<tr><td><b>Convocatoria ordinaria</b></td><td><b>31 may – 4 jun</b></td></tr>
<tr><td><b>Convocatoria extraordinaria</b></td><td><b>25 – 30 jun</b></td></tr></table>` },

    g_eval: { t: "Evaluación y calificación (lo que te juegas)", resumen: "Cómo se calcula la nota, evaluación continua (85%), exámenes tipo test que restan y convocatorias.",
      html: `
${warn("Regla de oro: hay que hacer al menos el <b>85 %</b> de las actividades evaluables de Aules <b>en tiempo y forma</b> y presentarse a los dos parciales. Si no, <b>se pierde la evaluación continua</b> y toca examen completo en la ordinaria.")}
<h4>Cálculo de la nota (si mantienes la evaluación continua)</h4>
<table><tr><th></th><th>1.ª evaluación</th><th>2.ª evaluación</th><th>FE (formación en empresas)</th><th>Total</th></tr>
<tr><td><b>Examen</b></td><td>3,5 puntos</td><td>3,5 puntos</td><td>—</td><td>7 (70 %)</td></tr>
<tr><td><b>Actividades evaluables</b></td><td>0,5 puntos</td><td>0,5 puntos</td><td>2 puntos</td><td>3 (30 %)</td></tr>
<tr><td><b>Total</b></td><td>4 (40 %)</td><td>4 (40 %)</td><td>2 (20 %)</td><td>10</td></tr></table>
<ul><li>Exámenes y actividades se puntúan sobre 10 y luego se ponderan según la tabla. <b>Aprobado con 5 o más.</b></li>
<li>Los exámenes parciales eliminan materia. Si no llegas a 5, vas a la <b>convocatoria ordinaria</b>.</li></ul>
<h4>Convocatorias</h4>
<ul><li><b>Ordinaria (31 may – 4 jun)</b>: si conservas la evaluación continua, solo te examinas del parcial suspendido. Si la has perdido, examen de <b>todas</b> las unidades; el examen puntúa sobre 10 y pondera al <b>80 %</b>, más la actividad de la FE (máx. 2 puntos).</li>
<li><b>Extraordinaria (25 – 30 jun)</b>: todo el curso, <b>no se guarda la nota de parciales aprobados</b>. Examen al 80 % + FE (2 puntos).</li>
<li>La actividad de la FE la hacen todos los alumnos (salvo exentos); su nota se comunica por Aules antes de la ordinaria.</li></ul>
<h4>Estructura del examen</h4>
<ul><li>Calificación de 1 a 10. <b>Preguntas tipo test donde las incorrectas restan</b> (opción múltiple o verdadero/falso).</li>
<li>Puede incluir <b>preguntas a desarrollar</b> y <b>prácticas de diseño</b>.</li></ul>
<h4>Ponderación por resultados de aprendizaje</h4>
<table><tr><th>RA</th><th>UD</th><th>Peso</th></tr>
<tr><td>RA1 · Prepara el contenido de los materiales</td><td>UD 3 y 4</td><td>20 %</td></tr>
<tr><td>RA2 · Confecciona materiales (diseño gráfico, audiovisual, artístico)</td><td>UD 1</td><td>20 %</td></tr>
<tr><td>RA3 · Aplica técnicas de comunicación persuasiva</td><td>UD 2</td><td>10 %</td></tr>
<tr><td>RA4 · Elabora materiales con software específico</td><td>UD 5 y 6</td><td>20 % + 20 %</td></tr>
<tr><td>RA5 · Organiza el plan de difusión</td><td>UD 7</td><td>10 %</td></tr></table>
${tip("La guía da cifras algo distintas en distintos apartados (por ejemplo, «30 % actividades» frente a 0,5 + 0,5 puntos en la tabla). Si te importa algún detalle, confírmalo con la profesora en el diálogo de Aules.")}` },

    u1_percep: { t: "UD 1 · La percepción visual y la dirección visual", resumen: "Definición, por qué es subjetiva y qué transmite cada forma básica.",
      html: `
<ul><li><b>Percepción visual</b>: mecanismo por el que se <b>perciben y decodifican</b> los elementos visuales de una composición.</li>
<li>Definición (Cecilia M. Alonso): interpretación o discriminación de los <b>estímulos externos visuales</b> relacionada con el <b>conocimiento previo</b> y el <b>estado emocional</b> del individuo.</li>
<li>El mecanismo biológico es igual para todos, pero la percepción es <b>subjetiva</b> por los condicionantes personales: <b>conocimiento previo</b>, <b>contexto histórico, social y cultural</b> y <b>contexto personal</b>.</li></ul>
<h4>Dirección visual de las formas básicas</h4>
<table><tr><th>Forma</th><th>Dirección</th><th>Se asocia a…</th></tr>
<tr><td><b>Cuadrado</b></td><td>Horizontal-vertical</td><td><b>Estabilidad</b></td></tr>
<tr><td><b>Triángulo</b></td><td>Diagonal</td><td><b>Inestabilidad</b></td></tr>
<tr><td><b>Círculo</b></td><td>Curva</td><td><b>Encuadre y repetición</b></td></tr></table>` },

    u1_equil: { t: "UD 1 · Equilibrio y ley de la figura-fondo (Gestalt)", resumen: "Por qué importa el equilibrio y cómo separa el cerebro figura y fondo.",
      html: `
<h4>Equilibrio</h4>
<ul><li>El ser humano necesita <b>equilibrio físico y mental</b>; el desequilibrio se percibe como algo <b>negativo e incómodo</b>.</li>
<li>Por eso es uno de los aspectos fundamentales de una composición: <b>determina el lugar en el que debe aparecer cada elemento</b>.</li></ul>
<h4>Ley / principio de la figura-fondo</h4>
<ul><li>El cerebro tiende a <b>separar las figuras del fondo</b> según el <b>color, la forma, el tamaño o el contraste</b>.</li>
<li>Según los condicionantes previos, cada persona percibe primero la figura o el fondo.</li>
<li>Figura y fondo son estáticos y <b>pueden intercambiar los papeles</b>, pero <b>el cerebro no puede interpretar ambos estímulos a la vez</b>.</li></ul>
${tip("Para el reto y los logotipos: cita siempre la ley de Gestalt que has usado (figura-fondo, proximidad, semejanza, cierre, continuidad, simetría…) y justifica por qué.")}` },

    u1_tec: { t: "UD 1 · Técnicas de comunicación visual (pares opuestos)", resumen: "Economía, predictibilidad y realismo frente a profusión, espontaneidad y distorsión.",
      html: `
<table><tr><th>Técnica</th><th>Técnica contraria</th></tr>
<tr><td><b>Economía</b></td><td><b>Profusión</b></td></tr>
<tr><td><b>Predictibilidad</b></td><td><b>Espontaneidad</b></td></tr>
<tr><td><b>Realismo</b></td><td><b>Distorsión</b></td></tr></table>
<p>Las técnicas de comunicación visual se organizan en parejas de opuestos; al diseñar se elige la técnica que mejor transmite el mensaje (por ejemplo, un diseño sobrio y económico frente a uno recargado y profuso).</p>` },

    u1_color: { t: "UD 1 · Teoría del color: síntesis aditiva vs sustractiva y Pantone", resumen: "RGB (luz) frente a CMYK (pigmento) y colores Pantone del año.",
      html: `
<table><tr><th></th><th>Síntesis ADITIVA</th><th>Síntesis SUSTRACTIVA</th></tr>
<tr><td><b>Concepción</b></td><td>Color como <b>radiación, color-luz</b></td><td>Color como <b>pigmento, pintura</b></td></tr>
<tr><td><b>Modelo</b></td><td><b>RGB</b> (Red, Green, Blue)</td><td><b>CMYK</b> (Cyan, Magenta, Yellow, Key)</td></tr>
<tr><td><b>Primarios</b></td><td>Rojo, verde, azul</td><td>Cian, magenta, amarillo</td></tr>
<tr><td><b>Secundarios</b></td><td>Cian, magenta y amarillo (más claros)</td><td>Azul, rojo y verde</td></tr>
<tr><td><b>Al mezclar</b></td><td>Se obtienen colores más claros (hasta el blanco)</td><td>Los pigmentos <b>absorben (sustraen)</b> luz: cuantos más, <b>más oscuro</b>, hasta el negro</td></tr>
<tr><td><b>Se usa en</b></td><td>Medios que emiten o capturan luz: fotografía, vídeo, pantallas de TV, móvil, ordenador</td><td>Impresión a color, fotografía impresa, pintura</td></tr></table>
${tip("En el reto te piden los códigos del color en <b>RGB para pantallas</b> y en <b>CMYK para impresión</b>.")}
<h4>Pantone</h4>
<ul><li><b>2025</b>: Mocha Mousse · 17-1230 TCX (moda, decoración, pintura, maquillaje…).</li>
<li><b>2026</b>: Cloud Dancer · 11-4201 (interiorismo, moda, perfumes, textiles…).</li></ul>` },

    u1_papel: { t: "UD 1 · Formatos de papel (A y B) y anatomía de la letra", resumen: "Serie A (DIN 476), serie B y partes de una letra.",
      html: `
<ul><li><b>Formato A</b>: estándar con origen en la norma <b>DIN 476</b> (Deutsches Institut für Normung, Instituto Alemán de Normalización), en las primeras décadas del siglo XX.</li>
<li><b>Formato B</b>: se definió después para obtener <b>tamaños intermedios</b> entre los de la serie A.</li></ul>
<h4>Anatomía de la letra</h4>
<ul><li><b>Asta o fuste</b> (trazo principal) · <b>panza o bucle</b> · <b>ascendente</b> y <b>descendente</b>.</li>
<li><b>Ligadura</b> · <b>remate o serifa</b> · <b>gancho de pie</b> · <b>lágrima o gota</b>.</li></ul>` },

    u1_act: { t: "UD 1 · Actividades evaluables: enunciados y claves de corrección", resumen: "Las 10 actividades, con las ideas clave del solucionario y el comentario de la profesora.",
      html: `
<table><tr><th>#</th><th>Enunciado</th><th>Clave de la respuesta</th></tr>
<tr><td>1</td><td>Qué es la percepción visual y la intencionalidad de la dirección visual de las formas básicas</td><td>Ver «La percepción visual»</td></tr>
<tr><td>2</td><td>Composición a mano en A4 con formas básicas y <b>colores primarios</b> (JPG) y comentario</td><td>Libre interpretación</td></tr>
<tr><td>3</td><td>Importancia del equilibrio en una composición</td><td>Necesidad humana de equilibrio; determina dónde va cada elemento</td></tr>
<tr><td>4</td><td>Composición A4 con formas básicas, <b>colores análogos</b>, basada en <b>equilibrio y simetría</b> (PDF) y comentario</td><td>Libre, pero debe cumplir equilibrio y simetría</td></tr>
<tr><td>5</td><td>Ley de la figura-fondo de la Gestalt</td><td>Ver «Equilibrio y figura-fondo»</td></tr>
<tr><td>6</td><td>Técnicas contrarias a economía, predictibilidad, realismo</td><td>Profusión, espontaneidad, distorsión</td></tr>
<tr><td>7</td><td>Síntesis aditiva vs sustractiva</td><td>RGB (luz) vs CMYK (pigmento)</td></tr>
<tr><td>8</td><td>Diferencia entre formato A y B</td><td>A: DIN 476 · B: tamaños intermedios</td></tr>
<tr><td>9</td><td>Colores Pantone 2025 y 2026 y su aplicación</td><td>Mocha Mousse y Cloud Dancer</td></tr>
<tr><td>10</td><td>Partes de una letra</td><td>Asta, panza, ascendente, descendente, serifa…</td></tr></table>
${warn("Resultado de la entrega: <b>95/100</b>. La profesora descontó la <b>actividad 4</b>: no guardaba el <b>equilibrio y la simetría</b> pedidos. Lección: cuando el enunciado pida unos principios concretos, que se vean claramente en la composición y coméntalos.")}` },

    u1_reto: { t: "UD 1 · Reto profesional: la sala de fiestas", resumen: "Imagen corporativa para atraer a un público joven: colores, tipografías, logotipo y papel.",
      html: `
<p>Una sala de fiestas con gran trayectoria se remodela para ampliar su público: sus clientes fieles tienen una media de <b>60 años</b> y se van hacia las 3:00. Quieren abrir hasta las <b>6:00</b> y para ello necesitan atraer a un <b>target más joven</b>. Piden una <b>imagen corporativa atractiva para la juventud</b>, <b>folletos y carteles</b> para anunciar la reapertura.</p>
<h4>Qué hay que responder</h4>
<ol><li><b>a)</b> Al menos <b>dos colores corporativos</b>, justificados, con sus códigos <b>RGB</b> (pantalla) y <b>CMYK</b> (impresión).</li>
<li><b>b)</b> Al menos <b>dos tipografías</b> para todos los materiales (carteles, folletos…), argumentadas.</li>
<li><b>c)</b> Un <b>boceto a mano de logotipo</b> (isotipo, imagotipo o isologotipo): elementos visuales usados y técnicas de comunicación visual o <b>leyes de la Gestalt</b> aplicadas, justificadas.</li>
<li><b>d)</b> <b>Tipos de papel y medidas</b> de carteles y folletos (usa los formatos de la serie A/B).</li></ol>
${tip("Une teoría y reto: justifica los colores por su psicología y su público joven, da RGB + CMYK, nombra la técnica visual (p. ej. espontaneidad, distorsión, profusión) y la ley de Gestalt del logotipo, y elige formatos A/B concretos (p. ej. A3 para cartel, A5 para folleto).")}` },

    u2_cont: { t: "UD 2 · Comunicación persuasiva, creatividad y estrategia publicitaria", resumen: "Contenidos de la unidad y la idea central de la comunicación publicitaria.",
      html: `
<ul><li><b>Comunicación publicitaria</b>: la que pretende <b>promocionar un producto o servicio o difundir una marca</b> para que el receptor realice una <b>conversión</b> (tradicionalmente, una compra).</li>
<li>Tiene una clara <b>dimensión persuasiva</b>: usa técnicas creativas y persuasivas para elegir los mejores mensajes y provocar la respuesta adecuada en el <b>público objetivo</b>.</li></ul>
<h4>Contenidos de la unidad</h4>
<ul><li>El concepto de <b>creatividad</b> y de persona creativa.</li><li><b>Creatividad publicitaria</b>.</li>
<li>Técnicas de <b>comunicación persuasiva</b> y <b>estrategias publicitarias</b>.</li><li>La <b>comunicación integral</b>.</li></ul>
${tip("Cuando tengas el PDF de la UD 2, pásamelo y completo estos apuntes con las técnicas y estrategias concretas.")}` },

    u3_cont: { t: "UD 3 · Preparación de materiales de comunicación", resumen: "Papelería, etiquetado y envase, soportes exteriores, digitales y otros.",
      html: `
<ul><li>Cualquier empresa tiene materiales de comunicación, desde <b>albaranes o facturas</b> hasta un <b>spot de televisión</b> o anuncios en marquesinas. Deben diseñarse conforme a la <b>imagen corporativa</b> (lo que la empresa quiere transmitir).</li></ul>
<h4>Contenidos</h4>
<ul><li><b>Papelería corporativa</b>.</li><li><b>Etiquetado, envase y embalaje</b>.</li><li><b>Soportes de publicidad exterior</b>.</li><li><b>Soportes digitales</b>.</li><li><b>Otros soportes</b>.</li></ul>
<h4>Entregas</h4>
<ul><li>Actividades con <b>Canva</b> (enlace en Aules) · PDF · hasta el 1 nov, 23:59.</li>
<li>Reto: en el apartado F) de <b>email marketing</b>, además de enviar el correo, incluye la <b>captura en el PDF</b>.</li></ul>
${tip("Cuando tengas el PDF de la UD 3, pásamelo y lo completo con el temario detallado.")}` },

    u4_cont: { t: "UD 4 · Fuentes de información y normativa (contenidos previstos)", resumen: "Todavía no disponible en Aules.",
      html: `<ul><li>Fuentes de información.</li><li>Búsqueda de imágenes.</li><li><b>Derechos de autor</b>.</li><li>Normativa reguladora de imágenes y embalajes.</li></ul><p>RA1 (junto con UD 3): 20 % de la nota de teoría.</p>` },

    u5_cont: { t: "UD 5 · Redacción y maquetación (contenidos previstos)", resumen: "Todavía no disponible en Aules.",
      html: `<ul><li>Funciones del procesador de textos.</li><li>Maquetación y composición de diseños de textos.</li><li>Redacción y maquetación de anuncios de prensa.</li></ul><p>RA4: 20 %.</p>` },

    u6_cont: { t: "UD 6 · Herramientas para materiales publicitarios (contenidos previstos)", resumen: "Todavía no disponible en Aules.",
      html: `<ul><li>Programas generalistas.</li><li>Programas específicos de diseño gráfico.</li><li>Programas de manipulación de imágenes.</li><li>Programas de diseño web.</li><li>Elaboración de material de seguridad y copias de seguridad.</li></ul><p>RA4: 20 %.</p>` },

    u7_cont: { t: "UD 7 · Plan de difusión (contenidos previstos)", resumen: "Todavía no disponible en Aules.",
      html: `<ul><li>Plan de difusión.</li><li>Planificación.</li><li>Ejecución.</li><li>Contratación.</li></ul><p>RA5: 10 %.</p>` },

  },
};
