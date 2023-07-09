//  leet code - easy

// Given an array arr and a function fn, return a sorted array sortedArr. 
// You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.

// Constraints:

// arr is a valid JSON array
// fn is a function that returns a number
// 1 <= arr.length <= 5 * 105


//  solution

var sortBy = function(arr, fn) {
    const mapped = arr.map((el, i) => {
    return { index: i, value: fn(el) };
});

mapped.sort((a, b) => {
    return a.value - b.value;
});

return mapped.map(el => arr[el.index]);
};