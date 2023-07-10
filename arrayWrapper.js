//  leet code - easy

// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

// Solution

var ArrayWrapper = function(nums) {

    this.nums = Array.isArray(nums) ? nums : [];
    this.valueOf = function() {
        return this.nums.reduce((acc, val) => acc + val, 0);
    };
    this.toString = function() {
        return `[${this.nums.join(',')}]`;
    };
};


// Declare a new variable called ArrayWrapper which is a constructor function.
// This function takes an argument called nums.
var ArrayWrapper = function(nums) {

    // The 'this' keyword inside the function refers to the new object being created.
    // We are setting a property on this new object called 'nums'.
    // We first check if the nums argument passed in is actually an array.
    // If it is, we assign this array to 'this.nums', otherwise we assign an empty array.
    this.nums = Array.isArray(nums) ? nums : [];

    // Next, we add a valueOf method to our object. This is a built-in method that JavaScript uses
    // when it needs to convert an object to a primitive value. In our case, we want it to return
    // the sum of all the numbers in our array.
    this.valueOf = function() {
        // We use the Array.prototype.reduce method to sum all the numbers.
        // reduce takes a callback function that is called for each element in the array.
        // This callback takes two arguments: the current accumulated value (acc) and the current value (val).
        // We start with an initial accumulated value of 0 and for each value in the array we add it to the accumulator.
        return this.nums.reduce((acc, val) => acc + val, 0);
    };

    // We also add a toString method to our object. This is another built-in method that JavaScript uses
    // when it needs to convert an object to a string. In our case, we want it to return a string representation
    // of our array.
    this.toString = function() {
        // We use the Array.prototype.join method to convert our array to a string.
        // join concatenates all the elements of the array using the provided string (',') as a separator.
        // We then use string literal syntax to add brackets around our string.
        return `[${this.nums.join(',')}]`;
    };
};


