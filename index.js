const http = require("http");
const server = http.createServer((req, res) => {
  console.log(JSON.stringify({ time: new Date().toISOString(), method: req.method, url: req.url }));
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from CI/CD!");
});
server.listen(process.env.PORT || 3000, () => console.log("Server running"));
