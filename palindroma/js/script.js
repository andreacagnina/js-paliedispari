let word = prompt('Inserisci una parola');


function pal(word) {
    reverse = word.split('').reverse().join('');
    if (word === reverse) {
        alert('Palindroma')
    }
    else {
        alert('Non Palindroma')
    }

}

pal(word);