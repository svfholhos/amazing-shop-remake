const app = require("./app");
const port = 5000;
const https = require("https");
const fs = require("fs");

const server = https.createServer(
  {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.cert")
  },
  app
);

server.listen(port, () => console.log(`Server started at port ${port}`));
