# --- Etapa de Desarrollo ---
# Imagen oficial de Node.js
FROM node:24-alpine AS development

# Directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto del código
COPY . .

# Expone el puerto 3000 (de express)
EXPOSE 3000

# Inicia el backend (npm start definido en package.json)
CMD ["npm", "start"]

# --- Etapa de Producción ---
FROM node:24-alpine AS production
WORKDIR /app
COPY package*.json ./

# Define entorno de producción
ENV NODE_ENV=production

# Instala dependencias ignorando devDependencies
RUN npm ci --omit=dev

COPY . .

# Por seguridad evitar usuario root
USER node

EXPOSE 3000
CMD ["node", "src/index.js"]