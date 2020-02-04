const net = require('net');
//can communicate with other machines
const readline = require('readline-sync');
const process = require('process');


//specific harded IP addreses and prts
const host = '127.0.0.1'
const port ='9000'||3000||3858

const app = null;

//start connections
const initiateConnection = () => {
   if (app){
      console.log('connection already establish');
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
      console.log('Connection Errror',err.message)

      setTimeout(() =>{
         inputNumber()
      },0)      
      
   });

   app.on('data',(data) =>{
      console.log('Data received',data);
      setTimeout(() =>{
         inputNumber()
      },0)
   })

   app.connect(port,host, () => {
      console.log('connection success')

      setTimeout(() =>{
         inputNumber()
      },0);
    })
}

const sendInteger=(data)=> {
  let integer = parseInt(data)
  if (!app){

     setTimeout(() =>{
      inputNumber()
   },0);
   return;
  } 
 console.log(app.write(integer))
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

   const inputLine = readline.question(" (1-Open Connection, 2-Send Integer, 3-Close Connection, 4-Quit:) ");

  switch(inputLine) {
      case "1":
         initiateConnection()
        break;
      case "2":
         let integer= readline.question("Input Number: ");
       sendInteger(parseInt(console.log(integer)))
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







