const removeDuplicates = arr => {
    if (arr === null || arr.length === 0) {
        return [];
    }
    
    let slow = 1,
        result = [];
    for (let fast = 1; fast < arr.length; fast++) {
        if (arr[fast] !== arr[fast - 1]) {
            arr[slow] = arr[fast];
            slow++;
        }       
    }

    for (let i = slow; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
   
}



console.log(removeDuplicates(
    // [1, 3, 4, 8, 9, 16, 32, 40],
    // [0, 1, 6, 7, 8, 12, 40, 62]
    [0, 1, 2, 2, 3, 4, 4],
    // [2, 3, 5, 6, 7, 8, 8]
));
