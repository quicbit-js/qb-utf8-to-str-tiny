module.exports = function utf8_to_str(a, off, lim) {
    lim = lim == null ? a.length : lim
    for(var i=off || 0, s=''; i<lim; i++) {
        var h = a[i].toString(16)
        if(h.length < 2) h = '0' + h
        s += '%' + h
    }
    return decodeURIComponent(s)
}
