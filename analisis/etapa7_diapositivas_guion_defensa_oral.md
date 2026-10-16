# ETAPA 7: MODELO DE DIAPOSITIVAS Y GUION ESTRATÉGICO DE DEFENSA ORAL
## "Diseño de la Infraestructura Física y Cableado Estructurado de una Red LAN para el Policlínico de Especialidades Médicas Salud & Vida S.A.C."

---

### Ficha Técnica de la Exposición Oral
* **Asignatura:** Redes de Computadoras I (Evaluación Sumativa — Unidad I).
* **Docente:** Mg. REYNALDO ALFONTE ZAPANA.
* **Institución:** Universidad Nacional Jorge Basadre Grohmann (UNJBG) — ESIS.
* **Tiempo Total:** 20 minutos de defensa cronometrada + 5 minutos de ronda de preguntas.
* **Formato:** 12 Diapositivas de alto impacto visual (Límite estricto de la rúbrica: 10 a 12 slides).
* **Regla de Oro de la Presentación:** **Cero lectura de párrafos enciclopédicos.** La presentación está diseñada para proyectar **gráficos, diagramas de bloques, tablas comparativas, esquemas de elevación y planos de planta**, mientras los expositores defienden verbalmente las **decisiones de ingeniería** adoptadas frente a las alternativas descartadas.

---

### Matriz de Distribución y Roles del Equipo (5 Integrantes)

| Integrante | Rol Técnico | Diapositivas a Cargo | Minutero | Enfoque de la Defensa |
| :--- | :--- | :--- | :---: | :--- |
| **Integrante 1** | Líder de Proyecto / Diagnóstico | **Slides 01, 02 y 03** | 00:00 – 04:30 | Problemática operativa, levantamiento de requerimientos y perfil de tráfico médico. |
| **Integrante 2** | Ingeniero de Topología y Red | **Slides 04 y 05** | 04:30 – 08:30 | Selección de topología en estrella colapsada y encapsulación del flujo DICOM. |
| **Integrante 3** | Especialista en Medios Físicos | **Slides 06 y 07** | 08:30 – 12:30 | Matriz de medios (UTP Cat 6 vs. F/UTP Cat 6A por Shannon) y canalizaciones físicas. |
| **Integrante 4** | Ingeniero de Cuarto de Telecom. | **Slides 08 y 09** | 12:30 – 16:30 | Ubicación central del MDF, elevación del Rack 42U y planimetría de tomas. |
| **Integrante 5** | Certificación y Control de Calidad | **Slides 10, 11 y 12** | 16:30 – 20:00 | Cobertura Wi-Fi 6, protocolo de certificación Fluke, falla Split Pair y muestra física. |

---

## Estructura Diapositiva por Diapositiva (12 Slides)

```
========================================================================================
SLIDE 01: PORTADA INSTITUCIONAL Y PROPUESTA TÉCNICA
========================================================================================
```
* **Responsable:** Integrante 1 (Líder de Proyecto)
* **Tiempo:** 1 minuto (00:00 – 01:00)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* Logotipos oficiales en alta definición: **UNJBG** y **Facultad de Ingeniería**.
* Título del Proyecto: *"Infraestructura Física y Cableado Estructurado LAN para el Policlínico de Especialidades Médicas Salud & Vida"*.
* Render/Foto de un Rack 42U ordenado con peinado profesional y rotulado TIA-606-B.
* Nombres de los 5 integrantes con sus roles técnicos de ingeniería.
* Nombre del Docente: **Mg. Reynaldo Alfonte Zapana**.

#### Lo que se DEFIENDE Verbalmente (Argumentos Clave)
* Presentación como consultora senior de telecomunicaciones.
* En el sector salud, la red física no es un gasto accesorio; es la infraestructura crítica de la que dependen la vida de los pacientes, la disponibilidad 24/7 de Historias Clínicas Electrónicas (EMR) y la descarga inmediata de imágenes diagnósticas DICOM.
* Nuestra propuesta se rige bajo estándares unificados **ANSI/TIA-568, 569 y 606**, priorizando inmunidad ante interferencias (EMI), escalabilidad a 10 años y óptima relación costo-beneficio.

---

```
========================================================================================
SLIDE 02: EL PROBLEMA REAL VS. LA SOLUCIÓN DE INGENIERÍA
========================================================================================
```
* **Responsable:** Integrante 1 (Líder de Proyecto)
* **Tiempo:** 1 minuto 30 segundos (01:00 – 02:30)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* **Infografía comparativa:** "Situación Actual Caótica" vs. "Solución Proyectada TIA".

```
  [ SITUACIÓN ACTUAL ENCONTRADA ]        VS.       [ SOLUCIÓN DE INGENIERÍA PROYECTADA ]
  ---------------------------------               -------------------------------------
  • Cables Cat 5e sueltos en piso                 • 100% Canalizado (Bandeja Malla + PVC 2 vías)
  • Mini-switches cascada en mesas                • Switch Core + 2 Switches Acceso PoE+ en Rack
  • Caídas constantes en Rayos X                  • Enlace F/UTP Cat 6A Blindado (Jaula Faraday)
  • Apertura de radiografía: 4 minutos            • Apertura de radiografía: < 1.5 segundos
  • Routers domésticos colapsados                 • Wi-Fi 6 Corporativo (802.11ax) Roaming Fast
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **¿Cuál era el problema?** El policlínico operaba con una red precaria de grado doméstico: cables Cat 5e pisoteados por camillas, mini-switches de plástico en cascada que creaban tormentas de broadcast y un retardo de hasta 4 minutos para cargar una tomografía o radiografía.
* **El síntoma más grave:** En Rayos X y Laboratorio, los cables corrían pegados a líneas de alta tensión de 220V/380V y al tubo radiológico (100 kV), induciendo ruido electromagnético que corrompía las tramas de datos.
* **El objetivo del proyecto:** Diseñar una red empresarial en una sola planta de 450 m², certificable a 250/500 MHz, que erradique cuellos de botella y centralice la administración en un único cuarto MDF.

---

```
========================================================================================
SLIDE 03: REQUERIMIENTOS Y MATRIZ DE DIMENSIONAMIENTO
========================================================================================
```
* **Responsable:** Integrante 1 (Líder de Proyecto)
* **Tiempo:** 1 minuto 30 segundos (02:30 – 04:00)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* Gráfico de Torta / KPIs de tomas de red: **56 Puntos Totales**.
* Tabla resumida de requerimientos por área funcional:

| Zona / Servicio | Ambientes | Tomas RJ-45 | Tipo de Cable | Justificación de Demanda |
| :--- | :---: | :---: | :---: | :--- |
| **Atención y Triaje** | Admisión, Triaje, Espera | **11 tomas** | UTP Cat 6 | Facturación continua, turnero TV y PC triaje |
| **Consulta Externa** | Consultorios 01 al 08 | **16 tomas** | UTP Cat 6 | 2 tomas por box (PC médica + reserva/impresora) |
| **Zona Crítica EMI** | Rayos X y Lab. Clínico | **6 tomas** | **F/UTP Cat 6A** | Transferencia de archivos DICOM masivos (50–300 MB) |
| **Administración** | Jefatura, Contab., Farmacia | **10 tomas** | UTP Cat 6 | Servidores locales, caja y gerencia médica |
| **Infraestructura** | WLAN (APs) y Rack MDF | **13 tomas** | UTP / F-UTP | 4 APs PoE+ Wi-Fi 6, servidores y reservas técnicas |
| **TOTAL GENERAL** | **18 Ambientes** | **56 Tomas** | **85% UTP / 15% F-UTP** | **100% Centralizado en Rack 42U** |

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **Requerimiento normativo:** La norma ANSI/TIA-568 exige un mínimo de **2 tomas de red por puesto de trabajo** (una para datos del médico y otra para impresora clínica o reserva de telefonía IP).
* **Sobredimensionamiento controlado:** Se incorporaron 8 tomas de reserva técnica en el Rack para futuras expansiones (como telemedicina o cámaras IP) sin tener que romper paredes a futuro.

---

```
========================================================================================
SLIDE 04: TOPOLOGÍA FÍSICA EN ESTRELLA JERÁRQUICA COLAPSADA
========================================================================================
```
* **Responsable:** Integrante 2 (Ingeniero de Topología y Red)
* **Tiempo:** 2 minutos (04:00 – 06:00)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* **Diagrama Topológico Oficial (Figura 2.1 del Informe):**

```
                     +---------------------------------------+
                     |         MDF RACK 42U (NÚCLEO)         |
                     |  Switch Core 24p GbE + 4 SFP+ 10G     |
                     |  Servidores HCE / PACS + Router/FW    |
                     +---------------------------------------+
                              //                   \\
           Uplink 10G DAC    //                     \\   Uplink 10G DAC
          (SFP+ Direct Attach)                       (SFP+ Direct Attach)
                            //                         \\
    +----------------------------------+     +----------------------------------+
    |         SW ACCESO 01             |     |         SW ACCESO 02             |
    |   24 Puertos GbE PoE+ (370W)     |     |   24 Puertos GbE PoE+ (370W)     |
    +----------------------------------+     +----------------------------------+
         |      |      |      |                   |      |      |      |
      Recep.  Farm.  C01-C04  AP-01/02          C06-C08 Admin  Lab.  Rayos X
      (UTP)   (UTP)  (UTP)    (PoE)             (UTP)   (UTP) (F/UTP)(F/UTP)
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **¿Por qué Estrella Jerárquica y no Bus o Anillo?**
  * Si un cable se corta o un jack falla, solo se aísla ese equipo; el resto de la clínica sigue funcionando sin interrupción.
  * Localización instantánea de fallas directamente en el puerto del patch panel.
* **¿Por qué Colapsada (Core + Acceso)?**
  * Al ser un edificio de 1 solo piso y 450 m², una topología de tres capas (Core, Distribución y Acceso) habría encarecido el proyecto en más de $3,500 USD de forma innecesaria.
* **El Troncal a 10 Gbps:**
  * La interconexión entre el Switch Core y los switches de acceso se realiza mediante cables **DAC (Direct Attach Copper) pasivos SFP+ a 10 Gbps**, eliminando cualquier cuello de botella en el corazón del rack.

---

```
========================================================================================
SLIDE 05: MODELOS DE REFERENCIA Y FLUJO DE ENCAPSULACIÓN DICOM
========================================================================================
```
* **Responsable:** Integrante 2 (Ingeniero de Topología y Red)
* **Tiempo:** 2 minutos (06:00 – 08:00)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* Diagrama del recorrido de un estudio radiológico (desde el equipo de Rayos X hasta el Servidor PACS en el Rack MDF):

```
 [ CAPA 7-5: APLICACIÓN ]  --> Genera Estudio DICOM (Tomografía/Placa: 120 MB)
 [ CAPA 4: TRANSPORTE ]    --> Segmentación TCP (MSS: 1460 bytes) | Puerto TCP/104 (DICOM Storage)
 [ CAPA 3: RED ]           --> Cabecera IP (Origen: 192.168.30.15 -> Destino: Servidor PACS)
 [ CAPA 2: ENLACE ]        --> Trama Ethernet IEEE 802.3 con Checksum CRC-32 (Detección de errores)
 [ CAPA 1: FÍSICA ]        --> Modulación 4D-PAM5 (Voltajes en cobre F/UTP Cat 6A blindado)
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **Relación con el problema clínico:** El médico radiólogo no puede tolerar paquetes corruptos ni latencias. Mostramos cómo la Capa Física (Capa 1) sostiene a todo el modelo.
* Si la capa física tiene ruido electromagnético, la Capa 2 descarta las tramas por error de CRC-32 y la Capa 4 (TCP) entra en retransmisión constante, congelando la pantalla del médico.
* Al garantizar un medio físico blindado y balanceado, la transferencia de 120 MB se completa en **menos de 1.2 segundos**.

---

```
========================================================================================
SLIDE 06: SELECCIÓN DE MEDIOS FÍSICOS Y TEOREMA DE SHANNON
========================================================================================
```
* **Responsable:** Integrante 3 (Especialista en Medios Físicos)
* **Tiempo:** 2 minutos (08:30 – 10:30)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* **Fórmula de Shannon-Hartley:**  $C = B \cdot \log_2\left(1 + \frac{S}{N}\right)$
* **Tabla de Selección Racional de Medios:**

```
  MEDIO PROPUESTO          PORCENTAJE   ÁREA DESTINADA       JUSTIFICACIÓN TÉCNICA
  -----------------------  ----------   ------------------   ----------------------------------------
  UTP Cat 6 LSZH           85% (47 pts) Consultorios, Adm.   250 MHz / 1 Gbps. Cero halógenos (Salud).
  F/UTP Cat 6A Blindado    15% (9 pts)  Rayos X, Lab, Rack   500 MHz / 10 Gbps. Pantalla EMI >= 40 dB.
  Fibra Óptica OM3 / DAC   Troncal Rack Enlace Switches 10G  Inmunidad total en backbone de 1 metro.
  Coaxial / FTTD           0%           DESCARTADOS          Coaxial obsoleto; Fibra al puesto antieconómica.
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **Defensa matemática contra el docente:**
  * "¿Por qué no usamos UTP simple en Rayos X?"  
    Porque el transformador de 100 kV dispara el ruido ambiental ($N$). Por el Teorema de Shannon, si $N$ crece, la capacidad de canal ($C$) se desploma.
  * La pantalla de lámina de aluminio (*foil*) del cable **F/UTP Cat 6A** atenúa el ruido en más de **40 dB**, manteniendo la relación señal/ruido ($S/N$) en niveles óptimos.
* **¿Por qué chaqueta LSZH (Low Smoke Zero Halogen)?**
  * Es una exigencia en centros hospitalarios: ante un conato de incendio, el forro LSZH no propaga llama ni libera gases tóxicos corrosivos, protegiendo a pacientes con problemas respiratorios.
* **¿Por qué se descartó fibra óptica hasta el escritorio (FTTD)?**
  * Las distancias máximas del policlínico son de apenas 34.8 m. Llevar fibra al escritorio habría triplicado el costo por punto (tarjetas PCIe de fibra y transceptores ópticos) sin brindar ninguna ventaja sobre el cobre Cat 6 a 1 Gbps.

---

```
========================================================================================
SLIDE 07: DISEÑO DE CANALIZACIONES Y RUTAS FÍSICAS
========================================================================================
```
* **Responsable:** Integrante 3 (Especialista en Medios Físicos)
* **Tiempo:** 2 minutos (10:30 – 12:30)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* Esquema de corte transversal de las dos canalizaciones del proyecto:

```
    A) BANDEJA PORTACABLES TIPO MALLA (200x50 mm)       B) CANALETA DE PARED PVC (40x25 mm)
       Suspendida en pasillo a +2.75 m (Falso Techo)       Adosada a muros a +0.40 m s.n.p.t.
    +-----------------------------------------------+   +-----------------------------+
    |  (o) (o) (o) (o) (o) (o) (o)                  |   | [DATOS]      | [ENERGÍA]    |
    |  OCUPACIÓN INICIAL: 28%                       |   | Cable UTP    | Línea 220V   |
    |  (Límite TIA-569: Máximo 40% inicial)         |   | Cat 6 LSZH   | Estabilizada |
    +-----------------------------------------------+   +--------------|--------------+
       * Ventilación natural y cero acumulación de polvo    * Tabique separador físico interno
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **Regulación ANSI/TIA-569:**
  * La ocupación inicial de la bandeja es del **28%** (56 cables en una bandeja de 200$\times$50 mm), cumpliendo holgadamente el tope normativo del 40%, lo que permite un crecimiento futuro del 50% en nuevos cables sin sobrecargar la estructura.
* **Separación de datos y fuerza eléctrica:**
  * En las bajadas de pared se utiliza canaleta con **tabique separador interno** o separación de 20 cm respecto a cables eléctricos de 220V no apantallados, evitando inducción electromagnética de 60 Hz.
* **Respeto a la física del cable:**
  * Radio de curvatura mínimo garantizado: $4 \times \text{diámetro exterior}$ ($25\text{ mm}$ en Cat 6).
  * Destrenzado en terminación IDC estrictamente menor a **13 mm** para evitar diafonía (NEXT).

---

```
========================================================================================
SLIDE 08: UBICACIÓN ESTRATÉGICA DEL CUARTO MDF Y GABINETE RACK 42U
========================================================================================
```
* **Responsable:** Integrante 4 (Ingeniero de Cuarto de Telecomunicaciones)
* **Tiempo:** 2 minutos (12:30 – 14:30)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* Esquema del **Centro de Gravedad de Cableado** y **Elevación del Rack 42U**:

```
 [ ELEVACIÓN FRONTAL RACK 42U - 19" (GABINETE CERRADO 800 mm) ]
 ================================================================
 U40-U42 : Techo con 4 extractores de aire termostatizados
 U37-U38 : Organizador de cables superior
 U35-U36 : PATCH PANEL 01 (24 puertos Cat 6 UTP - Puestos Oeste)
 U34     : Organizador horizontal de cables 1U
 U32-U33 : PATCH PANEL 02 (24 puertos Cat 6 UTP - Puestos Este)
 U31     : Organizador horizontal de cables 1U
 U29-U30 : PATCH PANEL 03 (24 puertos Cat 6A Blindado - Zona Crítica)
 U28     : Organizador horizontal de cables 1U
 U24     : SWITCH DE ACCESO 01 (24p GbE PoE+ 370W)
 U22     : SWITCH DE ACCESO 02 (24p GbE PoE+ 370W)
 U20     : SWITCH CORE / DISTRIBUCIÓN (24p GbE + 4 SFP+ 10G)
 U18     : ROUTER / FIREWALL GATEWAY PERIMETRAL
 U14-U16 : SERVIDOR 01 (Historias Clínicas EMR) + SERVIDOR 02 (PACS)
 U08     : PDU HORIZONTAL (8 Tomas C13 con interruptor térmico)
 U04-U06 : UPS ONLINE DOBLE CONVERSIÓN (3000 VA / 2700 W - Autonomía 45 min)
 U01-U03 : Barra equipotencial de puesta a tierra TMGB (TIA-607)
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **¿Por qué el MDF está en el centro geográfico del inmueble?**
  * Reduce la tirada máxima a **34.8 metros** hacia el Laboratorio y Rayos X (frente al límite de 90 m de TIA-568).
  * Menor longitud = menor resistencia óhmica, menor atenuación de señal (IL) y ahorro de más de 600 metros de cable de cobre.
* **Diseño del Rack:**
  * Distribución tipo *"Sandwich"*: Patch panel alternado con organizador de 1U y switches en el centro, permitiendo usar *patch cords* cortos de 1 metro y evitando "marañas" de cables.
  * Respaldo eléctrico: **UPS Online de doble conversión** de 3 kVA que aísla los picos de tensión de la red pública y entrega 45 minutos de autonomía ante apagones.

---

```
========================================================================================
SLIDE 09: PLANO ARQUITECTÓNICO Y DISTRIBUCIÓN DE AMBIENTES
========================================================================================
```
* **Responsable:** Integrante 4 (Ingeniero de Cuarto de Telecomunicaciones)
* **Tiempo:** 2 minutos (14:30 – 16:30)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* Proyección del **Plano Arquitectónico Oficial de Red (Figura 4.3 / Plano SVG)**:
  * Dimensión total: **30.00 m de largo $\times$ 15.00 m de ancho** ($450\text{ m}^2$).
  * **Ala Norte (Oeste a Este):** Recepción (6 tomas) | Farmacia (3 tomas) | Consultorios 1 al 5 (2 tomas c/u).
  * **Pasillo Central:** Bandeja aérea tipo malla en falso techo de 30 metros de largo.
  * **Ala Sur (Oeste a Este):** Sala de Espera (con AP-01) | Triaje (3 tomas) | Cuarto MDF central | C-06 | C-07 y C-08 | Administración (con AP-04) | Laboratorio y Rayos X (con tomas F/UTP apantalladas).

```
 +-----------------------------------------------------------------------------------------------+
 | RECEPCIÓN  | FARMACIA  |  C-01   |  C-02   |  C-03   |  C-04   |      C-05 (Extremo Este)     |
 |  (6 UTP)   |  (3 UTP)  | (2 UTP) | (2 UTP) | (2 UTP) | (2 UTP) |            (2 UTP)           |
 +------------+-----------+---------+---------+---------+---------+------------------------------+
 |=== BANDEJA PORTACABLES TIPO MALLA 200x50 mm EN PASILLO CENTRAL (AP-02) ======== (AP-03) =====|
 +-----------------------------------------------------------------------------------------------+
 | SALA ESPERA |  TRIAJE   | CUARTO  |  C-06   |  C-07   | ADMIN.  | LAB. CLÍNICO (3 F/UTP)       |
 | (TV + AP-01)|  (3 UTP)  |   MDF   | (2 UTP) |---------| (7 UTP  |------------------------------|
 | SS.HH. PÚBL |           |(RACK42U)|         |  C-08   | + AP-04)| RAYOS X Y ECO (3 F/UTP)      |
 +-----------------------------------------------------------------------------------------------+
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* El plano no es un dibujo conceptual abstracto; está modelado a **escala 1:100 exacta**.
* Cada ambiente cuenta con su número exacto de tomas rotuladas según la norma **ANSI/TIA-606-B** (ejemplo: `R1-PP1-P15 / C01-D1`).
* Se respeta la zonificación médica: los ambientes ruidosos (espera y recepción) están al ingreso, las consultas médicas en el centro y el bloque de diagnóstico y laboratorio al fondo para bioseguridad.

---

```
========================================================================================
SLIDE 10: COBERTURA INALÁMBRICA WI-FI 6 DE ALTA DENSIDAD
========================================================================================
```
* **Responsable:** Integrante 5 (Certificación y Calidad)
* **Tiempo:** 1 minuto 30 segundos (16:30 – 18:00)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* **Mapa de Calor / Celdas de Cobertura de los 4 Access Points (Radio 8.0 m en 5 GHz):**

```
  AP-01 [SALA DE ESPERA]   --> SSID Público "Salud_Pacientes" (Aislado, límite 5 Mbps) + Smart TV
  AP-02 [PASILLO OESTE]    --> SSID Médico "Salud_Clinica" (WPA3-Enterprise, Roaming Consultorios 1-4)
  AP-03 [PASILLO ESTE]     --> SSID Médico "Salud_Clinica" (WPA3-Enterprise, Roaming C05-C08 y Lab)
  AP-04 [ADMINISTRACIÓN]   --> SSID Administrativo "Salud_Admin" (VLAN Gerencia, EMR y Contabilidad)
```

* **KPIs de Radiofrecuencia:**
  * Nivel de señal en borde de celda: $\text{RSSI} \geq -65\text{ dBm}$.
  * Solapamiento entre celdas contiguas: **15%** (Garantiza *Fast Roaming* IEEE 802.11r/k/v sin corte de videollamadas ni sesiones médicas).

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **¿Por qué AP-01 está en Sala de Espera?**
  * Es la zona con mayor concentración simultánea de personas (hasta 35 pacientes). Requiere un AP exclusivo para absorber la demanda sin congestionar la red médica.
* **Separación lógica de redes (VLANs / SSIDs):**
  * Un paciente conectado al Wi-Fi de cortesía está completamente aislado y no puede escanear ni acceder a los servidores médicos ni a las computadoras de consulta.

---

```
========================================================================================
SLIDE 11: PLAN DE PRUEBAS, CERTIFICACIÓN Y LA FALLA DEL SPLIT PAIR
========================================================================================
```
* **Responsable:** Integrante 5 (Certificación y Calidad)
* **Tiempo:** 1 minuto 30 segundos (18:00 – 19:30)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* **Comparativa de Certificación (Tester LED básico vs. Fluke DSX-8000 RF):**

```
   ENSAYO ELÉCTRICO              LÍMITE NORMATIVO CAT 6    INSTRUMENTO REQUERIDO
   ----------------------------  -----------------------   ----------------------
   1. Wire Map (Mapa de Hilos)   Continuidad 1:1 directa   Tester LED / Fluke
   2. Longitud (TDR)             <= 90.0 m (Medido: 34.8m) Fluke DSX
   3. Atenuación (IL @ 250 MHz)  <= 31.1 dB                Fluke DSX (Analizador RF)
   4. NEXT (Paradiafonía)        >= 35.3 dB                Fluke DSX (Analizador RF)
   5. Return Loss                >= 10.0 dB                Fluke DSX (Analizador RF)
```

* **Diagrama de la Falla del Par Dividido (*Split Pair*):**
```
      PIN:    1    2    3    4    5    6    7    8
   EXTREMO A: [O]  [O]  [G]  [B]  [B]  [G]  [Br] [Br]
               |    |    |    |    |    |    |    |   --> CONTINUIDAD DC: 1:1 (LED DICE OK)
   EXTREMO B: [O]  [O]  [G]  [B]  [B]  [G]  [Br] [Br]
   ---------------------------------------------------------------------------------
   DEFECTO RF: Hilos de pares distintos mezclados en vaina.
   RESULTADO:  NEXT < 15 dB (Catastrófico). Falla la negociación Gigabit y pierde 80% de tramas.
               SOLO UN CERTIFICADOR DE ALTA FRECUENCIA (RF) PUEDE DETECTAR ESTA FALLA.
```

#### Lo que se DEFIENDE Verbalmente (Decisión de Ingeniería)
* **El tester de LEDs no certifica:** Solo mide continuidad eléctrica en corriente continua (DC). Puede marcar "OK" y encender las 8 luces verdes, pero el enlace fallar miserablemente por inducción y diafonía.
* **La prueba de oro (Split Pair):** Explicamos al docente que conocemos el principio electromagnético: los pares trenzados se cancelan entre sí. Si se mezclan hilos de pares distintos, la geometría se rompe y el NEXT cae por los suelos.
* Todos los 56 enlaces se entregan con informe metrológico **Pass/Fail** bajo **ANSI/TIA-568-C.2**.

---

```
========================================================================================
SLIDE 12: PRESUPUESTO CONSOLIDADO (BOM) Y SUSTENTACIÓN DE LA MUESTRA FÍSICA
========================================================================================
```
* **Responsable:** Integrante 5 (con cierre del Integrante 1)
* **Tiempo:** 30 segundos (19:30 – 20:00)

#### Lo que SE VE en la Diapositiva (Contenido Visual)
* **Resumen Económico Consolidado:**

```
   RUBRO DE INVERSIÓN                         SUBTOTAL (USD)    SUBTOTAL (PEN)     INCIDENCIA
   ----------------------------------------   --------------    --------------     ----------
   Partida 01: Infraestructura Pasiva            $2,208.00       S/. 8,280.00        22.9%
   Partida 02: Canalizaciones y Puesta a Tierra  $1,084.00       S/. 4,065.00        11.3%
   Partida 03: Gabinete Rack 42U y UPS 3kVA      $2,650.00       S/. 9,937.50        27.5%
   Partida 04: Equipamiento Activo y APs Wi-Fi 6 $3,690.00      S/. 13,837.50        38.3%
   ----------------------------------------   --------------    --------------     ----------
   COSTO TOTAL DIRECTO DE SUMINISTROS            $9,632.00      S/. 36,120.00       100.0%
```

* **Foto de la Muestra Física de Cable UTP:** Conectores RJ-45 transparentes crimpados bajo norma **T568B**, chaqueta insertada 6 mm, destrenzado < 13 mm.

#### Lo que se DEFIENDE Verbalmente (Cierre y Llamado al Jurado)
* **Costo por toma:** Inversión de **$172 USD por punto operativo completo** (incluyendo equipamiento activo PoE+, UPS online, canalización y certificación).
* **Muestra física en mano:** El equipo presenta físicamente el latiguillo UTP Cat 6 construido para la prueba en vivo con tester frente al docente.
* *"Quedamos a disposición del docente Mg. Reynaldo Alfonte Zapana para la ronda de preguntas técnicas y la prueba práctica individual del cableado."*

---

## Banco de Preguntas Típicas del Jurado y Respuestas de Defensa

### Pregunta 1: *"¿Por qué eligieron la norma T568B y no T568A?"*
> **Respuesta de Defensa:**  
> Ambas normas son eléctricamente equivalentes en cuanto a rendimiento y ancho de banda; únicamente intercambian la posición de los **Pares 2 (Naranja)** y **3 (Verde)**, manteniendo idénticos los pares 1 (Azul) y 4 (Marrón). Elegimos **T568B** porque es el estándar unificado y de facto en toda la infraestructura de telecomunicaciones en el Perú y Latinoamérica, garantizando compatibilidad con los patch panels precableados comerciales y facilitando el mantenimiento para futuros técnicos.

### Pregunta 2: *"¿Por qué no instalaron cable apantallado (F/UTP Cat 6A) en todo el policlínico?"*
> **Respuesta de Defensa:**  
> Por un principio de **optimización de costos y viabilidad operativa**. El cable blindado es un 75% más costoso, es más grueso, tiene un radio de curvatura más rígido y, sobre todo, **requiere un sistema de puesta a tierra integral en cada terminal (jacks y patch panels blindados conectados a la barra TMGB)**. Si un cable blindado se instala sin una tierra perfecta, la pantalla flotante actúa como una antena que capta más ruido que un cable UTP sin blindar. En el 85% del policlínico no existen fuentes severas de EMI, por lo que el cable UTP Cat 6 es técnica y económicamente la solución perfecta. Solo se justificó el blindaje en Rayos X y Laboratorio, donde la radiación electromagnética de alta energía lo hace indispensable.

### Pregunta 3: *"¿Qué diferencia existe entre Enlace Permanente (Permanent Link) y Canal (Channel) al certificar?"*
> **Respuesta de Defensa:**  
> El **Enlace Permanente** comprende únicamente la parte fija de la obra: desde el bloque IDC trasero del Patch Panel en el rack hasta el jack Keystone en la pared, con un tope normativo estricto de **90.0 metros**. El certificador descuenta matemáticamente sus propios latiguillos. Es la prueba obligatoria de entrega de obra civil.  
> El **Canal Completo**, en cambio, incluye el enlace permanente más los dos latiguillos de conexión de los extremos (hasta 10 metros adicionales en total), sumando un máximo de **100.0 metros**. Nosotros certificamos en modelo de Enlace Permanente porque garantiza la infraestructura fija por 20 años independientemente de los cables que conecte el usuario final.

### Pregunta 4: *"Si el tester de LEDs enciende del 1 al 8 sincronizado, ¿el cable ya está garantizado?"*
> **Respuesta de Defensa:**  
> **No.** El tester de LEDs básico solo inyecta corriente continua (DC) a baja frecuencia para comprobar si hay contacto metálico pin a pin. No puede detectar defectos de alta frecuencia como **Par Dividido (Split Pair)**, valores deficientes de **Paradiafonía (NEXT)** o desadaptaciones de impedancia de 100 ohmios (**Return Loss**). Un cable puede encender todas las luces verdes en el tester y luego ser incapaz de negociar Gigabit en el switch, colapsando a 10 Mbps o perdiendo paquetes. Por eso la norma exige la certificación RF con un instrumento de campo Nivel IIIe.

### Pregunta 5: *"¿Por qué la norma prohíbe destrenzar los pares más de 13 milímetros al colocar el jack o plug?"*
> **Respuesta de Defensa:**  
> El principio físico que hace inmune al cable UTP frente al ruido externo y a la diafonía entre pares adyacentes es el **paso de torsión de sus pares balanceados**, donde las señales viajan en contrafase (+V y -V) y los campos magnéticos inducidos se auto-cancelan. Cuando se destrenza más de 13 mm (aproximadamente media pulgada), los conductores viajan como líneas paralelas sin protección; la cancelación se anula y la paradiafonía (NEXT) se dispara instantáneamente, provocando que el enlace falle la certificación a 250 MHz.

---

## Recomendaciones Prácticas para el Día de la Exposición

1. **Control del Cronómetro:**
   * Utilizar un cronómetro visible en la mesa de exposición. A los 18 minutos el Integrante 5 debe estar concluyendo para no ser cortado por el docente.
2. **Postura Corporal:**
   * Mirar al docente y al jurado, no a la pantalla. Proyectar la voz con seguridad.
   * Usar un puntero láser o el cursor para señalar puntos específicos del plano o del diagrama del rack cuando se mencione una cota o un equipo.
3. **Muestra Física Impecable:**
   * Llevar la muestra física de cable UTP dentro de una bolsa antiestática o funda limpia, con el tester y baterías 9V nuevas cargadas para la prueba en vivo ante el docente.
