// SetTimeout


// const factorial = (num) => {
//     if(num==1) return num;
//     return num*factorial(num-1);
// }
// const function1 = (time) => {
//     // setTimeout(setTimeout(console.log(1), 1000),1000);
//     console.log(factorial(1));

//     setTimeout(() => console.log( time/1000), time);
// }
// console.log(0);
// function1(3000);
// console.log(factorial(5)); //120
// function1(1000);
// function1(0);
// console.log(2);


// line 8
// line 9  -> wait for 3 seconds
// line 10 -> wait for 1 second
// line 11 


// Javascript Event loop

// 1. stack
// 2. queue
// 3. heap




// const currTime = new Date().getSeconds();
// console.log("Currtime" + currTime);
// setTimeout(() => console.log("waited asynchronously"), 2000);
// let temp = new Date().getSeconds();
// console.log(temp);
// while(temp ) {
//     console.log(temp);
//     temp = new Date().getSeconds();
// }

const interval = setInterval(() => console.log(1), 2000);

setTimeout(() => clearInterval(interval), 5000);


const function2 = () => {

}
const function1 = (fun) => {
    
    fun();
}

function1(function2);
