/*
Chiedere all’utente di inserire una parola;

Creare una funzione per capire se la parola inserita è palindroma.
*/


//DATA

//inpput 

const userWord = prompt('Inserisci una parola').split('');
console.log(userWord);


const emptyArray = [];
const reverseWord = userWord.reverse();
emptyArray.push(reverseWord);


console.log(emptyArray);


for (let  i = 0;  i < userWord.length; i++) {
  if (userWord == emptyArray) {
    console.log(userWord[i]);
  }
  
}


// parola utente: "ommettemmo"
// se fosse un array ['o', 'm', 'm', ...... 'm', 'o']
// Federico deve capire se è palindroma
// cosa fa Federico?

// Leggo lettera per lettera prima da sinistra verso destra 
//ciao
// Poi metto la parola al contrario e la leggo 
//oaic
// Confronto il primo con il secondo array 
// 

// ------ ciao | oaic
/**/  
