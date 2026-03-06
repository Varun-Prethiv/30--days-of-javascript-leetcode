/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val) {

    // checks if values are equal
    function toBe(n){
        if(val === n){
            return true;
        } else {
            throw new Error("Not Equal");
        }
    }

    // checks if values are not equal
    function notToBe(n){
        if(val !== n){
            return true;
        } else {
            throw new Error("Equal");
        }
    }

    return {
        toBe,
        notToBe
    }
};