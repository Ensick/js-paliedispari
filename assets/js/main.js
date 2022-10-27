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


let InserisciPariDispari = prompt("Scrivi pari o dispari")

let pari = "pari"

let dispari = "dispari"



if(InserisciPariDispari == "pari"){

    InserisciPariDispari = pari

}else if(InserisciPariDispari == "dispari"){

    InserisciPariDispari = dispari

}else{

    InserisciPariDispari = prompt("Inserisci pari o dispari")
    
}
    

let inserisciNumero = parseInt(prompt("Scegli un numero da 1 a 5"))

console.log(inserisciNumero)

let risultatoCalcoloRandom = 0


function calcoloRandom(min , max){

    return  Math.floor(Math.random() * max ) + min

}

let numeroRandom = calcoloRandom(1, 5)

alert(`Numero Pc = ${numeroRandom}`)

console.log(numeroRandom)

let somma = inserisciNumero + numeroRandom

alert(` ${inserisciNumero} + ${numeroRandom} = ${somma}`)

console.log(somma)


function calcoloSomma(risultatoSomma){

    if(risultatoSomma % 2 === 0 && InserisciPariDispari == "pari"){
        
        alert("Hai Vinto")


    }else if(InserisciPariDispari == "dispari"){

        alert("Hai Vinto")

    }else{
        
        alert("Hai Perso")

    }

}

calcoloSomma(somma)

