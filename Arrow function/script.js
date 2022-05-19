// a.Print odd numbers in an array
let oddArray=[2,3,6,7,8];
let arr=[1,3,5,8,10];
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
oddNumbers(oddArray);
oddNumbers(arr);

// c. Sum of all numbers in an array
let numArray=[1,4,6,3,8];
let sum=numArray.reduce((previousValue,currentValue) => previousValue+currentValue,0);
console.log(sum);