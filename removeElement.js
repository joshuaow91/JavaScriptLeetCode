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

// Solution

var removeElement = function(nums, val) {
    // Initialize count to 0. This count is the number of elements which are not equal to val
    var count = 0;
    
    // Iterate over the array
    for (var i = 0; i < nums.length; i++) {
        // If the current element is not equal to val
        if (nums[i] !== val) {
            // Move this element to the start of the array, at position 'count'
            // This effectively overwrites any instances of 'val' that we've seen so far
            nums[count] = nums[i];
            // Increment count
            count++;
        }
    }
    // The first 'count' elements of the array now do not contain 'val'
    // and 'count' is the new length of the array
    return count;
};
