FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE $PORT

ENTRYPOINT ["npm", "run"]
CMD ["dev"]