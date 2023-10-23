var x = require("readline-sync").questionInt("Inserisci il valore di x: ");
var y = require("readline-sync").questionInt("Inserisci il valore di y: ");
console.log("Scegliere 1 per somma, 2 per differenza, 3 per moltiplicazione, 4 per divisione");
var numero = require("readline-sync").question("Scegliere l'operazione: ");

if (numero == 1) {
    console.log("La somma è uguale a: ");
    console.log(x + y)
}

else if (numero == 2) {
    console.log("La sottrazione è uguale a: ");
    console.log(x - y)

}

else if (numero == 3) {
    console.log("La moltiplicazione è uguale a: ");
    console.log(x * y)
}

else if (numero == 4) {
    console.log("La divisione è uguale a: ");
    console.log(x / y)
}


else if (numero > 4) {
    console.log("Operazione non contemplata")
}
