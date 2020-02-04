const net = require('net');
const server = net.createServer();


server.on('connections',(socket) => {
    let clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log('connections created %s', clientAddress)


    socket.on('data',(chunk) => {
        let integer = parseInt(chunk);
        console.log('Receiving input from %s: %s', clientAddress, integer);
        socket.write(integer)

    socket.once('close', ()=> {
        console.log('Connection Closed %s ',clientAddress)
    })

    socket.on('error',(err)=> {
        console.log('Connect %s Error %s', clientAddress,err.message)
    })
})

server.listen(9000, ()=>{
    console.log('Listening on %j', server.address())
    })
})