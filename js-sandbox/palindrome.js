/**
 * Created by benedek balazs on 17/05/2016.
 */

// WEEK 16B ASSESSMENT - TASK 04/04 - FILE 01/01 - BENEDEK BALAZS

/*
 Write a function named palindrome() that takes one string argument and return true if that is a palindrome otherwise
 false. Phrase palindromes such as "Go hang a salami I'm a lasagna hog.", "Was it a rat I saw?", "Step on no pets",
 "Sit on a potato pan, Otis", "Lisa Bonet ate no basil", "Satan, oscillate my metallic sonatas", "I roamed under it as
 a tired nude Maori", "Rise to vote sir", or the exclamation "Dammit, I'm mad!". Note that punctuation, capitalization,
 and spacing are usually ignored.
 */

function palindrome(sentence) {

    var sentenceCleared = "";
    var sentenceReversed = "";

    for (var i = 0, len = sentence.length; i < len; i++) {

        var char = sentence[i];

        if (char.match(/[a-z]/i)) {
            sentenceCleared += char.toLowerCase();
        }
        else {
            char = "";
        }
    }

    sentenceReversed = sentenceCleared.split('').reverse().join('');

    if (sentenceReversed === sentenceCleared) {
        return true;
    }
    else {
        return false;
    }
}

console.log(palindrome("Go hang a salami I'm a lasagna hog."));
console.log(palindrome("Was it a rat I saw?"));
console.log(palindrome("Step on no pets"));
console.log(palindrome("Sit on a potato pan, Otis"));
console.log(palindrome("Lisa Bonet ate no basil"));
console.log(palindrome("This sentence is definitely not a palindrome!"));
console.log(palindrome("Satan, oscillate my metallic sonatas"));
console.log(palindrome("I roamed under it as a tired nude Maori"));
console.log(palindrome("Rise to vote sir"));
console.log(palindrome("Dammit, I'm mad!"));
