
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()


const btn1 = document.getElementById('button_1');
console.log(btn1);


// 1st attribute - event to be listened or look for
// 2nd attribute - function that will be executed on the event

const toggleDiv = () => {
    console.log("button 1 has been clicked!");

    console.log(div1[0].style.display);
    if(div1[0].style.display == 'block') {
        div1[0].style.display = 'none';
    }else{
        div1[0].style.display = 'block';

    }
}
btn1.addEventListener('click', toggleDiv);

const btn2 = document.getElementsByTagName('button');
console.log(btn2);
const div1 = document.getElementsByClassName('div1');

const random = (num) => {
    return Math.floor(Math.random()*(num+1));
} 
const changeBackground = () => {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)}`;
    console.log(color);
    div1[0].style.backgroundColor = color;
}


btn2[0].addEventListener('click', () => {
    console.log("button 2 has been clicked");
    changeBackground();
});

console.log(div1);




const testFunction = () => {
    console.log('clicking over div 1');
    document.body.style.backgroundColor = 'red';
}

const testFunction2 = () => {
    console.log('double clicking over div 1');
    document.body.style.backgroundColor = 'blue';

}
div1[0].addEventListener('click', testFunction);
div1[0].addEventListener('dblclick', testFunction2);

div1[0].onclick = toggleDiv;


div1[0].addEventListener('mouseover', (e) => {
    div1[0].innerHTML += "We are hovering on it";
});

div1[0].addEventListener('mouseout', () => {
    div1[0].innerHTML = "This is a p tag inside a div.";

});

document.body.addEventListener('keypress', (e) => {
    console.log(e);
})

const div2 = document.createElement('div');
console.log(div2);
document.body.appendChild(div2);
const copyandpasteText = () => {
    div2.innerHTML= div1[0].innerHTML;
    
}

const btn3 = document.getElementById('button_3');

btn3.addEventListener('click', copyandpasteText);

document.body.addEventListener('keydown', (e) => {
    console.log(e);
    if((e.code === "KeyC") && e.ctrlKey){
        copyandpasteText();
    }
});


