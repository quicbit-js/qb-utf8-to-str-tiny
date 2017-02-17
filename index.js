// return the selection of UTF-8 encoded bytes as a javascript string.
module.exports = function utf8_to_str(a) {
    for(var i=0, s=''; i<a.length; i++) {
        var h = a[i].toString(16)
        if(h.length < 2) h = '0' + h
        s += '%' + h
    }
    return decodeURIComponent(s)
}
