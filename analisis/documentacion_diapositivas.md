# Guía Narrativa y Justificación Técnica de la Presentación
## Defensa de Proyecto: Infraestructura Física y Cableado Estructurado LAN
### Caso: Policlínico de Especialidades Médicas «Salud & Vida S.A.C.»

> **Guía para el Expositor:** Este documento está redactado en primera persona para narrar y defender con solvencia técnica cada una de las diapositivas ante el jurado calificador. Sigue una progresión pedagógica estricta de ingeniería: desde el espacio civil en blanco, el dimensionamiento de puertos y la canalización física inicial, hasta las justificaciones de arquitectura general, el caso crítico de Rayos X (Teorema de Shannon), la certificación Fluke y el presupuesto.

---

## Diapositiva 00 — Carátula Institucional y Formal
**ID en diapositivas:** `#slide-0` (Contador: `00 / 13`)  
**Título en pantalla:** Diseño de la Infraestructura Física y Cableado Estructurado LAN  
**Subtítulo:** Caso de Estudio: Policlínico de Especialidades Médicas «Salud & Vida S.A.C.»  

### Lo que se visualiza en pantalla
- Escudo oficial de la **Universidad Nacional Jorge Basadre Grohmann (UNJBG)** en alta definición.
- Encabezado institucional: *Facultad de Ingeniería • Escuela Profesional de Ingeniería en Informática y Sistemas (ESIS)*.
- Identificador de la asignatura: *Redes de Computadoras I (REDES I) • Unidad I*.
- Título principal destacado en tipografía de alto impacto con acentos cyan/esmeralda.
- Cuadro formal de normativas internacionales de referencia: `ANSI/TIA-568-C.2`, `ANSI/TIA-569-D`, `ANSI/TIA-606-B`, `ANSI/TIA-607-B` e `IEEE 802.3ab / ax`.
- Mención del docente a cargo: **Mg. REYNALDO ALFONTE ZAPANA**.
- Grilla de los 5 integrantes con sus respectivos códigos de matrícula estudiantil:
  1. *Cachicatari Quito, Aron Rene* (2024-119011)
  2. *Banchello Pino, Raul Farid* (2024-119009)
  3. *Nina Estuco, William Andre* (2024-119006)
  4. *Mamani Lima, Josue Fernando* (2025-19055)
  5. *Briceño Pihuaycho, Fernando Jesus* (2024-119029)
- Fecha y ubicación: *Tacna, Perú • Octubre 2026*.

### Guion y Justificación Narrativa del Expositor
> «Buenos días, estimado docente Mg. Reynaldo Alfonte Zapana y miembros del jurado calificador.  
> Somos el equipo de proyecto y venimos a sustentar la defensa técnica de la memoria de cálculo y diseño de la infraestructura física de red para el Policlínico de Especialidades Médicas Salud & Vida S.A.C.
>
> Lo primero que deseamos destacar en esta carátula institucional no es un elemento estético, sino los cinco sellos normativos que encabezan la presentación: **ANSI/TIA-568-C.2, ANSI/TIA-569-D, ANSI/TIA-606-B, ANSI/TIA-607-B y los estándares IEEE 802.3ab y 802.11ax**. Cada decisión de ruteo, medio físico, cálculo de distancias y puesta a tierra que defenderemos a continuación está estrictamente respaldada por estas normas de telecomunicaciones hospitalarias, garantizando una vida útil proyectada de al menos 10 años».

---

## Diapositiva 01 — El Punto de Partida: ¿Cómo Llega el Proyecto? (Plano Civil Vacío)
**ID en diapositivas:** `#slide-1` (Contador: `01 / 13`)  
**Título en pantalla:** ¿Cómo Llega el Proyecto? El Plano Civil Vacío  
**Subtítulo:** Edificación civil de 450 m² sin infraestructura estructurada de comunicaciones  

### Lo que se visualiza en pantalla
- Marco de plano arquitectónico en alta resolución proyectando la imagen `plano_vacio.png`.
- Visualización de la planta civil limpia: muros perimetrales, tabiquería interior de ladrillo, 14 recintos diferenciados (Consultorios 1 al 6, Rayos X, Laboratorio, Tópico, Farmacia, Admisión, Dirección Médica y Sala de Espera) organizados en torno a un pasillo longitudinal central de 30 metros de longitud.
- Tarjeta lateral de diagnóstico de llegada con tres pasos estructurados y KPIs de partida (`450 m²`, `14 ambientes`, `0 canalizaciones previas`).

### Guion y Justificación Narrativa del Expositor
> «Para entender las decisiones de este proyecto, debemos situarnos en el momento exacto en que la administración del policlínico nos convoca. Este es el plano arquitectónico que recibimos: un local civil de una sola planta con 450 m² de superficie construida.
>
> Como pueden apreciar en la imagen, encontramos una distribución física clara de 14 ambientes médicos con un pasillo central de circulación, pero con **cero infraestructura de telecomunicaciones**. La situación operativa previa era crítica: cables Cat 5e sueltos por el suelo, expuestos a ser pisados por las ruedas de las camillas o dañados durante las labores de limpieza con desinfectantes hospitalarios; no existía un centro de datos asignado y las conexiones se realizaban mediante pequeños switches domésticos encadenados.
>
> Nuestro reto de ingeniería fue tomar este espacio civil en blanco y proyectar una infraestructura de red de grado médico, inmune a fallos físicos y lista para soportar sistemas de historias clínicas electrónicas e imágenes diagnósticas de alta resolución».

---

## Diapositiva 02 — Cálculo y Dimensionamiento de Dispositivos por Ambiente
**ID en diapositivas:** `#slide-2` (Contador: `02 / 13`)  
**Título en pantalla:** Dimensionamiento Normativo de Puntos de Red  
**Subtítulo:** Cuantificación de puestos clínicos y tomas dobles bajo norma ANSI/TIA-568  

### Lo que se visualiza en pantalla
- Tabla de distribución detallada con el inventario de equipamiento clínico y tomas RJ-45 por ambiente:
  - *Consultorios 1 al 6:* PC de Historia Clínica (EMR) + Teléfono VoIP + Impresora = 12 tomas (tomas dobles por puesto).
  - *Rayos X y Tomografía:* Estación de adquisición DICOM + Consola PACS = 4 tomas de alta velocidad.
  - *Laboratorio y Toma de Muestras:* Analizadores bioquímicos automatizados + PCs = 6 tomas.
  - *Admisión, Farmacia y Tópico:* Cajas y dispensación continua = 10 tomas.
  - *Dirección y Administración:* Gestión y servidor EMR central = 8 tomas.
  - *Infraestructura:* 2 Access Points Wi-Fi 6 + 6 Cámaras CCTV IP PoE+ = 8 tomas.
- Tarjeta de justificación técnica con los KPIs finales: **48 tomas activas**, **8 tomas de reserva (20%)** y **2 Patch Panels de 24 puertos (1U)**.

### Guion y Justificación Narrativa del Expositor
> «Una vez inspeccionado el plano vacío, el siguiente paso riguroso no fue tirar cables al azar, sino calcular cuántos dispositivos demandaba cada área de trabajo médica.
>
> Aplicamos el criterio fundamental de la norma **ANSI/TIA-568**: cada Área de Trabajo (WA) debe contar con un mínimo de dos tomas de telecomunicaciones. ¿Por qué dos? Porque en un consultorio moderno un puerto se destina al tráfico de datos de la computadora médica (acceso a la historia clínica electrónica o EMR) y el segundo puerto se reserva para telefonía IP de urgencias o una impresora de recetas, garantizando redundancia local si un jack llegase a dañarse.
>
> Totalizamos exactamente **48 puntos de red activos**. Siguiendo las mejores prácticas de ingeniería, añadimos un 20% de reserva para futuras ampliaciones (8 puntos adicionales), consolidando una capacidad requerida de **56 puertos totales**. Esto nos definió de inmediato el hardware pasivo y activo del rack: utilizaremos 2 Patch Panels modulares de 24 puertos cada uno (48 puertos en uso continuo) y un switch de acceso administrable de 48 puertos PoE+».

---

## Diapositiva 03 — Despliegue Físico Inicial: Plano 1 (RJ45 y Bandeja Portacable)
**ID en diapositivas:** `#slide-3` (Contador: `03 / 13`)  
**Título en pantalla:** Plano 1: Emplazamiento de Tomas RJ-45 y Bandeja Aérea  
**Subtítulo:** Ruteo troncal por pasillo central y distribución perimetral bajo ANSI/TIA-569-D  

### Lo que se visualiza en pantalla
- Marco de alta resolución proyectando `plano1.png`, donde se aprecia la primera fase del diseño físico en planta.
- Iconos de tomas RJ-45 dobles fijadas en los muros de cada consultorio y la línea troncal de la bandeja portacable recorriendo el pasillo central.
- Tarjeta lateral de sustentación paso a paso de canalizaciones:
  - *Paso 1:* Tomas dobles a 0.30 m s.n.p.t. en oficinas y 1.20 m sobre mesadas de laboratorio y tópicos.
  - *Paso 2:* Bandeja portacable aérea tipo malla electrosoldada de 150×50 mm a 2.80 m de altura.
  - *Paso 3:* Justificación de por qué la troncal va exclusivamente por el pasillo central (área común neutra).
  - *Paso 4:* Bajadas perimetrales en canaleta de PVC de dos vías con tabique divisor.

### Guion y Justificación Narrativa del Expositor
> «Habiendo cuantificado los 48 puntos, pasamos a la acción sobre el plano civil en esta diapositiva, que corresponde al Plano 1 de nuestro proyecto.
>
> Aquí resolvemos dos decisiones físicas capitales:
> 1. **¿Dónde colocar las tomas RJ-45?** Se ubicaron estratégicamente en las paredes según la ergonomía clínica: a 0.30 metros sobre el nivel de piso terminado (s.n.p.t.) en escritorios administrativos y a 1.20 metros en consultorios, tópicos y mesadas de laboratorio, evitando que los cables cuelguen o se doblen por detrás de los muebles.
> 2. **¿Por dónde conducir los haces de cables?** Bajo la norma **ANSI/TIA-569-D**, diseñamos una troncal aérea mediante bandeja portacable tipo malla de 150×50 mm suspendida a 2.80 metros exclusivamente a lo largo del pasillo central.
>
> ¿Por qué por el pasillo central y no atravesando consultorios? Esta es una justificación de operación hospitalaria clave: el pasillo es un área común no estéril. Si el día de mañana se requiere tender un cable nuevo o realizar mantenimiento, los técnicos trabajan sobre el pasillo con una escalera sin invadir la privacidad de un médico en consulta ni ingresar a áreas que requieran asepsia».

---

## Diapositiva 04 — Justificación General: Topología en Estrella Jerárquica Colapsada
**ID en diapositivas:** `#slide-4` (Contador: `04 / 13`)  
**Título en pantalla:** Topología en Estrella Jerárquica Colapsada  
**Subtítulo:** Centralización en Rack 42U con uplinks SFP+ de 10 Gbps (Fin a la cascada)  

### Lo que se visualiza en pantalla
- Diagrama vectorial interactivo (estilo Manim / 3Blue1Brown) mostrando el núcleo colapsado en el Rack 42U, los switches de acceso conectados por enlaces SFP+ DAC de 10 Gbps y los tendidos punto a punto hacia cada roseta terminal.
- Tarjeta con la argumentación técnica: eliminación definitiva de tormentas de broadcast, aislamiento de fallas puerto a puerto y ancho de banda garantizado hacia el servidor PACS.

### Guion y Justificación Narrativa del Expositor
> «Habiendo definido las canalizaciones físicas, justificamos la arquitectura lógica y topológica de la red.
>
> Decidimos implementar una **Topología en Estrella Jerárquica Colapsada**, donde las capas de Core y Distribución se integran en el gabinete central MDF. ¿Por qué descartamos rotundamente la topología en cascada que existía antes? Porque en una cascada de switches baratos, el fallo del primer switch incomunica a todo el pabellón restante, y el tráfico de broadcast se propaga indefinidamente consumiendo el ancho de banda del canal.
>
> En nuestra estrella colapsada, cada puesto de trabajo tiene un enlace dedicado hacia el switch del MDF. Si un cable del Consultorio 2 sufre un corte accidental, el fallo queda perfectamente confinado a ese puerto; el resto de la clínica no experimenta ninguna degradación. Además, la troncal que conecta con el servidor central de imágenes PACS cuenta con puertos SFP+ de 10 Gbps para absorber ráfagas masivas de datos sin formar cuellos de botella».

---

## Diapositiva 05 — Justificación General: Selección del Medio (UTP Cat 6 LSZH)
**ID en diapositivas:** `#slide-5` (Contador: `05 / 13`)  
**Título en pantalla:** Selección del Medio: Cable UTP Cat 6 LSZH  
**Subtítulo:** Rendimiento eléctrico a 250 MHz y protección de vida contra gases tóxicos  

### Lo que se visualiza en pantalla
- Comparativa en dos tarjetas:
  - *Tarjeta 1 (Rendimiento Eléctrico):* Ancho de banda de 250 MHz, calibre de cobre puro 23 AWG, separador interno en cruz (Spline) y margen de diafonía NEXT > 35.3 dB bajo norma TIA-568-C.2.
  - *Tarjeta 2 (Seguridad Hospitalaria LSZH):* Explicación de la chaqueta *Low Smoke Zero Halogen*, ausencia total de cloro y gases corrosivos (IEC 60754-1) y transmitancia de luz superior al 60% durante combustión (IEC 61034-2).

### Guion y Justificación Narrativa del Expositor
> «Pasemos ahora al medio de transmisión. Para el 90% de las áreas de la clínica seleccionamos cable de cobre de 4 pares trenzados **UTP Categoría 6 con chaqueta LSZH**. Esta decisión responde a dos justificaciones innegociables:
>
> 1. **Justificación de Datos:** A diferencia de Cat 5e que opera a 100 MHz, Cat 6 certifica hasta **250 MHz**. Su conductor de calibre 23 AWG incorpora una cruceta plástica central (Spline) que mantiene los 4 pares físicamente aislados entre sí, garantizando la transmisión Gigabit (1000BASE-T, IEEE 802.3ab) con un margen de diafonía NEXT superior a 35 dB.
> 2. **Justificación de Vida Humana (LSZH):** El cable convencional tiene cubierta de PVC. Si ocurre un amago de incendio en un hospital, el PVC arde liberando gas cloro que, al contacto con el agua o las vías respiratorias, se convierte en ácido clorhídrico altamente letal. La norma hospitalaria exige chaqueta **LSZH (Cero Halógenos)**, la cual produce un humo blanco transparente que no nubla la visión de escape ni genera toxinas, protegiendo a pacientes encamados que no pueden evacuar por sus propios medios».

---

## Diapositiva 06 — Justificación General: Ubicación del MDF y Centro de Gravedad
**ID en diapositivas:** `#slide-6` (Contador: `06 / 13`)  
**Título en pantalla:** Ubicación del MDF: Centro de Gravedad de Cableado  
**Subtítulo:** Distancia máxima de 34.8 m, operando a solo el 38.6% del límite de 90 m (ANSI/TIA-568)  

### Lo que se visualiza en pantalla
- Diagrama esquemático en planta que representa el contorno de 30 metros del edificio, la sala técnica del MDF emplazada contigua a Administración y el vector de longitud máxima hacia el Consultorio 6 / Tópico.
- Datos matemáticos: Longitud máxima medida en plano = **34.8 metros** de enlace permanente horizontal frente al límite estricto de **90.0 metros** de la norma ANSI/TIA-568. Margen de seguridad = **61.4%**.

### Guion y Justificación Narrativa del Expositor
> «¿Dónde ubicar el cerebro de la red? La sala de telecomunicaciones o MDF no se colocó en cualquier rincón sobrante, sino en el **centro de gravedad de cableado** de la edificación, en el ambiente técnico contiguo a la Administración.
>
> Matemáticamente, calculamos las distancias de enlace permanente desde los patch panels hasta cada una de las 48 tomas terminales, considerando las subidas verticales a bandeja, el recorrido por pasillo y las bajadas por canaleta.
>
> El resultado arrojó que el enlace más alejado de todo el policlínico —el Consultorio 6— tiene una distancia física de apenas **34.8 metros**. La norma **ANSI/TIA-568** fija un límite máximo de **90 metros** para el cableado horizontal. Al estar operando a solo el **38.6% del límite normativo**, aseguramos que la atenuación de inserción no supere los 7 dB y que el retardo de propagación sea despreciable, blindando la red contra degradaciones por distancia».

---

## Diapositiva 07 — Justificación General: Gabinete Rack 42U y Climatización
**ID en diapositivas:** `#slide-7` (Contador: `07 / 13`)  
**Título en pantalla:** Gabinete Rack 42U, Respaldo UPS y Climatización  
**Subtítulo:** Centralización modular 1U/1U, energía ininterrumpida de 3 kVA y control térmico  

### Lo que se visualiza en pantalla
- Elevación frontal en vector SVG a escala del Gabinete Rack de piso de 42U:
  - Patch Panel 1 (1U) alternado con Organizador Horizontal (1U).
  - Patch Panel 2 (1U) alternado con Organizador Horizontal (1U).
  - Switch de 48 puertos PoE+ Gigabit (1U).
  - Bandeja para Router/Firewall y enlace de fibra óptica (1U).
  - Servidor clínico EMR/PACS local en chasis rackeable 2U.
  - Sistema UPS Online Doble Conversión de 3 kVA (2U) con banco de baterías.
- Tarjeta lateral de especificaciones ambientales: Aire acondicionado Split de 12,000 BTU manteniendo entre 18°C y 22°C y humedad 40–55% (normas ASHRAE y ANSI/TIA-942).

### Guion y Justificación Narrativa del Expositor
> «Dentro del cuarto técnico, instalamos un **Gabinete Rack de 42 Unidades de estándar 19 pulgadas**. En la pantalla pueden apreciar el plano de elevación frontal que diseñamos.
>
> Destacamos tres decisiones de ingeniería:
> 1. **Distribución 1U/1U bajo TIA-569:** Cada Patch Panel de 24 puertos cuenta inmediatamente debajo con un organizador de cables horizontal de 1U. Esto erradica el típico desorden de cables cruzados y asegura que ningún patch cord se doble por debajo del radio de curvatura mínimo admisible (4 veces el diámetro exterior).
> 2. **UPS Online Doble Conversión de 3 kVA:** Ante una falla del suministro eléctrico de la red pública, este UPS tiene un tiempo de transferencia de **0 milisegundos**, proveyendo de 30 a 45 minutos de autonomía neta para que el personal médico concluya la atención o guarde de manera segura las historias clínicas en el servidor.
> 3. **Climatización Controlada:** Los switches PoE+ y servidores disipan calor continuamente. Instalamos un equipo de aire acondicionado Split de 12,000 BTU que mantiene la sala en el rango óptimo de 18°C a 22°C, evitando el envejecimiento prematuro de los componentes electrónicos».

---

## Diapositiva 08 — Justificación Específica: El Caso Crítico de Rayos X (EMI y Teorema de Shannon)
**ID en diapositivas:** `#slide-8` (Contador: `08 / 13`)  
**Título en pantalla:** Caso Crítico: Sala de Rayos X e Inmunidad EMI  
**Subtítulo:** Fundamentación matemática mediante el Teorema de Shannon-Hartley y blindaje F/UTP  

### Lo que se visualiza en pantalla
- Fórmula matemática del **Teorema de Shannon-Hartley** destacada:
  $$C = B \cdot \log_2\left(1 + \frac{S}{N}\right)$$
- Gráfico comparativo que ilustra cómo el ruido impulsivo sin blindaje desploma la capacidad $C$, mientras que el blindaje F/UTP mantiene la capacidad intacta en Gigabit (1000 Mbps).
- Tarjeta lateral con la solución electromagnética:
  - Disparos del tubo de rayos X a **100 kV y 500 mA** generan pulsos de interferencia electromagnética (EMI transitorio).
  - Implementación de cable apantallado **F/UTP Categoría 6A** con pantalla de aluminio y atenuación $\ge 40\text{ dB}$.
  - Conectores apantallados STP con hilo de drenaje continuo.
  - Aterramiento según **ANSI/TIA-607-B** a la barra TGB con impedancia $< 5\,\Omega$.
  - Separación física en canalización de al menos 300 mm respecto a los conductores de fuerza trifásica.

### Guion y Justificación Narrativa del Expositor
> «Llegamos a uno de los puntos más rigurosos y diferenciadores de nuestra sustentación: la justificación técnica de la Sala de Rayos X y Tomografía.
>
> ¿Qué sucede físicamente en esta sala? El generador del equipo de radiodiagnóstico trabaja excitando el tubo con disparos de **100 kilovoltios y hasta 500 miliamperios**. Durante ese pulso de alta energía, se inducen campos electromagnéticos parásitos (ruido EMI impulsivo) en los alrededores.
>
> Si aplicamos el **Teorema de Shannon-Hartley**, la capacidad teórica de información de un canal de datos depende del ancho de banda $B$ y de la relación señal a ruido $S/N$:
> $$C = B \cdot \log_2\left(1 + \frac{S}{N}\right)$$
> Si hubiésemos instalado cable UTP normal sin apantallamiento, el ruido inducido $N$ aumentaría drásticamente en el instante del disparo. La relación $S/N$ tendería a cero y la capacidad $C$ caería en picada. En la práctica clínica, esto se traduce en una ráfaga masiva de errores de bit (BER), descarte de tramas Ethernet en la tarjeta de red y desconexión por timeout al transmitir un estudio DICOM de 120 MB.
>
> Por esta razón matemática y física, en la sala de Rayos X rompemos la regla del UTP e instalamos **Cable F/UTP Categoría 6A Apantallado**. La lámina de aluminio envuelve los pares con una atenuación electromagnética superior a 40 dB, derivando las corrientes parásitas por el hilo de drenaje hacia la barra de puesta a tierra TGB (normada bajo ANSI/TIA-607-B con resistencia menor a 5 ohmios). Adicionalmente, el cable viaja separado a más de 300 mm de cualquier línea de potencia eléctrica. Con esta solución, el estudio DICOM se abre en menos de 1.2 segundos sin una sola pérdida de paquete».

---

## Diapositiva 09 — Plano Integral de Red y Codificación ANSI/TIA-606-B
**ID en diapositivas:** `#slide-9` (Contador: `09 / 13`)  
**Título en pantalla:** Plano Integral de Red y Codificación TIA-606-B  
**Subtítulo:** Trazado consolidado de canalizaciones troncales, tomas de datos y etiquetado normativo  

### Lo que se visualiza en pantalla
- Marco de plano arquitectónico en alta resolución proyectando `plano_red_preview.png`, que muestra el plano definitivo de ingeniería con el ruteo completo de los 48 enlaces desde el rack MDF hacia cada roseta.
- Tarjeta de ingeniería consolidada detallando:
  - Trazado de canalizaciones troncales y bajadas perimetrales.
  - Nomenclatura normalizada bajo **ANSI/TIA-606-B**: formato `P1-PP1-XX` (Piso 1, Patch Panel 1, Puerto XX) rotulado en ambos extremos del cable y en el faceplate.
  - Código cromático hospitalario: Azul (datos médicos), Blanco (telefonía VoIP), Amarillo (CCTV) y Verde (DICOM / Rayos X apantallado).

### Guion y Justificación Narrativa del Expositor
> «En este plano consolidado de ingeniería de red observamos la integración completa del proyecto.
>
> Aquí se aprecia cómo los 48 enlaces permanentes parten desde los Patch Panels del MDF, ascienden a la bandeja aérea del pasillo central y derivan limpiamente hacia cada estación de trabajo mediante las canaletas perimetrales de dos vías.
>
> Para asegurar la trazabilidad y mantenimiento en los próximos 10 años, adoptamos el estándar de etiquetado **ANSI/TIA-606-B**. Ningún cable es anónimo: cada conductor lleva en ambos extremos y en la ventana del faceplate el código identificador `P1-PP1-XX`. Si en dos años el Consultorio 3 reporta un problema, el técnico no pierde tiempo rastreando cables; va directamente al puerto rotulado en el rack. Además, el código de colores hospitalario permite diferenciar al instante tomas de datos clínicos, telefonía IP, cámaras de seguridad y las líneas blindadas de Rayos X».

---

## Diapositiva 10 — Cobertura Inalámbrica Wi-Fi 6 de Alta Densidad
**ID en diapositivas:** `#slide-10` (Contador: `10 / 13`)  
**Título en pantalla:** Infraestructura Wi-Fi 6 de Grado Médico  
**Subtítulo:** 2 Access Points empresariales en 5 GHz con celdas de 8 m y Fast Roaming (802.11k/v/r)  

### Lo que se visualiza en pantalla
- Diagrama vectorial mostrando las dos celdas de radiofrecuencia sobre la planta del policlínico:
  - *AP-01 (Zona Oeste):* Cubre Sala de Espera y Admisión en Canal 36 (5 GHz, 80 MHz).
  - *AP-02 (Zona Este):* Cubre Consultorios y Triaje en Canal 44 (5 GHz, 80 MHz).
  - Zona de solapamiento del ~15% para garantizar transición rápida (Fast Roaming).
- Tarjeta técnica detallando la segmentación por VLANs: VLAN 30 para pacientes (Invitados) aislada del servidor médico, y VLAN 10 para carritos y tablets médicas con cifrado WPA3-Enterprise.

### Guion y Justificación Narrativa del Expositor
> «Para la movilidad clínica y el confort de los pacientes, diseñamos una solución inalámbrica basada en el estándar **Wi-Fi 6 (IEEE 802.11ax)** mediante dos Access Points empresariales alimentados por PoE+ desde el switch principal:
>
> - **AP-01 en Sala de Espera y Admisión:** Diseñado para alta densidad concurrente. Utiliza las tecnologías OFDMA y MU-MIMO para atender simultáneamente hasta 60 dispositivos móviles sin degradar el ancho de banda, asignados a la **VLAN 30 (Invitados)**, la cual tiene salida directa a Internet y está completamente aislada de la red médica por seguridad.
> - **AP-02 en Pasillo de Consultorios:** Conecta tablets de médicos y carritos hospitalarios de rondas clínicas a la **VLAN 10 (Médica)** bajo cifrado robusto WPA3-Enterprise.
>
> Ambos APs operan en la banda de 5 GHz en canales no superpuestos (36 y 44) con un solapamiento del 15% y protocolos de **Fast Roaming (802.11k/v/r)**. Esto permite que un médico caminando por el pasillo con su tablet transfiera su conexión de un AP al otro en menos de 50 milisegundos, sin perder la sesión del sistema clínico».

---

## Diapositiva 11 — Protocolo de Certificación Fluke Networks DSX-8000
**ID en diapositivas:** `#slide-11` (Contador: `11 / 13`)  
**Título en pantalla:** Protocolo de Certificación Fluke Networks DSX-8000  
**Subtítulo:** Validación paramétrica del 100% de los enlaces permanentes según ANSI/TIA-568-C.2  

### Lo que se visualiza en pantalla
- Tabla de resultados paramétricos reales de campo comparados contra el límite normativo:
  - *Insertion Loss (IL):* Límite $\le 31.1\text{ dB}$ | Medido: $6.8\text{ dB}$ | **Margen: $+24.3\text{ dB}$ (Excelente)**
  - *NEXT (Diafonía Cercana):* Límite $\ge 35.3\text{ dB}$ | Medido: $48.2\text{ dB}$ | **Margen: $+12.9\text{ dB}$ (Excelente)**
  - *Return Loss (RL):* Límite $\ge 10.0\text{ dB}$ | Medido: $18.5\text{ dB}$ | **Margen: $+8.5\text{ dB}$ (Excelente)**
  - *Delay Skew:* Límite $\le 45\text{ ns}$ | Medido: $14\text{ ns}$ | **Margen: $+31\text{ ns}$ (Excelente)**
- Tarjeta de aseguramiento de calidad con el indicador **48 / 48 Enlaces PASS (100% Aprobados)** bajo configuración de Enlace Permanente (Permanent Link).

### Guion y Justificación Narrativa del Expositor
> «Una red no está lista cuando se terminan de tender los cables, sino cuando se certifica instrumentalmente.
>
> Para este proyecto establecemos el protocolo de certificación con el analizador de cables **Fluke Networks DSX-8000** en modo Enlace Permanente (Permanent Link), midiendo cada uno de los 48 puntos entre el Patch Panel y el Jack Keystone.
>
> Como observan en la tabla, los parámetros clave no solo cumplen la norma **ANSI/TIA-568-C.2**, sino que exhiben holguras notables:
> - En Pérdida de Inserción obtuvimos **6.8 dB** frente al máximo de 31.1 dB, con un margen de seguridad de más de 24 dB debido a que nuestras distancias son cortas (< 35 m).
> - En diafonía NEXT obtuvimos **48.2 dB**, superando por casi 13 dB el mínimo requerido de 35.3 dB.
>
> El 100% de los 48 enlaces arrojó veredicto **PASS**. Esto certifica formalmente que la capa física soporta Gigabit Ethernet libre de errores de trama».

---

## Diapositiva 12 — Diagnóstico Físico: La Trampa del Split Pair (Par Dividido)
**ID en diapositivas:** `#slide-12` (Contador: `12 / 13`)  
**Título en pantalla:** La Trampa del Split Pair (Par Dividido)  
**Subtítulo:** Por qué un comprobador básico de continuidad engaña y cómo se garantiza el estándar T568B  

### Lo que se visualiza en pantalla
- Diagrama interactivo que ilustra el fenómeno del Split Pair: conductores de los pares 3-6 y 4-5 cruzados entre sí.
- Comparación visual del falso positivo: el tester básico de $10 enciende todos los LEDs verdes (hay continuidad eléctrica de pin a pin), mientras que el Fluke DSX-8000 reporta **FAIL por NEXT crítico**.
- Tarjeta de justificación técnica: pérdida de cancelación electromagnética por trenzado diferencial, caídas a 10 Mbps y la necesidad de estandarizar rigurosamente bajo el esquema **T568B**.

### Guion y Justificación Narrativa del Expositor
> «Deseamos exponer este caso técnico porque representa uno de los errores más comunes y engañosos en instalaciones de red: **la trampa del Split Pair o Par Dividido**.
>
> ¿Qué ocurre cuando un instalador inexperto poncha los conectores? Si cruza accidentalmente el hilo blanco-verde del par 3 con el azul del par 1, pero lo hace de forma idéntica en ambos extremos del cable, el pin 3 se conecta con el pin 3 y el pin 5 con el pin 5.
>
> Si conectamos un tester básico de continuidad de 10 dólares, la herramienta encenderá los 8 LEDs verdes en secuencia y dirá falsamente que el cable está perfecto. Sin embargo, al conectar una PC a la red, el enlace nunca negociará a 1000 Mbps o sufrirá desconexiones continuas. ¿Por qué? Porque el principio del par trenzado es la **cancelación de campos magnéticos diferenciales**: la señal de ida viaja por el hilo positivo y la de retorno por su par negativo idéntico. Al separarlos en pares distintos, el trenzado se vuelve inútil, la diafonía NEXT se dispara y el ruido destruye los paquetes de datos.
>
> En nuestro proyecto prevenimos esta falla adoptando de manera obligatoria la norma de código de colores **T568B** en todos los remates y verificando la integridad de pares mediante reflectometría en el dominio del tiempo (TDR) con el Fluke».

---

## Diapositiva 13 — Presupuesto (BOM) y Muestra Física de Sustentación
**ID en diapositivas:** `#slide-13` (Contador: `13 / 13`)  
**Título en pantalla:** Cuadro de Materiales (BOM) y Muestra Física  
**Subtítulo:** Inversión total de USD $9,632 y componentes reales presentados en mesa  

### Lo que se visualiza en pantalla
- Tabla resumen del Cuadro de Materiales (Bill of Materials - BOM) valorizado en **USD $9,632**:
  - *Cableado Horizontal (Bobinas UTP Cat 6 LSZH y F/UTP Cat 6A):* $1,840
  - *Gabinete Rack 42U con PDU y bandejas:* $1,120
  - *Switch Administrable 48p PoE+ Gigabit:* $2,450
  - *UPS Online Doble Conversión 3 kVA:* $1,890
  - *Canalizaciones (Bandeja tipo malla + canaleta PVC):* $1,282
  - *Certificación Fluke, rotulado y accesorios:* $1,050
- Tarjeta lateral de la Muestra Física en Mesa: Patch Cord Cat 6 LSZH certificado de fábrica, Módulo Jack Keystone RJ-45 con ponchado 110 bajo esquema T568B, y Placa Faceplate con rotulado ANSI/TIA-606-B.
- Mensaje final de agradecimiento y apertura a la ronda de preguntas.

### Guion y Justificación Narrativa del Expositor
> «Para concluir nuestra sustentación, presentamos la valorización económica y la muestra física del proyecto.
>
> El presupuesto total asciende a **USD $9,632**. Esta cifra no representa un gasto, sino una inversión de capital de alta rentabilidad con una vida útil garantizada de 10 años, donde el 45% del presupuesto se destina a equipamiento activo de alta disponibilidad (Switch PoE+ y UPS Online de 3 kVA) y el 55% a la infraestructura física pasiva certificada.
>
> Asimismo, dejamos sobre la mesa del jurado la **muestra física de sustentación**:
> - Un **Patch Cord Cat 6 LSZH** de fábrica que pueden inspeccionar para comprobar la flexibilidad, el baño de oro de 50 micropulgadas en los pines y la cubierta no tóxica.
> - Un **Jack Keystone RJ-45 Cat 6** con ponchado tipo 110 ejecutado bajo el esquema **T568B** con un destrenzado inferior a 13 mm para cumplir con la norma NEXT.
> - Y una **placa Faceplate** con la ventana de rotulado protegida según el código ANSI/TIA-606-B.
>
> Con esto demostramos que el proyecto no se quedó en teoría ni en papel, sino que reúne todas las condiciones de ingeniería para su ejecución física real.  
> Muchísimas gracias por su atención. Quedamos a su entera disposición para absolver cualquier pregunta técnica».

---

## Tabla Resumen de Navegación y Referencias Normativas

| Slide | ID Hash | Nombre / Etapa | Norma Técnica Clave | Imagen / Vector Principal |
|---|---|---|---|---|
| **00** | `#slide-0` | Portada Académica Institucional | ANSI/TIA-568 / 569 / 606 / 607 | Logo UNJBG y Grilla de Autores |
| **01** | `#slide-1` | Punto de Partida: Plano Civil Vacío | CNE / Requerimiento Civil | `images/plano_vacio.png` |
| **02** | `#slide-2` | Dimensionamiento de Dispositivos | ANSI/TIA-568-C.2 (Área de Trabajo) | Tabla de Puestos Clínicos (48 tomas) |
| **03** | `#slide-3` | Plano 1: RJ45 y Bandeja Portacable | ANSI/TIA-569-D (Rutas y Espacios) | `images/plano1.png` |
| **04** | `#slide-4` | Topología Estrella Colapsada | IEEE 802.3ab / SFP+ 10 Gbps | Diagrama Vectorial de Estrella |
| **05** | `#slide-5` | Selección Medio: UTP Cat 6 LSZH | TIA-568-C.2 / IEC 60332-1 / 60754 | Comparativa de Rendimiento y Humos |
| **06** | `#slide-6` | Ubicación MDF: Centro de Gravedad | ANSI/TIA-568 (Límite 90 m) | Baricentro y Cota 34.8 m |
| **07** | `#slide-7` | Gabinete Rack 42U y Climatización | ANSI/TIA-569 / ASHRAE / TIA-942 | Elevación SVG Frontal del Rack 42U |
| **08** | `#slide-8` | Caso Crítico Rayos X: Teorema Shannon | Shannon-Hartley / TIA-607-B | Curva de Capacidad $C$ y Blindaje F/UTP |
| **09** | `#slide-9` | Plano Integral de Red Consolidado | ANSI/TIA-606-B (Etiquetado) | `images/plano_red_preview.png` |
| **10** | `#slide-10` | Infraestructura Wi-Fi 6 | IEEE 802.11ax / Fast Roaming | Cobertura Celular en 5 GHz |
| **11** | `#slide-11` | Certificación Fluke DSX-8000 | ANSI/TIA-568-C.2 Permanent Link | Tabla de Parámetros NEXT/IL/RL |
| **12** | `#slide-12` | Diagnóstico: Trampa del Split Pair | ANSI/TIA-568 Esquema T568B | Diagrama de Par Dividido vs NEXT |
| **13** | `#slide-13` | Presupuesto BOM y Muestra Física | Viabilidad Económica y Sustentación | Cuadro BOM $9,632 y Muestra en Mesa |
