//inserisco la parola
var parola = prompt('inserisci una parola');
console.log(parola);
//creo la funzione 
function palindroma(parola){
//trasformo la parola in array
var parolaArray = parola.split('');
console.log(parolaArray);
//inverto l'ordine dell' array con reverse()
var parolaArrayReverse = parolaArray.reverse();
console.log(parolaArrayReverse);
//trasformo l' array invertito nuovamente in stringa
var parolaReverse = parolaArrayReverse.join('');
console.log(parolaReverse);
//confronto la parola iniziale con la stringa inversa
if (parola == parolaReverse){
    return true;
}
    else{
        return false;
    }
}
//richiamo la funzione
var risultato = palindroma(parola);
 
if(risultato == true){
    console.log('la parola è palindorma');
}
 else{
     console.log('la parola non è palindroma');
 }