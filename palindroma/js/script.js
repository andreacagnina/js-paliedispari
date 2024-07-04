// let word = prompt('Inserisci una parola o una frase e ti dirò se è palindroma!');

// let wordsNoSpace = word.replace(/ /g, "");

// console.log(wordsNoSpace)


// function SplitReverseJoin(palindroma) {
//     let reverse = wordsNoSpace.split('').reverse().join('');

//     if (reverse === wordsNoSpace) {
//         alert('Palindroma')
//     }
//     else {
//         alert('Non Palindroma')
//     }
//     console.log(reverse)
// }
// SplitReverseJoin(word);

// let word = prompt('Inserisci una parola!');

function pal(pal) {

    let stringa = ('');
    let len = pal.length;

    for (let i = len - 1; i >= 0; i--) {
        console.log(pal[i])
        stringa += pal[i]

    }
    if (stringa === pal) {
        console.log('palindroma')
    }
    else {
        console.log('non palindroma')
    }
}

pal(word);





