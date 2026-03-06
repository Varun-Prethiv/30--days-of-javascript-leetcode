var createCounter = function(init) {
    let value = init;

    function increment() {
        return ++value;
    }

    function decrement() {
        return --value;
    }

    function reset() {
        value = init;
        return value;
    }

    return {
        increment,
        decrement,
        reset
    };
};