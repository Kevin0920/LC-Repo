var largeGroupPositions = function(S) {
    let len = S.length;

    while (len < 3) {
        return [];
    }

    let current,
        i = 0,
        result = [];
    while (i < len - 1) {
        let count = 0,
            start = i,
            end = i;
        current = S.charAt(i);
        while (i < len && current === S.charAt(i)) {
            i++;
            count++;
        }

        if (count >= 3) {
            end = i - 1;
            result.push([start, end]);
            console.log(result)
        }
    }

    return result.length > 0 ? result : [];
};


var largeGroupPositions = function(S) {
    let result = [],
        cnt = 1;
    for (var i = 1; i < S.length; ++i) {
        if (S.charAt(i) === S.charAt(i - 1)) {
            ++cnt;
        } else { // 在不相等的情况下，但是 "abbxxxxzzy"， 中间有连续性重复 长度超 3 的字符串 'xxxx'，需要截取放入 result 然后恢复cnt,重新搜索
            if (cnt >= 3) {
                result.push([i - cnt, i - 1]);
            }
            cnt = 1;
        }
    }
    if (cnt >= 3) {
        result.push([i - cnt, i - 1]); // 要注意 i 在 for loop中要 declare as var 才能 access 这里，用 let scope problem can't access
    }
    return result;

};