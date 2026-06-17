<div align="center">

# ⚽ YonkiWorld 2026

### La porra oficial del grupo para el Mundial 2026

![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-orange?style=for-the-badge)
![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Realtime%20DB-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![HTML](https://img.shields.io/badge/Vanilla-HTML%20%2F%20JS%20%2F%20CSS-E34F26?style=for-the-badge&logo=html5&logoColor=white)

**🇺🇸 USA · 🇲🇽 México · 🇨🇦 Canadá · Junio–Julio 2026**

</div>

---

## 📋 ¿Qué es YonkiWorld?

YonkiWorld 2026 es una aplicación web de porra privada para el Mundial 2026, pensada para grupos de amigos. Cada participante predice los resultados de los 96 partidos del torneo, los premios FIFA y estadísticas de España, acumulando puntos según la precisión de sus predicciones. Todo en tiempo real gracias a Firebase.

> 🔒 **App privada** — el acceso requiere aprobación manual del administrador.

---

## 🖼️ Capturas de pantalla

### 🏠 Pantalla de inicio / Login
<img width="446" height="467" alt="image" src="https://github.com/user-attachments/assets/27728d5c-4885-4bc6-a821-b121ceb3b045" />


### 🎯 Predicciones de partidos (Fase de grupos)
<img width="792" height="914" alt="image" src="https://github.com/user-attachments/assets/c8d4fe0a-586f-4bef-87e1-b126c9211ca8" />


### 🇪🇸 Sección España
<img width="704" height="919" alt="image" src="https://github.com/user-attachments/assets/4614996d-6764-4e29-94c7-63bbbbcd9ba7" />


### 🏆 Ranking en tiempo real
<img width="703" height="644" alt="image" src="https://github.com/user-attachments/assets/9a301609-8c23-4af1-a6ed-608c303a8d13" />


### ⚙️ Panel de administrador
<img width="694" height="918" alt="image" src="https://github.com/user-attachments/assets/a50a4a66-933e-4a6e-b92e-0ed87d8e8610" />


---

## ✨ Funcionalidades

### 👤 Usuario
- Registro con aprobación manual del administrador
- Predicción de resultados de los **96 partidos** del Mundial (grupos + eliminatorias)
- Autocompletado de ciudades y equipos
- Predicciones de **premios FIFA** — Balón de Oro, Bota de Oro, Guante, Mejor Joven, Mejor Entrenador, Campeón...
- Sección exclusiva de **predicciones de España** — goleadores, fase máxima, expulsados, total de goles y victorias
- Sistema de **bloqueo definitivo** — las predicciones se guardan y no se pueden modificar
- Acceso a predicciones de otros jugadores una vez bloqueadas las propias
- Clasificación en tiempo real con puntos desglosados por categoría

### 🛠️ Administrador
- Panel de aprobación/rechazo de nuevos usuarios
- Apertura y cierre de rondas (grupos, 32avos, octavos, cuartos, semis, final)
- Introducción de resultados reales manualmente
- Asignación de equipos reales a partidos de eliminatorias
- Actualización de la plantilla oficial de España
- Sincronización automática de resultados vía API de football-data.org
- Bloqueo/desbloqueo manual de predicciones de cualquier usuario

### ⚡ Sistema en tiempo real
- Todos los cambios se sincronizan instantáneamente entre usuarios vía Firebase Realtime Database
- Indicador de conexión en vivo en la interfaz
- Proxy Netlify Function para obtener resultados de la API sin bloqueos CORS

---

## 🧮 Sistema de puntuación

| Fase | Resultado exacto | Ganador correcto |
|------|:---:|:---:|
| Fase de grupos | 3 pts | 1 pt |
| 32avos / Octavos | 5 pts | 2 pts |
| Cuartos de final | 6 pts | 3 pts |
| Semifinales | 8 pts | 4 pts |
| Gran Final | 10 pts | 5 pts |

| Categoría | Puntos por acierto |
|-----------|:---:|
| Campeón del Mundial | 12 pts |
| Balón de Oro / Plata / Bronce | 10 pts cada uno |
| Bota de Oro / Plata / Bronce | 10 pts cada uno |
| Guante de Oro / Mejor Joven | 8 pts cada uno |
| Mejor Entrenador | 8 pts |
| 1er Goleador España | 10 pts |
| 2º Goleador España | 8 pts |
| Fase máxima España | 8 pts |
| Subcampeón / Tercer puesto | 8 / 6 pts |

---

## 🗂️ Estructura del proyecto

```
yonkiworld2026/
├── index.html                  # App completa en un único fichero
│                               # (HTML + CSS + JS + lógica Firebase)
├── netlify.toml                # Configuración de deploy y headers CORS
└── netlify/
    └── functions/
        └── wc-results.js       # Proxy serverless → football-data.org API
```

---

## ⚙️ Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5 + CSS3 + Vanilla JavaScript (ES Modules) |
| Base de datos | Firebase Realtime Database |
| Deploy | Netlify (hosting estático + Serverless Functions) |
| API resultados | football-data.org (via proxy Netlify Function) |
| Fuentes | Google Fonts — Bebas Neue + Inter |
| Banderas | flagcdn.com |

> **Sin frameworks, sin build steps, sin dependencias npm.** Todo el código corre directamente en el navegador con módulos ES nativos.

---

## 🚀 Despliegue local

Solo necesitas un servidor HTTP estático. La forma más sencilla:

```bash
# Con Python
python -m http.server 8080

# Con Node.js (npx)
npx serve .
```

Abre `http://localhost:8080` en el navegador.

> ⚠️ No abras el `index.html` directamente como archivo (`file://`) — los módulos ES de Firebase no funcionan sin servidor HTTP.

---

## 🔧 Configuración

### Firebase
El proyecto usa el proyecto Firebase `yonkiworld2026`. Las credenciales están en la constante `firebaseConfig` dentro de `index.html`. Para montar tu propia instancia:

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Activa **Realtime Database** en modo test
3. Sustituye el objeto `firebaseConfig` por el tuyo

### API de resultados (opcional)
Regístrate gratis en [football-data.org](https://www.football-data.org) y pega tu token en:
- `index.html` → constante `FD_TOKEN`
- `netlify/functions/wc-results.js` → constante `FD_TOKEN`

Sin token, el admin introduce los resultados manualmente desde el panel.

### Primer usuario administrador
Al registrarse, añade `#admin2026` al final de tu contraseña. Este sufijo no se almacena y es invisible para los demás usuarios.

---

## 🗺️ Roadmap

- [x] Sistema de registro con aprobación del admin
- [x] Predicciones de fase de grupos (72 partidos)
- [x] Sección especial España
- [x] Premios FIFA (14 categorías)
- [x] Ranking en tiempo real
- [x] Sincronización automática de resultados via API
- [x] Panel de administración completo
- [x] Predicciones de eliminatorias con equipos dinámicos
- [x] Clasificación de grupos en tiempo real
- [ ] Notificaciones push cuando se publican resultados
- [ ] Historial de predicciones acertadas por usuario
- [ ] Estadísticas avanzadas del grupo (quién acertó más empates, etc.)
- [ ] Vista comparativa cabeza a cabeza entre dos usuarios

---

## 👥 Autor

| Nombre | GitHub |
|--------|--------|
| _[ Alejandro Quiñones Seco ]_ | [@AlejandroQuinoneSeco]([https://github.com/tu-usuario](https://github.com/AlejandroQuinoneSeco)) |

---

## 📄 Licencia

Proyecto personal de uso privado. No destinado a uso comercial.

---

<div align="center">
  <sub>Hecho con ⚽ y mucha ilusión · YonkiWorld 2026</sub>
</div>
