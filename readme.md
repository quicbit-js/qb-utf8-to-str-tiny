# qb-utf8-to-str-tiny

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]

[npm-image]:       https://img.shields.io/npm/v/qb-utf8-to-str-tiny.svg
[downloads-image]: https://img.shields.io/npm/dm/qb-utf8-to-str-tiny.svg
[npm-url]:         https://npmjs.org/package/qb-utf8-to-str-tiny

Tiny script for converting utf-8 to string based upon decodeURIComponent().  
Runs in nodejs and in browser.  Not efficient for large strings.

    module.exports = function utf8_to_str(src, off, lim) {
        lim = lim == null ? src.length : lim 
        for(var i=off || 0, s=''; i<lim; i++) {
            var h = src[i].toString(16)
            if(h.length < 2) h = '0' + h
            s += '%' + h
        }
        return decodeURIComponent(s)
    }

That's it.  That's the code.