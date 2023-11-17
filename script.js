// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste info queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).




//chiedo all'user quanti km vuole percorrere

const userkm = parseFloat(prompt("Inserisci la quantità di km da percorrere"));
console.log(userkm);



//chiedo all'user quanti anni ha

const usereta = parseInt(prompt("Inserisci la tua età"));
console.log(usereta);



//calcolo il prezzo del biglietto al km quindi moltiplico per  0.21

const prezzokm = parseFloat(userkm * 0.21);
console.log(prezzokm);



//calcolo uno sconto del 20%  se l'user è under 20 e stampo

if (usereta < 20) {
    let scontounder20 = parseFloat(prezzokm * 20 / 100);
    let prezzounder20 = parseFloat(prezzokm - scontounder20).toFixed(2);
    console.log(prezzounder20);
    document.getElementById('prezzo').innerHTML=`Il costo del tuo biglietto: ${prezzounder20} $`;



//calcolo uno sconto del 40% se l'user è over 65 e stampo

} else if (usereta > 65) {
    let scontover65 = parseFloat(prezzokm * 40 / 100);
    let prezzover65 = parseFloat(prezzokm - scontover65).toFixed(2);
    console.log(prezzover65);
    document.getElementById('prezzo').innerHTML=`Il costo del tuo biglietto: ${prezzover65} $`;



//altrimenti stampo il prezzo senza sconto

} else {
    console.log(prezzokm);
    document.getElementById('prezzo').innerHTML=`Il costo del tuo biglietto: ${prezzokm} $`;
}