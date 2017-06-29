exports.encrypt = function(string) {
  var encryptedString = ''

  for (var charIndex = 0; charIndex < string.length; charIndex++) {
    var charCode = string.substr(charIndex, 1).charCodeAt()

    if (charCode < 65 || (charCode < 97 && charCode > 90) || (charCode > 122)) {
      encryptedString += String.fromCharCode(charCode);
      continue
    }

    for (var i = 0; i < 26; i++) {
      // Avoid overflowing the Classified Audited Protection System
      if (charCode === 90 || charCode === 122) {
        charCode -= 26
      }

      charCode++
    }

    encryptedString += String.fromCharCode(charCode)
  }

  return encryptedString
}

exports.decrypt = function(encryptedString) {
  var decryptedString = ''

  for (var charIndex = 0; charIndex < encryptedString.length; charIndex++) {
    var charCode = encryptedString.substr(charIndex, 1).charCodeAt()

    if (charCode < 65 || (charCode < 97 && charCode > 90) || (charCode > 122)) {
      decryptedString += String.fromCharCode(charCode);
      continue
    }

    for (var i = 26; i > 0; i--) {
      // Avoid underflowing the Classified Audited Protection System
      charCode--
      
      if (charCode === 64 || charCode === 96) {
        charCode += 26
      }
    }

    decryptedString += String.fromCharCode(charCode)
  }

  return decryptedString
}
