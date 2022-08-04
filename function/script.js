// a. Print odd numbers in an array
let arr = [2, 3, 6, 7, 8];
function oddNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 !== 0) {
      console.log(input[i]);
    }
  }
}
oddNumbers(arr);

// b. Convert all the strings to title caps in a string array
let content = ["cat", "rat", "rabit", "lion"];
function titleCase(str) {
  return (str = str.map(function (e) {
    return e.toUpperCase();
  }));
}
const result1 = titleCase(content);
// const result1 = content.map(e => (e.toUpperCase()));
console.log(result1);

// c. Sum of all numbers in an array
let numArray = [1, 4, 6, 3, 8];
let sum = numArray.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
console.log(sum);

// d. Return all the prime numbers in an array
let array = [3, 12, 50, 23, 0];
array.forEach(function (element) {
  const isPrime = element;
  if (isPrime) {
    console.log(`${element} is a prime number`);
  } else {
    console.log(`${element} is NOT a prime number`);
  }
});

// e. Return all the palindromes in an array
let words = ["ramar", "raj", "lol"];
function checkPalindrom(str) {
  return str == str.split("").reverse().join("");
}
const result = words.filter(function (e) {
  return checkPalindrom(e);
});
console.log(result);

// f. Return median of two sorted arrays of the same size
function findMedian(nums1, nums2) {
  function compare(i, j) {
    return i - j;
  }
  let arr = nums1.concat(nums2).sort(compare);
  if (arr.length % 2 == 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
  return arr[Math.floor(arr.length / 2)];
}

let medianValue = findMedian([1, 2, 3], [4, 5, 6]);
console.log(medianValue);

// g. Remove duplicates from an array
let numArr = [2, 4, 6, 4, 6];
let uniqueNum = [];
numArr.forEach(function (num) {
  if (!uniqueNum.includes(num)) {
    uniqueNum.push(num);
  }
});
console.log(uniqueNum);

// h. Rotate an array by k times
let nums = [1, 2, 3, 4, 5];
function rotatedArr(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
}

let rotateArray1 = rotatedArr(nums, 1);
console.log(rotateArray1);
