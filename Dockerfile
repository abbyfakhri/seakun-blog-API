FROM node:21 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run db:migrate
RUN npm run db:seed

FROM node:21

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY .env .env
COPY .sequelizerc .sequelizerc

COPY package*.json ./
RUN npm install

EXPOSE 9000

CMD ["npm", "run", "start"]
