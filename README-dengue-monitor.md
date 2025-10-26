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
