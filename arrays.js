
/**
 * Demonstrates the usage of the Array.find() method.
 * Creates an array 'a' with numbers and finds the first occurrence of number 2.
 */
const a = [1, 2, 3, 2, 4];
const result = a.find((element) => element === 2);
console.log(result); // Output: 2

/**
 * Demonstrates the usage of the Array.filter() method.
 * Creates an array 'a' with numbers and filters all occurrences of number 2.
 */
const filteredResult = a.filter((element) => element === 2);
console.log(filteredResult); // Output: [2, 2]

/**
 * Demonstrates the usage of the Array.slice() method.
 * Creates an array 'a' with numbers and slices it from index 2 to 4.
 */
const slicedResult = a.slice(2, 4);
console.log(slicedResult); // Output: [3, 2]
console.log(a); // Output: [1, 2, 3, 2, 4]

/** * Demonstrates the usage of the Array.splice() method.
 * Creates an array 'a' with numbers and splices it from index 2, removing 2 elements.
 * Changes the original array.
 */
const splicedResult = a.splice(2, 2);
console.log(splicedResult); // Output: [3, 2]
console.log(a); // Output: [1, 2, 4]

/** * Demonstrates the usage of the Array.splice() method with addition.
 * Creates an array 'a' with numbers and splices it from index 1, removing 2 elements and adding 5, 6.
 * Changes the original array.
 */
const splicedAndAddedResult = a.splice(1, 2, 5, 6); // removes up to 3 elements from index 2 and adds 5, 6
console.log(splicedAndAddedResult); // Output: [2, 4]
console.log(a); // Output: [1, 5, 6] 

/** * Demonstrates the usage of the Array.reduce() method.
 * Creates an array 'a' with numbers and reduces it to a single value by summing all elements.
 */
const reducedResult = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sums all elements in the array
console.log(reducedResult); // Output: 12 (1 + 5 + 6)