// //1. a. Print odd numbers in an array 
// // Anonymous fn:

// // var odd= function(){
// //     var arr=[1,2,3,4,5,6,7,8,9,10];
// //     console.log("The Odd Numbers are:");
// //     for(let a=0; a<arr.length;a++){
// //     if(arr[a]%2==1)
// //         console.log(arr[a]);
// // }
// // }
// // odd();

// // 1.a.IIFE fn:

// //  (function(){
// //     var arr=[1,2,3,4,5,6,7,8,9,10];
// //     console.log("The Odd Numbers are:");
// //     let a=0;
// //     while(a<arr.length){
// //     if(arr[a]%2==1)
// //         console.log(arr[a]);        
// //     a++;
// //     }
// // })
// // ();

// // 3.a.Arrow Fn:

// // var odd= ()=>{
// //     var arr=[1,2,3,4,5,6,7,8,9,10];
// //     console.log("The Odd Numbers are:");
// //     for(let a=0; a<arr.length;a++){
// //     if(arr[a]%2==1)
// //         console.log(arr[a]);
// // }
// // }
// // odd();

// // 1.b.Convert all the strings to title caps in a string array
// //Anonymous fn:

// var titlecase = function (string) {
//     var sentence = string.toLowerCase().split(" ");
//     for( let a =0; a<sentence.length;a++){
//      sentence[a] = sentence[a][0].toUpperCase()+sentence[a].slice(1);
//     }
//     document.write(sentence.join(" ")); 
    
//     return sentence;  
//  }
//  titlecase("i want to become a full stack developer");
   

// //IIFE fn:

// function titlecase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for( let a =0; a<sentence.length;a++){
//      sentence[a] = sentence[a][0].toUpperCase()+sentence[a].slice(1);
//     }
//     document.write(sentence.join(" ")); 
    
//     return sentence;  
//  }
//  titlecase("i want to become a full stack developer");
  
//  //3.b.Convert all the strings to title caps in a string array

//  var titlecase = (string) => {
//     var sentence = string.toLowerCase().split(" ");
//     for( let a =0; a<sentence.length;a++){
//      sentence[a] = sentence[a][0].toUpperCase()+sentence[a].slice(1);
//     }
//     document.write(sentence.join(" ")); 
    
//     return sentence;  
//  }
//  titlecase("i want to become a full stack developer");


// // 1.c. Sum of all numbers in an array
// // Anonymous fn:

// // var add=function(){
// // var array = [1, 2, 3];
// // sum = 0;
// // for (var i = 0;i < array.length;sum += array[i++]);
// //   console.log(sum);
// // }
// // add();

// // // IIFE fn:

// // (function(){
// //     var array = [1, 2, 3];
// //     sum = 0;
// // for (var i = 0;i < array.length;sum += array[i++]);
// //   console.log(sum);
// // })
// // ();  

// // // 3.c.Arrow Fn:

// // var add = () => {
// //     var array = [1, 2, 3];
// //     sum = 0;
// //     for (var i = 0;i < array.length;sum += array[i++]);
// //       console.log(sum);
// //     }
// //     add();
    
// //1.d. Return all the prime numbers in an array
// //Anonymous fn:

// // var Prime = function (number) {
// //     if (number <= 1) {
// //       return false;
// //     } else {
// //       for (let i = 2; i < number; i++) {
// //         if (number % i == 0) {
// //           return false;
// //         }
// //       }
// //       return true;
// //     }
// // }
// // let arr = [3,5,6,11,23,12,50,23,0,29];

// // arr.forEach(function (element) {
// //     const isPrime = Prime(element);
// //     if (isPrime) {
// //       console.log(`${element} is a prime number`);
// //     } else {
// //       console.log(`${element} is NOT a prime number`);
// //     }
// //   });
 

//   //IIFE fn:

// // function Prime(number) {
// //     if (number <= 1) {
// //       return false;
// //     } else {
// //       for (let i = 2; i < number; i++) {
// //         if (number % i == 0) {
// //           return false;
// //         }
// //       }
// //       return true;
// //     }
// // }
// // let arr = [3,5,6,11,23,12,50,23,0,29];

// // arr.forEach(function (element) {
// //     const isPrime = Prime(element);
// //     if (isPrime) {
// //       console.log(`${element} is a prime number`);
// //     } else {
// //       console.log(`${element} is NOT a prime number`);
// //     }
// //   });

// //3.d.Arrow fn:

// // var Prime = (number) =>  {
// //     if (number <= 1) {
// //       return false;
// //     } else {
// //       for (let i = 2; i < number; i++) {
// //         if (number % i == 0) {
// //           return false;
// //         }
// //       }
// //       return true;
// //     }
// // }
// // let arr = [3,5,6,11,23,12,50,23,0,29];

// // arr.forEach(function (element) {
// //     const isPrime = Prime(element);
// //     if (isPrime) {
// //       console.log(`${element} is a prime number`);
// //     } else {
// //       console.log(`${element} is NOT a prime number`);
// //     }
// //   });

// 1.e Return all the palindromes in an array
// Anonymous function:

// var palindrome = function(x) {

//     for(i=0;i<x.length;i++){
//       y=x[i].split("").reverse().join("");

//       if(x[i]==y){
//         console.log(x[i]);
//       } 
//     }
// }
// (["racecar","mom","hope","developer","7997"])

// IIFE funtion:

// (function(){
//     x = ["racecar","mom","hope","developer","7997"]
//     for(i=0;i<x.length;i++){
//         y=x[i].split("").reverse().join("");
  
//         if(x[i]==y){
//           console.log(x[i]);
//         } 
//       }

// }
// )
// ();

// 3.e.Arrow function:

// var palindrome = (x) => {
//     for(i=0;i<x.length;i++){
//         y=x[i].split("").reverse().join("");
  
//         if(x[i]==y){
//           console.log(x[i]);
//         } 
//       }
//   }
//  palindrome(["racecar","mom","hope","developer","7997"]);

// 1.f.Return median of two sorted arrays of the same size.
//  Anonymous fn:
// const arr1 = [1,2,3,4];
// const arr2 = [9,8,7,6];

// var a = function (arr1,arr2){
// let arr = [...arr1,...arr2]
// arr.sort((a,b) => a-b)
// let medianIndex = Math.floor(arr.length / 2)
// return median = arr.length % 2 === 1 ? arr[medianIndex] : (arr[medianIndex-1]+ arr[medianIndex])/2
// }

// console.log(a(arr1,arr2));

//  IIFE fn:

//  const arr1 = [5,4,6,3];
//  const arr2 = [1,7,2,9];
 
//  (function(arr1,arr2){
 
//   let arr = [...arr1,...arr2];
//   arr.sort((a,b) => a-b)
//   let medianindex = Math.floor(arr.length/2);
//   let median = arr.length%2 === 1 ? arr[medianindex] : (arr[medianindex-1] + arr[medianindex])/2
//   console.log(median);
//  })
 
//  (arr1,arr2);

// ARROW FUNCTION:

// const arr1 = [11,27,30];
// const arr2 = [9,15,20];

// var ans = (arr1,arr2) => {

// var array  = [...arr1,...arr2];
// array.sort((a,b)=>a-b);
// let medianindex = Math.floor(array.length/2);
// return Median = array.length % 2 === 1 ? array[medianindex] : (array[medianindex-1] + array[medianindex])/2
// }
// ans(arr1,arr2);

// 1.g.Remove duplicates from an array
// Anonymous Fn:

// let Removeduplicates = function (){
//     var a = [3,2,4,5,35,56,7,22,6,6,3,5];
//     var b =[];
// for(i=0;i<a.length;i++){
//     if(b.indexOf(a[i])===-1){
//         b.push(a[i]);
//         console.log(b);
//     }
// }
// }
// Removeduplicates();

// IIFE Fn:

// (function(){
//     let a = [1,1,2,2,3,3,5,4,6,9];
//     let b = [...new Set(a)];
//     console.log(b);
//     })
//     ();

// 1.h.Rotate an array by k times
// Anonymous FN:

// let rotateArray = function (arr,k){
//     for(i=0;i<k;i++){
//     let temp = arr[0];
//     for(j=0;j<arr.length;j++){
//         arr[j] = arr [j+1];
//     }
//     arr[arr.length-1] = temp 
//       } 
//       return arr;
//     }
//     let arr = [1,2,3,4,5,6];
//     k = 1;
    
//     console.log(rotateArray(arr,k));

// Arrow Fn:

// let rotateArray = (arr,k) => {
//     for(i=0;i<k;i++){
//     let temp = arr[0];
//     for(j=0;j<arr.length;j++){
//         arr[j] = arr [j+1];
//     }
//     arr[arr.length-1] = temp 
//       } 
//       return arr;
//     }
//     let arr = [1,2,3,4,5,6];
//     k = 1;
    
//     console.log(rotateArray(arr,k));
    