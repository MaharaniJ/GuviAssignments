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
      
      
   console.log("/---------------------------------------------------/");
console.log("/6. Return median of two sorted arrays of same size /");
console.log("/---------------------------------------------------/");


var sortFunction = function(arr1,arr2){
     console.log("Anonymous Function.............")
     var arrconcat = arr1.concat(arr2);
     console.log(arrconcat);
     var arrsort = arrconcat.sort((a,b) => a-b);
     console.log(arrsort);
     var arrlength = arrsort.length;
     console.log(arrlength);
     var m1 = arrlength/2;
     var m2 = arrlength/2-1;
     if(arrlength%2!=0)
     {
        var result = arrsort[Math.floor(m1)];
        console.log("1.median:",result);
     }
     else
     {
        var result  = (arrsort[m1]+arrsort[m2])/2; 
        console.log("2.Mddian:",result);
     }

return result;
}
arr1=[1,3,6];
arr2=[7,4,2];
sortFunction(arr1,arr2);

//Anonymous function

//IIFE function

(function (arr1,arr2){

console.log("IIFE function");
var concatarr = arr1.concat(arr2);
console.log(concatarr);
var sortarr = concatarr.sort((a,b) => a-b);
console.log(sortarr);
var arrlength = sortarr.length;
console.log(arrlength);
if(arrlength%2!=0)
{
    var result = sortarr[Math.floor(arrlength/2)];
    console.log("median:",result);
    
}
else
{
    var result = (sortarr[arrlength/2]+sortarr[arrlength/2-1])/2;
    console.log("median:",result);
    

}
  
})([1,3,6],[7,4,2]);

//Arrow Function

console.log("/---------------------------------------------------/");
console.log("/7. Remove duplicates from an array                 /");
console.log("/---------------------------------------------------/");

//Anonymous function

//IIFE function

//Arrow Function
var fnname = (arr1,arr2) =>{
    console.log("Arrow function ");
    var mediarr1 = arr1.concat(arr2);
    console.log(mediarr1);
    var sortarr = mediarr1.sort((a,b) => a-b);
    console.log(sortarr);
    var medianarr = sortarr.length;
    console.log(medianarr);
    if(medianarr%2!=0)
    {
        var result = sortarr[Math.floor(medianarr/2)];
        return result;
    } 
    else{
        var result = (sortarr[medianarr/2]+sortarr[medianarr/2-1])/2;
        // console.log("2.Med",result);
        return result;
    }
};

console.log(fnname([1,5,4],[3,6,8]));


console.log("/---------------------------------------------------/");
console.log("/8. Rotate an array by k times                      /");
console.log("/---------------------------------------------------/");

//Anonymous function
var Name2 = function(arr1,arr2){
    console.log("Anonymouse function");
    var concatarray = arr1.concat(arr2);
    console.log(concatarray);
    var sortarray = concatarray.sort((a,b) =>a-b);
    console.log(sortarray);
    var arraylength = sortarray.length;
    console.log(arraylength);
    if(arraylength%2!=0)
    {
        var result = sortarray[Math.floor(arraylength/2)];
        return result;
     } 
     else{
        var result = (sortarray[arraylength/2]+sortarray[arraylength/2-1])/2;
        return result;
     }
    }
console.log(Name2([3,4,6],[8,9,1]));

// normal function
function removeDuplicat(arr)
{    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element))
        {
            unique.push(element);
        }
    });
    return unique;

}console.log(removeDuplicat(["apple","orange","apple"]));

//anonymouse function
var removDup = function(arr){  
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element))
        {
            unique.push(element);
        }
    });
    return unique;
};
   console.log(removDup(["apple","orange","apple"]));


//IFFE Function
(function (arr1){
    
    var unique = [];
    arr1.forEach(element => {
        if (!unique.includes(element))
        {
            unique.push(element);
        }
    });
    console.log(unique);


})(["apple","orange","apple"]);   

//Arrow Function

var removedup = (arr2) =>{
    var unique = [];
    arr2.forEach(element => {
        if (!unique.includes(element))
        {
            unique.push(element);
        }
    });
    return unique;
};console.log(removedup(["apple","orange","apple"]));

//rotate an array k times
//normal function
var unique = [];
arr1.forEach(element => {
    if (!unique.includes(element))
    {
        unique.push(element);
    }
});
console.log(unique);


//rotate an array normal function
const rotateArray1 = function(nums, k) {
    console.log("Rotate an array");

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  console.log(rotateArray1([1,2,3,4],2));

  //anonymous function
  var rotateArray = function(num,k){
    console.log("anonymous function");
    for (let i = 0; i < k; i++) {
        num.unshift(num.pop());
    }
  
    return num;
  }
  console.log(rotateArray([1,2,3,4],2));

//arrow functio
    var rotateAnarray = (num1,k) => {
        console.log("arrow function")
        for(let i=0; i<k; i++)
        num1.unshift(num1.pop());
return num1;

    }
    console.log(rotateAnarray([1,2,3,4],2));

    //IIFE function
    (function(num2,k){
        console.log("IIFE funtion");
        for(let i=0; i<k; i++)
        num2.unshift(num2.pop());
        console.log(num2);
    })
    ([1,2,3,4],2)
  
      
      
    
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
  
