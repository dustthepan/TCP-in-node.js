const net = require('net');
//can communicate with other machines
const readline = require('readline-sync');
const Integer= require('node-gyp')



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
 app.write(Integer(data));
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
         const integerInput = readline.questionInt("Please Enter Number: ")
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







