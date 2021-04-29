var parola = prompt('inserisci una parola');
console.log(parola);

function palindroma(parola){
var parolaArray = parola.split('');
console.log(parolaArray);
var parolaReverse = parolaArray.reverse();
console.log(parolaReverse); 
if (parolaArray == parolaReverse){
    return alert ('la parola inserita è palindroma');
}
    else{
        return alert ('la parola inserita non è palindroma');
    }
}

var risultato = palindroma(parola);
 