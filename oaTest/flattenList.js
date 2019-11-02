const falttenList = arr => {
    let result = [];
    if (arr === null || arr.length === 0) {
        return result;
    }

    const helper = arr => {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (Array.isArray(element)) {
                helper(element);
            }
            else {
                result.push(element);
            }
        }
    }

    helper(arr);
    return result;
}

console.log(falttenList([[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []]));


