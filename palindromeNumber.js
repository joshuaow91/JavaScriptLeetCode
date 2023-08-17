// Given an integer x, return true if x is a palindrome, and false otherwise.


var isPalindrome = function(x) {
    let strX = x.toString();
    let reversedStrX = strX.split('').reverse().join('');
    return strX === reversedStrX;
};