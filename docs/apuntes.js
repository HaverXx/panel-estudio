// Apuntes de PSP. Para añadir otra asignatura, añade un objeto más a ASIGNATURAS.
const escCodigo = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const code = (s, lang = "java") => `<pre data-lang="${lang}"><code>${escCodigo(s.trim())}</code></pre>`;
const tip = (t) => `<div class="nota">💡 ${t}</div>`;
const warn = (t) => `<div class="nota aviso">⚠️ ${t}</div>`;

const PSP = {
  id: "psp", nombre: "Programación de Servicios y Procesos", corto: "PSP", emoji: "🧵", color: "#7c5cff",
  profesor: "Jesús García",
  // Semanas según Aules. ini/fin = lunes y domingo (año 2026)
  semanas: [
    { n: 1, ini: "2026-09-07", fin: "2026-09-13", titulo: "Presentación y conceptos teóricos", temas: ["conceptos"] },
    { n: 2, ini: "2026-09-14", fin: "2026-09-20", titulo: "Introducción a los hilos", temas: ["intellij", "crear", "lambda", "info"], ejercicios: [1, 2, 3] },
    { n: 3, ini: "2026-09-21", fin: "2026-09-27", titulo: "Suspensión y finalización de hilos", temas: ["suspension", "flags", "interrupt"], ejercicios: [4, 5] },
    { n: 4, ini: "2026-09-28", fin: "2026-10-04", titulo: "Condición de carrera, sección crítica y monitores", temas: ["memoria", "critica", "monitores"] },
    { n: "4b", ini: "2026-10-05", fin: "2026-10-11", titulo: "Mecanismos de sincronización I (sin semana en Aules)", temas: ["synchronized", "waitnotify"], ejercicios: [6, 7, 8] },
    { n: 5, ini: "2026-10-12", fin: "2026-10-18", titulo: "Interbloqueos y Mecanismos de sincronización II", temas: ["deadlock", "locks", "reentrant", "condition"], ejercicios: [9, 10, 11, 12, 13, 14, 15, 16] },
    { n: 6, ini: "2026-10-19", fin: "2026-10-25", titulo: "Gestión de múltiples hilos (Thread Pools)", temas: ["pools", "ejpools"], ejercicios: [17, 18] },
    { n: 7, ini: "2026-10-26", fin: "2026-11-01", titulo: "Programación asíncrona en C#", temas: ["async", "tasks", "callbacks"], ejercicios: [19, 20, 21, 22] },
    { n: 8, ini: "2026-11-02", fin: "2026-11-08", titulo: "Repaso de dudas", temas: [] },
    { n: 9, ini: "2026-11-09", fin: "2026-11-15", titulo: "EXAMEN (Unidad 1)", temas: [], examen: true },
    { n: 10, ini: "2026-11-16", fin: "2026-11-22", titulo: "Unidad 2: Protocolos y Node.js", temas: ["protocolos", "node", "modulos", "npm"] },
  ],
  ejercicios: {
    1: ["Hilo n1→n2 con pausa aleatoria (Runnable, anónima y lambda)", "Crea una clase Runnable, luego clase anónima y luego lambda. El main muestra «El hilo se ha lanzado»."],
    2: ["n hilos que muestran primos hasta un aleatorio", "Hilo 1, Hilo 2… cada uno pausa 500–1000 ms entre primos. Usa Runnable."],
    3: ["Monitor de estado de los hilos cada segundo", "Ampliación del 2: el main imprime ID, nombre y estado hasta que todos acaben."],
    4: ["Juego: detén el contador (flag)", "Número aleatorio 10–20; el hilo cuenta (oculto tras el 5) y el usuario pulsa Enter. Usa un flag volatile."],
    5: ["Escribir «¡Hola mundo!» en fichero hasta interrupt()", "Lambda + interrupt(); cierra el fichero correctamente (try-with-resources / finally)."],
    6: ["Arreglar la clase Log (hilos escribiendo desordenado)", "Mínimos cambios: synchronized en el método escribir."],
    7: ["Fábrica de vehículos eléctricos", "Motor y batería solo se montan tras la carrocería → wait/notify (o join)."],
    8: ["Productor-consumidor de cápsulas de café (8, 8b…)", "wait/notify; el consumidor empaqueta cajas de 6. En 8b espera 1–3 s sin parar al productor."],
    9: ["Analizar el deadlock de la transferencia bancaria", "Explica la secuencia exacta (Ana→Bernat y Bernat→Ana a la vez) y la condición necesaria."],
    10: ["Evitar deadlock ordenando por id", "Bloquear siempre primero el recurso de menor id."],
    11: ["Pizarra y rotulador", "Haz que ambos programadores bloqueen en el mismo orden."],
    12: ["Robots en el almacén: cerrojo en la intersección", "Un Lock por intersección; no cambies el resto del código."],
    13: ["¿Deadlock con 2 intersecciones en orden inverso?", "Camino 1: I1→I2, Camino 2: I2→I1. Explica y propone solución."],
    14: ["Retroceder + espera aleatoria con tryLock", "entrar() devuelve boolean; si false, el robot retrocede y espera un tiempo aleatorio."],
    15: ["Impresora con ReentrantLock sin unlock en finally", "Excepción ⇒ lock nunca se libera. ¿Lock dentro del try? No: si lock() falla, el finally haría unlock sin tenerlo."],
    16: ["Productor-consumidor (8d) con cerrojos y Condition", "Reemplaza synchronized/wait/notify por ReentrantLock + Condition."],
    17: ["Partidas de dados con thread pool fijo de 2", "Pide nº de dados y resultados; cada partida es una tarea que lanza cada 100 ms hasta acertar. Se pueden lanzar varias."],
    18: ["Capturas de pantalla periódicas", "ScheduledExecutorService + clase Capturadora; pide frecuencia y directorio."],
    19: ["Paella asíncrona en C#", "Calentar+sofreír en paralelo con el caldo (Task.WhenAll); luego echar caldo y cocinar."],
    20: ["WPF: label que alterna gris/rojo cada 2 s", "El botón bloquea la UI: usa async/await y Task.Delay en vez de Thread.Sleep."],
    21: ["WPF: descargar un fichero sin bloquear la UI", "HttpClient + await (GetByteArrayAsync / CopyToAsync)."],
    22: ["WPF: barra de progreso al leer un fichero grande", "Lectura async por bloques + callback (IProgress / Dispatcher.Invoke) que actualiza ProgressBar.Value (0–100)."],
  },
  temas: {
    conceptos: {
      t: "Conceptos teóricos", ic: "📚",
      resumen: "Qué es un proceso, un hilo y por qué hace falta la concurrencia.",
      html: `
<h4>Proceso vs hilo</h4>
<ul><li><b>Proceso</b>: programa en ejecución con su <i>propio espacio de memoria</i>. Comunicarlos es caro (pipes, sockets…).</li>
<li><b>Hilo (thread)</b>: unidad de ejecución <i>dentro</i> de un proceso. Los hilos de un proceso <b>comparten memoria</b> (heap) pero cada uno tiene su propia pila.</li></ul>
<h4>Conceptos clave</h4>
<table><tr><th>Término</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td>Concurrencia</td><td>Varias tareas progresan «a la vez» (pueden intercalarse en 1 CPU)</td><td>Navegador descargando y renderizando</td></tr>
<tr><td>Paralelismo</td><td>Varias tareas se ejecutan <i>realmente</i> a la vez (varios núcleos)</td><td>Procesar 4 imágenes en 4 núcleos</td></tr>
<tr><td>Planificador</td><td>Parte del SO que decide qué hilo usa la CPU y cuándo</td><td>Round-robin, prioridades</td></tr>
<tr><td>Cambio de contexto</td><td>Guardar/restaurar el estado de un hilo al cambiarlo por otro (coste)</td><td>—</td></tr>
<tr><td>Servicio</td><td>Proceso que da funcionalidad a otros (normalmente en red)</td><td>Servidor web, BD</td></tr></table>
<h4>Estados de un proceso</h4>
<p><code>Nuevo → Listo → En ejecución → Bloqueado (espera E/S) → Listo … → Terminado</code></p>
${tip("El paralelismo es un caso de concurrencia, no al revés. Pregunta típica de examen.")}`
    },
    intellij: {
      t: "IntelliJ y Java (repaso)", ic: "🛠️",
      resumen: "Entorno de trabajo: proyectos Java en IntelliJ IDEA.",
      html: `<ul><li>Crear proyecto: <b>New Project → Java → JDK 17+</b>. La clase con <code>public static void main(String[] args)</code> es el punto de entrada.</li>
<li>Atajos útiles: <code>psvm</code> + Tab (main), <code>sout</code> + Tab (println), <code>Shift+F10</code> ejecutar, <code>Alt+Enter</code> arreglos rápidos.</li>
<li>Entrada por teclado: <code>Scanner sc = new Scanner(System.in);</code></li></ul>
${code(`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Introduce n1: ");
        int n1 = sc.nextInt();
        System.out.println("Has escrito " + n1);
    }
}`)}`
    },
    crear: {
      t: "Creación de hilos", ic: "🧵",
      resumen: "Thread, Runnable, start() vs run(), join().",
      html: `
<p>Hay dos formas de definir qué hace un hilo. <b>Se prefiere Runnable</b> (no gasta tu única herencia).</p>
<h4>1) Implementar Runnable</h4>
${code(`class Tarea implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++)
            System.out.println(Thread.currentThread().getName() + " -> " + i);
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread h = new Thread(new Tarea(), "Hilo-A");
        h.start();          // crea el hilo y ejecuta run() en él
        h.join();           // el main espera a que termine
        System.out.println("Fin");
    }
}`)}
<h4>2) Extender Thread</h4>
${code(`class MiHilo extends Thread {
    public void run() { System.out.println("Hola desde " + getName()); }
}
new MiHilo().start();`)}
${warn("<code>start()</code> arranca un hilo nuevo. <code>run()</code> llamado directamente se ejecuta en el hilo actual (¡no hay concurrencia!). Un hilo solo puede <code>start()</code>earse una vez (IllegalThreadStateException).")}
<h4>Métodos básicos</h4>
<ul><li><code>join()</code>: esperar a que acabe otro hilo.</li><li><code>Thread.sleep(ms)</code>: dormir el hilo actual (lanza InterruptedException).</li><li><code>setName / getName</code>, <code>setPriority(1..10)</code>, <code>setDaemon(true)</code> (hilos demonio mueren cuando acaban los normales).</li></ul>`
    },
    lambda: {
      t: "Clases anónimas y lambdas", ic: "λ",
      resumen: "Formas cortas de crear hilos (Ejercicio 1 las pide las tres).",
      html: `${code(`// Clase anónima
Thread t1 = new Thread(new Runnable() {
    @Override public void run() { System.out.println("anónima"); }
});

// Lambda (Runnable es interfaz funcional: un solo método)
Thread t2 = new Thread(() -> System.out.println("lambda"));

// Con varias líneas y variable capturada (debe ser final/efectivamente final)
int n = 5;
Thread t3 = new Thread(() -> {
    for (int i = 1; i <= n; i++) System.out.println(i);
});
t1.start(); t2.start(); t3.start();`)}
<ul><li>La lambda solo puede usar variables locales <b>efectivamente finales</b>.</li><li>Para usar un contador mutable desde un hilo: atributo de clase, array de 1 elemento o <code>AtomicInteger</code>.</li></ul>
${tip("Referencia a método: <code>new Thread(Main::miMetodo).start()</code> (así lo usa el Ejercicio 11).")}`
    },
    info: {
      t: "Información de los hilos", ic: "🔎",
      resumen: "ID, nombre, prioridad y los 6 estados de Thread.State.",
      html: `${code(`Thread t = new Thread(() -> {});
System.out.println(t.getId());          // identificador (threadId() en Java 19+)
System.out.println(t.getName());        // "Thread-0" por defecto
System.out.println(t.getState());       // NEW
System.out.println(t.isAlive());        // false hasta start()
System.out.println(Thread.currentThread().getName()); // "main"`)}
<h4>Estados (Thread.State)</h4>
<table><tr><th>Estado</th><th>Cuándo</th></tr>
<tr><td><code>NEW</code></td><td>Creado, sin start()</td></tr>
<tr><td><code>RUNNABLE</code></td><td>Ejecutándose o listo para ejecutarse</td></tr>
<tr><td><code>BLOCKED</code></td><td>Esperando entrar en un bloque <code>synchronized</code></td></tr>
<tr><td><code>WAITING</code></td><td>wait(), join() sin tiempo, park()</td></tr>
<tr><td><code>TIMED_WAITING</code></td><td>sleep(ms), wait(ms), join(ms)</td></tr>
<tr><td><code>TERMINATED</code></td><td>run() ha finalizado</td></tr></table>
<p>Ejercicio 3: en un bucle del main, <code>while (algunoVivo) { for (Thread h : hilos) print(h.getId(), h.getName(), h.getState()); Thread.sleep(1000); }</code></p>`
    },
    suspension: {
      t: "Suspensión de hilos", ic: "⏸️",
      resumen: "sleep, yield, join y por qué suspend()/resume() están obsoletos.",
      html: `<ul><li><code>Thread.sleep(ms)</code>: pausa el hilo actual; <b>no libera</b> los monitores que tenga.</li>
<li><code>Thread.yield()</code>: sugiere ceder la CPU (no garantizado).</li>
<li><code>t.join()</code>: espera a que <code>t</code> termine.</li>
<li><code>suspend()</code>, <code>resume()</code>, <code>stop()</code>: <b>deprecated</b> (dejan locks tomados → deadlocks/datos corruptos).</li></ul>
${code(`int pausa = new Random().nextInt(1000) + 1;   // 1..1000 ms
try {
    Thread.sleep(pausa);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();   // restaurar el flag
}`)}
${tip("Número aleatorio en [a, b]: <code>rnd.nextInt(b - a + 1) + a</code>.")}`
    },
    flags: {
      t: "Finalización con flags", ic: "🚩",
      resumen: "Detener un hilo con una variable booleana volatile (Ejercicio 4).",
      html: `${code(`class Contador implements Runnable {
    private volatile boolean activo = true;   // volatile: visible entre hilos
    private int n = 0;

    public void detener() { activo = false; }
    public int getN() { return n; }

    @Override public void run() {
        while (activo) {
            n++;
            if (n <= 5) System.out.println(n);
            try { Thread.sleep(1000); } catch (InterruptedException e) { return; }
        }
    }
}

// main
Contador c = new Contador();
Thread t = new Thread(c); t.start();
new Scanner(System.in).nextLine();   // espera Enter
c.detener();
t.join();
System.out.println("Detenido en " + c.getN());`)}
${warn("Sin <code>volatile</code> la JVM puede cachear el booleano y el hilo no ver nunca el cambio.")}
<p><b>Limitación:</b> si el hilo está en un <code>sleep</code> largo no reacciona hasta despertar → para eso están las interrupciones.</p>`
    },
    interrupt: {
      t: "Finalización con interrupciones", ic: "✋",
      resumen: "interrupt(), InterruptedException e isInterrupted() (Ejercicio 5).",
      html: `<ul><li><code>t.interrupt()</code> activa el flag de interrupción de <code>t</code>.</li>
<li>Si <code>t</code> está en sleep/wait/join → lanza <b>InterruptedException</b> y el flag se <b>borra</b>.</li>
<li>Si <code>t</code> está ejecutando código: hay que comprobar <code>Thread.currentThread().isInterrupted()</code>.</li></ul>
${code(`Thread t = new Thread(() -> {
    try (FileWriter fw = new FileWriter("saludo.txt")) {   // se cierra solo
        while (!Thread.currentThread().isInterrupted()) {
            fw.write("¡Hola mundo!\\n");
            Thread.sleep(1000);
        }
    } catch (InterruptedException e) {
        System.out.println("Hilo interrumpido");
    } catch (IOException e) { e.printStackTrace(); }
});
t.start();
// ... el usuario pulsa Enter
t.interrupt();`)}
<table><tr><th>Método</th><th>Efecto sobre el flag</th></tr>
<tr><td><code>isInterrupted()</code></td><td>Lo lee, no lo cambia</td></tr>
<tr><td><code>Thread.interrupted()</code> (estático)</td><td>Lo lee <b>y lo borra</b></td></tr></table>
${tip("Si capturas InterruptedException y no sales, haz <code>Thread.currentThread().interrupt()</code> para no «tragarte» la petición.")}`
    },
    memoria: {
      t: "Memoria compartida y condición de carrera", ic: "🏁",
      resumen: "Por qué count++ no es atómico y qué es una race condition.",
      html: `<p>Si varios hilos leen y escriben la misma variable sin control, el resultado depende del orden en que se intercalan → <b>condición de carrera</b>.</p>
${code(`class Contador { int n = 0; void inc() { n++; } }   // n++ = leer, sumar, escribir (3 pasos)

Contador c = new Contador();
Runnable r = () -> { for (int i = 0; i < 100_000; i++) c.inc(); };
Thread a = new Thread(r), b = new Thread(r);
a.start(); b.start(); a.join(); b.join();
System.out.println(c.n);   // ¡casi nunca 200000!`)}
<h4>Traza del fallo</h4>
<table><tr><th>Hilo A</th><th>Hilo B</th><th>n</th></tr>
<tr><td>lee n (0)</td><td></td><td>0</td></tr><tr><td></td><td>lee n (0)</td><td>0</td></tr>
<tr><td>escribe 1</td><td></td><td>1</td></tr><tr><td></td><td>escribe 1</td><td>1 (¡se perdió un incremento!)</td></tr></table>
<p>Soluciones: exclusión mutua (<code>synchronized</code>, Lock) o clases atómicas (<code>AtomicInteger.incrementAndGet()</code>).</p>`
    },
    critica: {
      t: "Sección crítica", ic: "🚧",
      resumen: "El trozo de código que accede al recurso compartido.",
      html: `<p><b>Sección crítica</b>: fragmento que accede a datos compartidos y que <b>solo puede ejecutar un hilo a la vez</b> (exclusión mutua).</p>
<h4>Requisitos de una buena solución</h4>
<ul><li><b>Exclusión mutua</b>: nunca dos hilos dentro a la vez.</li><li><b>Progreso</b>: si nadie está dentro, el que quiera entrar debe poder.</li><li><b>Espera limitada</b>: ningún hilo espera indefinidamente (sin inanición).</li></ul>
<p>Estructura: <code>entrada → SECCIÓN CRÍTICA → salida → resto</code>.</p>
${tip("Mantén la sección crítica lo más <b>corta</b> posible: cuanto más grande, menos concurrencia.")}`
    },
    monitores: {
      t: "Monitores", ic: "🖥️",
      resumen: "Objeto con exclusión mutua automática; cada objeto Java tiene uno.",
      html: `<p>Un <b>monitor</b> encapsula datos + operaciones y garantiza que solo un hilo ejecuta sus métodos sincronizados a la vez. En Java <b>todo objeto tiene un monitor</b> (su «cerrojo intrínseco»).</p>
<ul><li>Un hilo que entra en <code>synchronized</code> «adquiere el monitor». Los demás pasan a <code>BLOCKED</code>.</li>
<li>Al salir (normal o por excepción) se libera automáticamente.</li>
<li>Es <b>reentrante</b>: el mismo hilo puede volver a entrar en otro synchronized del mismo objeto.</li></ul>
<p>Además del cerrojo, el monitor tiene una <b>cola de espera</b> (<code>wait/notify</code>) para coordinar hilos.</p>`
    },
    synchronized: {
      t: "Métodos y bloques synchronized", ic: "🔒",
      resumen: "La herramienta básica de exclusión mutua en Java (Ejercicio 6).",
      html: `${code(`// 1) Método sincronizado: bloquea sobre "this"
public synchronized void inc() { n++; }

// 2) Método estático: bloquea sobre la CLASE (Contador.class)
public static synchronized void foo() { ... }

// 3) Bloque: más fino, eliges el objeto y limitas la zona
public void escribir(String msg) {
    // código no crítico (preparar mensaje)...
    synchronized (this) {
        fichero.write(msg);       // sólo esto es crítico
    }
}`)}
<table><tr><th>Forma</th><th>Cerrojo</th></tr><tr><td>método de instancia</td><td><code>this</code></td></tr>
<tr><td>método estático</td><td><code>Clase.class</code></td></tr><tr><td>bloque</td><td>el objeto que indiques</td></tr></table>
<h4>Ejercicio 6 (Log)</h4>
<p>Los hilos pisan las líneas porque el escribir() hace 2 escrituras (cabecera + mensaje). Solución con mínimos cambios: <code>public synchronized void escribir(String m)</code> para que cabecera y mensaje salgan juntos.</p>
${warn("Todos los hilos deben sincronizar sobre <b>el mismo objeto</b>. <code>synchronized(new Object())</code> no protege nada.")}
${tip("Si una variable solo se incrementa, <code>AtomicInteger</code> es más simple y rápido que synchronized.")}`
    },
    waitnotify: {
      t: "wait() y notify()", ic: "📣",
      resumen: "Coordinación entre hilos: productor-consumidor (Ejercicios 7 y 8).",
      html: `<ul><li><code>wait()</code>: el hilo <b>libera el monitor</b> y se duerme (WAITING) hasta que lo notifiquen.</li>
<li><code>notify()</code>: despierta a <b>un</b> hilo que espera en ese objeto. <code>notifyAll()</code>: a todos.</li>
<li>Solo se pueden llamar <b>dentro de un synchronized</b> sobre ese objeto (si no: IllegalMonitorStateException).</li>
<li>Siempre dentro de un <b>while</b> (no if) por los despertares espurios.</li></ul>
<h4>Plantilla productor-consumidor (cápsulas de café)</h4>
${code(`class Contenedor {
    private final List<Capsula> lista = new ArrayList<>();
    private static final int CAJA = 6;

    public synchronized void producir(Capsula c) {
        lista.add(c);
        System.out.println("Productor: total " + lista.size());
        if (lista.size() >= CAJA) notifyAll();      // avisa al consumidor
    }

    public synchronized void empaquetar() throws InterruptedException {
        while (lista.size() < CAJA) wait();         // espera sin consumir CPU
        for (int i = 0; i < CAJA; i++) lista.remove(0);
        System.out.println("Consumidor: caja creada");
    }
}`)}
<p><b>Ej. 8b:</b> la espera aleatoria del consumidor (<code>sleep</code>) se hace <b>fuera</b> del synchronized para que el productor siga trabajando.</p>
<p><b>Ej. 7 (vehículos):</b> usa un booleano <code>carroceriaLista</code>; motor/batería hacen <code>while(!carroceriaLista) wait();</code> y la carrocería hace <code>carroceriaLista = true; notifyAll();</code>.</p>
${warn("<code>sleep()</code> NO libera el monitor; <code>wait()</code> SÍ. Diferencia que cae mucho en examen.")}`
    },
    deadlock: {
      t: "Interbloqueos (deadlock)", ic: "💀",
      resumen: "Dos hilos esperándose para siempre. Condiciones de Coffman y cómo evitarlos.",
      html: `<p><b>Deadlock</b>: un conjunto de hilos bloqueados, cada uno esperando un recurso que tiene otro del conjunto.</p>
<h4>Las 4 condiciones (deben darse todas)</h4>
<ol><li><b>Exclusión mutua</b>: el recurso no se comparte.</li><li><b>Retención y espera</b>: tiene uno y pide otro.</li><li><b>No apropiación</b>: nadie le puede quitar el recurso.</li><li><b>Espera circular</b>: A espera a B y B espera a A.</li></ol>
<h4>Ejercicio 9: la transferencia bancaria</h4>
${code(`T1: transferir(cb1, cb2)  →  synchronized(cb1) … luego quiere cb2
T2: transferir(cb2, cb1)  →  synchronized(cb2) … luego quiere cb1
// Con el sleep(50) ambos retienen su primer cerrojo y piden el del otro → espera circular`, "text")}
<p>La condición clave: que los dos hilos adquieran los cerrojos en <b>orden contrario</b> a la vez.</p>
<h4>Soluciones (rompen alguna condición)</h4>
<ul><li><b>Orden global de bloqueo</b> (rompe espera circular) — Ej. 10 y 11.</li><li><b>tryLock con timeout</b> y retroceder (rompe retención y espera) — Ej. 14.</li><li>Un único cerrojo grueso (rompe «retención»).</li></ul>
${code(`public static void utilizarRecursos(Recurso r1, Recurso r2) {
    Recurso primero = r1.getId() < r2.getId() ? r1 : r2;
    Recurso segundo = r1.getId() < r2.getId() ? r2 : r1;
    synchronized (primero) {
        synchronized (segundo) {
            System.out.println("Trabajando...");
        }
    }
}`)}
<p>Ej. 11: ambos programadores deben pedir <b>pizarra primero y rotulador después</b> (mismo orden).</p>
${tip("Otros problemas: <b>inanición</b> (un hilo nunca consigue el recurso) y <b>livelock</b> (los hilos se mueven sin avanzar, como dos personas esquivándose en un pasillo).")}`
    },
    locks: {
      t: "Cerrojos (Lock)", ic: "🔐",
      resumen: "Interfaz java.util.concurrent.locks.Lock: más flexible que synchronized.",
      html: `<p>Un <code>Lock</code> es un cerrojo <b>explícito</b>: tú decides cuándo bloquear y desbloquear.</p>
<table><tr><th></th><th>synchronized</th><th>Lock</th></tr>
<tr><td>Liberación</td><td>automática</td><td><b>manual</b> (unlock en finally)</td></tr>
<tr><td>Intentar sin esperar</td><td>no</td><td><code>tryLock()</code></td></tr>
<tr><td>Timeout</td><td>no</td><td><code>tryLock(t, unidad)</code></td></tr>
<tr><td>Interrumpible</td><td>no</td><td><code>lockInterruptibly()</code></td></tr>
<tr><td>Varias condiciones</td><td>una (wait/notify)</td><td>varias <code>Condition</code></td></tr></table>
${code(`Lock lock = new ReentrantLock();
lock.lock();
try {
    // sección crítica
} finally {
    lock.unlock();        // SIEMPRE en finally
}`)}
<p>Ej. 12 (robots): cada <code>Interseccion</code> tiene su <code>Lock</code>; <code>entrar()</code> hace <code>lock.lock()</code> y <code>salir()</code> hace <code>lock.unlock()</code>.</p>`
    },
    reentrant: {
      t: "ReentrantLock", ic: "♻️",
      resumen: "La implementación principal de Lock: reentrante, con tryLock y fairness.",
      html: `${code(`ReentrantLock lock = new ReentrantLock(true);   // true = justo (FIFO, evita inanición)

// Ejercicio 14: retroceder si no se puede entrar
public boolean entrar() throws InterruptedException {
    if (lock.tryLock(500, TimeUnit.MILLISECONDS)) {
        Thread.sleep(3000);          // el movimiento tarda 3 s
        return true;
    }
    return false;                     // el robot retrocederá y esperará aleatorio
}`)}
<ul><li><b>Reentrante</b>: el mismo hilo puede hacer <code>lock()</code> varias veces; debe hacer el mismo nº de <code>unlock()</code> (<code>getHoldCount()</code>).</li>
<li>Útiles: <code>isLocked()</code>, <code>isHeldByCurrentThread()</code>, <code>getQueueLength()</code>.</li></ul>
<h4>Ej. 13 (dos intersecciones en orden inverso)</h4>
<p>R1 coge I1 y pide I2; R2 coge I2 y pide I1 ⇒ <b>deadlock</b>. Arreglos: orden global de bloqueo (I1 antes que I2) o tryLock + retroceso con espera <b>aleatoria</b> (si fuera fija, ambos reintentarían a la vez → livelock).</p>
<h4>Ej. 15 (Impresora)</h4>
${code(`lock.lock();            // fuera del try
try {
    if (documento == null) throw new IllegalArgumentException();
    Thread.sleep(1000);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
} finally {
    lock.unlock();      // se libera aunque haya excepción
}`)}
<p>¿lock() dentro del try? <b>No</b>: si <code>lock()</code> fallara, el <code>finally</code> haría <code>unlock()</code> sin ser dueño (IllegalMonitorStateException).</p>`
    },
    condition: {
      t: "Condition", ic: "🎛️",
      resumen: "El wait/notify de los Lock: await() y signal() (Ejercicio 16).",
      html: `<p>Un Lock puede crear varias <code>Condition</code> (colas de espera distintas), p. ej. «hay hueco» y «hay datos».</p>
<table><tr><th>Monitor</th><th>Lock + Condition</th></tr><tr><td>wait()</td><td>cond.await()</td></tr><tr><td>notify()</td><td>cond.signal()</td></tr><tr><td>notifyAll()</td><td>cond.signalAll()</td></tr></table>
${code(`class Buffer {
    private final Queue<Integer> cola = new LinkedList<>();
    private final int CAP = 5;
    private final Lock lock = new ReentrantLock();
    private final Condition hayHueco = lock.newCondition();
    private final Condition hayDatos = lock.newCondition();

    void poner(int x) throws InterruptedException {
        lock.lock();
        try {
            while (cola.size() == CAP) hayHueco.await();   // espera hueco
            cola.add(x);
            hayDatos.signal();                              // avisa al consumidor
        } finally { lock.unlock(); }
    }

    int sacar() throws InterruptedException {
        lock.lock();
        try {
            while (cola.isEmpty()) hayDatos.await();
            int x = cola.remove();
            hayHueco.signal();
            return x;
        } finally { lock.unlock(); }
    }
}`)}
${tip("Ventaja sobre wait/notify: despiertas solo a quien corresponde (productores o consumidores) en vez de a todos.")}`
    },
    pools: {
      t: "Gestión de múltiples hilos: Thread Pools", ic: "🏊",
      resumen: "ExecutorService: reutilizar hilos en vez de crear uno por tarea (Ejercicio 17).",
      html: `<p>Crear un hilo es <b>caro</b>. Un <b>pool</b> mantiene N hilos vivos que van cogiendo tareas de una cola.</p>
<h4>Tipos (clase Executors)</h4>
<table><tr><th>Factoría</th><th>Comportamiento</th></tr>
<tr><td><code>newFixedThreadPool(n)</code></td><td>n hilos fijos; las tareas extra esperan en cola</td></tr>
<tr><td><code>newCachedThreadPool()</code></td><td>crea hilos según haga falta y recicla los ociosos</td></tr>
<tr><td><code>newSingleThreadExecutor()</code></td><td>1 hilo; las tareas salen en orden</td></tr>
<tr><td><code>newScheduledThreadPool(n)</code></td><td>tareas retardadas o periódicas</td></tr></table>
${code(`ExecutorService pool = Executors.newFixedThreadPool(2);

pool.execute(() -> System.out.println("Tarea en " + Thread.currentThread().getName()));

pool.shutdown();                                   // no acepta más; termina las pendientes
if (!pool.awaitTermination(10, TimeUnit.SECONDS))  // bloquea hasta que acaben (≈ join)
    pool.shutdownNow();                            // corta de golpe, devuelve la cola`)}
<h4>shutdown vs shutdownNow vs awaitTermination</h4>
<ul><li><code>shutdown()</code>: no bloqueante; deja acabar lo en curso y lo encolado.</li><li><code>shutdownNow()</code>: interrumpe los hilos y devuelve las tareas sin ejecutar.</li><li><code>awaitTermination()</code>: <b>bloqueante</b>; se usa justo después de shutdown.</li></ul>
<h4>Ej. 17 (dados): esquema</h4>
${code(`ExecutorService pool = Executors.newFixedThreadPool(2);
Scanner sc = new Scanner(System.in);
while (true) {
    System.out.print("Nº de dados (0 para salir): ");
    int n = sc.nextInt();
    if (n == 0) break;
    int[] objetivo = new int[n];
    for (int i = 0; i < n; i++) objetivo[i] = sc.nextInt();
    pool.execute(() -> {
        Random r = new Random();
        int[] tirada = new int[n];
        do {
            for (int i = 0; i < n; i++) tirada[i] = r.nextInt(6) + 1;
            try { Thread.sleep(100); } catch (InterruptedException e) { return; }
        } while (!Arrays.equals(tirada, objetivo));   // ojo: orden de los dados
        System.out.println("¡Conseguido! " + Arrays.toString(tirada));
    });
}
pool.shutdown();`)}
${tip("«Un 4 y dos 6» no depende del orden: ordena ambos arrays (<code>Arrays.sort</code>) antes de comparar.")}`
    },
    ejpools: {
      t: "Ejemplos de Thread Pools", ic: "🧪",
      resumen: "Callable, Future, invokeAll y ScheduledExecutorService (Ejercicio 18).",
      html: `<h4>Callable + Future (tareas que devuelven valor)</h4>
${code(`ExecutorService pool = Executors.newFixedThreadPool(3);
Callable<Integer> suma = () -> { Thread.sleep(500); return 1 + 2; };
Future<Integer> f = pool.submit(suma);

System.out.println("Haciendo otras cosas...");
int r = f.get();            // bloquea hasta tener el resultado
System.out.println(r);      // 3`)}
<table><tr><th>Runnable</th><th>Callable&lt;V&gt;</th></tr><tr><td>run() → void</td><td>call() → V</td></tr><tr><td>no lanza checked</td><td>puede lanzar Exception</td></tr></table>
<p>Útiles: <code>f.isDone()</code>, <code>f.cancel(true)</code>, <code>pool.invokeAll(listaCallables)</code> (espera a todas).</p>
<h4>ScheduledExecutorService</h4>
${code(`ScheduledExecutorService s = Executors.newScheduledThreadPool(1);

s.schedule(() -> System.out.println("una vez, tras 5 s"), 5, TimeUnit.SECONDS);

// Ej. 18: capturas cada N segundos
Capturadora cap = new Capturadora();
s.scheduleAtFixedRate(() -> cap.capturar(directorio),
                      0, frecuencia, TimeUnit.SECONDS);

// Para parar: s.shutdown();`)}
<ul><li><code>scheduleAtFixedRate</code>: periodo fijo entre <i>inicios</i>.</li><li><code>scheduleWithFixedDelay</code>: espera fija entre el <i>fin</i> de una y el inicio de la siguiente.</li></ul>`
    },
    async: {
      t: "C#: async y await", ic: "⚡",
      resumen: "Programación asíncrona sin bloquear el hilo (Ejercicios 19–22).",
      html: `<p>Asíncrono ≠ crear hilos a mano. Con <code>async/await</code> el método <b>se suspende</b> mientras espera (E/S, red, timer) y <b>libera el hilo</b> (p. ej. el de la interfaz).</p>
${code(`async Task<string> DescargarAsync(string url) {
    using var http = new HttpClient();
    string html = await http.GetStringAsync(url);   // no bloquea la UI
    return html;
}

// Ej. 20 (WPF): alternar color cada 2 s sin congelar la ventana
private async void Button_Click(object sender, RoutedEventArgs e) {
    while (true) {
        label.Background = Brushes.Gray;
        await Task.Delay(2000);                // NO Thread.Sleep
        label.Background = Brushes.Red;
        await Task.Delay(2000);
    }
}`, "csharp")}
<ul><li>Un método <code>async</code> devuelve <code>Task</code>, <code>Task&lt;T&gt;</code> (o <code>void</code> solo en manejadores de eventos).</li>
<li>Nunca bloquees con <code>.Result</code> o <code>.Wait()</code> en la UI (deadlock).</li>
<li>Tras un <code>await</code> en WPF se vuelve al hilo de la UI, así que puedes tocar controles.</li></ul>
${warn("Por eso los ejercicios 20–22 «bloquean la aplicación»: usan Thread.Sleep o código síncrono en el hilo de la UI.")}`
    },
    tasks: {
      t: "C#: creación de tareas", ic: "🧩",
      resumen: "Task.Run, Task.WhenAll, WhenAny (Ejercicio 19: la paella).",
      html: `${code(`// Ej. 19: calentar+sofreír EN PARALELO con el caldo
Task paella = Task.Run(async () => { await CalentarPaella(); await Sofreir(); });
Task caldo  = PrepararCaldo();            // método async Task

await Task.WhenAll(paella, caldo);        // espera a ambas
await EcharCaldo();
await Cocinar();`, "csharp")}
<table><tr><th>Método</th><th>Uso</th></tr>
<tr><td><code>Task.Run(() => …)</code></td><td>Lanza trabajo pesado (CPU) en el ThreadPool</td></tr>
<tr><td><code>Task.Delay(ms)</code></td><td>Espera asíncrona (versión async de sleep)</td></tr>
<tr><td><code>Task.WhenAll(...)</code></td><td>Termina cuando terminan <b>todas</b></td></tr>
<tr><td><code>Task.WhenAny(...)</code></td><td>Termina cuando termina <b>la primera</b></td></tr>
<tr><td><code>await t</code></td><td>Espera sin bloquear el hilo</td></tr></table>
${tip("Truco: guarda las tareas en variables ANTES de hacer await. Si haces <code>await A(); await B();</code> son secuenciales; si haces <code>var a=A(); var b=B(); await a; await b;</code> son concurrentes.")}`
    },
    callbacks: {
      t: "C#: callbacks y progreso", ic: "📞",
      resumen: "Notificar el avance de una tarea (Ejercicio 22: barra de progreso).",
      html: `<p>Un <b>callback</b> es una función que le pasas a otra para que la llame cuando ocurra algo (p. ej. «se ha leído un bloque»).</p>
${code(`async Task LeerArchivo(string ruta, Action<int> alProgresar) {
    using var fs = File.OpenRead(ruta);
    long tamañoFichero = fs.Length, leidosTotales = 0;
    byte[] buffer = new byte[81920];
    int leidos;
    while ((leidos = await fs.ReadAsync(buffer, 0, buffer.Length)) > 0) {
        leidosTotales += leidos;
        alProgresar((int)(leidosTotales * 100 / tamañoFichero));   // 0..100
    }
}

// uso (si se ejecuta en otro hilo, hay que usar el Dispatcher)
await Task.Run(() => LeerArchivo(ruta, p =>
    Dispatcher.Invoke(() => progressBar.Value = p)));`, "csharp")}
<ul><li>Solo el hilo de la UI puede modificar controles → <code>Dispatcher.Invoke</code> (o <code>IProgress&lt;T&gt;</code>, que ya lo gestiona).</li><li>Delegados útiles: <code>Action&lt;T&gt;</code> (sin retorno), <code>Func&lt;T,R&gt;</code> (con retorno).</li></ul>`
    },
    protocolos: {
      t: "Protocolos de comunicación", ic: "🌐",
      resumen: "Modelo OSI/TCP-IP, TCP vs UDP, puertos y sockets, HTTP.",
      html: `<h4>Modelo TCP/IP</h4>
<table><tr><th>Capa</th><th>Protocolos</th></tr><tr><td>Aplicación</td><td>HTTP, HTTPS, FTP, SMTP, DNS, SSH</td></tr><tr><td>Transporte</td><td>TCP, UDP</td></tr><tr><td>Internet</td><td>IP, ICMP</td></tr><tr><td>Acceso a red</td><td>Ethernet, Wi-Fi</td></tr></table>
<h4>TCP vs UDP</h4>
<table><tr><th></th><th>TCP</th><th>UDP</th></tr><tr><td>Conexión</td><td>Sí (3-way handshake)</td><td>No</td></tr><tr><td>Fiabilidad/orden</td><td>Garantizados</td><td>No</td></tr><tr><td>Velocidad</td><td>Menor</td><td>Mayor</td></tr><tr><td>Usos</td><td>Web, correo, ficheros</td><td>Vídeo en directo, juegos, DNS</td></tr></table>
<h4>Puertos habituales</h4>
<p>HTTP 80 · HTTPS 443 · FTP 21 · SSH 22 · SMTP 25 · DNS 53 · MySQL 3306</p>
<h4>HTTP</h4>
<ul><li>Modelo <b>cliente-servidor</b>, petición/respuesta, <b>sin estado</b>.</li><li>Métodos: <code>GET</code> (leer), <code>POST</code> (crear), <code>PUT</code> (reemplazar), <code>PATCH</code> (modificar), <code>DELETE</code> (borrar).</li><li>Códigos: 200 OK · 201 Created · 301 redirección · 400 petición mala · 401/403 no autorizado · 404 no existe · 500 error del servidor.</li></ul>
${code(`GET /api/tareas HTTP/1.1
Host: ejemplo.com
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

[{"id":1,"titulo":"Entregar ejercicio 17"}]`, "text")}`
    },
    node: {
      t: "Introducción a Node.js", ic: "🟢",
      resumen: "JavaScript fuera del navegador: motor V8, event loop y E/S no bloqueante.",
      html: `<ul><li>Entorno de ejecución de JavaScript basado en el motor <b>V8</b> de Chrome.</li><li><b>Monohilo con bucle de eventos (event loop)</b>: la E/S se delega al sistema y se atiende con callbacks/promesas → muy eficiente para muchas conexiones.</li><li>No es ideal para cálculo intensivo de CPU.</li></ul>
${code(`// hola.js   →   node hola.js
console.log("Hola Node");

const http = require("http");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("¡Hola desde mi primer servidor!");
}).listen(3000, () => console.log("http://localhost:3000"));`, "js")}
${code(`// Asincronía: el callback se ejecuta cuando termina la lectura
const fs = require("fs");
fs.readFile("datos.txt", "utf8", (err, texto) => {
  if (err) return console.error(err);
  console.log(texto);
});
console.log("Esto sale ANTES");

// Versión moderna
const { readFile } = require("fs/promises");
(async () => console.log(await readFile("datos.txt", "utf8")))();`, "js")}`
    },
    modulos: {
      t: "Módulos en Node", ic: "📦",
      resumen: "Dividir el código: CommonJS (require) y ES Modules (import).",
      html: `${code(`// CommonJS
// matematicas.js
const sumar = (a, b) => a + b;
module.exports = { sumar };

// app.js
const { sumar } = require("./matematicas");
console.log(sumar(2, 3));

// ES Modules (pon "type": "module" en package.json o usa .mjs)
export const restar = (a, b) => a - b;
import { restar } from "./matematicas.js";`, "js")}
<ul><li>Módulos del núcleo (sin instalar): <code>fs</code>, <code>http</code>, <code>path</code>, <code>os</code>, <code>events</code>.</li><li>Rutas propias empiezan por <code>./</code>; sin ella Node busca en <code>node_modules</code>.</li></ul>`
    },
    npm: {
      t: "Gestión de paquetes con NPM", ic: "📥",
      resumen: "package.json, instalar dependencias y scripts.",
      html: `${code(`npm init -y                 # crea package.json
npm install express         # dependencia (se guarda en "dependencies")
npm install -D nodemon      # solo desarrollo ("devDependencies")
npm install                 # instala todo lo del package.json
npm uninstall express
npx nodemon app.js          # ejecutar un paquete sin instalarlo global`, "bash")}
${code(`{
  "name": "mi-app",
  "version": "1.0.0",
  "scripts": { "start": "node app.js", "dev": "nodemon app.js" },
  "dependencies": { "express": "^4.19.0" }
}`, "json")}
<ul><li><code>npm run dev</code> ejecuta un script (<code>npm start</code> no necesita <code>run</code>).</li><li><code>node_modules/</code> no se sube a git (va en <code>.gitignore</code>); <code>package-lock.json</code> sí.</li><li>Versionado semántico <code>MAJOR.MINOR.PATCH</code>: <code>^</code> permite subir minor/patch, <code>~</code> solo patch.</li></ul>`
    },
  },
};
const ASIGNATURAS = [PSP];
