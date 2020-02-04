const net = require('net');
//can communicate with other machines
const readline = require('readline-sync');



//specific harded IP addreses and prts
const host = '127.0.0.1'
const port = 9000

let app = null;

//start connections
let initiateConnection = () => {
   if (app){
      console.log('--connection already establish--');
      setTimeout(() =>{
      inputNumber()
   },0)
   return;
   }
   
   //new instane of socket
   app = new net.Socket();

   //error handling
   app.on('error', (err) => {
      app.destroy();
      app = null;
      console.log('Connection Errror %s',err.message)

      setTimeout(() =>{
         inputNumber()
      },0)      
      
   });

   app.on('data',(data) =>{
      console.log('Data received %s',data);
      setTimeout(() =>{
         inputNumber()
      },0)
   });

   app.connect(port,host, () => {
      console.log('connection success')

      setTimeout(() =>{
         inputNumber()
      },0);
    });

    setTimeout(()=>{
       inputNumber()
    },0)
}

const sendInteger=(data)=> {
  let integer = Buffer(data)
  integer[0] = 1
  if (!app){

     setTimeout(() =>{
      inputNumber()
   },0);
   return;
  } 
 app.write(integer);
}

   
const closeConnection =  () => {
   if (!app){
      console.log('connection closed')
   
   setTimeout(() =>{
      inputNumber()
   },0)
   return;
   }   
}


const inputNumber = () => {

   const inputLine = readline.question("\n\n\Select Options(1-Open Connection, 2-Send Integer, 3-Close Connection, 4-Quit): ");

  switch(inputLine) {
      case "1":
         initiateConnection()
        break;
      case "2":
         let integer= readline.question("Input Number: ");
       sendInteger(parseInt(integer))
         break;
      case "3":
         closeConnection();
         break;
      case "4":
         break;
      default:
         inputNumber();
         break
  }
}

inputNumber()







