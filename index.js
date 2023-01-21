function generateJWTsecret() {
  var key = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 16; i++) {
    key += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return key;
}

module.exports = generateJWTsecret;
