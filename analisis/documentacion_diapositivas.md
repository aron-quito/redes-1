# Documentación y Justificación de Diapositivas
## Defensa Técnica — Diseño de Infraestructura Física y Cableado Estructurado LAN
### Policlínico de Especialidades Médicas «Salud & Vida S.A.C.»

> **Archivo de presentación:** `diapositivas/index.html`  
> **Total de diapositivas:** 17  
> **Navegación:** `→` / `←` teclado · Clic / Toque · `F` pantalla completa · `Space` / `Enter` avanzar  
> **Normas:** ANSI/TIA-568-C.2 · ANSI/TIA-569-D · ANSI/TIA-606-B · IEEE 802.3ab/ax

---

## Estructura General

La presentación sigue el hilo narrativo de **defensa de decisiones de ingeniería**, no de exposición teórica. Cada slide responde implícitamente a: *"¿por qué tomaron esta decisión y no otra?"*

```
Portada → Problema → Requerimientos → Perfil de Tráfico
→ Topología → Capa Física → Cable Cat 6 → Zonas Críticas (Shannon)
→ Canalizaciones → Ubicación MDF → Rack 42U → Plano Civil
→ Plano de Red → Wi-Fi 6 → Certificación → Split Pair → Presupuesto
```

---

## Slide 01 — Portada Académica

**ID:** `#slide-1` | **Etiqueta:** *Defensa Técnica • Unidad I • Redes de Computadoras I*

### Contenido
- Logo institucional UNJBG
- Título principal del proyecto
- 4 pills de normas: ANSI/TIA-568-C.2, ANSI/TIA-569-D, ANSI/TIA-606-B, IEEE 802.3ab/ax
- Pie: docente Mg. Reynaldo Alfonte Zapana · ESIS · Tacna

### Justificación
Mostrar los estándares desde el primer instante comunica al jurado que el proyecto tiene respaldo técnico-legal. El layout hero centrado sigue la estética de divulgación científica acordada (estilo Manim / 3Blue1Brown).

---

## Slide 02 — El Problema Físico: Caos Operativo en Salud

**ID:** `#slide-2` | **Etiqueta:** *Diagnóstico Situacional*

### Contenido
Dos tarjetas contrastadas:

| Tarjeta Izquierda (rojo) | Tarjeta Derecha (verde) |
|---|---|
| 3 fallas críticas encontradas | 3 mejoras proyectadas |
| KPI: 4.0 min apertura Rx / 10 Mbps degradado | KPI: < 1.2 s apertura DICOM / 1000 Mbps |

**Fallas descritas:**
1. Cables Cat 5e en piso sin canalización, expuestos a camillas
2. Mini-switches en cascada → tormentas de broadcast
3. Interferencia EMI en Rayos X → datos corrompidos (100 kV)

### Justificación
El contraste visual rojo/verde con KPIs cuantificados hace el problema **memorable y auditable**. El jurado puede contrastar antes/después con números exactos, no con opiniones subjetivas.

> **Informe:** Sección 1.1 — Diagnóstico de la Infraestructura Existente

---

## Slide 03 — Dimensionamiento: 450 m² y 56 Tomas

**ID:** `#slide-3` | **Etiqueta:** *Requerimientos de Infraestructura*

### Contenido
- **Tabla — Matriz de Distribución por Zonas:** 5 filas con ambientes, tomas y tipo de cable
- **Panel de criterios de ingeniería:**
  - Regla de 2 tomas mínimas (TIA-568)
  - Reserva técnica 15% (8 puntos para expansión sin obras)
  - Zonificación Oeste público / Este diagnóstico restringido
- KPIs: 450 m² (30×15 m) · 56 Jacks RJ-45

### Justificación
La tabla permite verificar que los números suman correctamente (11+16+6+10+13 = 56). La columna "Tipo Cable" anticipa la decisión de F/UTP Cat 6A solo en zonas críticas, preparando la diapo 08.

> **Informe:** Tabla 3.1 — Distribución de Tomas por Zona

---

## Slide 04 — Perfil de Tráfico: EMR vs. DICOM

**ID:** `#slide-4` | **Etiqueta:** *Análisis de Carga de Red*

### Contenido
Dos tarjetas con diagramas SVG:

- **EMR (cian):** paquetes pequeños equiespaciados, flujo continuo (50 KB/petición), baja latencia < 5 ms, suficiente con Cat 6
- **DICOM (ámbar):** rectángulo de ráfaga masiva (50–300 MB), generada tras disparo Rayos X, riesgo de 15–30 s si enlace degrada a 100 Mbps, exige Gigabit / 10G al servidor PACS

### Justificación
Justifica por qué se usan **dos tipos de cable** en el mismo edificio: la heterogeneidad del tráfico médico lo requiere. El diagrama de ráfaga imita visualizaciones de analizadores de red reales (Wireshark), haciéndolo reconocible.

> **Informe:** Sección 2.3 — Dimensionamiento del Ancho de Banda

---

## Slide 05 — Decisión 1: Estrella Jerárquica Colapsada

**ID:** `#slide-5` | **Etiqueta:** *Diseño Topológico*

### Contenido
- **SVG topológico:** MDF Rack 42U central (cian) con uplinks punteados 10G DAC a SW Acceso 01 (Oeste) y SW Acceso 02 (Este). Nodos terminales codificados por color: Recepción/Farmacia/C01-04 (azul), AP1/2 (morado), C05-08/Admin (azul), Lab (ámbar), Rayos X (rojo)
- **Argumentos de defensa:**
  1. Aislamiento de fallas por puerto
  2. Descarte de Bus y Anillo (obsoletos, colapso total ante una rotura)
  3. Solo 2 capas en lugar de 3 → ahorro $3,500 USD sin beneficio técnico en planta única
- KPIs: 10 Gbps uplinks SFP+ · 100% switches PoE+ gestionados

### Justificación
El código de colores de los nodos es consistente con las zonas de la diapo 03 (Lab = ámbar, Rx = rojo → cable blindado). La numeración "Decisión 1" da estructura a la defensa oral.

> **Informe:** Sección 2.1 — Topología de Red

---

## Slide 06 — Encapsulación: La Capa Física Sostiene la Red

**ID:** `#slide-6` | **Etiqueta:** *Modelos de Referencia*

### Contenido
- **Diagrama de capas OSI vertical:** recorrido de 120 MB DICOM desde Rayos X al PACS
  - Capa 7/6/5 (morado): imagen DICOM 120 MB + metadatos
  - Capa 4 TCP (cian): MSS=1460 bytes, puerto TCP/104
  - Capa 3 IP (cian): IPv4 PC Rayos X → PACS
  - Capa 2 Ethernet 802.3 (verde): MAC + FCS CRC-32
  - Capa 1 Física 4D-PAM5 (ámbar): voltajes en 4 pares F/UTP Cat 6A
- **Argumentos:** ruido → fallo CRC-32 → descarte trama → retransmisión TCP → congestión → resultado final: 120 MB en 1.12 s con medio físico inmune

### Justificación
Vincula la teoría del curso (Modelo OSI, encapsulación) con la decisión de cable blindado. Demuestra que el equipo entiende **por qué** se elige F/UTP, no solo qué es. Es la bisagra entre análisis y selección de materiales.

> **Informe:** Secciones 2.2 y 2.4 — Encapsulación y Capa Física

---

## Slide 07 — Decisión 2: UTP Cat 6 LSZH para el 85% de la Red

**ID:** `#slide-7` | **Etiqueta:** *Medios de Transmisión*

### Contenido
- **SVG sección transversal del cable UTP Cat 6:** chaqueta LSZH Ø 6.2 mm, cruceta (Spline) central, 4 pares codificados (Azul P1, Naranja P2, Verde P3, Marrón P4)
- **Argumentos:**
  1. Spline: mantiene separación física → reduce paradiafonía NEXT drásticamente
  2. LSZH: no propaga llama ni emite gases halógenos → seguridad hospitalaria (NFPA 70 / IEC 60332-1)
  3. Descarte FTTD: distancias < 35 m → fibra encarece 250% sin ventaja de velocidad
- KPIs: 250 MHz · 1000 Mbps garantizados

### Justificación
El argumento LSZH es de **cumplimiento normativo obligatorio** en entornos hospitalarios, convirtiendo la elección en una decisión de seguridad, no solo técnica. Se anticipa también el descarte de fibra al escritorio.

> **Informe:** Sección 2.5 — Selección de Medios y Categoría de Cable

---

## Slide 08 — Decisión 3: F/UTP Cat 6A en Rayos X y Lab

**ID:** `#slide-8` | **Etiqueta:** *Física de Comunicaciones*

### Contenido
- **Fórmula Shannon-Hartley:** C = B · log₂(1 + S/N) con explicación del impacto del ruido N de descargas 100 kV
- **SVG de curva C vs. S/N:** "Alto Ruido: C ↓ (100 Mbps)" vs. "Con Blindaje: C ↑ (10 Gbps)"
- **Argumentos:**
  1. Pantalla de aluminio = jaula de Faraday continua
  2. Atenuación EMI ≥ 40 dB → desvía interferencia al hilo de drenaje → tierra TMGB
  3. Cat 6A (500 MHz) prepara el canal para futura TAC
- KPIs: ≥ 40 dB aislamiento · 500 MHz ancho de banda

### Justificación
Usar Shannon-Hartley no es decorativo: es el fundamento matemático exacto por el que el blindaje es necesario. El equipo puede demostrar ante el jurado que si N crece, S/N cae y la capacidad C se degrada por debajo del umbral DICOM. Estilo gráfico Manim: minimalista, con solo dos anotaciones clave.

> **Informe:** Sección 2.4 — Esquema de Codificación y Capacidad de Canal (Teorema de Shannon)

---

## Slide 09 — Decisión 4: Bandeja Aérea y Canaleta de Doble Vía

**ID:** `#slide-9` | **Etiqueta:** *Infraestructura Física*

### Contenido
Dos tarjetas paralelas:

- **Bandeja Malla 200×50 mm (pasillo):** SVG con 14 cables (28% ocupación, norma ≤ 40%), suspensión a +2.75 m falso techo, ventilación natural de malla
- **Canaleta PVC 40×25 mm (muros):** SVG con tabique central separando DATOS (azul) de ENERGÍA 220V (rojo), radio de curvatura ≥ 4×OD

### Justificación
La separación física de datos y corriente alterna la exige ANSI/TIA-569-D. El 28% de ocupación inicial deja margen para ampliaciones sin obras civiles adicionales.

> **Informe:** Sección 3.2 — Diseño de Canalizaciones

---

## Slide 10 — Decisión 5: Cuarto MDF en el Centro de Gravedad

**ID:** `#slide-10` | **Etiqueta:** *Topografía y Distancias*

### Contenido
- **SVG planta esquemática 30×15 m:** MDF central (cian), vector Oeste→Recepción (17.7 m, cian), vector Este→Lab Clínico (34.8 m, rojo = enlace máximo)
- **Argumentos:**
  1. Límite TIA-568: 90.0 m para enlace permanente
  2. Enlace más lejano: 34.80 m (Lab Clínico, extremo este)
  3. Margen de seguridad: +55.20 m (61.3% bajo el límite)
  4. Ahorro económico: posición central ahorró > 650 m de cable vs. rack en esquina
- KPIs: 34.8 m toma más lejana · 90.0 m tope TIA

### Justificación
La ubicación del MDF no fue arbitraria sino resultado de una **optimización de distancias**. El vector rojo con su etiqueta permite al jurado verificar visualmente que 34.8 m está muy por debajo del límite de 90 m.

> **Informe:** Sección 4.1 — Plano Arquitectónico y Cálculo de Distancias

---

## Slide 11 — Decisión 6: Elevación Modular del Rack 42U

**ID:** `#slide-11` | **Etiqueta:** *Gabinete Central*

### Contenido
**SVG de elevación frontal del Rack 42U:**

| U | Elemento |
|---|---|
| U40–U42 | Extractores Termostatizados |
| U38–U39 | Patch Panel 01 Cat 6 (24p) + Organizador 1U |
| U36–U37 | Patch Panel 02 Cat 6 (24p) + Organizador 1U |
| U34–U35 | Patch Panel 03 Cat 6A Blindado + Organizador 1U |
| U32–U33 | Switch Acceso 01 (24p PoE+) |
| U30–U31 | Switch Acceso 02 (24p PoE+) |
| U28–U29 | Switch Core / Distribución (4 SFP+ 10G) |
| U24–U27 | Servidor EMR + PACS (4U) |
| U20 | PDU 8 tomas C13 Termomagnético |
| U14–U19 | UPS Online Doble Conversión 3000 VA / 2700 W |

**Argumentos:**
1. Topología sándwich: Patch panels sobre switches → latiguillos de 1 m sin cruzaderas
2. UPS Online Doble Conversión (3 kVA): onda senoidal pura, 0 ms de transferencia
3. TMGB (TIA-607): pozo a tierra ≤ 5 Ω
- KPIs: 42U · 45 min autonomía

### Justificación
El diagrama de elevación es el documento técnico más auditado en una instalación de cableado estructurado. La distribución sándwich es práctica recomendada por Cisco y BICSI para minimizar latiguillos dentro del rack.

> **Informe:** Sección 3.3 — Diseño del Rack 42U y Elevación Modular

---

## Slide 12 — Decisión 7: Distribución Física de Ambientes

**ID:** `#slide-12` | **Etiqueta:** *Diseño Civil*

### Contenido
Plano arquitectónico civil a escala 1:100 (`images/plano.png`) ocupando toda la pantalla, dentro de marco tipo *blueprint* (fondo azul profundo, borde doble).

### Justificación
Diapositiva intencionalmente **minimal**: solo el plano. Permite al jurado señalar ambientes específicos durante las preguntas («¿dónde queda el MDF?», «¿cómo llega el cable a Rayos X?»). El marco blueprint refuerza el lenguaje de ingeniería de planta.

> **Informe:** Figura 4.1 — Plano Arquitectónico Civil

---

## Slide 13 — Decisión 8: Plano Integral de Red y Canalizaciones

**ID:** `#slide-13` | **Etiqueta:** *Ingeniería de Planta*

### Contenido
Plano de ingeniería de red (`images/plano_red_preview.png`) con rutas de bandeja aérea, posición de tomas RJ-45 y acometidas al Rack MDF.

### Justificación
La secuencia 12→13 (plano civil → plano de red) educa al jurado en la diferencia entre arquitectura y diseño de red. El plano de red es el documento que un contratista usaría para ejecutar la obra.

> **Informe:** Figura 4.2 — Plano Integral de Red LAN

---

## Slide 14 — Decisión 9: 4 Access Points Wi-Fi 6 (802.11ax)

**ID:** `#slide-14` | **Etiqueta:** *Conectividad Inalámbrica*

### Contenido
- **SVG de celdas Wi-Fi:** 4 círculos morados con 15% de solapamiento sobre planta esquemática: AP-01 (Sala de Espera), AP-02 (Pasillo O), AP-03 (Pasillo E), AP-04 (Administración)
- **Argumentos — por qué AP-01 en Sala de Espera:**
  1. Hasta 35 personas en sala → AP dedicado para no saturar red clínica
  2. Fast Roaming (802.11r/k/v): médico con tablet sin corte de sesión
  3. Aislamiento SSIDs: pacientes en VLAN separada, BW limitado a 5 Mbps
- KPIs: ≥ -65 dBm RSSI en borde de celda · 15% solapamiento

### Justificación
Justifica específicamente AP-01 en Sala de Espera, decisión discutida durante el diseño. La alta densidad de pacientes obliga a un AP propio para no interferir con la red médica. El aislamiento por VLAN es un requisito de seguridad hospitalaria.

> **Informe:** Sección 4.3 — Diseño de Cobertura Inalámbrica Wi-Fi 6

---

## Slide 15 — Decisión 10: Certificación Metrológica TIA-568-C.2

**ID:** `#slide-15` | **Etiqueta:** *Aseguramiento de Calidad*

### Contenido
**Tabla de parámetros de certificación (Fluke DSX-8000, Nivel IIIe):**

| Parámetro RF | Límite Cat 6 (250 MHz) | Causa Típica de Falla |
|---|---|---|
| Wire Map | Continuidad 1:1 directa | Corte de hilo / Error pinout |
| Longitud (TDR) | ≤ 90.0 m (Medido: 34.8 m) | Tirada excesiva de cable |
| Atenuación (IL) | ≤ 31.1 dB | Cable CCA o longitud |
| NEXT (Paradiafonía) | ≥ 35.3 dB | Destrenzado > 13 mm |
| Return Loss | ≥ 10.0 dB | Radio curvatura < 4×OD |

**Modelo Enlace Permanente vs. Canal Completo:**
- Enlace Permanente (90 m): solo tendido fijo → prueba de entrega de obra civil
- Canal Completo (100 m): suma latiguillos → mantenimiento operativo
- Dictamen: 100% de 56 enlaces certificados, garantía 20 años
- KPIs: 100% Pass/Fail · Nivel IIIe

### Justificación
Los valores numéricos exactos con sus causas de falla demuestran que el equipo conoce los criterios de aceptación. El jurado puede preguntar "¿qué pasaría si el NEXT falla?" → respuesta en diapo 16.

> **Informe:** Sección 5.1 — Protocolo de Pruebas y Certificación

---

## Slide 16 — Decisión 11: Por Qué el Tester de LEDs Engaña

**ID:** `#slide-16` | **Etiqueta:** *Diagnóstico Avanzado*

### Contenido
**SVG comparativo Split Pair:**
- **Caso A — Tester LED básico (verde):** 4 líneas rectas (continuidad DC) → "LED 1..8: OK (FALSO)"
- **Caso B — Certificador RF (rojo):** 2 líneas rectas + 2 líneas cruzadas en parábola → "NEXT < 15 dB (FALLA)"

**Argumentos:**
1. La trampa DC: mezclar hilos de pares distintos mantiene continuidad metálica → LED verde (falso positivo)
2. Desastre RF: se pierde cancelación electromagnética por trenzado → NEXT dispara → 80% pérdida de paquetes
3. Solo certificador RF detecta el Split Pair

KPIs: < 15 dB NEXT catastrófico · ≥ 35.3 dB límite norma Cat 6

### Justificación
El Split Pair es el error más común en instalaciones no profesionales y el menos intuitivo. Este slide es el más **didáctico** de la presentación: demuestra con vectores la diferencia entre dominio DC y dominio RF, educando al jurado en por qué se necesita un certificador de radiofrecuencia.

> **Informe:** Sección 5.2 — Par Dividido (Split Pair) y Pruebas Avanzadas

---

## Slide 17 — Presupuesto Consolidado y Muestra Física UTP

**ID:** `#slide-17` | **Etiqueta:** *Cierre de la Propuesta*

### Contenido
**Tabla BOM (Bill of Materials):**

| Partida | USD | PEN | % |
|---|---|---|---|
| P1: Cableado Pasivo | $2,208.00 | S/. 8,280.00 | 22.9% |
| P2: Canalizaciones y Tierra | $1,084.00 | S/. 4,065.00 | 11.3% |
| P3: Rack 42U y UPS 3 kVA | $2,650.00 | S/. 9,937.50 | 27.5% |
| P4: Equipos Activos y APs | $3,690.00 | S/. 13,837.50 | 38.3% |
| **TOTAL DIRECTO** | **$9,632.00** | **S/. 36,120.00** | **100%** |

KPIs: $172 USD por punto completo · 56 puntos certificados

**Muestra Física de Cable UTP (T568B):**
- Crimpeado T568B: 13–14 mm expuestos, chaqueta 6 mm dentro del conector
- Destrenzado ≤ 13 mm: cumplimiento NEXT a 250 MHz
- Cable y tester disponibles para prueba práctica ante el docente

### Justificación
El presupuesto al final (no al inicio) sigue la lógica de **justificar el costo después de demostrar el valor técnico**. El jurado ya vio 16 diapositivas de ingeniería rigurosa; el precio de $172 por punto resulta razonable en ese contexto. La muestra física es el elemento tangible de la defensa oral.

> **Informe:** Sección 3.4 — Cómputo de Materiales y Presupuesto

---

## Mapa de Decisiones Numeradas

| # Decisión | Slide | Título |
|---|---|---|
| 1 | 05 | Topología Estrella Jerárquica Colapsada |
| 2 | 07 | UTP Cat 6 LSZH para el 85% de la red |
| 3 | 08 | F/UTP Cat 6A en zonas críticas EMI |
| 4 | 09 | Bandeja malla aérea + canaleta doble vía |
| 5 | 10 | MDF en el centro de gravedad del edificio |
| 6 | 11 | Elevación modular del Rack 42U |
| 7 | 12 | Distribución de ambientes — plano civil |
| 8 | 13 | Plano integral de red y canalizaciones |
| 9 | 14 | 4 APs Wi-Fi 6 con Fast Roaming |
| 10 | 15 | Certificación metrológica TIA-568-C.2 |
| 11 | 16 | Certificador RF vs. tester básico (Split Pair) |

---

## Guía de Navegación

| Tecla / Acción | Resultado |
|---|---|
| `→` / `Space` / `Enter` / Clic | Avanza slide |
| `←` / `Backspace` | Retrocede slide |
| `F` | Pantalla completa |
| Swipe izquierda/derecha | Navegar en móvil |

### Exportar a PDF
1. Abrir `diapositivas/index.html` en Chrome/Edge
2. `Ctrl+P` → Guardar como PDF
3. Orientación: Horizontal · Márgenes: Ninguno · Activar "Gráficos de fondo"

---

*Archivo: `analisis/documentacion_diapositivas.md`*
