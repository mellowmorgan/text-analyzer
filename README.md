# Text Analyzer

#### By Frank Proulx and Morgan Waites

#### Analyzes text input.

## Technologies Used

* HTML/CSS
* Javascript 
* Bootstrap

## Description

User inputs chunk of text and upon submitting, webpage displays total number of words and other info.

## Setup/Installation Requirements

* Create and/or navigate to the directory you would like to contain this project on your computer.
* Type git clone this repository to clone the repository to your local machine.
* In terminal type open index.html.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Frank Proulx and Morgan Waites

## Tests

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

Describe: commonWordCounter()

Test: "If an empty string is passed, it should return 0."
Code: 
const text = "";
commonWordCounter(text);
Expected Output: 0

Test: "If passage is one word, it should return that word"
Code:
const text = "red";
commonWordCounter(text);
Expected Output: "red: 1"

Test: "If passage is two different words, it should return an array with 2 elements, one with "red: 1" and another with "blue: 1".
Code:
const text = "red blue";
commonWordCounter(text);
Expected Output: ["red: 1", "blue: 1"]

Test: "If passage is two of the same word, it should return an array with one element, a string "red: 2".
Code:
const text = "red red";
commonWordCounter(text);
Expected Output: ["red: 2"]

Test: "If passage is three different words, return each word with value of one in array."
Code: 
const text = "red blue green";
dommonWordCounter(text);
Expected Output: ["red: 1", "blue: 1", "green: 1"]