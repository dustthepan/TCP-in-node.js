const net = require('net');
const server = net.createServer();

const serverHOST='127.0.0.1'
const serverPORT=9000

server.on('connections',(socket) => {
    let clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    //console.log('connections created %s', clientAddress)


    socket.on('data',(data) => {
        //let integer = parseInt(data);
        console.log(data);
        //socket.write(data)
    

    socket.once('close', ()=> {
        console.log('Connection Closed %s ',clientAddress)
    })

    socket.on('error',(err)=> {
        console.log('Connect %s Error %s', clientAddress,err.message)
    })
    })
})

server.listen(serverPORT,serverHOST);

// server.listen(9000, ()=>{
//     console.log('Integer', server.address())
//     })
// })