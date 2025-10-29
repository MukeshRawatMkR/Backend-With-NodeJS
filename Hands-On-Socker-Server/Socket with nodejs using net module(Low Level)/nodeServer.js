//6 =+% `
const net = require('net');

//socket -> object.
const server = net.createServer((socket) => {
    socket.on('data', (clientData)=>{
        console.log("Data received from client: ", clientData.toString());
        socket.write("Recieved on server, thankyou "); 
    });
});


server.listen(8080, () => {//'bind' as well as 'listen'.
    console.log("New server up on port 8080");
});