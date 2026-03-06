var createCounter = function(init) {
    let value = init; // store the current counter value

    function increment() {
        return ++value; // increase the value by 1
    }

    function decrement() {
        return --value; // decrease the value by 1
    }

    function reset() {
        value = init;   // reset value to the initial number
        return value;
    }

    return {
        increment,
        decrement,
        reset
    };
};