var permute = function(nums) {
    if (nums === null || nums.length === 0) return [
        []
    ];
    if (nums < 1) return [nums];

    let result = [],
        cur = [],
        used = [];

    helper(nums, cur, result, used);


    return result;
};

const helper = (nums, cur, result, used) => {

    // 这个递归停止，就是当前数组的 size === nums.length。 就是3等于3，这时候停止把随机的数组，放入result。成为其中的例子结果
    if (cur.length === nums.length) {
        result.push(cur.slice(0));
        return;
    }

    // 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // current val not being used or in cur array then
        if (!used[i]) {

            // assgin each index to true because loop over already, then push to cur array
            used[i] = true;
            // until cur length === nums length match, then we stop slice the whole cur array push to result array, restart over the recursion, by clear up the cur array and reset used[i] to false then recursion be able to start again.
            cur.push(nums[i]);
            helper(nums, cur, result, used);
            used[i] = false;
            cur.pop();
        }
    }

}


// time complex  o(n * n), space o(n)

console.log(permute([1, 2, 3]));