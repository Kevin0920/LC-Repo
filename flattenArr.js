const flattenArr = arr => {
    let result = [];


    const helper = arr => {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (Array.isArray(element)) {
                helper(element);
            } else {
                result.push(element);
            }
        }
    }

    helper(arr);
    return result;
}

console.log(flattenArr([
    [1, 2], 3, [4, 5]
]))