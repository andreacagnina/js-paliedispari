

for (let i = 0; i < 1; i++) {
    let scommessa = prompt('Scegli se il numero sarà pari o dispari').toLowerCase();
    while (scommessa != 'pari' && scommessa != 'dispari') {
        scommessa = prompt('DEVI scegliere se il numero sarà pari o dispari').toLowerCase();
    }
    let lancio = parseInt(prompt('Scrivi un numero da 1 a 5'));
    console.log(lancio);

    while (isNaN(lancio)) {
        lancio = parseInt(prompt('Il valore inserito non è valido. Inserisci un numero da 1 a 5'));
    }


    let RandomPc = lancioPC();
    console.log(RandomPc)

    function lancioPC() {
        return Math.floor(Math.random() * 5 + 1);
    }

    let sommaLanci = RandomPc + lancio;
    console.log(sommaLanci)

    EorO();

    function EorO() {
        if (sommaLanci % 2 === 0) {
            console.log('Pari')
        }
        else {
            console.log('Dispari')
        }
    }

    if ((scommessa === 'pari' && sommaLanci % 2 == 0) || (scommessa === 'dispari' && sommaLanci % 2 !== 0)) {
        console.log('Hai vinto una macchina')
    }
    else {
        console.log('Hai perso casa tua')
    }
}




