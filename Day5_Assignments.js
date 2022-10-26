console.log("Day 5 - Assignment ::::::::")
//Javascript Funtions

//1. Print Odd numbers in an array

console.log("//1. Print Odd numbers in an array");

// Normal Function
function oddnum(array){

      console.log("array:", array);
      console.log("Odd number from array:")
      for(var i=0; i<array.length; i++)
      {
        if(array[i]%2!=0)
        {
           console.log(array[i]);
        }        
      }
};
oddnum([1,2,3,4,5,6,7,8,9,10]);


//Anonymous Function
var oddnum = function (array) {
    console.log("1.Odd number in the array (Anonymous function)");
    for(var i=0; i<array.length; i++)
    {
        if(array[i]%2!=0)
        {
           console.log(array[i]);
        }
    }     
}
oddnum([1,2,3,4,5,6,7,8,9,10])

//Arrow Functions
var oddnum = (array) => {
    console.log("1.Arrow function---------->OddNumbers");
    for(var i=0; i<array.length; i++)
    {
        if(array[i]%2!=0)
        {
           console.log(array[i]);
        }
    }     
}
oddnum([1,2,3,4,5,6,7,8,9,10]);

//IIFE (Immediately Inovked Function Expression) Function
(function(array){
    console.log("IFFE Function:--------------->Odd Numbers");
    for(var i=0; i<array.length; i++)
    {
        
        if(array[i]%2!=0)
        {
           console.log(array[i]);
        }
    }     
})([1,2,3,4,5,6,7,8,9,10]);



console.log("/--------------------------------------------------------------/");
console.log("/2. Convert all the strings to title Caps in a String of Array /");
console.log("/--------------------------------------------------------------/");

//Anonymous function
var cname = function(name){
    return name.toUpperCase(); 
}; console.log("2.Anonymous func:",cname("maharanijeyaraman"));


//IFFE function
(function (cpname){
        console.log("2.IFFE func     :", cpname.toUpperCase());  
       })("maharanijeyraramn");

//Arrow Function     
var cname=(caps)=>{
       return caps.toUpperCase();
      };console.log("2.Arrow func    :", cname("maharanijeyaraman"));


console.log("/-------------------------------------/");
console.log("/3. Sum of all numbers in an array    /");
console.log("/-------------------------------------/");

// Normal Function

function sumofArray(array4)
{
    var total=0;
    for(let i=0; i<array4.length; i++){
    total=total+array4[i]; 
    } 
    {
        console.log("3.Sum of all no in array: (Normal Func)", total);
    }
};
sumofArray([1,2,3,4,5,6,7,8,9,10]);

// Arrow Function

var sumofArray = (array4) =>
{
    var total=0;
    for(let i=0; i<array4.length; i++){
    total=total+array4[i]; 
    } 
    {
       return total;
    }
};
console.log("3.Sum of all no in array: (Arrow Function)",sumofArray([1,2,3,4,5,6,7,8,9,10]));

//Anonymous Function
var sumofArray = function(array4)
{
    var total=0;
    for(let i=0; i<array4.length; i++){
    total=total+array4[i];   
    } 
    {
        return total;
    }
};
console.log("3.Sum of all no in array: (Anonymous func):",sumofArray([1,2,3,4,5,6,7,8,9,10]));

//IIFE Function
(function(array4){
    var total=0;
    for(let i=0; i<array4.length; i++){
    total=total+array4[i];   
    } 
    {
        console.log("3.Sum of all no in array: (IFFE Func):", total);
    }
})([1,2,3,4,5,6,7,8,9,10]);

//sum of all numbers in array using (Reduce) - Anonymous Function
var odd = function (arr){
       var result = arr.reduce((acc,cv)=> acc+cv,0);  //acc- first value of an array
       return result;
};
console.log("3.Using Reduce:...(Anonymous Function)", odd([1,2,3,4,5,6,7,8,9,10]));

//sum of all numbers in array using (Reduce) - IFFE Function
(function(arr){
    var result = arr.reduce((acc,cv)=> acc+cv,0);  //acc- first value of an array
    console.log("3.Using Reduce:...(IFFE Function)", result);
    
})([1,2,3,4,5,6,7,8,9,10]);



console.log("/---------------------------------------/");
console.log("/4.Return all prime numbers in an array /");
console.log("/---------------------------------------/");


const array5 = [-1,0,1,2,3,4,5,6,7,8,9];
console.log(array5);  //Printing the actual array

//Normal Function
function checkPrime(array5) {

   if(array5 < 2) 
   {
     return false;
   }
   else {
         for (let k = 2; k < array5 ; k++)
         {
          if(array5 % k === 0){
             return false;
          }
        }
          return true;
   }
}; 
const result = array5.filter(checkPrime);
console.log("Normal Function:       ", result);


//Anonymous Function 
var isPrime = function (array5){
    if(array5 < 2) 
    {
      return false;
    }
    else {
          for (let k = 2; k < array5 ; k++)
          {
           if(array5 % k === 0){
              return false;
           }
         }
           return true;
    }
};
const result1 = array5.filter(isPrime);
console.log("Anonymous Function:    ", result1);


//IFFE function

// const array6 = [-1,0,1,2,3,4,5,6,7,8,9];

// (function (array6){
//     console.log("IFFE Function:");
//     if(array6 > 2) 
//     {
//           for (let k = 2; k < array6 ; k++)
//           {
//            if(array6 % k === 0){
//               return false;
//            }

//     }
//     {     
//          return true;
//     });(array6);
//   const result4 = array5.filter(isPrimeaf);
//   console.log("Arrow Function:        ", result4);

//Arrow function

var isPrimeaf = (array5) => {
    if(array5 < 2) 
    {
      return false;
    }
    else {
          for (let k = 2; k < array5 ; k++)
          {
           if(array5 % k === 0){
              return false;
           }
         }
           return true;
    }
}; 
  const result4 = array5.filter(isPrimeaf);
  console.log("Arrow Function:        ", result4);



console.log("/---------------------------------------/");
console.log("/5. Return all the palindromes in array /");
console.log("/---------------------------------------/");

let palarray = ["appa","daughter","amma","otto","son","appa","madam"];
let palindrome = [];

for(let i=0; i<palarray.length; i++)
{
    let arrayChar = palarray[i].split('').join('');
    let string1 = arrayChar;
    let revstring = reverseString(string1);

if(string1 == revstring)
{
    palindrome.push(string1);
    
}
}    //for loop ends here

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

console.log(palarray);
console.log(palindrome);

//Anonymous function

var palin = function (palarray){
   
    let palindrome = [];
    
    for(let i=0; i<palarray.length; i++)
    {
        let arrayChar = palarray[i].split('').join('');
        let string1 = arrayChar;
        let revstring = reverseString(string1);
    
    if(string1 == revstring)
    {
        palindrome.push(string1);
        
    }
     
    }    //for loop ends here
    
    return palindrome;

    function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
     
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
     
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }
    
}; console.log("Anonymous Function:", palin(["appa","daughter","amma","otto"]));


//Arrow Function 

var palin = (palarray) => {
   
    let palindrome = [];
    
    for(let i=0; i<palarray.length; i++)
    {
        let arrayChar = palarray[i].split('').join('');
        let string1 = arrayChar;
        let revstring = reverseString(string1);
    
    if(string1 == revstring)
    {
        palindrome.push(string1);
        
    }
     
    }    //for loop ends here
    
    return palindrome;

    function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
     
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
     
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }
    
}; console.log("Arrow Function:", palin(["appa","daughter","otto"]));


//IIFE Function

(function (palarray){
   
    let palindrome = [];
    
    for(let i=0; i<palarray.length; i++)
    {
        let arrayChar = palarray[i].split('').join('');
        let string1 = arrayChar;
        let revstring = reverseString(string1);    //reusing the revserString function already created
    
    if(string1 == revstring)
    {
        palindrome.push(string1);
        
    }
     
    }    //for loop ends here
    
    return palindrome;
    
}); console.log("IFFE Function:", (["appa","daughter","otto","madam"]));



console.log("/---------------------------------------------------/");
console.log("/6. Return median of two sorted arrays of same size /");
console.log("/---------------------------------------------------/");


console.log("/---------------------------------------------------/");
console.log("/7. Remove duplicates from an array                 /");
console.log("/---------------------------------------------------/");


console.log("/---------------------------------------------------/");
console.log("/8. Rotate an array by k times                      /");
console.log("/---------------------------------------------------/");
  
