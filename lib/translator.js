var vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
};

var consonants = {
  b: true,
  c: true,
  d: true,
  f: true,
  g: true,
  h: true,
  j: true,
  k: true,
  l: true,
  m: true,
  n: true,
  p: true,
  q: true,
  r: true,
  s: true,
  t: true,
  v: true,
  w: true,
  x: true,
  y: true,
  z: true
};

var piglatinSuffix = 'ay';

function translate ( input ) {
  var wordList = input.split(' ');

  wordList = wordList.map(function(word) {
    var isCapitalized = false;
    var firstLetter = word[0];
    var lastLetter = word[word.length - 1];
    var secondLetter = word[1];
    var thirdLetter = word[2];
    var punctuation = '';
    var rebuiltWord = '';

// returns nothing if there is no first letter
    if ( !firstLetter ) {return '';}

// determine capitalization
    if (firstLetter !== firstLetter.toLowerCase()){
      isCapitalized = true;
      firstLetter = word[0].toLowerCase();
    }
// preserve punctuation
    if ( !vowels[lastLetter] && !consonants[lastLetter]) {
      punctuation = word.slice(word.length - 1);
      word = word.slice(0, word.length - 1);
      console.log(punctuation);
     }

// REBUILDING WORD

      // if word begins with a vowel
    if (vowels[firstLetter]) {
      rebuiltWord = word + '-' + piglatinSuffix;
      // if first three letters are consonants
    } else if (consonants[firstLetter] && (consonants[secondLetter] && secondLetter !== "y") && (consonants[thirdLetter] && thirdLetter !== "y")) {
      rebuiltWord = word.slice(3) + '-' + word.substring(0, 3).toLowerCase() + piglatinSuffix;
      // if first two letters are consonants
    } else if (consonants[firstLetter] && (consonants[secondLetter] && secondLetter !== "y") && (!consonants[thirdLetter] || thirdLetter === "y")) {
      rebuiltWord = word.slice(2) + '-' + word.substring(0, 2).toLowerCase() + piglatinSuffix;
    } else {
      rebuiltWord = word.slice(1) + '-' + firstLetter + piglatinSuffix;
    }

// adding capitalization back to the word
    if (isCapitalized) {
      rebuiltWord = rebuiltWord[0].toUpperCase() + rebuiltWord.slice(1);
    }

// adding punctuation back to the piglatinified word
    if (punctuation) {
      rebuiltWord += punctuation;
    }
    return rebuiltWord;
  });

  return wordList.join(' ');
}

module.exports = translate;
