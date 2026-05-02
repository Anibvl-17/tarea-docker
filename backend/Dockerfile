# Imagen oficial de Node.js
FROM node:24-alpine

# Directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto 3000 (de express)
EXPOSE 3000

# Inicia el backend (npm start definido en package.json)
CMD ["npm", "start"]
