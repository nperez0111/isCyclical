# isCyclical
Returns true if an array will continue to be cyclical if a value is pushed onto it.

# Demo
````
isCyclical([1,2,3,1,2,3],1)
//returns true
````
if the array were [1,2,3,1,2,3] and the value added were 2 that would break the cycle therefore return false