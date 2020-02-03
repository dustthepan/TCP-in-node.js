const net = require('net');
const server = net.createServer();


server.on('connections',(socket) => {
    let clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log('connections created', clientAddress)


    socket.on('data',(data) => {
        console.log('Receiving input', clientAddress, data);
        socket.write(parseInt(data))
    })

    socket.once('close', ()=> {
        console.log('Connection Closed',clientAddress)
    })

    socket.on('error',(err)=> {
        console.log('Error', clientAddress,err.message)
    })
})

server.listen(9000, ()=>{
    console.log('Listening on', server.address())
});










