require('test-kit').tape()('utf8_to_str', function(t) {
    t.tableAssert(
        [
            [ 'a',                                     'off',  'lim',    'exp'             ],
            [ [ ],                                     null,    null,    ''                ],
            [ [ 0x61 ],                                null,    null,    'a'               ],
            [ [ 0x61,0x62,0x63,0xF0,0x90,0x90,0x80 ],  null,    null,    'abc\uD801\uDC00' ],
            [ [ 34,97,98,99,34,37,10 ],                0,       7,       '"abc"%\n'        ],
            [ [ 34,97,98,99,34,37,10 ],                0,       6,       '"abc"%'          ],
            [ [ 34,97,98,99,34,37,10 ],                1,       5,       'abc"'            ],
            [ [ 34,97,98,99,34,37,10 ],                0,       0,       ''                ],
        ],
        require('.')
    )
})
