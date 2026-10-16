# Etapa 1: Definición de la Organización, Problemática y Requerimientos de Red
**Proyecto:** Diseño de la Infraestructura Física y Cableado Estructurado de una Red LAN  
**Curso:** Redes I (Unidad I)  
**Organización Seleccionada:** Policlínico de Especialidades Médicas *"Salud & Vida"*  
**Fecha de Elaboración:** Octubre 2026  

---

## 1. Introducción al Caso de Estudio

El presente documento constituye la **Etapa 1** del proyecto de diseño de infraestructura de telecomunicaciones y cableado estructurado. 

En el ámbito de la salud ambulatoria, la continuidad operativa, la confidencialidad de la información y la disponibilidad instantánea de las Historias Clínicas Electrónicas (HCE) y los estudios de diagnóstico médico dependen directamente de una infraestructura física de red confiable, robusta y libre de interferencias electromagnéticas.

El **Policlínico de Especialidades Médicas "Salud & Vida"** ha experimentado un crecimiento acelerado en su demanda asistencial. Sin embargo, su infraestructura de comunicaciones actual es precaria y no planificada, lo que genera retrasos en la atención al paciente, caídas de conectividad y riesgos de seguridad física en las instalaciones de datos.

---

## 2. Descripción de la Organización

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

### 2.3. Estructura y Dimensiones Exactas por Ambiente

Para mantener un diseño sencillo de dibujar y calcular, las áreas se han estandarizado de forma **modular**:

| Ambiente | Dimensiones (m) | Área (m²) | Características y Equipamiento de Red |
|---|:---:|:---:|---|
| **Recepción / Admisión y Caja** | 6.0 m × 4.0 m | 24 m² | Ingreso principal; 3 puestos de atención, 1 impresora de red y 2 teléfonos IP. |
| **Sala de Espera General** | 8.0 m × 5.0 m | 40 m² | Espacio abierto frente a recepción con bancas para 35 pacientes; **equipado con 1 toma RJ-45 para Smart TV (sistema de turnos digital) y 1 punto en techo para Access Point (AP PoE Wi-Fi)**. |
| **Triaje / Tópico de Urgencias** | 4.0 m × 4.0 m | 16 m² | Control previo a consulta; 2 puestos con PC médica y 1 teléfono IP. |
| **Consultorios Médicos (8 salas)** | 3.5 m × 4.0 m (c/u) | 112 m² *(14 m² c/u)* | **8 consultorios modulares idénticos** alineados en un bloque continuo. Cada uno con 2 tomas dobles de pared (PC médica, teléfono IP / toma libre). |
| **Rayos X y Ecografía** | 6.0 m × 5.0 m | 30 m² | Sala plomada y aislada; 2 estaciones DICOM de alta resolución, 1 impresora de placas. Cableado blindado F/UTP contra EMI. |
| **Laboratorio Clínico** | 6.0 m × 5.0 m | 30 m² | Mesa de análisis químico; 2 PCs de analistas y 1 analizador clínico con interfaz de red IP. Cableado blindado F/UTP. |
| **Farmacia Asistencial** | 5.0 m × 4.0 m | 20 m² | Mostrador hacia pasillo/sala de espera y almacén; 2 terminales de venta y 1 impresora térmica de tickets. |
| **Administración y Jefatura** | 6.0 m × 4.0 m | 24 m² | Oficina administrativa; 4 puestos de trabajo, 1 impresora multifuncional y 1 teléfono IP. |
| **Estar Médico / Sala de Reuniones** | 5.0 m × 4.0 m | 20 m² | Sala de descanso médico con mesa de trabajo, 1 PC de consulta y 1 AP PoE Wi-Fi de techo. |
| **Cuarto de Comunicaciones (MDF)** | 3.0 m × 3.0 m | 9 m² | **Ubicado en el centro del edificio** para equidistancia; aloja el rack cerrado de 42U, switches, patch panels, servidores y UPS. |
| **Servicios Higiénicos (SS.HH.)** | 5.0 m × 3.0 m | 15 m² | Baños diferenciados para público y personal (sin puntos de red). |
| **Pasillo Central de Distribución** | 30.0 m × 2.0 m | 60 m² | Corredor central que recorre toda la clínica y alberga la bandeja portacables principal en el cielo raso + 2 APs de techo. |
| **ÁREA TOTAL CONSTRUIDA** | **30 m × 15 m** | **450 m²** | **100% del área del predio.** |

### 2.4. Esquema en Planta y Distribución Espacial

A continuación se muestra cómo se organiza visualmente la planta de la clínica (vista superior), mostrando el pasillo central que facilita el recorrido de las canaletas hacia el Cuarto de Telecomunicaciones central:

```text
+----------------------------------------------------------------------------------------------------+
|                                    LONGITUD: 30 METROS                                             |
|                                                                                                    |
| +--------------------+-------------------+-------------------+-----------------+-----------------+ |
| | Admisión y Caja    | Farmacia          | Consultorio 1     | Consultorio 2   | Consultorio 3   | |
| | (6m x 4m)          | (5m x 4m)         | (3.5m x 4m)       | (3.5m x 4m)     | (3.5m x 4m)     | |
| +--------------------+-------------------+-------------------+-----------------+-----------------+ |
| |                                                                                                | |
| | =================== PASILLO CENTRAL Y BANDEJA PORTACABLES (30m x 2m) ========================= | |
| |                                                                                                | |
| +-----------------+-----------------+-------------------+-------------------+--------------------+ |
| | Sala de Espera  | Triaje / Tópico | CUARTO DE COMUN.  | Laboratorio       | Rayos X / Ecograf. | |
| | (TV Turnos + AP)| (4m x 4m)       | (MDF / RACK)      | Clínico           | (Blindaje EMI)     | |
| | (8m x 5m)       |                 | (3m x 3m)         | (6m x 5m)         | (6m x 5m)          | |
| +-----------------+-----------------+-------------------+-------------------+--------------------+ |
| | Consultorio 4   | Consultorio 5   | Consultorio 6     | Consultorio 7     | Consultorio 8      | |
| | (3.5m x 4m)     | (3.5m x 4m)     | (3.5m x 4m)       | (3.5m x 4m)       | (3.5m x 4m)        | |
| +-----------------+-----------------+-------------------+-------------------+--------------------+ |
| | Estar Médico y Reuniones (5m x 4m)| Administración y Jefatura (6m x 4m)   | SS.HH. (5m x 3m)   | |
| +-----------------------------------+---------------------------------------+--------------------+ |
|                                                                                                    |
+----------------------------------------------------------------------------------------------------+
                                      ANCHO: 15 METROS
```

### 2.5. Personal y Usuarios Estimados
* **Personal Médico y Asistencial:** 12 médicos y 6 licenciadas/técnicas en enfermería.
* **Personal Administrativo y Servicios:** 8 colaboradores (recepcionistas, cajeros, laboratoristas, farmacéuticos y administradores).
* **Pacientes concurrentes:** Entre 30 y 50 pacientes en sala de espera en horas punta.

---

## 3. Diagnóstico de la Problemática Actual

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

## 4. Objetivos del Proyecto

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

## 5. Matriz Detallada de Requerimientos de Red

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
