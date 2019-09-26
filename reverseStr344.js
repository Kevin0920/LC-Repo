/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 
    在陣列內直接將頭尾元素交換，接著交換第二個元素與倒數第二個元素，這樣的做法只要跑一半的迴圈就可以，速度上會快很多。
    下面範例因為切成array來做，所以實際上速度會比較慢。
    未交換前 ['h','e','l','l','o']
    第1次交換 ['h','e','l','l','o'] o,h互換 ['o','e','l','l','h']
    第2次交換 ['o','e','l','l','h'] e,l互換 ['o','l','l','e','h']
 */
var reverseString = function(s) {

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        let a = s[i],
            b = s[j];
        s[i] = b;
        s[j] = a;
    }

    return s;
};