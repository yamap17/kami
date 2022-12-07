FROM node:19.2-alpine

WORKDIR /front
COPY package*.json /fornt/

RUN apk update && \
    apk upgrade && \
    apk add --no-cache yarn && \
    yarn global add create-next-app && \
    yarn

EXPOSE 8000
CMD ["npm", "run", "dev"]