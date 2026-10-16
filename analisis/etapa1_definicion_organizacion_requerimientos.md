# Etapa 1: Definición de la Organización, Problemática y Requerimientos de Red
**Proyecto:** Diseño de la Infraestructura Física y Cableado Estructurado de una Red LAN  
**Curso:** Redes I (Unidad I)  
**Organización Seleccionada:** Policlínico de Especialidades Médicas *"Salud & Vida"*  
**Secciones de la Memoria Técnica Cubiertas:** Sección 1 (Portada), Sección 2 (Introducción), Sección 3 (Descripción de la organización), Sección 4 (Problemática), Sección 5 (Objetivos) y Sección 6 (Requerimientos de red)  
**Fecha de Elaboración:** Octubre 2026  

---

## 1. Introducción al Caso de Estudio (Sección 2)

El presente documento constituye la **Etapa 1** del proyecto de diseño de infraestructura de telecomunicaciones y cableado estructurado. 

En el ámbito de la salud ambulatoria, la continuidad operativa, la confidencialidad de la información y la disponibilidad instantánea de las Historias Clínicas Electrónicas (HCE) y los estudios de diagnóstico médico dependen directamente de una infraestructura física de red confiable, robusta y libre de interferencias electromagnéticas.

El **Policlínico de Especialidades Médicas "Salud & Vida"** ha experimentado un crecimiento acelerado en su demanda asistencial. Sin embargo, su infraestructura de comunicaciones actual es precaria y no planificada, lo que genera retrasos en la atención al paciente, caídas de conectividad y riesgos de seguridad física en las instalaciones de datos.

---

## 2. Descripción de la Organización (Sección 3)

### 2.1. Razón Social y Giro Asistencial
* **Razón Social:** Policlínico de Especialidades Médicas "Salud & Vida" S.A.C.
* **Giro:** Servicios de salud ambulatoria, medicina preventiva, consultas especializadas, diagnóstico por imágenes, laboratorio clínico y farmacia.
* **Horario de Operación:** Lunes a Sábado de 07:00 a 20:00 horas (13 horas de operación continua).

### 2.2. Características Físicas y Justificación del Inmueble (1 Solo Piso)
* **Número de Pisos:** **1 solo nivel (Planta Baja)**.
  * **Justificación técnica:** 
    1. Permite un diseño de red limpio y concentrado en un único **Cuarto de Telecomunicaciones (MDF / Rack Central)**, evitando la necesidad de un subsistema de cableado vertical (backbone) entre pisos que añadiría complejidad innecesaria para los alcances de la Unidad I.
    2. Al tener 30 m de largo por 15 m de ancho, el radio máximo de tendido desde el centro del edificio hacia el rincón más alejado es de aproximadamente **28 a 35 metros de recorrido real por canaleta**, cumpliendo holgadamente el límite de **90 metros de enlace permanente** estipulado por la norma **ANSI/TIA-568**.
* **Dimensiones Totales:** **450 m²** (30 metros de longitud × 15 metros de ancho).
* **Altura libre:** 3.00 metros de piso a techo, con falso cielo raso suspendido a 2.60 m (espacio técnico de 40 cm para tendido de bandejas portacables tipo malla o escalerilla).

### 2.3. Estructura y Dimensiones Exactas por Ambiente (Plano Arquitectónico Oficial)

Para asegurar la máxima rigurosidad de ingeniería, cada ambiente ha sido dimensionado a escala métrica real dentro de la planta de **30.00 m × 15.00 m (450.0 m²)**:

| Sector | Ambiente | Dimensiones (m) | Superficie (m²) | Equipamiento y Tomas de Telecomunicaciones |
|---|---|:---:|:---:|---|
| **Ala Norte** | **Recepción, Admisión y Caja** | 5.50 m × 5.60 m | 30.8 m² | 3 puestos de atención, 1 impresora de red, 2 teléfonos IP (**6 tomas RJ-45 Cat 6**). |
| **Ala Norte** | **Farmacia Asistencial** | 4.50 m × 5.60 m | 25.2 m² | 2 terminales de venta/stock, 1 impresora térmica de tickets (**3 tomas RJ-45 Cat 6**). |
| **Ala Norte** | **Consultorio 1 (Medicina General)** | 4.00 m × 5.60 m | 22.4 m² | 1 PC médica (EMR), 1 teléfono IP (**2 tomas RJ-45 Cat 6**). |
| **Ala Norte** | **Consultorio 2 (Pediatría)** | 4.00 m × 5.60 m | 22.4 m² | 1 PC médica (EMR), 1 teléfono IP (**2 tomas RJ-45 Cat 6**). |
| **Ala Norte** | **Consultorio 3 (Ginecología y Obstetricia)** | 4.00 m × 5.60 m | 22.4 m² | 1 PC médica (EMR), 1 teléfono IP (**2 tomas RJ-45 Cat 6**). |
| **Ala Norte** | **Consultorio 4 (Cardiología)** | 4.00 m × 5.60 m | 22.4 m² | 1 PC médica, 1 electrocardiógrafo digital con puerto IP (**2 tomas RJ-45 Cat 6**). |
| **Ala Norte** | **Consultorio 5 (Traumatología)** | 4.00 m × 5.60 m | 22.4 m² | 1 PC médica estación de visualización DICOM (**2 tomas RJ-45 Cat 6**). |
| **Circulación** | **Pasillo Central y Troncal de Cableado** | 30.00 m × 2.40 m | 72.0 m² | Corredor principal; aloja la bandeja portacables tipo malla 200×50 mm + **AP-02 y AP-03 de techo (2 tomas PoE)**. |
| **Ala Sur** | **Sala de Espera General** | 7.00 m × 7.00 m | 49.0 m² | Área pública para 35 personas; 1 Smart TV (turnero) + **AP-01 de techo (2 tomas PoE/Datos)**. |
| **Ala Sur** | **SS.HH. Públicos (en Sala de Espera)** | 3.00 m × 2.40 m | 7.2 m² | Batería sanitaria para pacientes y acompañantes (sin tomas de red). |
| **Ala Sur** | **Triaje y Tópico de Urgencias** | 4.50 m × 7.00 m | 31.5 m² | 2 PCs de enfermería, 1 teléfono IP (**3 tomas RJ-45 Cat 6**). |
| **Ala Sur** | **Cuarto de Telecomunicaciones (MDF / Rack)** | 3.50 m × 4.20 m | 14.7 m² | **Centro geográfico del edificio**; Rack 42U, Patch Panels, 2 servidores, switches PoE+, UPS 3kVA. |
| **Ala Sur** | **SS.HH. y Vestidor del Personal** | 3.50 m × 2.80 m | 9.8 m² | Área sanitaria exclusiva de médicos y enfermeras (sin tomas de red). |
| **Ala Sur** | **Consultorio 6 (Oftalmología)** | 3.50 m × 7.00 m | 24.5 m² | 1 PC médica, 1 teléfono IP (**2 tomas RJ-45 Cat 6**). |
| **Ala Sur** | **Consultorio 7 (Odontología)** | 3.50 m × 3.50 m | 12.2 m² | 1 PC médica, 1 teléfono IP (**2 tomas RJ-45 Cat 6**). |
| **Ala Sur** | **Consultorio 8 (Psicología / Nutrición)** | 3.50 m × 3.50 m | 12.2 m² | 1 PC médica, 1 teléfono IP (**2 tomas RJ-45 Cat 6**) • Tabique acústico STC > 45 dB. |
| **Ala Sur** | **Administración, Jefatura y Contabilidad** | 3.50 m × 7.00 m | 24.5 m² | 4 PCs administrativas, 1 multifuncional, 1 teléfono IP + **AP-04 de techo (7 tomas Cat 6/PoE)**. |
| **Zona Crítica** | **Laboratorio Clínico (Bioquímica)** | 4.50 m × 3.40 m | 15.3 m² | 2 PCs analistas, 1 analizador químico en red (**3 tomas F/UTP Cat 6A blindadas contra EMI**). |
| **Zona Crítica** | **Rayos X y Ecografía (Muros Plomados)** | 4.50 m × 3.60 m | 16.2 m² | 2 estaciones DICOM de alta resolución, 1 impresora médica (**3 tomas F/UTP Cat 6A blindadas contra EMI**). |
| **TOTAL** | **PREDIO INTEGRAL DEL POLICLÍNICO** | **30.00 m × 15.00 m** | **450.0 m²** | **49 Puntos de red activos proyectados** (balanceados en el plano). |

### 2.4. Esquema Arquitectónico Visual y Distribución Espacial en Planta (Bases de la Sección 12 - Diseño Físico)

Para superar las limitaciones de los diagramas de texto y garantizar una visualización profesional de ingeniería a escala exacta (**30.00 m × 15.00 m = 450 m²**), se ha desarrollado un **visor interactivo por código** en SVG / HTML5 (`plano/index.html`) disponible localmente en `http://localhost:3456`.

A continuación se muestra la captura del plano arquitectónico con las capas de ingeniería activadas:

![Plano Arquitectónico y Distribución Física de Red LAN](file:///Users/aron/CODIGO/redes-1/analisis/plano_red_preview.png)

#### Criterios de la Distribución Arquitectónica:
1. **Flujo de Pacientes Lógico y Secuencial:**
   * **Ingreso y Admisión:** Ubicado al frente izquierdo (X: 0 a 5.5m), contiguo a la puerta de acceso y con línea visual directa a la **Sala de Espera General (49 m²)**.
   * **Farmacia Asistencial:** Dispone de mostrador hacia el pasillo y ventanilla hacia la sala de espera para compra directa de medicamentos sin invadir áreas clínicas.
   * **Triaje y Tópico:** Inmediatamente contiguo a la sala de espera para el control ágil de signos vitales previo al paso a consultorios.
2. **Corredor Central de Circulación Técnica y Asistencial (Ancho 2.40 m):**
   * Conecta longitudinalmente los 30 metros del edificio.
   * Alberga la **Bandeja Portacables Principal (Tipo Malla de 200×50 mm)** suspendida en el falso cielo raso (a 2.60 m de altura), desde la cual se derivan los peines de cable hacia cada ambiente.
3. **Ubicación Geocéntrica del Cuarto de Telecomunicaciones (MDF):**
   * Ubicado en el centro de gravedad del edificio (X: 12.5m a 16.0m), lo que minimiza la longitud de los enlaces horizontales.
   * **Distancia máxima real:** **34.8 metros** hacia el punto más distante (Rayos X / Consultorio 5), cumpliendo con un margen de seguridad superior al 60% respecto a los **90 metros máximos** permitidos por **ANSI/TIA-568**.
4. **Zona Crítica Aislada (Laboratorio y Rayos X):**
   * Ubicada en el extremo Este (fondo), con muros baritados/plomados para contención radiológica y cableado **F/UTP apantallado** para inmunidad contra interferencias electromagnéticas (EMI).
5. **Células de Cobertura Inalámbrica Wi-Fi 6 (Radio Efectivo de 8.0 Metros):**
   * Se distribuyen 4 Puntos de Acceso (APs) de techo PoE:
     * **AP-01 (Sala de Espera):** Dedicado exclusivamente al tráfico público de pacientes y pantalla de turnos.
     * **AP-02 (Pasillo Oeste):** Brinda cobertura a Consultorios 1 al 4 y Triaje para tablets médicas.
     * **AP-03 (Pasillo Este):** Cobertura a Consultorios 5 al 8 y Laboratorio Clínico.
     * **AP-04 (Administración):** Cobertura a oficinas contables y estar médico.
   * Cada AP cuenta con una celda efectiva de **8.0 metros de radio (banda 5 GHz)** con solapamiento controlado del 15% para conmutación transparente (*Fast Roaming IEEE 802.11r/k*).
6. **Visor Interactivo y Exportación en Calidad Nativa:**
   * La aplicación local (`http://localhost:3456`) permite encender/apagar capas (muros, bandejas portacables, tomas RJ-45, cobertura Wi-Fi y tendidos de cable), hacer zoom/pan e inspeccionar cada sala haciendo clic sobre ella.
   * Incluye botones para exportar en **PNG Ultra-HD (4K a 3840×2040 px)** o en **SVG Vectorial autónomo** listo para ser insertado en la Memoria Técnica y diapositivas de sustentación.

### 2.5. Personal y Usuarios Estimados
* **Personal Médico y Asistencial:** 12 médicos y 6 licenciadas/técnicas en enfermería.
* **Personal Administrativo y Servicios:** 8 colaboradores (recepcionistas, cajeros, laboratoristas, farmacéuticos y administradores).
* **Pacientes concurrentes:** Entre 30 y 50 pacientes en sala de espera en horas punta.

---

## 3. Diagnóstico de la Problemática Actual (Sección 4)

### 3.1. Estado de la Infraestructura Existente
Actualmente, el policlínico opera bajo una "red improvisada" producto de expansiones desordenadas:
1. **Cableado desordenado y sin canalizar:** Cables UTP de categoría 5e envejecidos, grapados directamente en zócalos o colgados por techos sin tubería ni bandejas portacables, expuestos al pisoteo y daño mecánico.
2. **Ausencia de Cuarto de Comunicaciones formal:** Los switches de escritorio (no administrables) se ubican debajo de escritorios o sobre repisas de madera, acumulando polvo y calor, sin sistema de alimentación ininterrumpida (UPS).
3. **Interferencia Electromagnética (EMI):** En las áreas de Rayos X y Laboratorio, los cables de red corren en paralelo a cables de alta potencia de equipos electromédicos, provocando pérdida de paquetes, retransmisiones constantes y lentitud severa.
4. **Puntos de red insuficientes:** Se utilizan "mini-switches" o duplicadores de puertos en consultorios para compartir un solo punto entre computadora, impresora y teléfono.
5. **Cobertura inalámbrica deficiente:** Un único router Wi-Fi doméstico instalado en recepción intenta dar cobertura a todo el local, saturándose con frecuencia.

### 3.2. Impacto en la Operación
* Retardo de hasta 3 a 5 minutos en abrir historias clínicas o visualizar radiografías digitales durante la consulta médica.
* Interrupción de pagos con tarjeta y emisión de comprobantes en caja por caídas de enlace.
* Vulnerabilidad física de los equipos centrales ante desconexiones accidentales.

---

## 4. Objetivos del Proyecto (Sección 5)

### 4.1. Objetivo General
Diseñar y justificar técnicamente la infraestructura física y el sistema de cableado estructurado para la red de área local (LAN) del Policlínico "Salud & Vida", bajo normativas internacionales **ANSI/TIA/EIA**, garantizando alta disponibilidad, inmunidad a interferencias, escalabilidad y orden en el cuarto de telecomunicaciones.

### 4.2. Objetivos Específicos
1. **Relevar y cuantificar los requerimientos de conectividad:** Inventariar con exactitud los 40 a 45 dispositivos finales e intermedios distribuidos en los ambientes del policlínico.
2. **Definir la topología de red física y lógica:** Diseñar una topología en estrella extendida / jerárquica con punto central de distribución en el Rack/MDF.
3. **Seleccionar los medios de transmisión adecuados:** Determinar la categoría óptima de cable de par trenzado (ej. Cat 6 / Cat 6A F/UTP para zonas con ruido EMI) fundamentado en magnitudes de atenuación, ancho de banda y diafonía.
4. **Diseñar el sistema de cableado estructurado:** Dimensionar el subsistema horizontal, canalizaciones (bandejas y canaletas perimetrales), cuarto de telecomunicaciones, patch panels de 24/48 puertos y conectores bajo el estándar **T568B**.
5. **Elaborar los planos físicos y memoria de materiales:** Representar a escala la ubicación de tomas dobles de telecomunicaciones (RJ-45), Puntos de Acceso Wi-Fi (AP) PoE y el recorrido de canalizaciones.
6. **Formular el plan de pruebas y aseguramiento de calidad:** Establecer los protocolos de ensayo con instrumental de certificación (mapa de cableado, atenuación, continuidad) y construir una muestra física de cable UTP funcional.

---

## 5. Matriz Detallada de Requerimientos de Red (Sección 6)

A continuación se presenta el inventario exhaustivo de puntos de red proyectados por ambiente, totalizando **44 puntos de red activos** más reserva técnica para expansión futura:

| N° | Ambiente / Sala | Dispositivos a Conectar | Tipo de Dispositivo | Puntos RJ-45 Requeridos | Justificación Operativa |
|:---:|---|---|---|:---:|---|
| **1** | **Admisión, Caja y Recepción** | • 3 PCs de atención<br>• 1 Impresora láser red<br>• 2 Teléfonos IP (VoIP) | Cableado (UTP) | **6 tomas** | Atención al público, registro de pacientes, cobros y llamadas a seguros. |
| **2** | **Sala de Espera General** | • 1 Pantalla Smart TV informativa<br>• 1 Access Point (AP PoE) | Cableado (UTP/PoE) | **2 tomas** | Información de turnos y conectividad Wi-Fi para pacientes. |
| **3** | **Triaje y Tópico** | • 2 PCs de registro<br>• 1 Teléfono IP | Cableado (UTP) | **3 tomas** | Ingreso inmediato de signos vitales al sistema EMR. |
| **4** | **Consultorios Médicos (8 salas)** | • 8 PCs (1 por consultorio)<br>• 4 Impresoras compartidas (1 c/2 salas)<br>• 4 Teléfonos IP (1 c/2 salas) | Cableado (UTP) | **16 tomas**<br>*(2 tomas dobles por consultorio = 16 tomas)* | Consulta y prescripción de recetas médicas en línea con contingencia de toma libre. |
| **5** | **Diagnóstico por Imágenes (Rayos X / Eco)** | • 2 Estaciones DICOM alta resolución<br>• 1 Impresora médica de red | Cableado (F/UTP blindado) | **3 tomas** | Transferencia de archivos volumétricos de imagen; requiere protección contra ruido electromagnético. |
| **6** | **Laboratorio Clínico** | • 2 PCs de analistas<br>• 1 Analizador bioquímico con puerto IP | Cableado (F/UTP blindado) | **3 tomas** | Envío directo de resultados de análisis al servidor central. |
| **7** | **Farmacia** | • 2 PCs terminal de ventas<br>• 1 Impresora de tickets/facturas de red | Cableado (UTP) | **3 tomas** | Consulta de recetas despachadas y control de stock en tiempo real. |
| **8** | **Administración y Jefatura Médica** | • 4 PCs administrativas<br>• 1 Impresora multifuncional de red<br>• 1 Teléfono IP de dirección | Cableado (UTP) | **6 tomas** | Gestión contable, administrativa y auditoría clínica. |
| **9** | **Estar Médico / Reuniones** | • 1 PC de consulta<br>• 1 Access Point (AP PoE) corporativo | Cableado (UTP/PoE) | **2 tomas** | Conectividad interna del cuerpo médico y reuniones clínicas. |
| **10**| **Puntos de Cobertura Wi-Fi Adicionales** | • 2 Access Points de techo (Pasillos y zonas asistenciales) | Cableado (UTP/PoE) | **2 tomas** | Roaming Wi-Fi continuo para tablets médicas y rondas de enfermería. |
| **11**| **Cuarto de Comunicaciones (Servidores)** | • 1 Servidor Historias Clínicas (HCE)<br>• 1 Servidor PACS (Imágenes DICOM)<br>• 1 Enlace de contingencia NAS | Conexión directa en Rack | **3 tomas** | Almacenamiento y base de datos centralizada de la institución. |
| **--**| **SUBTOTAL PUNTOS ACTIVOS** | | | **49 tomas** | |
| **--**| **Reserva técnica (Crecimiento futuro)** | Tomas adicionales en canaleta | Reserva | **7 tomas** | Cumplimiento del 15% de holgura según norma TIA-568. |
| **TOTAL** | **CAPACIDAD DE PARCHEO PROYECTADA** | | | **56 tomas** | Dimensionado para **2 Patch Panels de 24 puertos + 1 de 24 puertos (o 1 de 48 + 1 de 24)**. |

---

## 6. Resumen de Características Técnicas Identificadas

* **Rango de Dispositivos del Proyecto:** **44 a 50 dispositivos en operación simultánea** (dentro del rango exigido de 30 a 60 dispositivos).
* **Naturaleza del Tráfico:**
  * **Tráfico Administrativo/Texto:** Liviano (historias clínicas, recetas, inventarios).
  * **Tráfico de Imágenes Médicas:** Pesado y crítico en ancho de banda (archivos DICOM de Rayos X y ecografías de 50MB a 300MB por estudio).
  * **Tráfico de Voz sobre IP (VoIP):** Sensible al retardo y fluctuaciones (jitter/pérdida de paquetes).
* **Condiciones Ambientales y de Ruido:**
  * Zona limpia (oficinas y consultorios): Se puede emplear **UTP convencional Cat 6**.
  * Zona con presencia de EMI (Rayos X y Laboratorio): Se justifica técnicamente el uso de cable **F/UTP blindado o canalización metálica conectada a tierra**.
* **Cumplimiento de la Restricción de Unidad I:**
  * No se aborda direccionamiento IP ni subredes.
  * Todo el análisis se centra en la ingeniería física, tomas, medios, atenuación, canaletas y gabinetes.

---

## 7. Próximos Pasos (Hacia las Etapas 2 y 3)

Una vez aprobada esta definición de la organización y requerimientos:
1. **Etapa 2:** Fundamentación Teórica, Modelos OSI/TCP-IP y Selección de Medios Físicos (Secciones 7, 8, 9 y 10 de la memoria técnica).
2. **Etapa 3:** Ingeniería de Cableado Estructurado y Cuarto de Comunicaciones (Secciones 11 y 13).
3. **Etapa 4:** Diseño del Plano Físico y Recorridos de Canaletas (Sección 12).
4. **Etapa 5:** Plan de Pruebas y Preparación de la Muestra del Cable UTP (Sección 14).
