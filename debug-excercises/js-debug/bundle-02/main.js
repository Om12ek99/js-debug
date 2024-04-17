/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();


// 1. La funzione deve controllare se l'eta inserita è maggiore o minore di 18 anni
// il myAge non ha senso che sia allinterno della function, poi sopprattutto dichiarato come costante, siccome è un valore che cambia.
// anche message non ha senso che sia all'interno della function. potremmo metterlo fuori e restituire un parametro

// esercizio corretto
    let myAge = 32;
    let message = '';
function checkAge(age, result) {
   

    if (age < 18) {
        result = `Sei troppo giovane! Hai ${age} anni!`;
    } else {
        result = 'Hai più di 18 anni!';
    }
}
checkAge(myAge, message);


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();


// 1. questa function dovrebbe restituire a console il numero di colori presenti nell'array colors
// Il primo errore è un errore di sintassi, in quanto length è scritto sbagliato



// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// In questo esercizio la funzione deve restituire l somma tra il numero che lutente fornisce ed il numero 12
// il primo errore sta nel prompt, infatti questo restituira sempre una stringa che poi si concatenera con il numero 12.
// per ovviare a sto problema possiamo convertire la stringa in un numero con parseINT oppure parseFloat per i decimali

// esercizio corretto
function addNumbers() {
    const userNumber = parseFloat(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// questa funzione controlla l'email fornita se presente nell'array di email adresses. se presente restituisce accesso consentito
// La variabile grantAccess è inizializzata come una stringa ('false') anziché come un booleano (false). Questo comporta un confronto incoerente in seguito con l'operatore di uguaglianza stretta ===.
// Nella seconda condizione if, stai verificando se grantAccess è uguale a true, ma grantAccess è una stringa, quindi questa condizione non sarà mai vera.



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

    // c'è un problema nella logica di controllo dell'accesso all'interno del ciclo for. Attualmente, stai verificando l'accesso ad ogni iterazione del ciclo for, 
    // il che potrebbe causare la stampa ripetuta dei messaggi di accesso consentito o negato, a seconda dell'ultimo valore di grantAccess impostato nell'iterazione del ciclo.
    // Per risolvere questo problema, dovresti spostare la logica di stampa dei messaggi all'esterno del ciclo for, in modo che venga eseguita solo dopo che l'intero ciclo è stato completato e la verifica dell'accesso è stata effettuata su tutti gli indirizzi email nell'array.

// esercizio corretto
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {
            if (email === userEmail) {
                grantAccess = true;
            }
        }
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}

checkAccessImproved();

























