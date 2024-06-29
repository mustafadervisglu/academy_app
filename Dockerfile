FROM node:20.10.0

WORKDIR /app

#RUN npm install -g npm@latest

COPY package.json package-lock.json ./
#
#RUN apk update && \
#    apk add curl

RUN apt-get update && \
    apt-get install -y curl make gcc g++ python3 nano

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
