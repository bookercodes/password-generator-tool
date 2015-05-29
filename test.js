var PasswordGenerator = require('./');

exports.passwordLength = function(test){
  test.expect(1);
  var password = PasswordGenerator.generate();
  test.equal(password.length, 5);
  test.done();
};

exports.passwordLength2 = function(test){
  test.expect(1);
  var expected = 3;
  var password = PasswordGenerator.generate(expected);
  test.equal(password.length, expected);
  test.done();
};

exports.containsOnlyLettersAndNumbersByDefault = function(test){
  test.expect(1);
  var password = PasswordGenerator.generate();
  test.ok(/^[a-zA-Z0-9]*$/.test(password))
  test.done();
};

exports.excludeCapitals = function (test) {
  test.expect(1);
  var options = {
    noCapitals: true
  }
  var password = PasswordGenerator.generate(12, options);
  test.ok(/^[^A-Z]*$/.test(password))
  test.done();
}

exports.excludeNumbers = function (test) {
  test.expect(1);
  var options = {
    noNumbers: true
  }
  var password = PasswordGenerator.generate(12, options);
  test.ok(/^[^0-9]*$/.test(password))
  test.done();
}

exports.containsA