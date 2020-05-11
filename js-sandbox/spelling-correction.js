/**
 * Created by benedek balazs on 17/05/2016.
 */

// WEEK 16B ASSESSMENT - TASK 03/04 - FILE 01/01 - BENEDEK BALAZS

/*
 Define a simple "spelling correction" function correct() that takes a string and sees to it that
 1) two or more occurrences of the space character is compressed into one, and
 2) inserts an extra space after a period if the period is directly followed by a letter. E.g.
 correct("This   is  very funny  and  cool.Indeed!")
 should return
 "This is very funny and cool. Indeed!"
 */

function correct(sentence) {
    var sentence2 = sentence.split(" ").filter(function (n) {
        return n != "";
    }).join(" ");

    var chars = [",", ";", ".", "!", "?"];

    for (var i = 0; i < sentence2.length; i++) {
        if (!(chars.indexOf(sentence2[i]) === -1)) {
            if (i != sentence2.length) {
                sentence2 = sentence2.substr(0, i + 1) + " " + sentence2.substr(i + 1)
            }
        }
    }

    console.log(sentence2);
}

var sentence = "This   is  very funny  and  cool.Indeed!";
correct(sentence);

var sentence2 = "This is the;beginning,of a beautiful friendship!What do you think?Ape.Yo.";
correct(sentence2);