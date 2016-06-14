var isCyclical = require( './../index.js' );
console.assert( isCyclical( [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ], 1 ) );
