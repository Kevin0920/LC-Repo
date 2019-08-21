var letterCombinations = function(digits) {
  if (digits === '') return [];
  const digit_map = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
  };
  
  let result = [''], tmp_arr = [];
  
  for(let i = 0; i < digits.length; i++) {
      // '2' '3' fetch each 
      let num = digits.charAt(i);
      for(let ch of digit_map[num]) {
          for(let line of result) {
              console.log('line=> ', typeof(line));
              tmp_arr.push(line);
              console.log(tmp_arr);
          }
      }
      result = tmp_arr;
      tmp_arr = [];
    //   console.log('11111 ', result);
  }
  
  return result;
};





console.log(letterCombinations("23"));

/*

    2 - a, b, c
    3 - d, e, f

    ab, ac, de, ef - wrong

    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

    对应的数字组合，对应 2 的字母都在组合的左边 3 的都在右边 
    
    思路：
    '23'

    需要一位一位的去读输入的数字，比如先读2，然后再3

    round 1 - read '2'
        possible output: tmp_list = ['a', 'b', 'c'] => 变成当前的result
        for loop 这个 list 把 a, b, c 分别 fetch出来做匹配 ad ae af。。。。。。so on 
        result = tmp_list
    round 2 - read '3'
        possible fetch ch: ['d', 'e', 'f'] => 要在这个list里面做循环，然后去匹配
        result + fetch ch match => output

*/