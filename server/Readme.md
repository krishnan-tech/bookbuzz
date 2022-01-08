# for running this server use like this

Make `.env` file and add this to .env

MONGO_URI = mongodb://localhost/bookshelf
PORT = 8080
SERVER_URL_PREFIX = http://localhost:8080/api/
JWT_SECRET=somethingverysecret

Then,

1. yarn watch
2. yarn dev
