
FROM node:8

RUN mkdir -p /app

COPY . /app

RUN chown -R node:node /app

USER node

WORKDIR /app

RUN npm install \
    && npm run build

CMD ["node", "dist/server.js"]
