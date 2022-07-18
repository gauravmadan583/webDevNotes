
const btn1 = document.getElementById('start-button');

const randomNumberGenerator = (start, end) => {
    const number = start + Math.floor(Math.random()*(end-start+1));
    return number;
}

let startTime, currTime, avgTime;

const getDifference = (startTime, endTime) => {


    let ans = (endTime - startTime) + "ms";
    
    return ans;
}
const showShape = () => {
    // height
    // border-radius
    // background-color
    // left
    // top

    if ( startTime != undefined) {
        currTime = new Date();
        const timeTaken = document.getElementById('time-taken');
        timeTaken.innerHTML = getDifference(startTime, currTime);
        startTime = currTime;
    }else {
        startTime = new Date();
    }
    
    const main = document.getElementById('main');
    const parentWidth = main.offsetWidth;
    const parentHeight = main.offsetHeight;

    const shape = document.getElementById('shape');

    shape.style.height = `${randomNumberGenerator(50, parentWidth*0.3)}px`;
    shape.style.width = shape.style.height;

    var borderRadius = randomNumberGenerator(0, 50);
    shape.style.borderRadius = `${borderRadius}%`;

    var left = randomNumberGenerator(0, parentWidth*0.7);
    var top = randomNumberGenerator(0, parentHeight - shape.offsetHeight);

    shape.style.left = left + "px";
    shape.style.top = top + "px";

    const color = `rgb(${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)})`;
    shape.style.backgroundColor = color;

    shape.style.display="block";

    const btn1 = document.getElementById('start-button');
    btn1.disabled = true;
}

btn1.addEventListener('click', showShape);
// btn1.addEventListener('click', () => {
//     console.log("btn1 is pressed");
// });
const shape = document.getElementById('shape');

shape.addEventListener('click', showShape);

const btn2 = document.getElementById("reset-button");

btn2.addEventListener('click', () => {
    shape.style.display = "none";
    btn1.disabled = false;
    startTime = undefined;
    const timeTaken = document.getElementById('time-taken');
    timeTaken.innerHTML = "";
})
