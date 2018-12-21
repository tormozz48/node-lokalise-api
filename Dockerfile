FROM node:10.14

LABEL name="node-lokalise-api"

WORKDIR /package
COPY . /package

RUN npm install
EXPOSE 9229
CMD ["npm", "test"]