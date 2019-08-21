var combinationSum = function(candidates, target) {
    let result = [],
        cur = [];
    if (candidates === null || candidates.length === 0) return reesult;

    candidates = candidates.sort((a, b) => a - b);

    dfs(candidates, target, cur, result, 0)

    return result;
};

const dfs = (candidates, target, cur, result, start) => {
    if (target === 0) {
        result.push(cur.slice());
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        // current val greater than target, no valid 
        if (candidates[i] > target) break;
        cur.push(candidates[i]);
        dfs(candidates, target - candidates[i], cur, result, i);
        cur.pop();
    }

}


console.log(combinationSum([2, 3, 6, 7], 7));

/*

    [0,1,2] ,2  => [0, 1], [0, 2], [1, 2], [0, 0], [1, 1], [2, 2]

    方法: 深度优先搜索法
    解题思路:

    假设我们的数据为:
    nums = [2,3,6,7], target = 7

    由于允许存在重复的元素, 所以在执行深度搜索时候, 需要保持数组不被改变; 只能改变索引.
    问题可转变为以下几种情况:

    [2] + ([2,3,6,7] + 5)
    [3] + ([2,3,6,7] + 4)
    [6] + ([2,3,6,7] + 1)
    [7] + ([2,3,6,7] + 0)
    不断的递归下去, 终止条件是: remain <= 0;
    代码:


*/