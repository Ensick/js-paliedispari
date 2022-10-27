/* 
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/* Snack-1 */

/* let parola = prompt("Inserisci una parola palindroma")

let parolaCapovolta = "";


function validatorePalindromo(x){

    for ( let i = x.length - 1; i >= 0 ; i--){
    
        parolaCapovolta += x[i]

    }

    if(x == parolaCapovolta ){
    
        return "la parola è palindroma"
        
    }else{
    
        return "la parola inserita non è palindroma"
    }
    
}

console.log(validatorePalindromo(parola)) */


/* Snack-2 */

/* let inserisciNumero = parseInt(prompt("Scegli un numero pari o dispari da 1 a 5"))

console.log(inserisciNumero)

let risultatoCalcoloRandom = 0


function calcoloRandom(min , max){

    let numeroRandom = Math.floor(Math.random() * max ) + min

    console.log(numeroRandom)

    let somma = inserisciNumero + numeroRandom

    console.log(somma)

    return risultatoCalcoloRandom = somma

}

calcoloRandom(1, 5)


function calcoloSomma(risultatoSomma){

    if(risultatoSomma % 2 === 0){
        
        console.log("la somma è pari")

    }else{

        console.log("la somma è dispari")

    }


}

calcoloSomma(risultatoCalcoloRandom) */

