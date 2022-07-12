// single line comment
/*

multi line comment

*/

var element = document.getElementsByTagName("p");
console.log(element, element.length);
console.log(element.length);
console.log(element[0]);
console.log(element[0].innerHTML);
console.log(element[0].innerText);

element[0].innerHTML = "Hello Acciojob";

console.log(element[0].innerHTML);

element[0].style.fontSize = '50px';

var element2 = document.getElementById("example");

// document.getElementsByClassName("")
// document.querySelectorAll("#example .class p")
console.log(element2);

console.log(element2.href);
console.log(element2.innerText);

// alert("Hello World");

element2.href = "https://www.facebook.com";

var newelement = document.createElement("div");

console.log(newelement.innerText);
newelement.innerText = "this is a new element";

document.body.appendChild(newelement);

var newelement2 = document.createElement("p");

newelement2.innerText = "this is a new p tag inside div";

newelement.appendChild(newelement2);

var element3 = document.getElementsByTagName("div");

element3[0].style.backgroundColor = 'blue';
console.log(element3);
element3[0].appendChild(newelement2);

var element4 = document.getElementsByTagName("p");

console.log(element4[1]);
element4[1].tagName = 'A';
element3[0].removeChild(element4[1]);





