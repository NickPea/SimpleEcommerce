FROM node
ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN cd server && npm rebuild && npm install --production
RUN cd client && npm install --production

CMD cd server &&  npm run start