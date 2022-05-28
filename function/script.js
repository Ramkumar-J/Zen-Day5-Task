// a.Print odd numbers in an array
let arr=[2,3,6,7,8];
function oddNumbers(input)
{
   for(let i=0;i<input.length;i++)
   {
       if(input[i] % 2 !== 0)
       {
        console.log(input[i]);
       }
   }
}
oddNumbers(arr);

// Convert all the strings to title caps in a string array
let content=["cat","rat","rabit","lion"]
function titleCase(str) {
  return str=str.toLowerCase().split(' ');
}
const result1 = content.map(e => checkPalindrom(e.charAt(0).toUpperCase() + e.slice(1)));
console.log(result1);

// c. Sum of all numbers in an array
let numArray=[1,4,6,3,8];
let sum=numArray.reduce(function(previousValue,currentValue)
{
    return (previousValue+currentValue);
},0);
console.log(sum);

// d. Return all the prime numbers in an array
let array = [3, 12, 50, 23, 0];
    array.forEach(function (element) {
        const isPrime =(element);
        if (isPrime) {
          console.log(`${element} is a prime number`);
        } else {
          console.log(`${element} is NOT a prime number`);
        }
      });

// e. Return all the palindromes in an array
let words=["ramar","raj","lol"]
function checkPalindrom(str) { 
    return str == str.split('').reverse().join('');
}
const result = words.filter(e => checkPalindrom(e));
console.log(result);
