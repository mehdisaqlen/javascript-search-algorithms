/* 
Minimal implementation of linear search algorithm. Linear search algorithm can work fine for both sorted or unsorted arrays.
*/

/* 
Problem Statement: Find the target in a given array. 
*/

// Step 1: Define a function called findTarget();
// Step 2: Iterate through an array by using for loop.
// Step 3: Inside the for loop compare the each value of the array with the target.

// Step 5: Keep doing the process until you get a targeted value. If so return the true or false

function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return true;
  }
  return false;
}

// findTarget([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); Should return false
// findTarget([20,50,40,30,10,8,9], 6); Should return false
// findTarget([20,50,40,30,10,8,9], 50); Should return true
// findTarget([20,50,40,30,10,8,9], 20); Should return true
