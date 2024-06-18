const jsonServer = require('json-server');
const server = jsonServer.createServer();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);
server.use(router);

server.listen(port);