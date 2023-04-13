/* 
Minimal implementation of binary search algorithm. Binary search algorithm can only work for sorted arrays.

Binary search algorithm also called half-interval algorithm is better than linear search algorithm.

Binary search algorithm finds the index of a target value in the given array. It starts finding from middle of the array unlike the linear search technique which start from first element.
*/

/* 
Problem Statement: Find the target in a given array. 
*/

// Step 1: Define a function called findTarget();
// Step 2: Set the start = 0; end = total length of the array
// Step 3: To find the middle index of the array, (start + end) /2. Ignore the fractional part.
// Step 4: Run a while loop until the start index <= end index
// Step 5: Check if target = middle value of the array, if so return true else continue to the next step.
// Step 6: Check if target > middle value of the array, search in the right half (set the start = middle + 1) else if target < middle value of the array search in left half (set the end = middle -1)

// Step 5: Repeat  the process until you get a targeted value. If so return the true or false

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (target === arr[middle]) {
      return true;
    }
    if (target > arr[middle]) {
      start = middle + 1;
    }
    if (target < arr[middle]) {
      end = middle - 1;
    }
  }
  return false;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); // Should return true
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11); // Should return false
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0); // Should return false
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9); // Should return true
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); // Should return true
