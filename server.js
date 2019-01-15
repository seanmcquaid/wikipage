const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"content-type": "text/html"});
        const wikiHTML = fs.readFileSync("wiki.html");
        res.end(wikiHTML);
    } else if (req.url =="/wiki.css"){
        res.writeHead(200,{"content-type": "text/css"});
        const wikiCSS = fs.readFileSync("wiki.css");
        res.end(wikiCSS);
    } else if (req.url =="/wiki.js"){
        res.writeHead(200,{"content-type": "text/javascript"});
        const wikiJS = fs.readFileSync("wiki.js");
        res.end(wikiJS);
    } else if (req.url =="/dummy.html"){
        res.writeHead(403,{"content-type": "text/html"});
        const dummyHTML = fs.readFileSync("dummy.html");
        res.end(dummyHTML);
    } else {
        res.writeHead(404,{"content-type": "text/html"})
        const errorHTML = fs.readFileSync("error.html");
        res.end(errorHTML);
    }
})

server.listen(3050);