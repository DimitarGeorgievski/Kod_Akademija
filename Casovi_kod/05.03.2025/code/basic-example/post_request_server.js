import http from "node:http";

const server = http.createServer((req,res) => {
    if(req.url === "/submit" && req.method === "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            res.writeHead(200, { "content-type": "text/plain"})
            res.end(`Received data ${body}`);
        })
    }
    else{
        res.writeHead(200, { "content-type": "text/html"});
        res.end(`<form action="/submit" method="post">
            <input type="text" name="message" placeholder="Enter something...">
            <button type="submit">Send</button>
        </form>`)
    }
})
server.listen(3005, () => {
    console.log("Server is running at http://localhost:3005");
})