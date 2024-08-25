# Etapa 1: COnstruccion del proyecto

FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run

# Etapa 2: Servir la aplicación

FROM nginx:alpine
COPY --from=build-stage /app/dist/hub-entertainment-mega /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]