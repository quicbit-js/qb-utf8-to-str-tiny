require('test-kit').tape()('utf8_to_str', function(t) {
    t.tableAssert(
        [
            [ 'a',                                   'exp'                    ],
            [ [0x61],                                'a'                      ],
            [ [0x61,0x62,0x63,0xF0,0x90,0x90,0x80],  'abc\uD801\uDC00'        ],
            [ [ 34,97,98,99,34,37 ],                 '"abc"%'                 ],
            [ [ 34,97,98,99,34,37,10 ],              '"abc"%\n'                 ],
        ],
        require('.')
    )
})
