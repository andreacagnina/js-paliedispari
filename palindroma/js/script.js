let word = prompt('Inserisci una parola o una frase e ti dirò se è palindroma!');

let wordsNoSpace = word.replace(/ /g, "");

console.log(wordsNoSpace)


function SplitReverseJoin(palindroma) {
    let reverse = wordsNoSpace.split('').reverse().join('');

    if (reverse === wordsNoSpace) {
        alert('Palindroma')
    }
    else {
        alert('Non Palindroma')
    }
    console.log(reverse)
}
SplitReverseJoin(word);