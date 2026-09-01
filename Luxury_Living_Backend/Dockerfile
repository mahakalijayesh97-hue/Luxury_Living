FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    sqlite

COPY package*.json ./

RUN npm install

COPY . .

# Explicitly ensure the database is copied and the .tmp directory exists
RUN mkdir -p .tmp
COPY .tmp/data.db .tmp/data.db

EXPOSE 1337

CMD ["npm", "run", "develop"]