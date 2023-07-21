// leetcode easy

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// Solution

// Define the function 'filter' that takes an array and a function as parameters
var filter = function(arr, fn) {
    // Initialize an empty array to hold the values that pass the filter
    var filteredArr = [];

    // Iterate over the input array
    for (var i = 0; i < arr.length; i++) {
        // Use the provided function 'fn' to test the current array item and its index
        // If 'fn' returns a truthy value, add the current item to 'filteredArr'
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    // Return the array of items that passed the filter
    return filteredArr;
};

  