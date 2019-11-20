//Make connection
var socket = io.connect('http://localhost:8080');

//Query DOM
amountEntered = document.getElementById('amountEntered')
purchaseButton = document.getElementById('purchaseButton')
tokenAmount = document.getElementById('tokenOutput')

 //Emit event

 purchaseButton.addEventListener('click', function(){

     socket.emit("purchase", {
         amountEntered: amountEntered.value
     });
 });