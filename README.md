# 🧮 Calculadora con Docker

Una aplicación de calculadora completa construida con una arquitectura de microservicios utilizando Docker, Node.js y JavaScript vanilla.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Arquitectura](#arquitectura)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## ✨ Características

- ✅ **Operaciones básicas**: Suma, resta, multiplicación y división
- ✅ **Interfaz intuitiva**: Diseño de calculadora clásica con fuente personalizada
- ✅ **Arquitectura de microservicios**: Frontend y Backend separados
- ✅ **Containerización completa**: Usando Docker y Docker Compose
- ✅ **API RESTful**: Backend con Express.js
- ✅ **Responsive**: Interfaz adaptable a diferentes dispositivos
- ✅ **Manejo de errores**: División por cero y validaciones

## 🏗️ Arquitectura

```
┌─────────────────┐    HTTP Request     ┌─────────────────┐
│                 │ ────────────────►   │                 │
│   Frontend      │                     │    Backend      │
│   (Nginx)       │ ◄────────────────   │   (Node.js)     │
│   Puerto: 8080  │    JSON Response    │   Puerto: 5000  │
└─────────────────┘                     └─────────────────┘
```

### Componentes:

1. **Frontend**: Aplicación web estática servida por Nginx
2. **Backend**: API REST construida con Express.js
3. **Docker Compose**: Orquestación de contenedores

## 🛠️ Tecnologías

### Frontend
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white)

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white)

### DevOps
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
- ![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=flat&logo=docker&logoColor=white)

## 📁 Estructura del Proyecto

```
Calculadora/
├── 📄 docker-compose.yml      # Orquestación de contenedores
├── 📄 README.md              # Documentación del proyecto
├── 📁 Backend/               # Servidor API
│   ├── 📄 Dockerfile         # Imagen Docker del backend
│   ├── 📄 package.json       # Dependencias Node.js
│   └── 📄 server.js          # Servidor Express.js
└── 📁 Frontend/              # Aplicación web
    ├── 📄 Dockerfile         # Imagen Docker del frontend
    ├── 📄 index.html         # Página principal
    ├── 📄 script.js          # Lógica de la calculadora
    ├── 📄 styles.css         # Estilos CSS
    └── 📄 Calculator.ttf     # Fuente personalizada
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- ![Docker](https://img.shields.io/badge/Docker-v20.10+-2496ED?style=flat&logo=docker&logoColor=white)
- ![Docker Compose](https://img.shields.io/badge/Docker_Compose-v2.0+-2496ED?style=flat&logo=docker&logoColor=white)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/calculadora-docker.git
   cd calculadora-docker
   ```

2. **Construir y ejecutar los contenedores**
   ```bash
   docker compose up --build
   ```

3. **Acceder a la aplicación**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:5000

### Comandos útiles

```bash
# Ejecutar en segundo plano
docker compose up -d

# Ver logs
docker compose logs

# Detener servicios
docker compose down

# Reconstruir imágenes
docker compose build --no-cache
```

## 💡 Uso

### Interfaz de Usuario

1. **Ingreso de números**: Haz clic en los botones numéricos (0-9)
2. **Operaciones**: Selecciona la operación deseada (+, -, *, /)
3. **Cálculo**: Presiona el botón "=" para obtener el resultado
4. **Limpiar**: Usa el botón "C" para reiniciar

### Funcionalidades

- **Operaciones encadenadas**: Puedes realizar múltiples operaciones consecutivas
- **Validación de entrada**: No permite divisiones por cero
- **Display responsive**: Muestra resultados con formato adecuado

## 📡 API Endpoints

### POST `/calculate`

Realiza operaciones matemáticas básicas.

**Request Body:**
```json
{
  "num1": "10",
  "num2": "5",
  "operator": "+"
}
```

**Response (Éxito):**
```json
{
  "result": 15
}
```

**Response (Error):**
```json
{
  "Error": "Indeterminado"
}
```

**Operadores soportados:**
- `+` : Suma
- `-` : Resta
- `*` : Multiplicación
- `/` : División

## 🔧 Configuración de Desarrollo

### Variables de entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del backend | `5000` |
| `FRONTEND_PORT` | Puerto del frontend | `8080` |

### Desarrollo local

Para desarrollo local sin Docker:

1. **Backend:**
   ```bash
   cd Backend
   npm install
   npm start
   ```

2. **Frontend:**
   Servir los archivos estáticos con cualquier servidor HTTP:
   ```bash
   cd Frontend
   python -m http.server 3000
   ```

## 🐛 Solución de Problemas

### Problemas comunes

1. **Error de conexión entre frontend y backend**
   - Verificar que ambos contenedores estén ejecutándose
   - Revisar la URL de la API en `script.js`

2. **Puerto ya en uso**
   ```bash
   # Cambiar puertos en docker-compose.yml
   ports:
     - "8081:80"  # Frontend
     - "5001:5000" # Backend
   ```

3. **Fuente personalizada no se carga**
   - Verificar que `Calculator.ttf` esté en la carpeta Frontend
   - Revisar la configuración CSS en `@font-face`

## 📊 Métricas del Proyecto

- **Tamaño de imagen Backend**: ~150MB (Node.js Alpine)
- **Tamaño de imagen Frontend**: ~50MB (Nginx Alpine)
- **Tiempo de construcción**: ~2-3 minutos
- **Tiempo de inicio**: ~10-15 segundos

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Ideas para contribuir

- [ ] Agregar más operaciones (potencia, raíz cuadrada)
- [ ] Implementar historial de cálculos
- [ ] Añadir modo científico
- [ ] Implementar temas (claro/oscuro)
- [ ] Agregar tests unitarios
- [ ] Mejorar la UI/UX

## 📝 Changelog

### [1.0.0] - 2024-10-02
- ✨ Implementación inicial de la calculadora
- 🐳 Containerización con Docker
- 🎨 Interfaz de usuario con fuente personalizada
- 🔧 API REST para operaciones matemáticas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@Caertos](https://github.com/Caertos)

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐

---

<div align="center">

**[⬆ Volver al inicio](#-calculadora-con-docker)**

Made with ❤️ and Docker 🐳

</div>