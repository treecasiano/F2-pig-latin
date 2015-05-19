var vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
}

var piglatinSuffix = 'ay';

function translate ( input ) {
  var wordList = input.split(' ');
  wordList = wordList.map(function(word) {
    var firstLetter = word[0];
    if ( !firstLetter) {return '';}

    if (vowels[firstLetter]) {
      return word + '-' + piglatinSuffix;
    } else {
      return word.slice(1) + '-' + firstLetter + piglatinSuffix;
    }
  })
  return wordList.join(' ');
}

module.exports = translate;
