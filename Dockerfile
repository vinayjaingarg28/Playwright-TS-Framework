FROM node

WORKDIR  /playwright-ts-framework

COPY package*.json ./

RUN npm ci
RUN npx playwright install

COPY . .