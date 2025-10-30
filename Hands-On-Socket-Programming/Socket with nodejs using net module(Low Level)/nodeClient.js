const net = require('net');

const client = net.createConnection({port:8080}, ()=>{
    console.log("Client Connected!");
    client.write("Hello from node client");
});

client.on('data',(serverData)=>{
    console.log("Server has sent some data: ", serverData.toString());
});