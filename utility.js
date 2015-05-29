exports.randomString = function(stringLength, chars){
  stringLength = stringLength || 12;
  var result = '';
  for (var i=0; i<stringLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    result += chars.substring(rnum,rnum+1);
  }
  return result;

};