//GIOCO PARI E DISPARI

//L’utente sceglie pari o dispari 
var scelta = prompt('pari o dispari?');
console.log(scelta);

//controllo che l'utente inserisca la giusta parola
while(scelta != 'pari' && scelta != 'dispari')
{   
  alert ('errore, inserisci o pari o dispari');
  scelta = prompt('pari o dispari?');
}

var sceltaNum = prompt('scegli un numero da 1 a 5');
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

var numPc = getRandomInt(); 
console.log(numPc);

