const http = require("http");

const listener = require("./routes");

const server = http.createServer(listener);

server.listen(9000);
