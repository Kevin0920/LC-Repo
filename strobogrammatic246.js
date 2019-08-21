const isStrobogrammatic = num => {
    // 可以翻转的数字有这些
    let lookup = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    }

    let ln = num.length;

    //  ln + 1 / 2   其实我只要look up 一半就可以了 ‘69’. 只要看6翻转过来过是不是在lookup里面
    for (let i = 0; i < ln + 1 / 2; i++) {
        //  num[ln - 1 - i] 就是数字本身： ‘69’ 就是单独 ‘6’。num[i] !== lookup[num[ln - 1 - i]]    翻转后两个数字是不相等的
        if (!num[ln - 1 - i] in lookup || num[i] !== lookup[num[ln - 1 - i]]) {
            return false;
        }
        console.log(num[ln - 1 - i]);
    }
    return true;
}

console.log(isStrobogrammatic('69'));
console.log(isStrobogrammatic('88'));
// console.log(isStrobogrammatic('106'));

/*

a strobogrammatic number is a number that looks the same when rotated 180 degrees(looked at upside down)

write a function to determine if a number is strobogrammatic. the number is represented as a string.

思路：
    字符串需要时对称的，定义可以翻转的所有数字，存放在一个map里面。

Case:
    '69' => '69'
    '106' => '901' 180度翻转过来是不match的，return false

Input '69' 
Output true

Input '88'
Output true

Input '962'
Output false

*/