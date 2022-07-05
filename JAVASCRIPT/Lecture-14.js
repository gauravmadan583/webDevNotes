// Data types 

/*
1. Boolean - true false
2. numbers - 1, 2.34, 
3. Big int - 9007199247972n.
4. strings - "ubvf"
5. undefined
6. null
7. Object
*/

// typeof()




// Operators 

// + operator

console.log(2+3); // 5
console.log("hello" + " world"); //hello world

console.log("hello " + 8); // hello 8
console.log(typeof(8)); //number
console.log(typeof("hello ")); //string

console.log(typeof("hello " + 8)); //string

console.log("123" + 9); //1239

console.log(+"12" + +"23"); //35

console.log(+"3uhf" + +"23"); // nan

console.log(+"12" + 23); //35

console.log(parseInt("1010", 10));


// -, *, / operator
console.log(12 - 10); //2
console.log(12 * 10); //120
console.log(12 / 10); //1.2

console.log("hi" - " hey"); //nan
console.log("hi" * " hey"); //nan
console.log("hi" / " hey"); //nan

console.log("hi" - 2); //nan
console.log("hi" * 2); //nan
console.log("hi" / 2); //nan

console.log(+"321" + +"123"); 

console.log("321" - "123"); 
console.log("321" * "123");
console.log("321" / "123");


// while loop
var x = 0;
while (x < 5 ) {
    console.log(x);
    x++;
    // 
    // 
}

// if else

if (x < 3) {
    console.log("x is less than 3");
} else {
    console.log("x is not less than 3");

}

if (x < 3) {
    console.log("x is less than 3");
} else if ( x < 6){
    console.log("x is not less than 3");

} else {

}

// switch
console.log(x);

x = 5;

switch (x) {
    case 1:
        console.log(x);
        break;
    case 5:
        console.log(x);
        break;
    case 7:
        console.log(x);
        break;
}
var y = "Apples";
switch (y) {
    case "Banana":
        console.log(y);
        break;
    case "Apples":
        console.log(y);
        break;
}

// for 
for (var y=0;y<3;y++){
    console.log(y);
}

var x = 0;
do {
    console.log(x);
    x++;

    if (x === 3) break;
}
while (x<5)


if (x = 123) {
    console.log("equal");
}else{
    console.log("not equal")
}

console.log(x);


if ("123" == 123) {
    console.log("equal");
}else{
    console.log("not equal")
}

if ("123" === 123) {
    console.log("equal");
}else{
    console.log("not equal")
}



//  for in

// for (variable in object){

// }

for (let i in [1, 2, 3, "budb"]){
    console.log(i);
}

//  for of

for (let i of [1, 2, 3, "budb"]){
    console.log(i);
}

const myObject = {
    'a': 1,
    'b': 2,
    'c': {
        'd': 3,
        'e': {
            'g': 7
        }
    },
    'f':  function () {
        console.log("function inside myObject");
    }
};

for (let i in myObject){
    console.log(i);
}

for (let i in myObject){
    console.log(i, myObject[i]);
}

const myArray = ['a', 'b', 'c', 
                1344, 
                function() {console.log("function inside myArray")}];

for (let i in myArray){
    console.log(i);
}

for (let i of myArray){
    console.log(i);
}
const myArray2 = Object.entries(myObject);
console.log(myArray2);
console.log(typeof(myArray2));
console.log(typeof(myArray));


const myObject2 = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: {
        5:'d',
        6: 'e'
    }
}

const myArray3 = Object.entries(myObject2);
console.log(myArray3);
console.log(typeof(myArray3));
