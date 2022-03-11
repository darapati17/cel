const http = require("http");
const server = require("./api/server");
http.createServer(server).listen(80);