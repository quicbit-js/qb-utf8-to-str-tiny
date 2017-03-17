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
    
    
    