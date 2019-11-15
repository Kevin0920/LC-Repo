// const removeDuplicates = (nums1, nums2) => {
//     if (nums1 === null || nums1.length === 0 || nums2 === null || nums2.length === 0) {
//         return [];
//     }
    
//    let map = {}, 
//    result = [],
//    newArr = nums1.concat(nums2);

//    for (let i = 0; i < newArr.length; i++) {
//        let val = newArr[i];
//        if (map[val] !== undefined) {
//            map[val]++;
//        }
//        else {
//            map[val] = 1;
//        }
//    }
//    for (const key in map) {
//        if (map[key] > 1) {
//         result.push(parseInt(key));
//        }
//    }

//    return result;
// }

const removeDuplicates = arr => {
    let res = [],
    len = arr.length;

    for(let i = 0; i < len; i++) {
        if(res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }

    return res;
}



console.log(removeDuplicates(
    [1,2,5,2,1,8]
    // [1, 3, 1, 4, 8, 9, 10, 10, 16, 32, 40, 50, 60],
    // [0, 1, 6, 7, 8, 12, 40, 62]
));
