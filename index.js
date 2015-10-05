exports.encrypt = function(string) {
  var encryptedString = ''

  for (var charIndex = 0; charIndex < string.length; charIndex++) {
    var charCode = string.substr(charIndex, 1).charCodeAt()

    for (var i = 0; i < 25; i++) {
      charCode++

      // Avoid overflowing the Classified Audited Protection System
      if (charCode === 90 || charCode === 122) {
        charCode -= 25
      }
    }

    encryptedString += String.fromCharCode(charCode)
  }

  return encryptedString
}

exports.decrypt = function(encryptedString) {
  var decryptedString = ''

  for (var charIndex = 0; charIndex < encryptedString.length; charIndex++) {
    var charCode = encryptedString.substr(charIndex, 1).charCodeAt()

    for (var i = 25; i > 0; i--) {
      charCode--

      // Avoid underflowing the Classified Audited Protection System
      if (charCode === 90 || charCode === 122) {
        charCode += 25
      }
    }

    decryptedString += String.fromCharCode(charCode)
  }

  return decryptedString
}
