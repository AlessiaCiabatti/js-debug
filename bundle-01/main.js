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

addIfEven(num);

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
        si, all'interno della condizione di if, soltanto un = è sbagliato perchè noi dobbiamo confrontare più valori. === confronta, il valore, e il tipo (se è una stringa, un numero...).
        non viene richiamata

*/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

loopToFive();

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
        si, invece di essere solo <, deve avere ll'uguale <= in questo modo il ciclo arriva a 5.
        non viene richiamata

*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    debugger;
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

console.log(displayEvenNumbers())

/*
    1- Che cosa fa questo codice?

        // ESERCIZIO 4
        il codice fornito è una funzione la quale ha un array di numeri, un array vouto e un ciclo. Quest'ultimo attraverso un ciclo che parte da i = 0, analizza tutti gli elementi degli array, e trova quelli pari. Infine i numeri pari vengono inseriti nell'array vuoto.
        La funzione serve ad eseguire blocchi di codice che possono essere riutilizzati in vari punti del programma richiamando la funzione.

     2- Sono presenti errori di sintassi?

        // ESERCIZIO 4
        si, il punto e virgola dopo if

    3- Sono presenti errori logici?
        // ESERCIZIO 4
        si, la condizione .lenght-1 è sbagliata, è giusto scrivere .lenght senza il -1 per garantire che il ciclo avvenga su tutti gli elementi dell'array.
        All'interno di if, si tenta di confrontare l'intero array numbers, invece di confrontare l'elemento corrente dell'array, cioè numbers[i].
        La posizione di return è sbagliata perchè se inserito all'interno del ciclo, il ciclo si interrompe e non prosegue. Va messo fuori
        evenNumbers.push(i) è sbagliato perchè l'array evenNumbers dovrebbe contenere i numeri pari, non gli indici i.

*/