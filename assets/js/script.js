/*
Palindroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
console.log("---Palindroma---");

const parola = prompt('Inserire una parola/frase per vedere se è palindroma');
const parolaUtente = parola.toLowerCase().replace(/\s/g, '');;
console.log("Parola/frase inserita: ", parola);
metodo1(parolaUtente);
metodo2(parolaUtente);

function metodo1(){
    const value = isPalindrome(parolaUtente);
    console.log(value);

    function isPalindrome(parolaUtente){
        const len = parolaUtente.length;
        for (let i = 0; i < len / 2; i++) {
            if (parolaUtente[i] !== parolaUtente[len - 1 - i]){
                // spiegazione
                // console.log(parolaUtente[i]);
                // console.log(parolaUtente[len - 1 - i]);
                return '[Metodo 1] La parola non è palindroma';
            }
            // spiegazione
            //  else{
            //      console.log(parolaUtente[i]);
            //      console.log(parolaUtente[len - 1 - i]);
            //  }
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

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
console.log("---PARI E DISPARI---");

const userChoice = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));

if (userChoice.toLowerCase() === "pari" && userNumber >= 1 && userNumber <= 5){
    choice();
    randomForPc();
}
else if (userChoice.toLowerCase() === "dispari" && userNumber >= 1 && userNumber <= 5){
    choice();
    randomForPc();
}
else{
    console.log("Inserimento non valido. Specificare pari/dispari e numero compreso tra 1 e 5");
}


function choice(){
    console.log("Utente scommette: ",userChoice);
    if (userChoice === "dispari"){
        console.log("PC scommette: pari");
    }
    else {
        console.log("PC scommette: dispari");
    }
    console.log("Numero utente: ",userNumber);
}

function randomForPc(){
    const pcNumber = Math.floor(Math.random() * 5) + 1;
    console.log("Numero pc: ",pcNumber);

    const sum = userNumber + pcNumber;

    winnerCalculator(sum);
}

function winnerCalculator(sum) {
    if (!(sum % 2)){
        console.log("la somma è pari");
        const sumWinnerOutput = "pari";

        checkWinner(sumWinnerOutput);
    }
    else{
        console.log("la somma è dispari");
        const sumWinnerOutput = "dispari";

        checkWinner(sumWinnerOutput);
    }
}

function checkWinner(sumWinnerOutput){
    if (sumWinnerOutput === userChoice){
        console.log("USER VINCE");
    }
    else {
        console.log("PC VINCE");
    }
}