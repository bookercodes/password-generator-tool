var util = require("./utility");

var PasswordGenerator = function() { 
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
        var vowels = "aeiouAEIOU";
        for (var i = 0; i < vowels.length; i++) {
          var vowel = vowels[i]
          candidates = candidates.replace(vowel, "");
        };
        console.log(candidates);
      }
    }
    return util.randomString(length || 5, candidates);
  }
}

module.exports = new PasswordGenerator();