// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


/*
- chiedere e memorizzare numero di km e età dell'utente
- calcoliamo il prezzo base del biglietto (km * 0.21)
? SE l'età è < 18
  ° prezzoFinale = prezzoBase - (prezzoBase / 100 * 20)
: ALTRIMENTI SE l'età è > 65
  ° prezzoFinale = prezzoBase - prezzoBase * 0.4
: ALTRIMENTI 
  ° prezzoFinale = prezzoBase
- formatta prezzoFinale con due decimali
- stampa a schermo prezzoFinale in forma umana
*/



// - chiedere e memorizzare numero di km e età dell'utente
let tripKM = parseInt(prompt("Ciao, quanti KM devi percorrere?"));
let userAge = parseInt(prompt("Quanti anni hai?"));

// prezzo per km 
let pricePerKm = 0.21;

// - calcoliamo il prezzo base del biglietto (km * 0.21)
let baseTicketPrice = tripKM * pricePerKm;

console.log("Prezzo base: " + baseTicketPrice);

// dichiaro la variabile del prezzo finale
let finalPrice;

// ? SE l'età è < 18
if(userAge < 18) {

  // ° prezzoFinale = prezzoBase - (prezzoBase / 100 * 20)
  finalPrice = baseTicketPrice - baseTicketPrice / 100 * 20;
  console.log("prezzo scontato minorenni: " + finalPrice);

} else if(userAge >= 65) {

  finalPrice = baseTicketPrice - baseTicketPrice * 0.4;
  console.log("prezzo scontato over65: " + finalPrice);

} else {

  finalPrice = baseTicketPrice;
  console.log("prezzo: " + finalPrice);

}


// - formatta prezzoFinale con due decimali
finalPrice = finalPrice.toFixed(2);
console.log("Prezzo finale formattato: " + finalPrice);

// - stampa a schermo prezzoFinale in forma umana
document.writeln(`
  Ciao, devi percorrere ${tripKM} km,
  hai ${userAge} anni,
  il tuo prezzo finale è di ${finalPrice}€
`);