var PasswordGenerator = function() { 

  var randomString = function(stringLength, chars) {
    stringLength = stringLength || 12;
    var result = '';
    for (var i=0; i<stringLength; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      result += chars.substring(rnum,rnum+1);
    }
    return result;
  };

  String.prototype.removeChars = function(chars) {
    var copy = this;
    for (var i = 0; i < chars.length; i++) {
      var character = chars[i]
      copy = copy.replace(character, "");
    };
    return copy;
  };

  this.generate = function(options) {
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
        candidates = candidates.removeChars("aeiouAEIOU");
      }
      if (options.noAmbiguous) {
        candidates = candidates.removeChars("B8G6I1l0OQDS5Z2");
      }
    }
    if (options && options.length) {
      return randomString(options.length, candidates);
    }
    return randomString(12, candidates);
  }
}

module.exports = new PasswordGenerator();