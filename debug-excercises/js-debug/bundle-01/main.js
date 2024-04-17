/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// CORREZIONE
// 1. L'esercizio rappresenta un ciclo for che dovrebbe restituire per ogni valore dell'index un valore mostrato nella console
// 2. Si dovevano usare le , invece che le ;.
// 3. L'errore qui sta nel fatto che come è scritto ora è un ciclo praticamente infinito.
// per correggere basta mettere i < 5

// esercizio corretto
for (let i = 0, i < 5, i++) {
    console.log(i);
}


// **********************************************************************************************************************************************************


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// CORREZIONE
// 1.L'esercizio rappresenta una function che dovrebbe riconoscerese un numero inserito dall'utenterappresentato dal parametro num è pari o dispari.
// nel caso sia pari la function deve sommare il numero 5.
// manca un else e l'ugualglianza è sbagliata.

// esercizio corretto
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    } else {
        return num;  
    }
    
}


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// Correzione
// 1. La function rappresenta un ciclo for che esegue un loop fino all'indice 5
// 2. Non ho riconosciuto errori di sintassi apparte il Nome, infatti una function deve essere un codice generico.
// 3.Non ho riconosciuto errori di logica apparte il fatto che se vogliamo che arrivi a 5 dovevamo mettere il <=

// correzione
function indexSlider() {
    for (let i = 0, i <= 5, i++) {
        console.log(i);
    }
}

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

// correzione 
// 1. La function deve poter riconoscere i numeri pari per poi inserirli in un array.
    // il primo errore magari potrebbe essere la scrittura del nome della function
    // infatti questa funione non esegue il displat di nulla, ma seleziona i numeri pari.
    // il primo errore che noto sta nella sintassi allinterno ella condizione del ciclo for. Infatti si sono usate i ; piuttosto che le ,
    // abbiamo un errore anche nella condizione dell'if, dove bisognava usare l'operatore identità
    // l'array numbers deve essere dichiarato al di fuori della function
    // l'array numbers deve essere dichiarato chon un const
    // il ciclo for deve scorrere tutti i SVGAnimatedNumberList, il -1 non è necessario
    // il return non è necessario.
