
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

RUN mkdir -p /app/build/data

RUN cp /app/src/data/users.json /app/build/data/users.json

RUN ls -l /app/build/data/users.json

EXPOSE 5000

CMD ["node", "build/server.js"]
