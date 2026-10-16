# Guía Narrativa de la Presentación
## Defensa Técnica — Diseño de Infraestructura Física y Cableado Estructurado LAN
### Policlínico de Especialidades Médicas «Salud & Vida S.A.C.»

> Este documento explica qué se dice y qué se defiende en cada diapositiva,
> escrito en primera persona como si fueras el expositor frente al jurado.

---

## Slide 01 — Portada

Cuando esta diapositiva aparece en pantalla, lo primero que el jurado ve son
cuatro etiquetas normativas: **ANSI/TIA-568-C.2, ANSI/TIA-569-D, ANSI/TIA-606-B
e IEEE 802.3ab/ax**. Eso no es decoración; es una declaración de intención.
Le estamos diciendo al jurado, antes de abrir la boca, que este proyecto no
fue hecho a criterio propio sino que cada decisión tiene un estándar que la
respalda.

El título describe exactamente lo que se hizo: diseñar la infraestructura
física y el cableado estructurado de una red LAN para un policlínico real.
No es una red genérica de laboratorio; tiene un cliente, una dirección y
requisitos clínicos específicos.

---

## Slide 02 — El Problema: ¿Por Qué Había que Rediseñar?

Aquí justificamos que el proyecto era necesario. La tarjeta roja de la
izquierda describe el estado en el que encontramos la instalación:

- **Cables Cat 5e tirados en el piso**, sin ningún tipo de canalización,
  expuestos a que una camilla los pise o los rompa. Eso no es solo un
  problema técnico; en un entorno médico es un riesgo de interrupción del
  servicio clínico.

- **Mini-switches en cascada**: cuando nadie gestiona la red y se van
  encadenando switches no administrados, el tráfico de broadcast se
  multiplica en cada salto. El resultado son tormentas de broadcast que
  consumen el ancho de banda disponible sin transmitir información útil.

- **Interferencia EMI en la sala de Rayos X**: los equipos de diagnóstico
  por imagen generan pulsos electromagnéticos al disparar. Un cable sin
  blindaje en ese entorno recibe ese ruido directamente en los conductores
  de cobre, lo que corrompe los bits transmitidos.

Los dos KPIs de esa tarjeta son datos de estándar, no mediciones en el
sitio: Cat 5e tiene un límite de **100 Mbps** (IEEE 802.3u, Fast Ethernet)
y un ancho de banda de **100 MHz** (ANSI/TIA-568-C.2). Con esos topes, el
cable no puede transportar Gigabit Ethernet, independientemente de cuánto
mejore el resto de la red.

La tarjeta verde de la derecha muestra la solución proyectada. El KPI
**< 1.2 s** de apertura de un estudio DICOM es un cálculo matemático
directo: un estudio radiológico estándar pesa aproximadamente 120 MB; a
1 Gbps (125 MB/s de throughput máximo teórico), el tiempo de transferencia
es **t = 120 MB ÷ 125 MB/s = 0.96 s**, que es menor a 1.2 s. El
**1000 Mbps** es la velocidad garantizada por IEEE 802.3ab sobre Cat 6 UTP.

---

## Slide 03 — ¿Cuántos Puntos de Red y Dónde?

Esta diapositiva responde a la pregunta más básica de cualquier diseño de
cableado: cuántos puntos de red existen y cómo están distribuidos.

La tabla muestra que los 56 jacks RJ-45 no se colocaron de forma arbitraria.
Cada zona recibió puntos según su función:

- Las zonas de **atención pública** (recepción, sala de espera, triaje)
  tienen 11 tomas con cable UTP Cat 6, suficiente para las cargas
  administrativas de registro de pacientes.
  
- Los **consultorios** (C-01 al C-08) tienen 16 tomas: cada consultorio
  cuenta con 2 jacks, que es el mínimo que exige la norma TIA-568 por
  puesto de trabajo, uno para la PC clínica y otro de reserva para VoIP
  o una segunda estación.

- La **zona crítica EMI** (Rayos X y Laboratorio Clínico) tiene solo 6
  tomas, pero son de F/UTP Cat 6A blindado porque ahí la categoría del
  cable importa más que la cantidad.

- La **reserva técnica del 15%** (8 puntos distribuidos) permite conectar
  en el futuro cámaras IP de seguridad o equipos de telemedicina sin
  romper paredes ni tirar cable nuevo.

---

## Slide 04 — ¿Por Qué No Alcanza con un Solo Tipo de Cable?

Esta es la diapositiva que explica el corazón del diseño dual de medios.
El tráfico de una red hospitalaria no es homogéneo; tiene dos perfiles
completamente distintos que conviven en el mismo edificio:

El **tráfico EMR** (historias clínicas electrónicas) son consultas
continuas y pequeñas a una base de datos: cada petición pesa del orden
de los kilobytes y necesita baja latencia para que el sistema no se
sienta lento. El cable UTP Cat 6 estándar cubre esto con amplísimo margen.

El **tráfico DICOM** (imágenes de diagnóstico por imagen) es completamente
diferente: cuando el técnico dispara el equipo de Rayos X, en ese instante
se genera un archivo de 50 a 300 MB que debe transferirse inmediatamente
al servidor PACS para que el médico pueda abrirlo. No es un flujo continuo;
es una ráfaga masiva y repentina. Si el enlace no puede absorberla en menos
de dos segundos, el visor del médico se congela mientras espera, lo que
interrumpe el flujo de trabajo clínico.

Esto explica por qué en la sala de Rayos X no usamos cable ordinario: no
es un capricho, es que la naturaleza física del tráfico que corre por ese
punto lo exige.

---

## Slide 05 — Decisión 1: ¿Por Qué Estrella Jerárquica y No Otra Topología?

El diagrama muestra cómo está estructurada físicamente la red. En el
centro del edificio se ubica el Rack MDF 42U, que actúa como núcleo.
Desde él salen dos enlaces de 10 Gbps (cables DAC de cobre directos)
hacia dos switches de acceso: uno cubre el sector Oeste del edificio y
el otro el sector Este.

La justificación de esta topología frente a las alternativas es clara:

- **Bus y Anillo** son topologías obsoletas. En un bus compartido, todos
  los equipos compiten por el mismo medio y las colisiones son inevitables.
  En un anillo, si se rompe un cable, se cae toda la red. Ninguna de las
  dos es aceptable en un entorno donde la disponibilidad de la red afecta
  la atención médica.

- La **estrella jerárquica** aísla las fallas por puerto: si se rompe el
  cable que va al consultorio 3, solo deja de funcionar ese consultorio;
  el resto de la red no se entera.

- Optamos por **dos capas** (núcleo + acceso) en lugar de tres (núcleo +
  distribución + acceso) porque el edificio tiene una sola planta. Agregar
  una capa de distribución habría sumado equipos, cableado y complejidad
  sin ningún beneficio técnico para esta escala.

---

## Slide 06 — ¿Cómo Viaja un Archivo DICOM por las Capas de la Red?

Esta diapositiva conecta la teoría del modelo OSI con las decisiones
físicas del proyecto. Seguimos el recorrido de un estudio de 120 MB desde
la PC de Rayos X hasta el servidor PACS:

- En la **Capa de Aplicación** el archivo existe como datos DICOM.
- La **Capa de Transporte** (TCP) lo fragmenta en segmentos de 1460 bytes
  (MSS estándar) y los numera para reensamblarlos en destino.
- La **Capa de Red** (IP) les asigna origen y destino.
- La **Capa de Enlace** (Ethernet 802.3) los empaqueta en tramas con una
  cabecera MAC y una cola de verificación CRC-32.
- La **Capa Física** convierte todo eso en señales eléctricas usando la
  codificación 4D-PAM5 sobre los 4 pares de cobre del cable.

¿Por qué importa esto para la elección del cable? Porque si hay ruido
electromagnético en el medio físico, los bits llegan alterados a destino.
La Capa de Enlace detecta el error con el CRC-32 y descarta la trama. La
Capa de Transporte (TCP) no recibe el acuse de recibo y entra en modo de
retransmisión, reduciendo su ventana de congestión. El resultado es que un
enlace físico degradado hace colapsar el rendimiento de toda la pila de
protocolos, aunque los switches y servidores estén perfectamente
configurados.

Esto justifica que el cable en la sala de Rayos X tenga blindaje: no es
para "ir a lo seguro", es porque sin él la física impide que la
transferencia funcione correctamente.

---

## Slide 07 — Decisión 2: ¿Por Qué UTP Cat 6 con Chaqueta LSZH?

El SVG muestra la sección transversal del cable. No es solo una imagen
ilustrativa; cada elemento visible tiene una función técnica:

La **cruceta plástica central (Spline)** separa físicamente los cuatro
pares de conductores. Esto reduce la paradiafonía (NEXT), que es la
interferencia que se genera entre pares adyacentes dentro del mismo cable.
Cuanto más separados están los pares, menos se acoplan entre sí.

La **chaqueta LSZH** (Low Smoke Zero Halogen) es un requisito específico
del entorno hospitalario: en caso de incendio, este material no propaga la
llama y no emite gases halógenos. Los gases halógenos son tóxicos y, en un
edificio con pacientes que no pueden moverse rápidamente, eso se convierte
en un riesgo vital. Un cable con chaqueta PVC convencional queda fuera de
consideración por normativa de seguridad hospitalaria (referencia IEC
60332-1).

En cuanto al descarte de fibra óptica hasta el escritorio (FTTD): la
distancia máxima desde el MDF hasta cualquier toma de la red es de 34.8 m.
La fibra multimodo OM3 tiene sentido a partir de distancias en el orden de
decenas o cientos de metros y en enlaces de backbone de muy alta velocidad.
Para distancias menores a 40 m, la fibra encarece la instalación en
aproximadamente 250% sin aportar ninguna ventaja de velocidad sobre Cat 6,
que a esas distancias entrega Gigabit Ethernet sin problema.

---

## Slide 08 — Decisión 3: ¿Por Qué F/UTP Cat 6A en Rayos X y Laboratorio?

Aquí es donde la física fundamenta la decisión de forma matemática.
El Teorema de Shannon-Hartley establece que la capacidad máxima de un canal
de comunicación es:

**C = B · log₂(1 + S/N)**

donde C es la capacidad en bits por segundo, B es el ancho de banda en Hz,
S es la potencia de la señal y N es la potencia del ruido.

En la sala de Rayos X, el equipo de diagnóstico genera pulsos
electromagnéticos de alta energía (del orden de 100 kV). Si el cable de
datos está en ese entorno sin blindaje, esos pulsos elevan el valor de N
(ruido). Cuando N sube, el cociente S/N cae, y por tanto C cae. La red
deja de poder entregar el ancho de banda que el sistema DICOM necesita para
que las imágenes lleguen en tiempo real.

La solución es un cable **F/UTP Cat 6A**: la "F" indica que tiene una
pantalla de aluminio que envuelve los cuatro pares, actuando como una jaula
de Faraday continua. Esa pantalla desvía los campos electromagnéticos
externos hacia el hilo de drenaje, que está conectado a la barra de tierra
TMGB del rack. La atenuación que ofrece este blindaje es de al menos 40 dB,
lo que significa que el ruido que llega a los conductores queda reducido a
una fracción insignificante.

Adicionalmente, Cat 6A soporta hasta 500 MHz y 10 Gbps, lo que deja el
canal preparado para eventuales equipos de Tomografía Axial Computarizada
(TAC), que generan archivos aún más grandes que los Rayos X convencionales.

---

## Slide 09 — Decisión 4: ¿Cómo Corren los Cables por el Edificio?

El diseño de canalización tiene dos componentes según la zona:

En el **pasillo principal** se usa una bandeja tipo malla de 200×50 mm
suspendida del falso techo a 2.75 m de altura. El SVG muestra los cables
ocupando el 28% del área transversal de la bandeja. La norma ANSI/TIA-569-D
establece que la ocupación inicial no debe superar el 40%, por dos razones:
primero, para que haya espacio disponible para ampliaciones futuras sin
necesidad de instalar una bandeja adicional; segundo, porque los cables en
una bandeja muy llena no se ventilan bien y el calor generado por los
cables PoE+ puede acortar su vida útil.

En los **muros y tabiques** se usa una canaleta de PVC de 40×25 mm con
tabique separador central. El SVG lo muestra claramente: un lado conduce
los cables de datos UTP y el otro conduce el cableado eléctrico de 220V.
Esta separación física no es opcional; la norma TIA-569-D la exige para
evitar que los campos electromagnéticos de la corriente alterna de 60 Hz
acoplen ruido inductivo en los cables de datos.

Los accesorios de curvatura son moldeados de fábrica para garantizar que
el radio de curvatura de los cables en cada esquina nunca sea menor a
cuatro veces el diámetro exterior del cable (4×OD). Si el radio de
curvatura es menor, los pares internos del cable se deforman y el Return
Loss (pérdida de retorno) cae por debajo del límite de certificación.

---

## Slide 10 — Decisión 5: ¿Por Qué el Rack MDF Está en el Centro?

Esta es una decisión de optimización geométrica. La norma ANSI/TIA-568
establece que un enlace permanente (desde el patch panel hasta el keystone
de pared) no puede superar los 90 metros.

El edificio del policlínico tiene 30 metros de longitud y 15 metros de
ancho. Si ubicáramos el rack en una esquina del edificio, el punto más
alejado estaría a unos 35 metros en línea recta, pero el cable tiene que
recorrer las paredes y el falso techo siguiendo las canalizaciones, por lo
que la longitud real del tendido sería considerablemente mayor.

Al ubicar el MDF en el **centro geométrico del edificio**, se maximiza la
simetría de las distancias. El enlace más largo de toda la instalación es
el que va hasta el Laboratorio Clínico, en el extremo este: 34.8 metros
medidos sobre el plano siguiendo la ruta de canalización. Ese valor está
a 55.2 metros del límite de 90 m, es decir, usamos apenas el 38.7% del
canal disponible por norma.

Esta posición central también ahorró más de 650 metros acumulados de cable
frente a la alternativa de colocar el rack en una esquina, lo que se
traduce directamente en menor costo de materiales.

---

## Slide 11 — Decisión 6: ¿Cómo Está Organizado el Rack por Dentro?

El SVG muestra la elevación frontal del rack de arriba a abajo. El
criterio de distribución no es estético; responde a principios de gestión
térmica, accesibilidad y reducción de latiguillos.

En la parte **superior** van los extractores de aire termostatizados. El
calor sube, de modo que los ventiladores al tope del rack extraen el aire
caliente generado por todos los equipos activos ubicados debajo.

Justo debajo están los **patch panels** (tres en total: dos Cat 6 y uno
Cat 6A blindado para las zonas críticas), cada uno seguido de un
organizador de latiguillos. La regla de diseño aquí se llama "topología
sándwich": al colocar los patch panels inmediatamente encima de los
switches de acceso que corresponden, los latiguillos de conexión entre
ambos tienen solo un metro de largo. Si patch panels y switches estuvieran
en extremos opuestos del rack, los latiguillos cruzarían todo el interior
del gabinete, creando un nido de cables imposible de gestionar.

En la parte **inferior** se ubica el UPS Online de Doble Conversión de
3 kVA. Es un UPS de doble conversión, no de standby: la corriente alterna
entra, se convierte a continua para cargar las baterías, y luego se
reconvierte a alterna perfecta antes de alimentar los equipos. Esto
significa que no hay ningún "tiempo de transferencia" cuando se va la luz;
los equipos nunca ven una interrupción. La autonomía de las baterías es
de 45 minutos a carga nominal, tiempo suficiente para un apagado ordenado
o para que llegue un grupo electrógeno.

---

## Slide 12 — El Plano Arquitectónico Civil

Esta diapositiva muestra el plano del edificio a escala 1:100. No hay
texto adicional porque el plano habla por sí solo y permite que el jurado
señale ambientes específicos para hacer preguntas.

Lo que el jurado puede observar aquí: la distribución de los 12 ambientes
del policlínico, las dimensiones de cada espacio y la ubicación del cuarto
MDF en el centro del edificio. Cualquier pregunta sobre "¿dónde queda el
laboratorio?" o "¿qué tan grande es la sala de espera?" se responde con
este plano.

---

## Slide 13 — El Plano Integral de Red y Canalizaciones

Esta es la capa de ingeniería superpuesta sobre el plano civil. Muestra
exactamente por dónde corre cada cable, dónde están instalados los 56 jacks
RJ-45, cuáles son los recorridos de la bandeja de malla por el pasillo y
dónde se ubican los cuatro access points.

La secuencia de slides 12→13 es intencional: primero mostramos el
edificio como espacio físico, luego mostramos cómo diseñamos la red dentro
de ese espacio. El jurado puede verificar visualmente que los cables siguen
las rutas más eficientes y que todos los ambientes tienen puntos de red.

---

## Slide 14 — Decisión 9: ¿Por Qué Cuatro Access Points y Dónde Están?

El diagrama muestra cuatro celdas de cobertura circulares, cada una con un
radio de 8 metros en la banda de 5 GHz. Las celdas se superponen en un 15%
entre sí. Ese solapamiento no es accidental: es el mínimo necesario para
que los protocolos **802.11r** (Fast BSS Transition), **802.11k** (Radio
Resource Management) y **802.11v** (BSS Transition Management) puedan
ejecutar un traspaso de celda sin cortar la sesión activa del dispositivo.
Un médico que camina por el pasillo con una tablet conectada a una
videoconferencia de telemedicina no pierde la sesión al pasar de un AP al
siguiente.

La ubicación del **AP-01 en la Sala de Espera** merece una explicación
particular, porque la alternativa instintiva hubiera sido ponerlo en el
pasillo. La sala de espera concentra hasta 35 personas en horario pico,
todas con teléfonos móviles activos. Si esos 35 dispositivos compiten por
el mismo canal que el AP del pasillo, saturan el medio inalámbrico y
degradan la red médica. Al darle a la sala de espera su propio AP, aislamos
ese tráfico masivo de pacientes.

Además, la red de pacientes está configurada en una VLAN separada con un
límite de ancho de banda de 5 Mbps por usuario, lo que impide que un
paciente descargando videos consuma el canal que necesitan los médicos para
las historias clínicas.

---

## Slide 15 — Decisión 10: ¿Cómo Se Verifica Que la Instalación Funciona?

Aquí explicamos el protocolo de certificación que se aplicaría tras la
instalación. La tabla muestra los cinco parámetros principales que mide
un certificador de radiofrecuencia como el Fluke DSX-8000:

- **Wire Map**: verifica que los 8 hilos del cable lleguen al pin correcto
  en el otro extremo. Un error aquí indica un crimpeado incorrecto o un
  corte de hilo.

- **Longitud (TDR)**: usa reflectometría en el dominio del tiempo para
  medir la longitud eléctrica del cable. El límite es 90 metros; en nuestra
  instalación el valor más alto medido sería 34.8 metros.

- **Atenuación (Insertion Loss)**: mide cuánta señal se pierde entre un
  extremo y el otro. A mayor longitud y mayor frecuencia, mayor atenuación.
  El límite de Cat 6 a 250 MHz es ≤ 31.1 dB.

- **NEXT (Paradiafonía)**: mide la interferencia que irradia un par hacia
  sus pares adyacentes dentro del mismo cable. El límite mínimo para Cat 6
  es ≥ 35.3 dB. Un destrenzado excesivo (más de 13 mm) en la terminación
  del keystone es la causa más frecuente de fallar este parámetro.

- **Return Loss**: mide la energía que rebota de vuelta por reflexiones
  en el cable, causadas típicamente por radios de curvatura incorrectos.

La distinción entre **Enlace Permanente** y **Canal Completo** es
importante para la entrega de obra: el primero evalúa solo el tendido fijo
(sin incluir los latiguillos del rack ni del puesto de trabajo) y tiene un
límite de 90 metros. Es la prueba que se firma al entregar la obra civil.

---

## Slide 16 — Decisión 11: ¿Por Qué No Basta con un Tester de LEDs?

Esta diapositiva expone uno de los errores más comunes y más difíciles de
detectar en instalaciones de cableado: el **Par Dividido (Split Pair)**.

El SVG lo ilustra con precisión. El tester de LEDs básico inyecta corriente
continua (DC) en el cable. Si hay continuidad eléctrica en los 8 pines, los
8 LEDs se encienden en verde. El tester dice "todo bien".

El problema: si durante el crimpeado se mezclaron hilos de pares distintos
(por ejemplo, el hilo azul del Par 1 y el hilo naranja del Par 2 se
terminaron juntos en el mismo lado), la continuidad DC sigue existiendo.
Eléctricamente hay camino de un extremo al otro. El tester no detecta nada
raro.

Pero cuando Gigabit Ethernet empieza a transmitir a 250 MHz, el sistema
de cancelación de diafonía que proporciona el **trenzado de los pares**
deja de funcionar. Ese trenzado es el que genera los campos
electromagnéticos iguales y opuestos que se cancelan entre sí. Si los
hilos de dos pares distintos están juntos, los campos ya no son iguales
ni opuestos, y la interferencia (NEXT) se dispara. La norma Cat 6 exige
NEXT ≥ 35.3 dB; un Split Pair puede dar valores de menos de 15 dB,
lo que provoca una pérdida de paquetes de alrededor del 80%.

Solo un certificador de radiofrecuencia, que mide la respuesta del cable
en frecuencia hasta 250 MHz, puede detectar un Split Pair. Por eso la
certificación metrológica no es un trámite burocrático: es la única forma
de garantizar que la instalación funciona correctamente.

---

## Slide 17 — Presupuesto y Muestra Física

La tabla del BOM (Bill of Materials) presenta el desglose económico en
cuatro partidas. El orden importa: primero cableado pasivo, luego
canalizaciones y tierra, luego el rack con la energía, y finalmente los
equipos activos (switches, APs, servidores). Esa es la misma secuencia
lógica de instalación: primero se tiende el cable, luego se instala el
rack, y finalmente se encienden los equipos.

El costo total directo de suministros es de **$9,632 USD**, lo que equivale
a **$172 USD por punto de red certificado**. Ese costo por punto es el
indicador estándar del sector para comparar proyectos de cableado
estructurado. Para una instalación Gigabit con certificación formal en un
entorno hospitalario, ese valor es técnicamente justificado.

La muestra física de cable UTP que se presenta al jurado debe mostrar:
- El orden de colores T568B correctamente dispuesto en el conector
- Un destrenzado de no más de 13 mm antes del IDC del conector
- La chaqueta ingresando 6 mm dentro del cuerpo del conector para que
  la abrazadera mecánica agarre la chaqueta y no los conductores

Esa muestra física demuestra que el equipo no solo diseñó la red en papel,
sino que sabe ejecutar el trabajo con sus manos.

---

## Nota Final — Flujo de la Defensa Oral

La presentación está diseñada para que las decisiones de ingeniería fluyan
en este orden:

1. Mostramos el **problema** (slide 02)
2. Cuantificamos los **requerimientos** (slides 03 y 04)
3. Defendemos la **topología** (slide 05)
4. Vinculamos con la **teoría del curso** (slide 06)
5. Justificamos cada **decisión de material** con normas y matemáticas
   (slides 07, 08, 09, 10, 11)
6. Presentamos los **planos** como evidencia visual (slides 12 y 13)
7. Defendemos la **red inalámbrica** (slide 14)
8. Explicamos cómo se **verifica** que todo funciona (slides 15 y 16)
9. Cerramos con los **costos** y la **muestra física** (slide 17)

Cada decisión tiene un número (Decisión 1 a 11) que aparece en el tag
de la diapositiva. Si el jurado quiere ir directo a una decisión
específica, el equipo puede navegar por número sin perder el hilo.

---

*Archivo: `analisis/documentacion_diapositivas.md`*
