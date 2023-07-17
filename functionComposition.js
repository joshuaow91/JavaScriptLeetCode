// Leetcode - easy

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.


// Solution

// The compose function accepts an array of functions as input
var compose = function(functions) {
	// It returns a new function that accepts a single argument, x
	return function(x) {
		// The result variable is used to store the result of applying each function in the array
        // Initialize it with the input to the composed function
        var result = x;

        // Iterate over the functions array in reverse order
        // This is because the last function in the array should be applied first, followed by the second-to-last, and so on
        for (var i = functions.length - 1; i >= 0; i--) {
            // At each step, apply the current function to the current result,
            // and update the result variable with the returned value
            result = functions[i](result);
        }

        // After applying all the functions, return the final result
        // This is the result of applying the composed function to the input x
        return result;
    }
};
