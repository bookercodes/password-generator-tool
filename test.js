var PasswordGenerator = require('./');

exports.passwordLength = function(test){
  test.expect(1);
  var password = PasswordGenerator.generate();
  test.equal(password.length, 12);
  test.done();
};

exports.passwordLength2 = function(test){
  test.expect(1);
  var options = {
    length: 3
  }
  var password = PasswordGenerator.generate(options);
  test.equal(password.length, options.length);
  test.done();
};

exports.excludeCapitals = function (test) {
  test.expect(1);
  var options = {
    noCapitals: true
  }
  var password = PasswordGenerator.generate(options);
  test.ok(/^[^A-Z]*$/.test(password))
  test.done();
}

exports.excludeNumbers = function (test) {
  test.expect(1);
  var options = {
    noNumbers: true
  }
  var password = PasswordGenerator.generate(options);
  test.ok(/^[^0-9]*$/.test(password))
  test.done();
}

exports.excludeCapitalsAndNumbers = function (test) {
  test.expect(1);
  var options = {
    noCapitals: true,
    noNumbers: true
  }
  var password = PasswordGenerator.generate(options);
  test.ok(/^[^A-Z0-9]*$/.test(password))
  test.done()
;}

exports.excludeCapitalsAndNumbers = function (test) {
  test.expect(1);
  var options = {
    noCapitals: true,
    noNumbers: true
  }
  var password = PasswordGenerator.generate(options);
  test.ok(/^[^A-Z0-9]*$/.test(password))
  test.done();
}

exports.noPunctuation = function (test) {
  test.expect(1);
  var options = {
    noPunctuation: true,
  }
  var password = PasswordGenerator.generate(options);
  test.ok(/^[^\.,-\/#!$%\^&\*;:{}=\-_`~()]*$/.test(password))
  test.done();
}

exports.noVowels = function (test) {
  test.expect(1);
  var options = {
    noVowels: true,
  }
  var password = PasswordGenerator.generate(options);
  test.ok(/^[^aeiouAEIOU]*$/.test(password))
  test.done();
}


exports.noAmbiguous = function (test) {
  test.expect(1);
  var options = {
    noAmbiguous: true,
  }
  var password = PasswordGenerator.generate(options);
  test.ok(/^[^B8G6I1l0OQDS5Z2]*$/.test(password))
  test.done();
}
