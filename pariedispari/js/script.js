let scelta = prompt('Scegli se il numero sarà pari o dispari');
let lancio = parseInt(prompt('Scrivi un numero da 1 a 5'));

function lancioPC() {
    return Math.floor(Math.random() * 5 + 1);
}

let RandomPc = lancioPC();
console.log(RandomPc)