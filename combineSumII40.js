/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [],
        cur = [];
    if (candidates === null || candidates.length === 0) return result;

    candidates = candidates.sort((a, b) => a - b);

    dfs(candidates, target, result, cur, 0);

    return result;
};

const dfs = (candidates, target, result, cur, start) => {

    if (target === 0) {
        result.push(cur.slice());
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        if (candidates[i] > target) break;
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        cur.push(candidates[i]);
        dfs(candidates, target - candidates[i], result, cur, i + 1);
        cur.pop()
    }

}