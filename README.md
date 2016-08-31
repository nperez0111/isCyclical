isCyclical [![Build Status](https://travis-ci.org/nperez0111/isCyclical.svg?branch=master)](https://travis-ci.org/nperez0111/isCyclical)
==========

Returns true if an array will continue to be cyclical if the value supplied is pushed onto it.

# Install

`npm install is-cyclical --save`

# Demo
````JS
var isCyclical = require('is-cyclical');

isCyclical( [ 1, 2, 3, 1, 2, 3 ], 1 )
//Returns true

//While

isCyclical( [ 1,2,3,4,1,2 ], 2)
//returns false because appending it to the array would break the cycle
````
If the array were [1,2,3,1,2,3] and the value added were 2 that would break the cycle therefore return false

## Deep Equality
`isCyclical.deepEquality` is initially set to true can be set to false to use an `==` test rather than a deep equality test

## Use Case

I made a game playing AI, in order for the AI to not fall into a loop of making the same moves I made this library so I know the next move will be different than the ones prior(No matter how long of a cycle of moves). 
