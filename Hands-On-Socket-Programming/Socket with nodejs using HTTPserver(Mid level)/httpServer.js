//http server
// 6 =+% `

const http = require('http');//http internally depends on TCP.
//http runs on application layer.
//net module works on transport layer.

const server = http.createServer((req, res) => {
    console.log("New connection was created");
    if (res.url === '/home') {
        return res.end('Home page');
    }
    else {
        return res.end('Something sent from the server');
    }
});

server.listen(3000, () => {
    console.log("New server up on port 3000");
});