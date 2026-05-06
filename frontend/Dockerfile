# --- Etapa de Desarrollo ---
# Imagen oficial de Node.js
FROM node:24-alpine AS development

# Directorio de trabajo
WORKDIR /app

# Copia archivo de las dependencias
COPY package*.json ./

# Instala dependencias
RUN npm ci

# Copia el resto de código
COPY . .

# Expone puerto 5173 (de vite)
EXPOSE 5173

# Inicia frontend
CMD ["npm", "run", "dev"]

# --- Etapa de compilación ---
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Etapa de producción (con nginx) ---
FROM nginx:alpine AS production

# Copia resultado de compilación a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuración para enrutamiento de React
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]