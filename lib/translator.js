var vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
}
;
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
    var punctuation = '';

    if ( !firstLetter ) {return '';}

// determine capitalization
    if (firstLetter !== firstLetter.toLowerCase()){
      isCapitalized = true;
      firstLetter = word[0].toLowerCase();
    }

    if ( !vowels[lastLetter] && !consonants[lastLetter]) {
      // preserve punctuation
      punctuation = word.slice(word.length - 1);
      word = word.slice(0, word.length-1);

      if (vowels[firstLetter]) {
        return word + '-' + piglatinSuffix + punctuation;
        } else {
        return word.slice(1) + '-' + firstLetter + piglatinSuffix + punctuation;
      }
      // code to run if last letter is not a punctuation mark
    } else {
        if (vowels[firstLetter]) {
          return word + '-' + piglatinSuffix;
        } else {
          return word.slice(1) + '-' + firstLetter + piglatinSuffix;
      }
    }
  });

  return wordList.join(' ');
}

module.exports = translate;
