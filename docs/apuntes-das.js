// Apuntes de «Digitalització aplicada al sistema productiu» (cuenta de Mireia). Unidad 1.
// Para añadir otra unidad: nuevo objeto en `semanas`, sus ejercicios en `ejercicios` y sus temas en `temas`.
const DAS_APUNTES = {
  semanas: [
    { n: "U1", titulo: "Unidad 1 · Digitalización de los sectores productivos",
      temas: ["u1_repaso", "u1_intro", "u1_rev", "u1_r1", "u1_r2", "u1_r3", "u1_r4", "u1_dig", "u1_emp", "u1_otit", "u1_ext", "u1_act"],
      ejercicios: ["Actividad 1.1"] },
  ],
  ejercicios: {
    "Actividad 1.1": ["Actividad 1.1 · El gimnasio de María", "Caso práctico: digitalizar un gimnasio tras las inundaciones. Hay que responder 3 cuestiones iniciales (beneficios y desventajas, ventajas y captación de clientes, otras innovaciones). Dudas en privado: diálogo de Aules."],
  },
  temas: {

    u1_repaso: { t: "⭐ Resumen exprés para el examen", resumen: "Lo esencial de la unidad en una página: fechas, tablas y conceptos que más caen.",
      html: `
<h4>Las 4 revoluciones industriales de un vistazo</h4>
<table><tr><th>Revolución</th><th>Cuándo</th><th>Motor / clave</th><th>Industrias o ejemplos</th></tr>
<tr><td><b>1ª · Mecanización</b></td><td>≈1770–1850 (hito 1784)</td><td>Máquina de vapor, energía hidráulica, mecanización</td><td>Textil, metalúrgica, transportes</td></tr>
<tr><td><b>2ª · Electrificación</b></td><td>≈1850–1945 (hito 1870)</td><td>Electricidad, petróleo, producción en masa y cadena de montaje</td><td>Química, siderúrgica, comunicaciones</td></tr>
<tr><td><b>3ª · Automatización</b></td><td>Década de 1970 (hito 1969)</td><td>Electrónica, informática, tecnologías digitales</td><td>Ordenadores personales, móviles, internet (WWW en los 90), biotecnología, ingeniería energética</td></tr>
<tr><td><b>4ª · Digitalización</b></td><td>Desde 2011 (siglo XXI)</td><td>Sistemas ciberfísicos (CPS), redes, robots, IoT</td><td>Nube, IA, blockchain, VR/AR, impresión 3D</td></tr></table>
${tip("Truco: <b>vapor → masa/electricidad → ordenador → ciberfísico/IoT</b>. Ojo, la infografía da hitos (1784, 1870, 1969, 2011) y el texto da periodos (1770–1850, 1850–1945, años 70, 2011): conoce los dos.")}
<h4>Definiciones que hay que saber decir con tus palabras</h4>
<ul><li><b>Digitalización</b>: proceso por el que la información, los procesos y los servicios se transforman en <b>datos digitales</b> que se pueden crear, almacenar, compartir y analizar con tecnologías avanzadas. En una empresa: hacer de forma electrónica lo que antes se hacía en papel y a mano.</li>
<li><b>Sistema ciberfísico (CPS)</b>: producción automatizada e interconectada (4ª revolución).</li>
<li><b>OT (tecnología operativa)</b>: sistemas, máquinas y software que <b>controlan procesos físicos</b> («digitalización en planta», los «brazos y piernas» de la empresa).</li>
<li><b>IT (tecnología de la información)</b>: herramientas y sistemas para <b>crear, almacenar, procesar, proteger y transmitir información digital</b> («digitalización en negocio»).</li>
<li><b>Organigrama</b>: representación de la estructura de la empresa. El cargo de mayor responsabilidad es el <b>CEO</b> (Chief Executive Officer).</li>
<li><b>Digitalización de extremo a extremo</b>: implantar tecnologías digitales en todas o algunas actividades de la empresa industrial.</li></ul>
<h4>Listas que suelen preguntar</h4>
<ul><li><b>4 ventajas de digitalizar</b>: eficiencia y precisión · comunicación inmediata con clientes · trabajo más fácil y coordinado (teletrabajo) · nuevas oportunidades de negocio.</li>
<li><b>4 tecnologías disruptivas (4ª rev.)</b>: conectividad/datos/potencia computacional · análisis e inteligencia · realidad virtual y aumentada (robótica, automatización, vehículos autónomos) · ingeniería avanzada (fabricación aditiva, renovables).</li>
<li><b>3 dimensiones de la ecoeficiencia</b>: acciones basadas en datos · mejoras en costes, agilidad y calidad · avances en sostenibilidad.</li>
<li><b>3 áreas de crecimiento responsable (ESG)</b>: medioambiental · social · gobernanza.</li>
<li><b>5 departamentos esenciales</b>: marketing · comercial · administrativo · recursos humanos · finanzas.</li>
<li><b>6 tecnologías de la digitalización de extremo a extremo</b>: robótica · IoT · IA · ciberseguridad · visión por computadora · fabricación aditiva (3D).</li>
<li><b>8 aplicaciones empresariales</b>: documentos digitales · procesos automatizados · comunicación electrónica · almacenamiento en la nube · comercio electrónico · análisis de datos · IoT · realidad virtual y aumentada.</li></ul>
<h4>Lo que te servirá en prácticas</h4>
<ul><li>Saber <b>clasificar</b> cualquier tecnología como IT (datos/negocio) u OT (planta/proceso físico).</li>
<li>Saber <b>justificar</b> con ventajas concretas por qué digitalizar un proceso (ahorra tiempo, evita errores, mejora la comunicación, abre negocio).</li>
<li>Recordar que acceder a sistemas digitales hoy exige <b>doble verificación</b> (SMS, otra plataforma, PIN) y que cada departamento gestiona <b>permisos y perfiles</b> en sus directorios.</li></ul>` },

    u1_intro: { t: "Introducción: la empresa «de antes» y la «de ahora»", resumen: "Qué se ha digitalizado y por qué las máquinas ahora son «inteligentes».",
      html: `
<ul><li>Lo que antes se hacía <b>de forma manual</b> se ha ido digitalizando al desarrollarse tecnologías que facilitan el trabajo de trabajadores y directivos.</li>
<li>Ejemplos de la sustitución: <b>cálculos a mano → hojas Excel</b> · <b>informes escritos → documentos Word compartidos</b> · <b>cartas → correo electrónico</b> · <b>teléfonos → smartphones</b>.</li>
<li>No solo hemos introducido máquinas: las hemos hecho <b>«inteligentes»</b>. Se les incorpora <b>software cada vez más potente</b> para que «piensen» (<b>analicen y procesen información</b>) y, a partir de ello, <b>tomen decisiones de forma autónoma</b>.</li></ul>
<h4>Preguntas con las que arranca la unidad (debes saber contestarlas al terminar)</h4>
<ol><li>¿En qué consiste la digitalización de una empresa?</li><li>¿Cómo cambia la tecnología digital a las empresas?</li><li>¿Qué son las tecnologías IT y OT?</li></ol>` },

    u1_rev: { t: "1.1 Las revoluciones industriales: principales elementos", resumen: "Qué es una revolución industrial y qué cambió en la industria y fuera de ella.",
      html: `
<ul><li>La <b>revolución industrial</b> es un importante proceso de transformaciones <b>sociales, económicas, culturales y, finalmente, tecnológicas</b>.</li>
<li>Surgió en <b>Inglaterra</b> en el <b>siglo XVIII</b> y después se extendió a otros países.</li>
<li>Los cambios tecnológicos fueron muy importantes para el desarrollo económico y social posterior.</li></ul>
<h4>Cambios en la esfera industrial</h4>
<table><tr><th>Ámbito</th><th>Qué cambió</th></tr>
<tr><td>Nuevos materiales</td><td>Hierro y acero</td></tr>
<tr><td>Nuevas fuentes de energía</td><td>Máquina de vapor, electricidad, petróleo, carbón…</td></tr>
<tr><td>Nuevas máquinas</td><td>Telar mecánico</td></tr>
<tr><td>Organización del trabajo</td><td>Mayor <b>división de tareas</b> y <b>especialización</b> de funciones</td></tr>
<tr><td>Trabajadores</td><td>Adquieren <b>nuevas habilidades</b>; las herramientas manuales se sustituyen por <b>maquinaria industrial</b></td></tr>
<tr><td>Transporte y comunicaciones</td><td>Locomotora, barco de vapor, automóvil, avión, radio, telégrafo</td></tr></table>
<h4>Cambios fuera de la industria</h4>
<ul><li>Mejoró la <b>agricultura</b> (más alimentos), pero dejó de ser la principal fuente de riqueza: aumentó la <b>producción industrial</b>.</li>
<li><b>Cambios políticos</b>.</li>
<li><b>Cambios sociales</b>: las ciudades crecieron notablemente y surgieron movimientos de la clase trabajadora que permitieron organizar la mano de obra.</li></ul>
<h4>Las cuatro etapas (infografía)</h4>
<table><tr><th>Etapa</th><th>Año hito</th><th>Claves</th></tr>
<tr><td>Mecanizado</td><td>1784</td><td>Mecanización de la fabricación, energía de vapor, telar</td></tr>
<tr><td>Electrificación</td><td>1870</td><td>Producción en masa, línea de montaje, energía eléctrica</td></tr>
<tr><td>Automatización</td><td>1969</td><td>Electrónica de automatización, ordenador</td></tr>
<tr><td>Digitalización</td><td>2011</td><td>Sistemas ciberfísicos, redes, robots, IoT</td></tr></table>` },

    u1_r1: { t: "1.1.1 Primera revolución industrial", resumen: "1770–1850, Inglaterra: de la agricultura a la industria; vapor y mecanización.",
      html: `
<ul><li><b>Dónde y cuándo</b>: Inglaterra, siglo XVIII; en concreto <b>de 1770 a 1850</b> aproximadamente.</li>
<li><b>Cambio de modelo económico</b>: de uno basado en la <b>agricultura</b> a otro basado en la <b>industria</b>.</li>
<li><b>Principales industrias</b>: <b>textil, metalúrgica y transportes</b>.</li>
<li><b>Destacan</b>: la <b>máquina de vapor</b>, la <b>energía hidráulica</b> y la <b>mecanización</b>.</li></ul>
<h4>Cambios socioculturales</h4>
<ul><li><b>Al principio</b>: largas jornadas, salarios muy escasos, condiciones insalubres y de explotación.</li>
<li><b>Después</b>, gracias a la <b>lucha obrera</b>, el surgimiento de los <b>sindicatos</b>, la <b>intervención del Estado</b> y los avances económicos, se redujeron las jornadas y mejoraron salarios y calidad de vida.</li></ul>` },

    u1_r2: { t: "1.1.2 Segunda revolución industrial", resumen: "1850–1945: electricidad, petróleo, producción en serie y nuevas industrias.",
      html: `
<ul><li><b>Cuándo</b>: de <b>1850 a 1945</b> aproximadamente.</li>
<li><b>Principales potencias</b>: Reino Unido, Estados Unidos, Alemania… (la expansión llegó también a Japón).</li>
<li><b>Innovaciones más destacadas</b>: la <b>electricidad</b> y el <b>petróleo</b> como fuente de energía para la <b>producción masiva</b>.</li>
<li><b>Principales industrias</b>: <b>química, siderúrgica y comunicaciones</b>.</li>
<li><b>Cambios productivos</b>: empresas de mayor tamaño, la banca gana peso y surgen los <b>polígonos industriales</b>.</li></ul>
<h4>Características principales</h4>
<table><tr><th>Característica</th><th>Detalle</th></tr>
<tr><td>Expansión geográfica</td><td>Se extiende a Alemania, Estados Unidos y Japón</td></tr>
<tr><td>Producción en serie</td><td>Producción en cadena con la <b>cadena de montaje</b></td></tr>
<tr><td>Desarrollo del transporte</td><td>Ferrocarril y embarcaciones (movimiento de personas y mercancías); la electricidad hizo posible el <b>tranvía</b>; además, automóvil y avión</td></tr>
<tr><td>Nuevos materiales y energía</td><td>Acero, <b>aluminio</b> y <b>plástico</b>; petróleo y electricidad. <b>Edison</b> inventó la <b>lámpara incandescente</b> (alumbrado público y privado)</td></tr>
<tr><td>Telecomunicaciones</td><td><b>Teléfono</b> y <b>radio</b>; también fonógrafo, cine, bombilla y dinamita</td></tr>
<tr><td>Ciencia y química</td><td>Avances en medicina y sanidad (control de enfermedades). <b>Pasteur</b>: pasteurización · <b>Hoffman</b>: aspirina · <b>fertilizantes</b> que transformaron la producción agrícola</td></tr></table>
${tip("Pregunta típica de relacionar: <b>Edison → lámpara incandescente · Pasteur → pasteurización · Hoffman → aspirina</b>.")}` },

    u1_r3: { t: "1.1.3 Tercera revolución industrial", resumen: "Años 70 (siglo XX): aparición de las tecnologías digitales y la informática.",
      html: `
<ul><li><b>Cuándo</b>: siglo XX, en concreto en la <b>década de 1970</b>.</li>
<li><b>Característica principal</b>: la <b>aparición de las tecnologías digitales</b> y el <b>nacimiento de la informática</b>.</li>
<li><b>Otras innovaciones</b>:
 <ul><li><b>Biotecnología</b>: técnica de manipulación de sustancias vivas para la producción alimenticia o farmacéutica.</li>
 <li><b>Ingeniería energética</b>: búsqueda y desarrollo de nuevas fuentes de energía, como las <b>renovables</b>.</li></ul></li></ul>
<h4>Línea temporal</h4>
<table><tr><th>Década</th><th>Qué pasó</th></tr>
<tr><td><b>1970</b></td><td>Se empiezan a fabricar y comercializar <b>ordenadores personales y teléfonos móviles</b> en EEUU y Japón</td></tr>
<tr><td><b>1990</b></td><td>Se difunde el uso de ordenadores y comienza la era de la <b>World Wide Web</b>, que extiende el uso de <b>internet</b></td></tr></table>` },

    u1_r4: { t: "1.1.4 Cuarta revolución industrial", resumen: "Desde 2011: digitalización, sistemas ciberfísicos, 4 tecnologías disruptivas y ecoeficiencia.",
      html: `
<ul><li>Es la <b>fase de digitalización</b> que tiene lugar en el <b>siglo XXI</b>; comenzó a partir de <b>2011</b>.</li>
<li><b>Digitalización</b> = proceso por el cual la información, los procesos y los servicios se transforman en <b>datos digitales</b> que pueden ser creados, almacenados, compartidos y analizados con ayuda de <b>tecnologías avanzadas</b>.</li>
<li>La realiza un <b>perfil técnico, como un informático</b>.</li>
<li>Cambio a la <b>producción automatizada e interconectada</b> basada en los <b>sistemas ciberfísicos (CPS)</b>.</li></ul>
<h4>4 tipos de tecnologías disruptivas</h4>
<table><tr><th>Tecnología</th><th>Incluye</th></tr>
<tr><td>Conectividad, datos y potencia computacional</td><td>Tecnología en la <b>nube</b>, Internet, <b>blockchain</b> y <b>sensores</b></td></tr>
<tr><td>Análisis e inteligencia</td><td><b>Aprendizaje automático</b> e <b>IA</b></td></tr>
<tr><td>Realidad virtual (VR) y aumentada (AR)</td><td>En la infografía se asocia con <b>robótica, automatización y vehículos guiados de forma autónoma</b></td></tr>
<tr><td>Ingeniería avanzada</td><td><b>Fabricación aditiva</b> (impresión 3D) y <b>energías renovables</b></td></tr></table>
<h4>Ecoeficiencia (sostenibilidad + excelencia competitiva): 3 dimensiones</h4>
<ol><li>Permite <b>acciones basadas en datos</b> en la producción y en la <b>cadena de valor</b>.</li>
<li>Supone mejoras en <b>costes, agilidad y calidad</b>.</li>
<li>Impulsa avances en <b>sostenibilidad</b>: limita el consumo, el desperdicio de recursos y las emisiones.</li></ol>
<h4>Crecimiento responsable a largo plazo: 3 áreas</h4>
<ol><li><b>Medioambiental</b>: cuidar el planeta y el medio ambiente.</li>
<li><b>Social</b>: fuerza laboral y comunidad más potentes (capital humano, salud y seguridad laboral, conciliación familiar).</li>
<li><b>Gobernanza</b>: prácticas, controles y procedimientos para tomar decisiones.</li></ol>` },

    u1_dig: { t: "1.2 ¿Qué es la digitalización? Ventajas y aplicaciones", resumen: "Definición, las 4 ventajas y los 8 ejemplos de cómo se digitalizan las empresas.",
      html: `
<ul><li>La digitalización abarca actividades de <b>empresas y de cualquier persona</b> en su día a día: nos permite ser <b>más eficientes</b> y estar <b>conectados en tiempo real</b>.</li>
<li><b>En las empresas</b>: transformar la información <b>analógica</b> (palabras, imágenes o datos numéricos) en <b>formatos digitales</b> usando tecnología; es decir, hacer de forma electrónica las tareas que se hacían <b>en papel y de forma manual</b>.</li>
<li>Permite a las empresas <b>aumentar sus ingresos</b> y <b>modernizar sus herramientas de trabajo</b>: cambia procesos analógicos por digitales (reuniones por videoconferencia, mensajes por email) y se <b>digitalizan documentos</b>.</li></ul>
<h4>Las 4 ventajas de la digitalización</h4>
<table><tr><th>#</th><th>Ventaja</th><th>Ejemplo del temario</th></tr>
<tr><td>1</td><td><b>Incrementa la eficiencia y la precisión</b></td><td>Una tienda online procesa pedidos automáticamente: ahorra tiempo y evita errores frente al procesamiento manual</td></tr>
<tr><td>2</td><td><b>Comunicación inmediata con los clientes</b> (dudas, quejas, compras)</td><td>Contratar vacaciones desde casa: alojamiento, restaurantes, espectáculos, coches de alquiler, entradas…</td></tr>
<tr><td>3</td><td><b>Facilita el trabajo</b>: información accesible de manera inmediata</td><td>Trabajar más rápido y coordinado; <b>teletrabajo</b> y <b>equipos internacionales</b></td></tr>
<tr><td>4</td><td><b>Genera nuevas oportunidades de negocio</b></td><td>Libros electrónicos, cursos online, software de pago por uso en la nube, videojuegos online, recomendaciones de un <i>influencer</i></td></tr></table>
<h4>8 ejemplos: ¿cómo se digitalizan las empresas?</h4>
<table><tr><th>Aplicación</th><th>Idea clave</th></tr>
<tr><td>1. Documentos digitales</td><td>Migran del papel a formatos electrónicos, almacenados y compartidos en la nube: más fácil buscar, compartir y actualizar</td></tr>
<tr><td>2. Procesos automatizados</td><td>Software y sistemas informáticos automatizan tareas: menos empleados en tareas repetitivas y menos errores</td></tr>
<tr><td>3. Comunicación electrónica</td><td>Email, chats (WhatsApp) o SMS en lugar de correo postal; comunicación en tiempo real o diferida; agiliza el seguimiento de pedidos o tareas</td></tr>
<tr><td>4. Almacenamiento en la nube</td><td>Información en servidores online: acceso desde cualquier lugar, por cualquier persona autorizada, solo con un dispositivo con conexión</td></tr>
<tr><td>5. Comercio electrónico</td><td>Compraventa mediante plataformas digitales, sin necesidad de tiendas físicas</td></tr>
<tr><td>6. Análisis de datos</td><td>Herramientas digitales recopilan, procesan y analizan grandes cantidades de datos → decisiones informadas</td></tr>
<tr><td>7. Internet de las cosas (IoT)</td><td>Conectar objetos cotidianos a Internet: neveras, sensores, relojes inteligentes</td></tr>
<tr><td>8. Realidad virtual y aumentada</td><td>Experiencias que mezclan objetos reales con elementos virtuales: juegos, simulaciones, escenarios</td></tr></table>` },

    u1_emp: { t: "1.3 Estructura de la empresa y digitalización de los departamentos", resumen: "Departamentos, organigramas, CEO, directorios con permisos y doble verificación.",
      html: `
<ul><li>La empresa se estructura en <b>departamentos</b>, formados por <b>trabajadores</b> con más o menos experiencia (becarios, <i>junior</i>, <i>sénior</i>…) que realizan las tareas.</li>
<li><b>Departamentos esenciales</b>: <b>1. Marketing · 2. Comercial · 3. Administrativo · 4. Recursos humanos · 5. Finanzas</b>.</li>
<li>La estructura se representa mediante <b>organigramas</b>. El cargo de mayor responsabilidad es el <b>CEO</b> (<i>Chief Executive Officer</i>).</li>
<li>Ejemplo de organigrama visto: un CEO arriba, directivos debajo y áreas como RR. HH., contabilidad, marketing y almacén.</li></ul>
<h4>1.3.1 Digitalización de los departamentos</h4>
<ul><li>Cada departamento <b>administra informáticamente</b> su proceso de digitalización.</li>
<li>El proceso consiste en la <b>creación de directorios</b> que contienen <b>permisos, recursos, materiales y perfiles</b> a los que pueden acceder los trabajadores.</li>
<li><b>Antes</b>: acceso con <b>correo y contraseña</b>. <b>Ahora</b>: <b>doble verificación de usuario</b>.</li>
<li><b>Ejemplos de doble verificación</b>: envío de un <b>SMS</b> al móvil · acceso a <b>otra plataforma</b> de verificación · introducción de un <b>PIN</b>.</li></ul>
${tip("Para prácticas: al dar de alta a un trabajador piensa en <b>qué directorio, permisos y perfil</b> necesita según su departamento, y activa siempre la doble verificación.")}` },

    u1_otit: { t: "1.4 Entornos OT e IT", resumen: "Diferencias entre tecnología operativa (planta) y de la información (negocio), con ejemplos.",
      html: `
<table><tr><th></th><th>OT · Tecnología operativa</th><th>IT · Tecnología de la información</th></tr>
<tr><td><b>Qué es</b></td><td>Sistemas, máquinas y software que <b>controlan y supervisan los procesos físicos</b> de una empresa</td><td>Herramientas, sistemas y recursos para <b>crear, almacenar, procesar, proteger y transmitir información digital</b></td></tr>
<tr><td><b>También llamada</b></td><td><b>Digitalización en planta</b></td><td><b>Digitalización en negocio</b></td></tr>
<tr><td><b>Foco</b></td><td>Control y <b>automatización</b> de procesos físicos (entornos domésticos, industriales y comerciales)</td><td><b>Procesamiento y gestión de datos</b> (redes de datos, lenguajes de programación, bases de datos)</td></tr>
<tr><td><b>Metáfora</b></td><td>Los <b>brazos y piernas</b> de la compañía</td><td>El «cerebro» que gestiona la información</td></tr>
<tr><td><b>Dónde se ve</b></td><td>Fábricas, plantas de energía, transportes, infraestructuras; sectores industrial, <b>atención médica</b> y transporte</td><td>Oficinas, centros de datos, plataformas</td></tr>
<tr><td><b>Ejemplos</b></td><td>Sensores de luz · termostatos que reaccionan a una temperatura · cámaras que siguen el movimiento · brazos robóticos · vehículos de conducción autónoma</td><td>Algoritmos de un navegador · aplicaciones que analizan y presentan datos en gráficos · traducción simultánea · simulaciones de vuelo · plataformas de trabajo colaborativo</td></tr>
<tr><td><b>Requisitos</b></td><td>—</td><td><b>Actualizaciones constantes</b> de equipos y niveles de <b>seguridad</b></td></tr></table>
${tip("Regla rápida: si <b>toca el mundo físico</b> (mueve, mide, controla algo) → <b>OT</b>. Si <b>maneja datos o información</b> → <b>IT</b>. Las empresas buscan la transformación digital tanto en su <b>producción</b> (OT) como en su <b>gestión</b> (IT).")}` },

    u1_ext: { t: "1.5 Digitalizar una empresa industrial de extremo a extremo", resumen: "Qué es y las 6 tecnologías presentes: robótica, IoT, IA, ciberseguridad, visión y 3D.",
      html: `
<ul><li>Consiste en <b>implementar tecnologías digitales en todas o algunas de sus actividades</b>.</li>
<li>Hay varias formas de hacerlo, pero estas tecnologías están presentes en estos procesos:</li></ul>
<table><tr><th>Tecnología</th><th>Para qué sirve</th></tr>
<tr><td><b>Robótica</b></td><td>Automatizar tareas</td></tr>
<tr><td><b>IoT</b></td><td>Captar información de interés y trasladarla al sistema para que la procese</td></tr>
<tr><td><b>IA</b></td><td>Analizar datos mediante algoritmos</td></tr>
<tr><td><b>Ciberseguridad</b></td><td>Proteger y almacenar los datos recogidos, gestionados y analizados en la nube</td></tr>
<tr><td><b>Visión por computadora</b></td><td>Capturar imágenes con cámara para revisar procesos: comprobar y <b>desechar productos que no cumplan los estándares</b></td></tr>
<tr><td><b>Fabricación aditiva (3D)</b></td><td>Fabricar piezas complejas en <b>menos tiempo y con menos recursos</b></td></tr></table>
${tip("Clasifícalas: robótica, IoT, visión por computadora y fabricación aditiva son sobre todo <b>OT</b>; IA y ciberseguridad son sobre todo <b>IT</b>.")}` },

    u1_act: { t: "Actividad 1.1 · El gimnasio de María (enunciado e ideas)", resumen: "Caso práctico de digitalización y pistas del temario para las 3 cuestiones iniciales.",
      html: `
<h4>El caso</h4>
<p>Las inundaciones dejaron el gimnasio de María casi en ruinas. Al tener que empezar casi de cero, decide sumarse a la <b>revolución digital aplicada al fitness</b>. Una empresa de maquinaria le presenta su catálogo:</p>
<ul><li><b>Reconocimiento facial</b> para acceder a las instalaciones.</li>
<li>Máquinas con <b>pantalla táctil</b> que muestran cómo hacer los ejercicios y ajustan pesos y repeticiones según el progreso del cliente.</li>
<li><b>Pulseras inteligentes</b> que recogen datos y monitorizan el rendimiento para crear recomendaciones personalizadas y dietas.</li>
<li><b>Gestión de reservas y citas online</b>.</li></ul>
<p>Su gimnasio siempre ha sido «de toda la vida» y quiere mantener ese espíritu mejorando la experiencia con una atención aún más <b>personalizada</b>.</p>
<h4>Cuestiones iniciales</h4>
<ol><li>¿Beneficios y desventajas de pasar de un enfoque tradicional a uno digital?</li>
<li>¿Qué ventajas aportará la digitalización del gimnasio? ¿Atraerá a nuevos clientes?</li>
<li>¿Qué otra innovación tecnológica se podría aplicar?</li></ol>
<h4>Ideas para responder (adáptalas con tus palabras)</h4>
<p><b>1. Beneficios y desventajas</b></p>
<ul><li><b>Beneficios</b> (las 4 ventajas del tema 1.2): más <b>eficiencia y precisión</b> (reservas automáticas, menos errores), <b>comunicación inmediata</b> con los clientes, información accesible y trabajo más coordinado, <b>nuevas oportunidades de negocio</b>.</li>
<li><b>Desventajas</b>: inversión inicial y mantenimiento (los entornos IT necesitan actualizaciones constantes) · formación del personal y de los clientes · dependencia de la tecnología · <b>ciberseguridad y protección de datos</b> (el reconocimiento facial y las pulseras manejan datos personales y de salud) · riesgo de perder el trato cercano del gimnasio tradicional.</li></ul>
<p><b>2. Ventajas para el gimnasio y captación de clientes</b></p>
<ul><li>Reservas y citas online → <b>procesos automatizados</b>: ahorran tiempo y evitan errores.</li>
<li>Pulseras (<b>IoT</b>) + análisis de datos/<b>IA</b> → recomendaciones y dietas <b>personalizadas</b>.</li>
<li>Reconocimiento facial → acceso rápido y control de entradas (cuidado con la privacidad).</li>
<li>Pantallas táctiles → el cliente progresa solo y se adapta su rutina.</li>
<li><b>Sí puede atraer clientes</b>: ofrece una experiencia diferencial y personalizada, canales de comunicación inmediatos y nuevos servicios (por ejemplo, planes de entrenamiento o dieta de pago).</li></ul>
<p><b>3. Otras innovaciones posibles</b></p>
<ul><li><b>IT</b>: app móvil con rutinas, seguimiento y reservas · clases virtuales o a la carta (nuevo negocio, como los cursos online) · pagos y contratos digitales · CRM/mensajería para avisos y quejas · cuadro de mandos con datos de ocupación y uso.</li>
<li><b>OT</b>: sensores en las máquinas para detectar averías y planificar mantenimiento · control de aforo en tiempo real · termostatos y sensores para climatización y ahorro energético.</li>
<li><b>VR/AR</b>: entrenamientos inmersivos o corrección de postura con realidad aumentada.</li></ul>
${warn("Dudas o comentarios sobre la actividad: se consultan en privado en el diálogo de Aules (enlace en el enunciado del curso).")}` },

  },
};
