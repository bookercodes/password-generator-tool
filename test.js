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

exports.excludeCapitalsAndNumbers = function (test) {
  test.expect(1);
  var options = {
    noCapitals: true,
    noNumbers: true
  }
  var password = PasswordGenerator.generate(12, options);
  test.ok(/^[^A-Z0-9]*$/.test(password))
  test.done()
;}

exports.excludeCapitalsAndNumbers = function (test) {
  test.expect(1);
  var options = {
    noCapitals: true,
    noNumbers: true
  }
  var password = PasswordGenerator.generate(12, options);
  test.ok(/^[^A-Z0-9]*$/.test(password))
  test.done();
}

exports.noPunctuation = function (test) {
  test.expect(1);
  var options = {
    noPunctuation: true,
  }
  var password = PasswordGenerator.generate(12, options);
  test.ok(/^[^\.,-\/#!$%\^&\*;:{}=\-_`~()]*$/.test(password))
  test.done();
}

exports.noVowels = function (test) {
  test.expect(1);
  var options = {
    noVowels: true,
  }
  var password = PasswordGenerator.generate(12, options);
  test.ok(/^[^aeiouAEIOU]*$/.test(password))
  test.done();
}


exports.noAmbiguous = function (test) {
  test.expect(1);
  var options = {
    noAmbiguous: true,
  }
  var password = PasswordGenerator.generate(12, options);
  test.ok(/^[^B8G6I1l0OQDS5Z2]*$/.test(password))
  test.done();
}
