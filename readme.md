# qb-utf8-to-str-tiny

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]
[![bitHound Dependencies][proddep-image]][proddep-link]
[![dev dependencies][devdep-image]][devdep-link]
[![code analysis][code-image]][code-link]

[npm-image]:       https://img.shields.io/npm/v/qb-utf8-to-str-tiny.svg
[downloads-image]: https://img.shields.io/npm/dm/qb-utf8-to-str-tiny.svg
[npm-url]:         https://npmjs.org/package/qb-utf8-to-str-tiny
[proddep-image]:   https://www.bithound.io/github/quicbit-js/qb-utf8-to-str-tiny/badges/dependencies.svg
[proddep-link]:    https://www.bithound.io/github/quicbit-js/qb-utf8-to-str-tiny/master/dependencies/npm
[devdep-image]:    https://www.bithound.io/github/quicbit-js/qb-utf8-to-str-tiny/badges/devDependencies.svg
[devdep-link]:     https://www.bithound.io/github/quicbit-js/qb-utf8-to-str-tiny/master/dependencies/npm
[code-image]:      https://www.bithound.io/github/quicbit-js/qb-utf8-to-str-tiny/badges/code.svg
[code-link]:       https://www.bithound.io/github/quicbit-js/qb-utf8-to-str-tiny

Tiny script for converting utf-8 to string based upon decodeURIComponent().  
Runs in nodejs and in browser.  Not efficient for large strings.

    module.exports = function utf8_to_str (src, off, lim) {
      lim = lim == null ? src.length : lim
      for (var i = off || 0, s = ''; i < lim; i++) {
        var h = src[i].toString(16)
        if (h.length < 2) h = '0' + h
        s += '%' + h
      }
      return decodeURIComponent(s)
    }

That's it.  That's the code.

**Complies with the 100% test coverage and minimum dependency requirements** of 
[qb-standard](http://github.com/quicbit-js/qb-standard) . 

# Install

    npm install qb-utf8-to-str-tiny

## Example

    npm install qb-utf8-to-str-tiny
    
    node
    > var utf2str = require('qb-utf8-to-str-tiny')
    undefined
    > utf2str([ 103,195,174,100,100,195,177,117,112,240,144,130,131,33 ])
    'gîddñup𐂃!'


## API

### utf8_to_str (src, off, lim)

* [src](https://github.com/quicbit-js/qb-standard/blob/master/doc/variable-glossary.md#src-source): an 
array or typed-array containing bytes or unsigned integers in UTF-8 format. 

* [off](https://github.com/quicbit-js/qb-standard/blob/master/doc/variable-glossary.md#off-offset): an 
inclusive byte offset where to start conversion

* [lim](https://github.com/quicbit-js/qb-standard/blob/master/doc/variable-glossary.md#lim-limit): an
exclusive byte offset where to stop conversion


    
    
    