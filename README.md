# Monitor Dengue - Signos de Alarma 🏥

Aplicación web progresiva (PWA) para el monitoreo horario/bihorario de pacientes con sospecha de dengue con signos de alarma durante la guardia hospitalaria.

## 🎯 Características Principales

### ✅ Gestión de Pacientes
- Registro de hasta 16 pacientes simultáneos
- Información básica: nombre, edad, sexo, cama/historia clínica
- Configuración de intervalo de monitoreo (1-4 horas)
- Observaciones iniciales del paciente

### 📋 Monitoreo de Signos de Alarma
Seguimiento de los 8 signos de alarma principales del dengue:
1. Dolor abdominal intenso y continuo
2. Vómitos persistentes
3. Acumulación de líquidos (ascitis, derrame pleural/pericárdico)
4. Sangrado de mucosas
5. Letargia o irritabilidad
6. Hepatomegalia >2cm
7. Aumento del Hto con caída de plaquetas
8. Hipotensión postural (lipotimia)

### 📝 Registro Detallado
- Chequeos horarios o bihorarios
- Campo de notas para cada evaluación
- Historial completo de cada paciente
- Alertas visuales para pacientes con signos de alarma

### 💾 Persistencia de Datos
- Almacenamiento local en el dispositivo móvil
- Los datos persisten por 48 horas automáticamente
- Funciona completamente offline
- No requiere conexión a internet

### 📊 Estadísticas y Reportes
- Dashboard con estadísticas generales
- Conteo de pacientes con signos de alarma
- Alertas de chequeos vencidos
- Frecuencia de cada signo de alarma
- Generación de informes individuales en formato texto

### 📱 Funcionalidad PWA
- Instalable en dispositivos móviles
- Funciona offline después de la primera carga
- Interfaz responsive adaptada a móviles
- Notificaciones de chequeos pendientes

## 🚀 Instalación

### Opción 1: Uso Directo (Recomendado)
1. Abre `dengue-monitor.html` en un navegador web moderno
2. Desde el navegador móvil, selecciona "Agregar a pantalla de inicio"
3. La app se instalará como PWA y funcionará offline

### Opción 2: Servidor Local
```bash
# Usar Python
python -m http.server 8000

# O Node.js con http-server
npx http-server
```

Luego acceder a `http://localhost:8000/dengue-monitor.html`

## 📖 Guía de Uso

### 1. Agregar un Nuevo Paciente
- Click en **"➕ Nuevo Paciente"**
- Llenar los datos requeridos:
  - Nombre completo
  - Edad
  - Sexo
  - Número de cama o historia clínica (opcional)
  - Intervalo de monitoreo (1-4 horas)
  - Observaciones iniciales (opcional)
- Click en **"Guardar Paciente"**

### 2. Realizar un Chequeo
- En la tarjeta del paciente, click en **"✅ Chequear"**
- Seleccionar los signos de alarma presentes (si los hay)
- Agregar notas y observaciones en el campo de texto
- Click en **"Guardar Chequeo"**

### 3. Ver Historia del Paciente
- Click en **"📋 Historia"** en la tarjeta del paciente
- Revisar todos los chequeos anteriores con fechas y horas
- Click en **"📄 Generar Informe Completo"** para descargar

### 4. Eliminar un Paciente
- Click en el botón **"🗑️"** en la tarjeta del paciente
- Confirmar la eliminación

### 5. Exportar Datos
- Click en **"📥 Exportar"** en el header
- Se descargará un archivo JSON con todos los datos

## 🎨 Interfaz

### Vista Principal (Tab: Pacientes Activos)
- **Tarjetas de pacientes** con código de colores:
  - Blanco: Sin signos de alarma
  - Rojo claro: Con signos de alarma detectados
- **Badges de tiempo**:
  - Verde: Chequeo al día
  - Amarillo: Próximo a vencer
  - Rojo: Chequeo vencido

### Tab: Estadísticas
- Resumen de pacientes totales
- Pacientes con signos de alarma
- Chequeos vencidos
- Frecuencia de cada signo de alarma

## ⚙️ Funcionamiento Técnico

### Almacenamiento
- Los datos se guardan en `localStorage` del navegador
- Clave: `dengue_patients`
- Formato: JSON serializado

### Limpieza Automática
- Pacientes sin actualización por >48h se eliminan automáticamente
- Se ejecuta al cargar la aplicación

### Service Worker
- Cachea la aplicación para uso offline
- Estrategia: Cache-first, luego network
- Versión: `dengue-monitor-v1.0.0`

## 🔒 Privacidad y Seguridad

⚠️ **IMPORTANTE:**
- Los datos se almacenan **ÚNICAMENTE** en el dispositivo local
- No se envía ninguna información a servidores externos
- Asegurar que el dispositivo tenga medidas de seguridad apropiadas
- Realizar backups regulares usando la función de exportación
- Esta herramienta es de apoyo y no sustituye el juicio clínico

## 📋 Requisitos

### Navegadores Soportados
- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Navegadores móviles modernos (Android/iOS)

### Dispositivos Recomendados
- Smartphones (iOS/Android)
- Tablets
- Computadoras portátiles

## 🛠️ Personalización

El código está diseñado para ser fácilmente modificable:

### Cambiar Signos de Alarma
Editar en `dengue-monitor.html`, sección de checkboxes:
```html
<input type="checkbox" id="sign1" value="Tu nuevo signo">
<label for="sign1">Tu nuevo signo</label>
```

### Modificar Intervalos de Monitoreo
En el select de intervalos, ajustar las opciones:
```html
<option value="1">Cada 1 hora</option>
<option value="2">Cada 2 horas</option>
```

### Cambiar el Límite de 48 Horas
Buscar en el código JavaScript:
```javascript
const hours48 = 48 * 60 * 60 * 1000;
```

## 📄 Generación de Informes

Los informes incluyen:
- Datos del paciente
- Observaciones iniciales
- Registro cronológico de todos los chequeos
- Signos de alarma detectados en cada chequeo
- Notas clínicas de cada evaluación
- Resumen estadístico de signos de alarma

Formato: Archivo de texto plano (.txt) descargable

## 🤝 Contribuciones

Para mejorar esta herramienta:
1. Identificar áreas de mejora
2. Probar exhaustivamente en entorno clínico
3. Documentar cambios propuestos
4. Considerar la usabilidad en condiciones de guardia

## ⚕️ Uso Clínico

### Contexto de Uso
- Guardias hospitalarias con múltiples pacientes
- Sospecha de dengue con signos de alarma
- Monitoreo intensivo durante fase crítica
- Necesidad de documentación precisa y continua

### Beneficios
- ✅ Reduce errores de documentación manual
- ✅ Alertas automáticas de chequeos vencidos
- ✅ Identificación rápida de pacientes críticos
- ✅ Generación fácil de informes
- ✅ Funciona sin internet (crucial en hospitales)

### Limitaciones
- ⚠️ No sustituye el juicio clínico
- ⚠️ Requiere validación local según protocolos
- ⚠️ Los datos están limitados al dispositivo
- ⚠️ Backup manual necesario para conservar historiales

## 📞 Soporte

Para dudas o problemas técnicos, revisar:
1. Esta documentación
2. Código fuente comentado
3. Console del navegador para errores
4. Verificar permisos de almacenamiento local

## 📜 Licencia

Herramienta educativa y de apoyo clínico.
Uso bajo responsabilidad del profesional de salud.

---

**Desarrollado para práctica preprofesional en medicina**
**Última actualización: Octubre 2025**

🩺 *"La tecnología al servicio de la salud"*


# 🆕 Monitor Dengue v2.0 - Resumen de Cambios

## 📋 Cambios Implementados

### 1. ✅ Memoria Permanente
- **Eliminado el límite de 48 horas** - Los datos ahora persisten indefinidamente
- Se removió la función `cleanOldPatients()` que borraba datos automáticamente
- Añadido botón **"🗑️ Borrar Todo"** para que el usuario decida cuándo limpiar
- Confirmación doble antes de borrar para prevenir pérdidas accidentales

### 2. ✅ Eliminación de la Demo
- **IMPORTANTE**: Se removió completamente `dengue-monitor-demo.html`
- Ya no existe el riesgo de perder datos reales al cargar la demo
- El archivo `index.html` deberá actualizarse para remover referencias a la demo

### 3. ✅ Importación de Datos
- Nuevo botón **"📤 Importar"** en el header
- Modal de importación con advertencias claras
- Capacidad de restaurar archivos JSON exportados previamente
- Validación del formato de archivo antes de importar
- Confirmación antes de reemplazar datos actuales

### 4. ✅ Capacidad Ampliada: 24 Pacientes
- Límite aumentado de 16 a **24 pacientes**
- Validación al intentar agregar paciente #25
- Contador muestra "Pacientes en Monitoreo (Máx: 24)"

### 5. ✅ Ficha Completa del Paciente
- Nuevo botón **"📋 Ficha"** en cada tarjeta de paciente
- Modal con toda la información del paciente organizada por secciones:
  - Datos personales
  - Antropometría (con todos los cálculos)
  - Historia de enfermedad
  - Observaciones iniciales (ahora visibles!)
  - Información de monitoreo
- Botón "✏️ Editar Ficha" dentro de la ficha completa

### 6. ✅ Nuevos Campos en Ficha de Paciente

#### Antropometría (todos con cálculos automáticos):
- **Peso (kg)** - Campo obligatorio
- **Talla (cm)** - Campo obligatorio
- **IMC** - Calculado automáticamente: Peso(kg) / [Talla(m)]²
- **Superficie Corporal (m²)** - Calculada con fórmula de Mosteller: √(altura×peso/3600)
- Los campos calculados tienen fondo verde y son de solo lectura

#### Historia de Enfermedad:
- **Fecha Inicio Síntomas** - Campo obligatorio con selector de fecha
- **Fecha Inicio Fiebre** - Campo obligatorio con selector de fecha
- **Signo de Alarma de Ingreso** - Dropdown con los 8 signos + "Otro"
- La tarjeta del paciente muestra "Día X de síntomas" calculado automáticamente

### 7. ✅ Signos Vitales en Cada Evaluación

Nueva sección completa de signos vitales en cada chequeo:
- **Temperatura (°C)** - Rango 35-42°C
- **Frecuencia Cardiaca (lpm)** - Rango 30-220
- **Frecuencia Respiratoria (rpm)** - Rango 8-60
- **TA Sistólica (mmHg)** - Rango 50-250
- **TA Diastólica (mmHg)** - Rango 30-150
- **PAM (mmHg)** - Calculada automáticamente: (SBP + 2×DBP)/3
- **SatO₂ (%)** - Rango 50-100
- **Hidratación (ml/kg/h)** - Campo para velocidad de hidratación

La sección de signos vitales tiene fondo celeste para distinguirla visualmente.

### 8. ✅ Campo de Hidratación
- Implementado en la sección de signos vitales
- Campo numérico con paso de 0.1 para precisión
- Placeholder: 5.0 ml/kg/h
- Se guarda con cada evaluación

### 9. ✅ Edición de Fichas y Evaluaciones

#### Edición de Ficha de Paciente:
- Botón "✏️ Editar Ficha" en la vista de ficha completa
- Abre el mismo formulario de creación pero con datos pre-cargados
- Título cambia a "Editar Paciente"
- Botón dice "Actualizar Paciente"
- Todos los campos editables incluidos los calculados se recalculan

#### Edición de Evaluaciones:
- Botón "✏️ Editar" en cada chequeo del historial (esquina superior derecha)
- Abre el modal de chequeo con todos los datos pre-cargados:
  - Signos vitales completos
  - Signos de alarma marcados
  - Notas clínicas
- Título cambia a "Editar Chequeo"
- Botón dice "Actualizar Chequeo"
- Preserva el timestamp original

## 🎨 Mejoras de Interfaz

### Organización Visual:
- Formularios divididos en secciones con títulos (h3)
- Campos calculados con fondo verde (#f0fdf4)
- Signos vitales con fondo celeste (#f0f9ff)
- Grid responsivo para múltiples campos

### Tarjetas de Paciente Mejoradas:
- Más compactas pero con más información
- Muestra: Edad/Sexo, Peso/Talla, IMC, Monitoreo, Chequeos
- Día de síntomas visible en subtítulo
- 4 botones de acción: Chequear, Ficha, Historia, Eliminar

### Historia Mejorada:
- Signos vitales mostrados en recuadro azul
- Botón de edición en cada chequeo
- Formato más legible y organizado

## 📱 Características Mantenidas

✅ Funciona completamente offline
✅ PWA instalable
✅ Alertas de chequeos vencidos
✅ Generación de informes completos
✅ Estadísticas de signos de alarma
✅ Exportación de datos

## 🔄 Flujo de Trabajo Actualizado

### Agregar Paciente:
1. Click "➕ Nuevo Paciente"
2. Llenar datos personales
3. Ingresar peso y talla (IMC y SC se calculan solos)
4. Seleccionar fechas de síntomas y fiebre
5. Seleccionar signo de alarma de ingreso
6. Configurar intervalo y observaciones
7. Guardar

### Realizar Chequeo:
1. Click "✅ Chequear"
2. Llenar signos vitales (PAM se calcula sola)
3. Ingresar velocidad de hidratación
4. Marcar signos de alarma detectados
5. Agregar notas clínicas
6. Guardar

### Ver Ficha Completa:
1. Click "📋 Ficha"
2. Revisar toda la información organizada
3. Si necesitas editar: "✏️ Editar Ficha"

### Editar Chequeo:
1. Click "📊 Historia"
2. En cualquier chequeo: "✏️ Editar"
3. Modificar lo necesario
4. Actualizar

## ⚠️ Notas Importantes

1. **Backup Regular**: Aunque los datos son permanentes, es recomendable exportar periódicamente
2. **Archivos Antiguos**: Esta es la v2.0, diferente estructura de datos que v1.0
3. **Compatibilidad**: Los exports de v1.0 pueden no ser 100% compatibles
4. **Navegador**: Usar siempre el mismo navegador para acceder a los mismos datos

## 🔧 Instalación

1. Reemplazar el archivo antiguo `dengue-monitor.html` con `dengue-monitor-v2.html`
2. O mejor: renombrar `dengue-monitor-v2.html` a `dengue-monitor.html`
3. Actualizar las referencias en `index.html` (eliminar links a demo)
4. Los datos antiguos se mantendrán si usas el mismo localStorage

## 📊 Formato de Datos Actualizado

Cada paciente ahora incluye:
```json
{
  "id": "timestamp",
  "name": "Nombre completo",
  "age": 28,
  "sex": "M/F",
  "bed": "Cama X",
  "weight": 70.5,
  "height": 165,
  "imc": 25.87,
  "sc": 1.76,
  "symptomsDate": "2025-10-20",
  "feverDate": "2025-10-21",
  "admissionSign": "Dolor abdominal intenso y continuo",
  "monitoringInterval": 2,
  "initialNotes": "Observaciones...",
  "checks": [
    {
      "timestamp": "ISO date",
      "vitals": {
        "temp": "38.5",
        "hr": "95",
        "rr": "20",
        "sbp": "110",
        "dbp": "70",
        "pam": "83",
        "sato2": "98",
        "hydration": "5.0"
      },
      "signs": ["array de signos"],
      "notes": "Notas...",
      "hasAlerts": true/false
    }
  ]
}
```

## ✅ Testing Recomendado

Antes de usar en producción, probar:
- [ ] Crear paciente con todos los campos
- [ ] Verificar cálculos de IMC y SC
- [ ] Crear chequeo con signos vitales completos
- [ ] Verificar cálculo de PAM
- [ ] Editar ficha de paciente
- [ ] Editar chequeo existente
- [ ] Ver ficha completa
- [ ] Exportar datos
- [ ] Importar datos exportados
- [ ] Verificar que datos persisten después de cerrar navegador

## 🎯 Próximas Mejoras Sugeridas (Futuro)

- Gráficas de evolución de signos vitales
- Cálculo automático de días de enfermedad
- Alarmas sonoras para chequeos vencidos
- Integración con percentiles cubanos para IMC por edad
- Categorización de IMC (bajo peso, normal, sobrepeso, obesidad)
- Historial de cambios en la ficha del paciente
- Calculadora de dosis integrada

---

**Desarrollado por:** PalmeiroResearch
**Fecha:** Octubre 2025
**Versión:** 2.0

¡Mucho éxito en las guardias! 🏥👨‍⚕️👩‍⚕️

