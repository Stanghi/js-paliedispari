/*
Palindroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const parolaUtente = prompt('Inserire una parola');
metodo1(parolaUtente);
metodo2(parolaUtente);

function metodo1(){
    const value = isPalindrome(parolaUtente);
    console.log(value);
    
    function isPalindrome(parolaUtente){
        const len = parolaUtente.length;
        for (let i = 0; i < len / 2; i++) {
            if (parolaUtente[i] !== parolaUtente[len - 1 - i]) {
                return '[Metodo 1] La parola non è palindroma';
            }
        }
        return '[Metodo 1] La parola è palindroma';
    }
}

function metodo2(){
    let parolaInversa = invertiParola( parolaUtente);

    if (parolaUtente == parolaInversa){
        console.log('[Metodo 2] La parola è palindroma');
    }
    else {
        console.log('[Metodo 2] La parola non è palindroma');
    }
    
    function invertiParola(parolaUtente){
        let parolaUtenteInversa = parolaUtente.split('').reverse().join('');
        return parolaUtenteInversa;
    }
}