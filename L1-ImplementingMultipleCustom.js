// L1-ImplementingMultipleCustom.js
const array1 = [5, 8, 3, 10, 12, 7]
const array2 = [4, 9, 2, 11, 6]

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function sortAndConcat(arr1, arr2) {
    const sortedArr1 = arr1.slice().sort((a, b) => a - b)
    const sortedArr2 = arr2.slice().sort((a, b) => a - b)
    return sortedArr1.concat(sortedArr2)
}



const filteredArray1 = filterEvenNumbers(array1);
const filteredArray2 = filterEvenNumbers(array2);

console.log("Filtered Even Numbers (Array 1):", filteredArray1);
console.log("Filtered Even Numbers (Array 2):", filteredArray2);

const sum1 = sumOfArray(array1);
const sum2 = sumOfArray(array2);
console.log("Sum of Array 1:", sum1);
console.log("Sum of Array 2:", sum2);

const sortedAndConcatenated = sortAndConcat(array1, array2);
console.log("Sorted and Concatenated Array:", sortedAndConcatenated);
