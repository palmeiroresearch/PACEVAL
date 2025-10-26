# 💾 Almacenamiento de Datos - Monitor Dengue

## 📍 Dónde se Guardan los Datos

Los datos de tus pacientes se almacenan usando **localStorage**, una API del navegador web que guarda información localmente en tu dispositivo.

### Ubicación Técnica

**Clave de almacenamiento:** `dengue_patients`

**Ubicación física según navegador:**

#### Chrome/Edge en Android
```
/data/data/com.android.chrome/app_chrome/Default/Local Storage/leveldb/
```

#### Chrome en Windows
```
C:\Users\[tu_usuario]\AppData\Local\Google\Chrome\User Data\Default\Local Storage\leveldb\
```

#### Safari en iOS
```
~/Library/Safari/LocalStorage/
(Base de datos SQLite en el sandbox de la aplicación)
```

#### Firefox
```
[perfil_usuario]/storage/default/[dominio]/ls/
```

## 🔍 Cómo Ver los Datos Guardados

### Método 1: Developer Tools (Recomendado)

1. Abre la aplicación en tu navegador
2. Presiona **F12** (o **Ctrl+Shift+I** en Windows, **Cmd+Option+I** en Mac)
3. Ve a la pestaña **"Application"** (Chrome/Edge) o **"Storage"** (Firefox)
4. En el panel izquierdo: **Local Storage** → selecciona tu dominio
5. Busca la clave: `dengue_patients`
6. Verás todos tus datos en formato JSON

### Método 2: Consola JavaScript

1. Abre la aplicación
2. Abre la consola (F12 → Console)
3. Escribe:
```javascript
JSON.parse(localStorage.getItem('dengue_patients'))
```
4. Presiona Enter para ver todos los datos

## 🛡️ Persistencia de los Datos

### ✅ Los datos SE MANTIENEN cuando:
- Cierras el navegador
- Reinicias el dispositivo
- Pierdes conexión a internet
- Actualizas la página
- Instalas la PWA

### ❌ Los datos SE PIERDEN cuando:
- Limpias la caché/datos del navegador manualmente
- Desinstalas el navegador (en móviles)
- Pasan 48 horas sin actualización (limpieza automática de la app)
- Usas modo incógnito/privado (los datos solo duran esa sesión)

## 📦 Formato de los Datos

Los datos se guardan en formato JSON. Ejemplo:

```json
[
  {
    "id": "1729900000000",
    "name": "María García López",
    "age": 28,
    "sex": "F",
    "bed": "Cama 12",
    "monitoringInterval": 2,
    "createdAt": "2025-10-26T12:00:00.000Z",
    "lastCheck": "2025-10-26T14:30:00.000Z",
    "initialNotes": "Fiebre alta, plaquetas en descenso",
    "hasAlerts": true,
    "checks": [
      {
        "timestamp": "2025-10-26T14:30:00.000Z",
        "signs": ["Vómitos persistentes", "Dolor abdominal intenso y continuo"],
        "notes": "Dolor abdominal aumentado. Eco solicitada",
        "hasAlerts": true
      }
    ]
  }
]
```

## 💾 Cómo Hacer Backup Manual

### Método 1: Función de Exportación (Recomendado)
1. Abre la aplicación
2. Click en **"📥 Exportar"** en el header
3. Se descargará un archivo `.json` con todos los datos
4. Guarda este archivo en un lugar seguro (Google Drive, Dropbox, etc.)

### Método 2: Copiar desde DevTools
1. Abre DevTools (F12)
2. Ve a Application → Local Storage → `dengue_patients`
3. Click derecho en el valor → Copy
4. Pega en un archivo de texto
5. Guarda como `backup-dengue-FECHA.json`

### Método 3: Consola JavaScript
```javascript
// Copiar datos al portapapeles
const data = localStorage.getItem('dengue_patients');
navigator.clipboard.writeText(data);
console.log('Datos copiados al portapapeles');
```

## 🔄 Cómo Restaurar un Backup

### Si hiciste backup con la función de Exportación:

**Opción A: Carga manual en DevTools**
1. Abre DevTools (F12)
2. Ve a Console
3. Copia y pega este código:
```javascript
// Lee el contenido de tu archivo JSON y pégalo aquí
const backupData = [/* pega aquí el contenido del JSON */];
localStorage.setItem('dengue_patients', JSON.stringify(backupData));
location.reload(); // Recarga la página
```

**Opción B: Usa un lector de archivos**
Desafortunadamente, la versión actual no tiene función de importación directa. Esto se puede agregar en futuras versiones.

## 📊 Tamaño de Almacenamiento

### Límites de localStorage:
- **Típico:** 5-10 MB por dominio
- **Con 16 pacientes y 48h de chequeos:** ~200-500 KB
- **Margen:** Muy amplio, no hay problema de espacio

### Verificar uso actual:
```javascript
// En la consola del navegador
const data = localStorage.getItem('dengue_patients');
const sizeKB = new Blob([data]).size / 1024;
console.log(`Tamaño actual: ${sizeKB.toFixed(2)} KB`);
```

## 🔒 Seguridad y Privacidad

### ✅ Ventajas de localStorage:
- Los datos NO salen de tu dispositivo
- NO se envían a ningún servidor
- Acceso rápido sin internet
- Simple y confiable

### ⚠️ Consideraciones:
- Cualquiera con acceso físico a tu dispositivo puede ver los datos
- No está encriptado por defecto
- Asegura tu dispositivo con contraseña/huella/PIN
- No compartas el dispositivo sin protección

## 🔧 Limpieza Manual de Datos

### Si quieres borrar todos los pacientes:

**Método 1: Desde la aplicación**
- Borra cada paciente individualmente con el botón 🗑️

**Método 2: Consola JavaScript**
```javascript
// CUIDADO: Esto borra TODOS los datos
localStorage.removeItem('dengue_patients');
location.reload();
```

**Método 3: DevTools**
1. F12 → Application → Local Storage
2. Click derecho en `dengue_patients` → Delete
3. Recarga la página

## ⏰ Limpieza Automática (48 horas)

La aplicación tiene una función de limpieza automática:

```javascript
// Código de limpieza (ya está en la app)
function cleanOldPatients() {
    const now = new Date().getTime();
    const hours48 = 48 * 60 * 60 * 1000; // 48 horas en milisegundos
    
    patients = patients.filter(p => {
        const lastUpdate = new Date(p.lastCheck || p.createdAt).getTime();
        return (now - lastUpdate) < hours48;
    });
    
    savePatients();
}
```

**Cómo funciona:**
- Se ejecuta cada vez que abres la aplicación
- Revisa la fecha del último chequeo de cada paciente
- Elimina los que tienen >48h sin actualización
- Esto mantiene la base de datos limpia y relevante

**Para cambiar el límite de 48 horas:**
Edita esta línea en el código:
```javascript
const hours48 = 72 * 60 * 60 * 1000; // Cambiar a 72 horas (3 días)
```

## 🚨 Qué Hacer si Pierdes los Datos

1. **Verifica el backup:** ¿Exportaste los datos recientemente?
2. **Revisa el navegador correcto:** ¿Usas el mismo navegador y perfil?
3. **Revisa DevTools:** Quizás los datos siguen ahí
4. **No limpies caché adicional:** Podría empeorar la situación
5. **Restaura desde backup** si lo tienes

## 💡 Recomendaciones

### Para Guardias:
1. **Al inicio del turno:** Verificar que los datos del turno anterior estén
2. **Durante el turno:** La app guarda automáticamente cada cambio
3. **Al final del turno:** Exportar datos como backup

### Para Uso Prolongado:
1. **Exportar diariamente** los datos
2. **No confiar solo en localStorage** para datos críticos
3. **Considerar screenshot/foto** de resúmenes importantes
4. **Usar múltiples dispositivos** si es posible (backup natural)

### Datos Críticos:
Para información que DEBE conservarse más de 48h:
1. Generar informe completo del paciente
2. Guardar como PDF o TXT
3. Subir a sistema hospitalario oficial
4. No usar esta app como único registro médico-legal

## 📱 Diferencias entre Navegadores

| Navegador | Persistencia | Límite | Notas |
|-----------|-------------|--------|-------|
| Chrome Mobile | Excelente | 10 MB | Muy confiable |
| Safari iOS | Buena | 5 MB | Puede limpiarse si espacio bajo |
| Firefox | Excelente | 10 MB | Muy confiable |
| Samsung Internet | Buena | 5-10 MB | Similar a Chrome |

## 🔗 Recursos Adicionales

- [MDN - Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)
- [Especificación W3C](https://html.spec.whatwg.org/multipage/webstorage.html)

---

**Resumen:**
- ✅ Datos seguros en tu dispositivo
- ✅ Persisten al cerrar/reiniciar
- ❌ Se pierden si limpias caché
- 💾 Haz backup con Exportar
- ⏰ Limpieza automática a las 48h

**Pregunta frecuente:** *"¿Los datos se sincronizan entre dispositivos?"*  
**Respuesta:** No. Cada dispositivo tiene su propia copia local. Si quieres pasar datos a otro dispositivo, usa la función Exportar/Importar.
