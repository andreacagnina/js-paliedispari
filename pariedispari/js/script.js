let scelta = prompt('Scegli se il numero sarà pari o dispari');
let lancio = parseInt(prompt('Scrivi un numero da 1 a 5'));
console.log(lancio)


let RandomPc = lancioPC();
console.log(RandomPc)

function lancioPC() {
    return Math.floor(Math.random() * 5 + 1);
}

let sommaLanci = RandomPc + lancio;
console.log(sommaLanci)

// function somma() {
//     return somma = RandomPc + lancio
// }

