# qb-utf8-to-str-tiny

Tiny browser script for converting utf-8 to string based upon decodeURIComponent().  
Not efficient for very large strings.

    module.exports = function utf8_to_str(a) {
        for(var i=0, s=''; i<a.length; i++) {
            var h = a[i].toString(16)
            if(h.length < 2) h = '0' + h
            s += '%' + h
        }
        return decodeURIComponent(s)
    }

That's it.  That's the code.