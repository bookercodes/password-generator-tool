var util = require("./utility");

var PasswordGenerator = function() { 
  this.generate = function(length, options) {
  	var candidates = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  	if (options && options.noCapitals) {
		  candidates = "0123456789abcdefghiklmnopqrstuvwxyz";
  	}
    return util.randomString(length || 5, candidates);
  }
}

module.exports = new PasswordGenerator();