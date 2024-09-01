// function parent(a){
//     console.log("Parent function Executed");
//         let b = 25;
//     function child(){
//             console.log("Child function Executed");
//             let c = 10;
//             return (a * b * c)
//     }

//     try{
//         console.log("a + b =",a + b);
//         console.log("a + b + c =", a + b + c);
//     }catch(error){
//         console.log(error.message);
//     }
//     finally{
//         return child;
//     }
// }

// const result = parent(10);

// console.log(result());

// // Parent function Executed
// // index.js:11 a + b = 35
// // index.js:14 c is not defined
// // index.js:5 Child function Executed
// // index.js:24 2500

// function findEvenNumbers(arr, callBackFun){

//     let evenArr = [];
//     let oddArr = [];
//     for(let ar of arr){
//         if(callBackFun(ar)){
//             evenArr.push(ar);
//         }
//         else{
//             oddArr.push(ar)
//         }
//     }
//     console.log(oddArr);
//     return evenArr;
// }

// const numbers = [12, 54, 55, 7, 6, 23, 84, 14];
// const even = (param)=>{
//     return (
//         param % 2 === 0
//     )
// }

// console.log(findEvenNumbers(numbers,even));

function higherOrder(number){
    return function multiplier(times){
        return number * times;
    }
}
let multiplyDouble = higherOrder(20);
let multiplyTriple = higherOrder(30);

console.log(multiplyDouble(2));
console.log(multiplyTriple(3));