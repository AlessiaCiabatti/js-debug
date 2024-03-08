/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

/*
    1- Che cosa fa questo codice?

        // ESERCIZIO 1
        il codice fornito realizza un ciclo fino a quando la seconda condizione non resulterà falsa. Dandogli come condizione iniziale la variabile let i = 0, la seconda condizione sarà i < 5, essa conntrollerà se il valore i è inferiore a 5, i++ incrementa il valore di i a ogni ciclo. Quando il valore di ì non sarà più inferiore a 5 il ciclo termina

     2- Sono presenti errori di sintassi?

        // ESERCIZIO 1
        si, il simbolo nella seconda condizione dovrebbe essere inferiore e/o uguale a 

    3- Sono presenti errori logici?
        // ESERCIZIO 1
        si, la condizione i > 5 è semrpre falsa, perchè la prima condizione è i = 0, quindi il ciclo non viene eseguito

*/


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

/*
    1- Che cosa fa questo codice?

        // ESERCIZIO 2
        il codice fornito è una funzione la quale vuole calcolare se il numero che abbiamo è pari. Se il numero è pari allora lo restituisce sommando 5 alla cifra iniziale, altrimenti se è dispari restituisce il numero senza alcuna somma.
        La funzione serve ad eseguire blocchi di codice che possono essere riutilizzati in vari punti del programma richiamando la funzione.

     2- Sono presenti errori di sintassi?

        // ESERCIZIO 2
        no

    3- Sono presenti errori logici?
        // ESERCIZIO 1
        si, all'interno della condizione di if, soltanto un = è sbagliato perchè noi dobbiamo confrontare più valori. === confronta, il valore, e il tipo (se è una stringa, un numero...)

*/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

/*
    1- Che cosa fa questo codice?

        // ESERCIZIO 3
        il codice fornito è una funzione la quale realizza un cilclo fino a quando la seconda condizione non resulterà falsa. Dandogli come condizione iniziale la variabile let i = 0, la seconda condizione sarà i < 5, essa conntrollerà se il valore i è inferiore a 5, i++ incrementa il valore di i a ogni ciclo. Quando il valore di ì non sarà più inferiore a 5 il ciclo termina.
        La funzione serve ad eseguire blocchi di codice che possono essere riutilizzati in vari punti del programma richiamando la funzione.

     2- Sono presenti errori di sintassi?

        // ESERCIZIO 3
        si, le virgole sono sbagliate

    3- Sono presenti errori logici?
        // ESERCIZIO 3
        no

*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]