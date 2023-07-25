// leetcode easy

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
// The returned promise should resolve with the sum of the two numbers.
 
// Solution

// Defines an async function named 'addTwoPromises' that accepts two promises as parameters.
var addTwoPromises = async function(promise1, promise2) {
    try {
        // The 'await' keyword pauses the function execution until the promise1 resolves, 
        // and then assigns the resolved value to 'value1'.
        const value1 = await promise1;
        
        // Similarly, the function execution pauses again until promise2 resolves, 
        // and then assigns the resolved value to 'value2'.
        const value2 = await promise2;
        
        // Returns a new Promise that immediately resolves with the sum of value1 and value2. 
        // This is the final result of the addTwoPromises function.
        return Promise.resolve(value1 + value2);
    } catch (error) {
        // If an error occurs while executing promise1 or promise2 (for example, if the Promise rejects), 
        // the execution moves to the catch block. The function then returns a new Promise that immediately rejects with the error.
        return Promise.reject(error);
    }
};
