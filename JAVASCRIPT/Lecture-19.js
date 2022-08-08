
const divide = (a, b) => {
    if(b === 0) {
        // throw "Not possible";
        throw 0;
    }
    return a/b;
}
const function1 = () => {
    try {
        console.log('This is try block');
        
        console.log(divide(0, 0));

        console.log("this is after error");
    }catch (e) {
        console.log('This is catch block');
        console.log(e);
    }finally{
        console.log("finally");
    }


}

function1();

const function2 = () => {
    try {
        console.log(1);
        throw { 
            0: "0",
            1: "1"
    
        };
    }catch(e) {
        console.log(2);
        console.log(e);
        return true; //suspended
        console.log(5);
    }finally {
        console.log(3);
        return false;
    }

    console.log(4);
    return true;
}


console.log(function2());


// const function3 = () => {
//     try {
//         console.log(1);
//         try {

//         }catch(e) {

//         }
//     }catch(e) {
//         try {

//         }catch(e) {

//         }
//     }
// }


// // {
// //     'fnnfj': {

// //     }
// // }




// Synchronously


// console.log(1);
// for(var i=0;i<1000000000;i++){

// }
// console.log(2);

// Asynchronous

console.log(1);
setTimeout(3000);
console.log(2);


