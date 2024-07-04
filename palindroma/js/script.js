let word = prompt('Inserisci una parola');
let reverse

function pal(word) {
    reverse = word.split('').reverse().join('');
    if (word == reverse) {
        alert('Palindroma')
    }
    else {
        alert('Non Palindroma')
    }
}

pal(word);