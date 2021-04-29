var parola = prompt('inserisci una parola');
console.log(parola.split(''));
var parolaArray =  parola.split('');
console.log(parolaArray);
var parolaArrayReverse = parolaArray.reverse();
console.log(parolaArrayReverse);
 
function palindroma(p1 , p2){
    if (p1 == p2){
        return alert('la parola è palindroma');}
        else{
           return alert('la parola non è palindorma') ;
        }
     
}
