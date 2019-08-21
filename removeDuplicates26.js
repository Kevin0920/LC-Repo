const removeDuplicate = nums => {
/* 
    [0,0,1,1,1,2,2,3,3,4]
         c
       i     
*/

    let count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] !== nums[i]) {
            nums[count] = nums[i];
            count++;
      }  
    }

    return count;
}

console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))