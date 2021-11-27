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
    let notYetAdded=true;
    let object;
    let mostCommonWords = [];
    const wordArray = text.split(" ");
    wordArray.forEach(function(word){
      currentElementCount=wordOccurrences(word,text);
      mostCommonWords.forEach(function(element){
        if(element.wordString===word.toLowerCase())
          {notYetAdded=false;}
      });

    if (currentElementCount>1 && notYetAdded){
      object = {wordString: word.toLowerCase(), wordOccurrences: currentElementCount};
      mostCommonWords.push(object);
    } else if (wordArray.length===3){
      object = {wordString: word.toLowerCase(), wordOccurrences: 1};
      mostCommonWords.push(object);
    }
    notYetAdded=true;
    });
    mostCommonWords.sort((a, b) => (a.wordOccurrences > b.wordOccurrences) ? -1 : 1);
    const threeMostCommonWords = [mostCommonWords[0],mostCommonWords[1],mostCommonWords[2]];
    return threeMostCommonWords;
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
    const mostCommonList = commonWordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#most-common-list-1").html(mostCommonList[0].wordString + ": " + mostCommonList[0].wordOccurrences);
    $("#most-common-list-2").html(mostCommonList[1].wordString + ": " + mostCommonList[1].wordOccurrences);
    $("#most-common-list-3").html(mostCommonList[2].wordString + ": " + mostCommonList[2].wordOccurrences);
    $("#passage").html(passage);
  });
});