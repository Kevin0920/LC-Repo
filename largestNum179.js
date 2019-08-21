var largestNumber = function(nums) {
    var n = nums.length;
    if (n === 0) {
        return "";
    }
    nums.sort(function(a, b) { return (a + "" + b) - (b + "" + a); });
    if (nums[n - 1] === 0) {
        return "0";
    }
    var output = "";
    for (var i = n - 1; i >= 0; i--) {
        output += nums[i];
    }
    return output;
};