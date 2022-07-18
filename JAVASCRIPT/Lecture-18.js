const myArray = [1, 2, 3];
const myArray2 = new Array(1, 2, 3);

console.log(myArray);
console.log(myArray2);


console.log(myArray.length);

console.log(myArray.indexOf(2));
console.log(myArray.indexOf(4));


console.log(myArray.includes(4));

myArray[6] = 7;

console.log(myArray);

myArray.length = 12;

console.log(myArray);


const myString = myArray2.join(',');

let myString2 = "";

for (var i = 0;i<myArray2.length; i++){
    myString2 += myArray2[i];
    if(i<myArray2.length-1) myString2 += ",";
}


console.log(myString);
console.log(myString2);


const myArray3 = myString.split(',');
console.log(myArray3);

myArray3.push(4);
console.log(myArray3);
myArray3.pop();
console.log(myArray3);


const myString3 = "bababababab";

console.log(myString3.split("a"));


// console.log(myArray3);
// const myArray4 = myArray3.splice(1);
// console.log(myArray4);
// console.log(myArray3);

// console.log(myArray3);
// const myArray4 = myArray3.splice(-2);
// console.log(myArray4);
// console.log(myArray3);


// console.log(myArray3);
// const myArray4 = myArray3.splice(1, 1);
// console.log(myArray4);
// console.log(myArray3);


// console.log(myArray3);
// const myArray4 = myArray3.splice(0, 1);
// console.log(myArray4);
// console.log(myArray3);


// Map

const myArray5 = [1, 2, 3, 4, 5];
const square = (x) => { return x**3};


// const myArray6 = myArray5.map(x => Math.pow(2, x));
// const myArray6 = myArray5.map(x => x**10);
// const myArray6 = myArray5.map(x => console.log(x));
const myArray6 = myArray5.map((x, index )=> {
    return x**index;
});



console.log(myArray6);
console.log(myArray5);

// console.log(console.log(1));


// Filter
// const myArray7 = myArray6.filter(x => x&1);


// const myArray7 = myArray6.filter(x => {
//     return false;
// });

// const myArray7 = myArray6.filter(x => x%2===0);
const myArray7 = myArray6.filter(x => !(x&1));



console.log(myArray6);
console.log(myArray7);
