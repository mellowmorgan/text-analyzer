// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

//similar to numberOfOccurrences but finds whole word, not in another
function wordOccurrences(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase()===word.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}

function commonWordCounter(text) {
  if (text.length === 0) {
    return 0;
  } else {
    let topElementCount=0;
    let mostCommonWords = [];
    const wordArray = text.split(" ");
    wordArray.forEach(function(word){
      currentElementCount=wordOccurrences(word,text)
    if (currentElementCount>1){
      mostCommonWords.push(word.toLowerCase() + ": " + currentElementCount);
    } else if (wordArray.length===3){
      mostCommonWords.push(word.toLowerCase() + ": 1");
    }
    });
    //remove duplicates
    mostCommonWordsSet = new Set(mostCommonWords);
    mostCommonWords = Array.from(mostCommonWordsSet);
    //find 3 largest by element last character (convert to number)
    let occurrences=0;
    let isHighest =false;
    let highestArray = [];
    mostCommonWords.forEach(function(element){
      occurrences = element.charAt(element.length-1)
      highestArray.forEach(function(toCompare){
        if (occurrences>toCompare){
          isHighest=true;
        }
        else{
          isHighest=false;
        } 
      });
      if(isHighest){
        highestArray.unshift(element);
      }
    });
    return highestArray;
  }
}

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});