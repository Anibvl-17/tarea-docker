# Imagen oficial de Node.js
FROM node:24-alpine

# Directorio de trabajo
WORKDIR /app

# Copia archivo de las dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto de código
COPY . .

# Expone puerto 5173 (de vite)
EXPOSE 5173

# Inicia frontend
CMD ["npm", "run", "dev"]