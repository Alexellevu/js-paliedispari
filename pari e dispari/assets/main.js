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


// inserisce un numero da 1 a 5.
var sceltaNumb = parseInt(prompt('scegli un numero tra 1 e 5'));
console.log(sceltaNumb);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var max = 5;
var min = 1;

function randomNumb(max, min){
    
    return Math.random()*(max - min) + min ;
    
}

var numPc = randomNumb();
console.log(numPc);