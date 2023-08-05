// leetcode easy

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.


function removeDuplicates(nums) {
    // Check if the array is empty; if so, return 0 as there are no elements to process
    if (nums.length === 0) {
        return 0;
    }
    
    // Initialize a variable k to keep track of the count of unique elements.
    // Since the first element is always unique, we start with k = 1
    let k = 1;

    // Iterate through the array starting from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // If the current element is not equal to the previous one,
        // it means that it's a new unique element
        if (nums[i] !== nums[i - 1]) {
            // Assign the current element to the k-th position in the array
            // This step overwrites any duplicate values with new unique values
            nums[k] = nums[i];

            // Increment k by 1 to reflect the increased count of unique elements
            k++;
        }
        // If the current element is the same as the previous one, we simply ignore it
        // and move to the next iteration
    }

    // Return the total number of unique elements found in the array
    // The array has now been modified in-place to contain the first k unique elements
    return k;
}
