/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];//to store final filtered values
    //loop through each element in array
for(let i = 0; i < arr.length; i++){
    //call the function with element and index
    if(fn(arr[i],i)){
        // if the function returns true value add to result
        result.push(arr[i]);
    }
}
//return the filtered array
return result;
};