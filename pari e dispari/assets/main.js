//GIOCO PARI E DISPARI

//L’utente sceglie pari o dispari 
var scelta = prompt('pari o dispari?');

//controllo che l'utente inserisca la giusta parola
while(scelta != 'pari' && scelta != 'dispari')
{   
  alert ('errore, inserisci o pari o dispari');
  scelta = prompt('pari o dispari?');
}
console.log(scelta);
//controllo che il numero inserito dall' utente stia tra 1 e 5
var sceltaNum =parseInt(prompt('scegli un numero da 1 a 5'));
while(sceltaNum > 5 || sceltaNum < 0){
  alert('il numero inserito non è valido')
  sceltaNum = prompt('scegli un numero da 1 a 5');
}
console.log(sceltaNum);


function getRandomInt(min, max) {
  var min = 1;
  var max = 5;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numPc = parseInt(getRandomInt()); 
console.log(numPc);

function pariDispari(n1 , n2){
  var n1 , n2 ,finale;
  var somma = n1 + n2;
  
  if (somma%2 == 0){
    finale = 'pari';
  }
    else {
     finale = 'dispari';
  }
  return finale;
}

var risultato = pariDispari(sceltaNum, numPc);
console.log(risultato);


if (risultato == scelta){
   document.getElementById('verdetto').innerHTML = 'il risultato è ' + scelta + ' hai vinto';
  console.log('hai vinto');
}
 else{
 document.getElementById('verdetto').innerHTML = 'hai perso';
 console.log('hai perso');
 } 
