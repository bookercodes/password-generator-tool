var util = require("./utility");

var PasswordGenerator = function() { 
  this.generate = function(length, options) {
  	var candidates = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    if (options) {
      if (options.noCapitals) {
        candidates = candidates.replace("ABCDEFGHIJKLMNOPQRSTUVWXTZ", "");
      }
      if (options.noNumbers) {
        candidates = candidates.replace("0123456789", "");
      }
    }
    return util.randomString(length || 5, candidates);
  }
}

module.exports = new PasswordGenerator();