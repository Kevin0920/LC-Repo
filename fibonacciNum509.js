/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let memo = {};

    return recursion(N, memo);
};

const recursion = (num, memo) => {

    if (num === 0) return 0;

    else if (num === 1) return 1;

    if (!memo[num]) {
        memo[num] = recursion(num - 1, memo) + recursion(num - 2, memo);
    }

    return memo[num];
}


function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}