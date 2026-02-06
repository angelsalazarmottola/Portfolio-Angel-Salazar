# Fase 1: Build (Compilación)
FROM node:20-slim AS build
WORKDIR /app

# Copiamos archivos de dependencias primero para aprovechar el cache de Docker
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y compilamos
COPY . .
RUN npm run build

# Fase 2: Production (Imagen ligera)
FROM node:20-slim
WORKDIR /app

# Solo copiamos lo necesario para ejecutar la app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Exponemos el puerto que usará App Runner
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]