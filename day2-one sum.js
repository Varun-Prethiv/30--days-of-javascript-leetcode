/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init) {
//     let value=init;
//     return{
//         increment:()=>++value,
//         decrement:()=>--value,
//         reset:()=>value=init
//     }
// };
var createCounter = function(init) {
    let value=init;
    function increment(){
        return ++init;
    }
    function decrement(){
        return --init;
    }
    function reset(){
        return init=value;
    }
    return {
        increment,
        decrement,
        reset
    } 
};
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */