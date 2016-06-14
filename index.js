var equal = require( 'deep-equal' );
var isCyclical = module.exports = function ( arr, query ) {
    var sameAsQueryToIndex = arr.map( ( c, i ) => {
        return i;
    } ).filter( c => {
        return equal( arr[ c ], query );
    } ).reverse();
    if ( sameAsQueryToIndex.length < 2 ) {
        return false;
    }
    var a = sameAsQueryToIndex[ 0 ],
        b = sameAsQueryToIndex[ 1 ],
        distance = a - b;
    var possiblyCyclical = arr.filter( ( c, i ) => {
            return i >= b;
        } ),
        cycleA = possiblyCyclical.filter( ( c, i ) => {
            return i < distance;
        } ),
        cycleB = possiblyCyclical.filter( ( c, i ) => {
            return i >= distance;
        } );
    if ( cycleA.length !== cycleB.length ) {
        cycleB.push( query );
    }
    return equal( cycleA, cycleB );
}
