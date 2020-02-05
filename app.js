const net = require('net');
//can communicate with other machines
const readlineSync = require('readline-sync');




//specific harded IP addreses and prts
const host = '192.168.01'
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

   

   app.on('data',(data) =>{
      //let integer = parseInt(data)
      console.log('Data received %s', data);
      setTimeout(() =>{
         inputNumber()
      },0)
   });

   app.on('error', (err) => {
      app.destroy();
      app = null;
      console.log('Connection Error %s',err)

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

    setTimeout(() =>{
      inputNumber()
   },0);
}

const sendInteger=(data)=> {
 //let integer = Buffer.from(data)
  if (!app){

     setTimeout(() =>{
      inputNumber()
   },0);
   return;
  } 


 app.write(data);
  
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


   const inputLine = readlineSync.question("\n\n\Select Options(1-Open Connection, 2-Send Integer, 3-Close Connection, 4-Quit): ");

  switch(inputLine) {
      case "1":
         initiateConnection()
        break;
      case "2":
         const integerInput = readlineSync.questionInt("Please Enter Number: ")
         sendInteger(integerInput)
         return;
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







