var util = require("./utility");

var PasswordGenerator = function() { 
  this.generate = function(length, options) {
  	var candidates = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    if (options) {
      if (options.noCapitals) {
        candidates = "0123456789abcdefghiklmnopqrstuvwxyz";
      }
      if (options.noNumbers) {
        candidates = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      }
    }
    return util.randomString(length || 5, candidates);
  }
}

module.exports = new PasswordGenerator();