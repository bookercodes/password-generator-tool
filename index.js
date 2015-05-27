var util = require("./utility");

var PasswordGenerator = function() { 
  this.generate = function(length) {
    return util.randomString(length || 5);
  }
}

module.exports = new PasswordGenerator();