var isCyclical = require( './../index.js' );

console.assert( isCyclical( [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ], 1 ) );

console.assert( isCyclical( [ 1, 2, 1, 2, 1, 2 ], 1 ) );

console.assert( isCyclical( [ 'a', 'b', 'c', 'a', 'b', 'c' ], 'a' ) );

console.assert( isCyclical( [ 1, 2, 3, 4, 1, 2, 3, 4 ].map( function ( c ) {
    return [ c ];
} ), [ 1 ] ) );
console.assert( isCyclical( [ {
    a: "ok"
}, {
    d: "no"
}, {
    a: "ok"
}, {
    d: "no"
} ], {
    a: "ok"
} ) );

console.assert( !isCyclical( [ 1, 2, 3, 1, 2, 3 ], 2 ) );
console.assert( !isCyclical( [ 1, 2, 3, 4, 1, 2, 3 ], 4 ) );
console.assert( isCyclical( [ 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3 ], 4 ) );
isCyclical.deepEquality = true;
console.assert( isCyclical( [ 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3 ].map( function ( a ) {
    return [ a ];
} ), [ 4 ] ) );
isCyclical.deepEquality = false
console.assert( !isCyclical( [ 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3 ].map( function ( a ) {
    return [ a ];
} ), [ 4 ] ) );
