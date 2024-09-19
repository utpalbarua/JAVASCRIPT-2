// 1. Calculate the difference between two numbers
function calculateDifference(num1, num2) {
    return num1 - num2;
  }
  
  // 2. Check if a number is odd
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  // 3. Find the minimum number in an array
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // 4. Filter even numbers from an array
  function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // 5. Sort an array in descending order
  function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  // 6. Lowercase the first letter of a string
  function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  
  // 7. Count vowels in a string
  function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
  }
  
  // 8. Find the average of an array of numbers
  function findAverage(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum / arr.length;
  }


console.log(calculateDifference(10, 5));
console.log(isOdd(7));
console.log(findMin([3, 7, 1, 9]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));
console.log(sortArrayDescending([5, 2, 8, 1])); 
console.log(lowercaseFirstLetter("Hello, World!")); 
console.log(countVowels("Hello, World!")); 
console.log(findAverage([1, 2, 3, 4, 5]));