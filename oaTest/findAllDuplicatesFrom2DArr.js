const findDuplicates = arr => {
    if (arr === null || arr.length === 0) return [];

    let firstPart = arr[0],
        map = {},
        rows = arr.length,
        cols = arr[0].length,
        result = [];

    for (let i = 0; i < firstPart.length; i++) {
        let val = firstPart[i];
        if (!map[val]) {
            map[val] = 1;
        }
    }


    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            console.log(cols[j])
            let val = arr[i][j];
            if (map[val]) {
                map[val]++;
            }
        }
    }
    // console.log(map)
    for (let key in map) {
        if (map[key] === arr.length) {
            result.push(parseInt(key));
        }
    }

    return result;
}




console.log(findDuplicates([
    [1, 3, 4, 8, 9, 16, 32, 40],
    [0, 1, 6, 7, 8, 12, 40, 62]
]))