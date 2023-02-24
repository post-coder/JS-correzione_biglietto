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

let tripKmEl = document.getElementById("tripKm");
let userAgeEl = document.getElementById("userAge");


// prezzo per km 
let pricePerKm = 0.21;


let generateTicketButtonEl = document.getElementById("generateTicketButton");

generateTicketButtonEl.addEventListener('click', function() {

  // - calcoliamo il prezzo base del biglietto (km * 0.21)
  let baseTicketPrice = tripKmEl.value * pricePerKm;

  // dichiaro la variabile del prezzo finale
  let finalPrice;

  if(!isNaN(tripKmEl.value) && !isNaN(userAgeEl.value)) {

    let discount;


    // ? SE l'età è < 18
    if(userAgeEl.value < 18) {

      // ° prezzoFinale = prezzoBase - (prezzoBase / 100 * 20)
      finalPrice = baseTicketPrice - baseTicketPrice / 100 * 20;

      discount = '20%';
      console.log("prezzo scontato minorenni: " + finalPrice);

    } else if(userAgeEl.value >= 65) { //: ALTRIMENTI SE l'età è > 65

      finalPrice = baseTicketPrice - baseTicketPrice * 0.4;

      discount = "40%";
      console.log("prezzo scontato over65: " + finalPrice);

    } else { //: ALTRIMENTI 

      finalPrice = baseTicketPrice;

      discount = "nessuno";
      console.log("prezzo: " + finalPrice);
      
    }


    // - formatta prezzoFinale con due decimali
    finalPrice = finalPrice.toFixed(2);

    document.getElementById("ticket").style.display = "block";

    // let ticketKmEl = document.getElementById("ticketKm");
    document.getElementById("ticketKm").innerHTML = "Km del viaggio: " + tripKmEl.value;
    document.getElementById("ticketUserAge").innerHTML = "Età dell'utente: " + userAgeEl.value;
    document.getElementById("ticketDiscount").innerHTML = "Sconto applicato: " + discount;

    document.getElementById("ticketPrice").innerHTML = "Prezzo del biglietto: <strong>€" + finalPrice + "</strong>";

  } else {

    console.log("inserisci un numero in entrambi i campi!");
    
  }

  

});




document.getElementById("closeTicket").addEventListener("click", function() {
  
  document.getElementById("ticket").style.display = "none";
  tripKmEl.value = "";
  userAgeEl.value = "";

});

