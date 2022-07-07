// Functions

// pass by value, pass by reference

var a = 5;
console.log(a);
// pass by value
function testFunction(a) {
    a = 2;
    console.log(a);
}

testFunction(a);

console.log(a);



let myObject = {
    'key': 'value'
};

console.log(myObject);

function testFunction2(myObject) {
    myObject = {
        'newkey': 'newvalue'
    }
    console.log(myObject);
}

testFunction2(myObject);
console.log(myObject);


// pass by reference 
let myObject2 = {
    'key': 'value',
    'key_2': 'bhd'
};

console.log(myObject2);

function testFunction3(myObject) {
    myObject.key = 'newvalue';
    myObject.key_2 = null;
    myObject['ihej'] = 'bjncd';
    console.log(myObject);
}

testFunction3(myObject2);
console.log(myObject2);


const myArray = [10, 20, 30];
console.log(myArray);

const testFunction4 = function(myArray) {
    for(var i in myArray){
        myArray[i] = i*10;
    }
    console.log(myArray);
}

testFunction4(myArray);
console.log(myArray);


const square = function (n) { return n*n };
const factorial = function (n) { 
    if(n==1) return 1;
    return n*factorial(n-1);
}

function map(fun, myArray) {
    let ans = [];
    for(var i in myArray){
        ans.push(fun(myArray[i]));
    }
    return ans;
}
myArray2 = [1, 2, 3];
console.log(map(square, myArray2));
console.log(map(factorial, myArray2));

let ans1 = []

for (var i=0; i<myArray2.length; i++){
    ans1 = square(myArray2[i]);
}

testFunction5 = (a, b, c) => {
    return a+b+c;
}

console.log(testFunction5(1, 2, 3));


// Operators 


// Bitwise

// AND
// &

console.log(1&2);

// OR
// |

console.log(1|2);

// XOR
// ^

console.log(1^2);

var num1 = 0, num2 = 10;
console.log(num1 && num2);
console.log(typeof(num1 && num2));
console.log(typeof(num1 & num2));


// NOT
// ~

console.log(~5);

// Left shift
// <<

console.log(1<<1); 
// 2*n  1<<n


// right shift
// >>
console.log(3>>1);

// 3/2*1 -> 


// Logical operators
// Logical and
// &&

console.log(true&&true);




// logical or ||

//logical not !



// ternary operator

// condition ? true : false;
var y = 10;
var x = y == 1? 1: 0;
console.log(x);

var y = 17;
var x =  y < 5? 
(y>0? console.log('btw 0 & 5'): console.log('below 0')):
(y<10? console.log('btw 5 & 10'): console.log('above 10'));

