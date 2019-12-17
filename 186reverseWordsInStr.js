var reverseWords = function(s) {
    if(s === '' || s.length === 0) return s;
    
    let i = 0;
    
     // Firstly reverse the whole string
    reverse(s, 0, s.length-1);
    
    // Then reverse each word
    for(let j = 0; j < s.length; j++) {
        if(i === s.length || s[j] === ' ') {
            reverse(s, i, j - 1);
            i = j + 1;
        }
    }
    reverse(s, i, s.length-1);
 

    
    return s;
};

// Reverse each char from start to end
const reverse = (s, i, j) => {
    while(i<j){
        let temp = s[i];
        s[i]=s[j];
        s[j]=temp;
        i++;
        j--;
    }
}

let str = "I Love You";
let arr = str.split('');
console.log(reverseWords(arr));

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]