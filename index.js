var passwordGenerator = (function() {

  function generatePassword (length, candidates) {
    var result = "";
    for (var i = 0; i < length; i++) {
      var randomNum = Math.floor(Math.random() * candidates.length);
      result += candidates.substring(randomNum, randomNum + 1);
    }
    return result;
  }

  function removeChars (candidates, chars) {
    for (var i = 0; i < chars.length; i++) {
      var character = chars[i];
      candidates = candidates.replace(character, "");
    }
    return candidates;
  }

  function generate(options) {
    var lowercase = "abcdefghiklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var numbers = "0123456789";
    var punct = ".,-/#!$%^&*;:{}=-_`~()]";
    var candidates = numbers + lowercase + uppercase + punct;

    if (options) {
      if (options.noCapitals) {
        candidates = candidates.replace(uppercase, "");
      }
      if (options.noNumbers) {
        candidates = candidates.replace(numbers, "");
      }
      if (options.noPunctuation) {
        candidates = candidates.replace(punct, "");
      }
      if (options.noVowels) {
        candidates = removeChars(candidates, "aeiouAEIOU");
      }
      if (options.noAmbiguous) {
        candidates = removeChars(candidates, "B8G6I1l0OQDS5Z2");
      }
    }
    if (options && options.length) {
      return generatePassword(options.length, candidates);
    }
    return generatePassword(12, candidates);
  }

  return {
    generate: generate
  };
}());

module.exports = passwordGenerator;