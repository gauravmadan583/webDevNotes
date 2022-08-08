
// // Methods
// document.getElementsByClassName("para");
// document.getElementsByTagName("p");
// document.getElementById("special");
// const changeColor = () => {
//     var element = document.getElementsByClassName("para");
//     console.log(element[0]);
//     // console.log(element[0].style.color);
//     element[0].style.color = "red";
//     element[0].innerHTML += "This button has now been clicked."
// }

// // changeColor();

// // Event Listerners
// var element = document.getElementsByClassName("btn");
// console.log(element[0]);
// element[0].addEventListener('click', changeColor);

// var element2 = document.getElementById("special");

// element2.addEventListener('dblclick', () => {
//     element2.style.backgroundColor = 'yellow';
// })


// Arrays inbuilt functions

// const myArray = [1, 2, 4, 5, 7, 8];
// console.log(myArray.includes(1));

// console.log(myArray.indexOf(1));

// const myString = myArray.join(",");
// console.log(myString);

// const myArray2 = myString.split(",");
// console.log(myArray2);

// const square = (num) => num*num;

// const ans = myArray.map((x) => square(x));
// console.log(ans);

// console.log(myArray.filter((x) => x&1));


// console.log("Before timeout");

// setTimeout(() => {
//     console.log("2 sec passed");
// }, 2000);

// console.log("After timeout");


// setInterval(() => {
//     console.log("interval of 2 sec");
// }, 2000);



// Callback functions

// Event loop


console.log(1);
for(var i=0;i<10;i++){
    console.log(i);
}
setTimeout(()=>{
    console.log(2)
}, 1000);
console.log(3);
setTimeout(()=>{
    console.log(4)
}, 0);
console.log(5);


