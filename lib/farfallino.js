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

function farfallino ( input ) {
  var wordList = input.split(' ');

  wordList = wordList.map(function(word) {
    var isCapitalized = false;
    var firstLetter = word[0];
    var rebuiltWord = '';

// returns nothing if there is no first letter
    if ( !firstLetter ) {return '';}

// determine capitalization
    if (firstLetter !== firstLetter.toLowerCase()){
      isCapitalized = true;
    }

// REBUILDING WORD

    word = word.toLowerCase();

// finding the vowels
   var lettersInWord = word.split('');

   lettersInWord = lettersInWord.map(function(letter) {
    var newLetter = letter;
     if (vowels[letter]) {
        newLetter = letter + 'f'+ letter;
     }
     return newLetter;
    });
    rebuiltWord = lettersInWord.join('');
    console.log(rebuiltWord);

// adding capitalization back to the word
    if (isCapitalized) {
      rebuiltWord = rebuiltWord[0].toUpperCase() + rebuiltWord.slice(1);
    }
    return rebuiltWord;
  });

  return wordList.join(' ');
}

module.exports = farfallino;
