var util = require("./utility");

var PasswordGenerator = function() { 


  String.prototype.removeChars = function(chars) {
    var copy = this;
    for (var i = 0; i < chars.length; i++) {
      var character = chars[i]
      copy = copy.replace(character, "");
    };
    console.log(copy);
    return copy;
  };

  this.generate = function(length, options) {
  	var candidates = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz.,-/#!$%^&*;:{}=-_`~()]";
    if (options) {
      if (options.noCapitals) {
        candidates = candidates.replace("ABCDEFGHIJKLMNOPQRSTUVWXTZ", "");
      }
      if (options.noNumbers) {
        candidates = candidates.replace("0123456789", "");
      }
      if (options.noPunctuation) {
        candidates = candidates.replace(".,-/#!$%^&*;:{}=-_`~()]", "");
      }
      if (options.noVowels) {
        candidates = candidates.removeChars("aeiouAEIOU");
      }
      if (options.noAmbiguous) {
        candidates = candidates.removeChars("B8G6I1l0OQDS5Z2");
      }
    }
    return util.randomString(length || 5, candidates);
  }
}

module.exports = new PasswordGenerator();