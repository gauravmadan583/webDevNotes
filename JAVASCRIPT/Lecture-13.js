// // declarations

// // 1. Variables
// var x = "";

// // local variable and global variable
// var y;
// console.log(y);
// if (true) {
//     var y = 5; //global variable


// }


// function testFunction() {
//     var y = 7; //local variable
//     var y = 9;
//     console.log(y); 
// }

// testFunction();
// console.log(y);

// var [x, y, z] = [1, 2, 3, 4, 5, 6];

// console.log(x, y, z);

// // 2. let - block scoped

// let a = 2.34;
// // let a = 5;
// if(true) {
//     let a = 5;
//     console.log(a);
// }
// console.log(a);

// console.log(typeof(a));


// Hoisting



console.log(q);
var q = 10;

// Interpreted as this
// 1. var q
// 2. console.log(q);
// 3. q = 10;


let b = 1; 
// let b = undefined;
// b = 1;

console.log(b);
b = 10;

testFunction2();

testFunction3 = function () {

}

console.log(typeof(testFunction3));

console.log(typeof(testFunction2));


function testFunction2() {
    console.log("Function hoisting!");

    function testFunctioninsideFunction() {
        console.log("inside function!");
    }

    testFunctioninsideFunction();
}


// Interpreted as this
// 1. function testFunction2() {
// 2.    console.log("function hoisting!");
// 3.
// 4. testFunction2();


// 3. Constants


const pi = 3.14;
console.log(pi);


// pi = 3.1415; cannot re-assign value of const

console.log(pi);

// Array
const myArray = [1, 2, 3];

console.log(myArray);

const myArray2 = [1, "string", 45.21, true, [1, 2, 3]];

console.log(myArray2);

console.log(myArray2.length);

myArray2[1] = "string_changed";

// myArray2 += [23];
myArray2.push("12");
console.log(myArray2);
console.log(myArray2.length);

myArray2.pop();
console.log(myArray2);

// myArray2 = []; //this will give a error

// Map

const myObject = {
    'key': 'value1', 
    'key2': 'value2', 
    'key3': {
        'key3_1': 'value4'
    }
};

console.log(myObject);

console.log(myObject.key);
console.log(myObject.key2);
console.log(myObject.key3);
console.log(myObject.key3.key3_1);