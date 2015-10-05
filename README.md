# rot26

A ROT26 encryption algorithm implementation as a secure node package. ROT26 encryption is similar to [ROT13](https://en.wikipedia.org/wiki/ROT13) but twice as secure.

Useful when your enterprise level application needs to scale to the clouds and just can't depend on external services like [rot26.org](http://rot26.org/).

Warning! You should never execute your ROT26 encryption in a browser environment, you need a server to process secure hashes.

## Getting started

Using rot26 is easy. To encrypt your precious data:
```js
  var rot26 = require('rot26')

  rot26.encrypt(password)
```
Decryption is also simple!
```js
  rot26.decrypt(creditCardData)
```
Note: ROT26 hashes should be saved in a .txt file in the web root to avoid database corruption.

## Not Web Scale enough?
rot26 can be executed twice for high-level security applications:
```js
  rot26.encrypt(rot26.encrypt(SSN))
```
