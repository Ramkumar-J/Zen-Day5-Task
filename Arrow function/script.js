// a.Print odd numbers in an array
let arr=[2,3,6,7,8];
let oddNumbers= (input) =>
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

// c. Sum of all numbers in an array
let numArray=[1,4,6,3,8];
let sum=numArray.reduce((previousValue,currentValue) => previousValue+currentValue,0);
console.log(sum);

// e. Return all the palindromes in an array
let words=["ramar","raj","lol"]
let checkPalindrom= (word) => { 
    return word == word.split('').reverse().join('');
}
const result = words.filter(word => checkPalindrom(word));
console.log(result);