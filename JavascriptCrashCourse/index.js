


// // Syntax

// // Variables


// // int string char 

// // 1. var
// var x = 5;
// console.log(x);


// // local variables and global variables


// function test(){
//     // local variable
//     var y = 5;
//     // global variable
//     x = 6;

//     if(true){
//         var a = 4;
//     }
// }

// // blocked scope and function scope

// if (true) {
//     var z = 5;

// }

// console.log(z);


// // Hoisting

// console.log(b);

// var b = 10;


// // 
// var b;

// console.log(b);

// b = 10;



// console.log(a);

// var a = 1;


// // var a = undefined;

// // console.log(a);

// // a = 1;

// test2();

// function test2() {
//     console.log("I am in function test 2");
// }

// var a = 5;
// console.log(a);


// // 2. Let - block scope

// let variable1 = 4;

// console.log(variable1);


// // console.log(variable2); -> this will show an error
// // let variable2 = 6;

// if (true) {
//     let variable3 = 5;
//     console.log(variable3);
// }

// // console.log(variable3); -> this will show error

// // let variable1 = 1;

// // 3. const

// const variable4 = 3;

// console.log(variable4);

// // variable4 = 4; -> this will show an error


// const myArray = [1, 2, 3, "Hi", "a", [1,2]];

// console.log(myArray);

// myArray[1] = 4;

// console.log(myArray);

// // myArray = [1, 2];
// myArray[7] = 8;

// console.log(myArray);

// myArray.push(1);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);



// const myObject = {
//     'key1': 'value1',
//     'key2': 'value2',
//     'key3': {
//         'key4': [1, 2, 3],
//         'key5': 3
//     }
// };
// console.log(myObject);


// console.log(myObject['key2']);
// console.log(myObject.key3.key5);


// Datatypes

// 1. number
// 2. string
// 3. big int
// 4. boolean - true false
// 5. undefined
// 6. null
// 7. Object



// Operators

// +

// console.log(1+2); //3
// console.log(1+"number");

// console.log("123"+5); //1235
// console.log(+"123"+5); 
// console.log(+"12uf3"+5); //1235

// console.log(+"123" + +"123");

// // -

// console.log(1-2);
// console.log("23" - "12");
// console.log("23"-5);
// console.log("bcde12"-1);

// // *
// console.log(1*2);
// console.log("23" * "12");
// console.log("23"*5);
// console.log("bcde12"*1);

// // /

// console.log(1/2);
// console.log("23" / "12");
// console.log("23"/5);
// console.log("bcde12"/1);

// var x = "0";
// console.log(typeof(x));
// if( x == 0) {
//     console.log(x);
// }else{
//     console.log("not zero")
// }


// var x = 0;
// console.log(typeof(x));
// if( x === 0) {
//     console.log(x);
// }else{
//     console.log("not zero")
// }

// // ===
// // !==


// // Loops


// while( x < 5) {
//     x+=1;
//     console.log(x);
// }

// for( var i=0;i<5;i++){
//     console.log(i);
// }
// x = 0;
// do {
//     x++;
//     console.log(x);
// }
// while(x<5)


// for in 
// for of

// const myArray = [1,2,3, [12], "strings"];
// for (let i in myArray){
//     console.log(i, myArray[i]);
// }

// for (let i of myArray){
//     console.log(i);
// }
// console.log(myArray);

// // const myObject = {
// //     10: 1,
// //     12: 2,
// //     23: 3,
// //     35: function test () {
// //         console.log("3");
// //     }
// // }

// for (let i in myObject){
//     console.log(myObject[i]);
// }
// // for (let i of myObject){
// //     console.log(i);
// // }



// function test(x, y, z) {
//     console.log(x, y, z);
// }

// test(1, 2, 3);

// const test2 = function (a, b) {
//     console.log(a, b);
// }

// // Arrow function

// const sum = (a, b) => {
//     console.log(a, b);

//     return a+b;
// }

// console.log(sum(1, 2));


// pass by value pass by reference
// let a = 3, b = 5;


// const changeValues = (a, b) => {
//     a = 1;
//     b = 2;
//     console.log(a, b);
//     return a;
// }
// // Pass by value 
// // numbers strings boolean

// console.log(a, b); //3, 5
// a = changeValues(a, b);
// console.log(a, b); 


// // Pass by reference

// const myObject = {
//     10: 1,
//     12: 2,
//     23: 3,
//     35: function test () {
//         console.log("3");
//     }
// }

// const changeObject = (a) => {
//     a[10] = 2;
//     a[12] = 3;
//     a[23] = 4;
// }

// console.log(myObject);
// changeObject(myObject);
// console.log(myObject);

// pass by value -> changes inside the function 
// will not be applicable outside the fn
// var let const numbers strings


// pass by reference -> changes inside the function 
// will be applicable outside the fn
// objects arrays 

// const myArray2 = [1, 2, 3];

// const square = (number) => {
//     return number*number;
// }

// const map = (fun, myArray) => {

//     const ansArray = [];
//     for(let i in myArray){
//         ansArray.push(fun(myArray[i]));
//     }
//     return ansArray
// }

// console.log(myArray2);
// const ans = map(square, myArray2);
// console.log(myArray2, ans);


// // Operators

// // Bitwise
// // 1. AND &

// console.log(1&2);

// // 2. OR |

// // 3. NOT ~

// // 4. left shift <<

// // 5. right shift >>


// // logical 

// // 1. &&
// if(x < 0 && x> -5){

// }

// // 2. ||

// if( x> 100 || x< 0){

// }

// // 3. !
// if(!x){

// }

// // Ternary operators
// var x = 5;
// (x<5)?(console.log("less than 5")):(console.log("greater or equal to 5"));