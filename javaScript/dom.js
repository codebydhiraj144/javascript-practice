// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImages.length;i++){
//     console.dir(smallImages[i]);
// }


//querySelector
// console.dir(document.querySelector("hi"));


// console.dir(document.querySelector("#description"));


// console.dir(document.querySelector(".oldImg"));



// console.dir(document.querySelector("div a"));


//practice
//add the following elements to the conatiner using only javascript and the dom methods

//1) a<p> with red text that says "Hey I'm red!"

// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red";
// document.querySelector('body').append(para1);
// para1.classList.add('red');


//2) an <h3> with blue text that says i'm a blue h3"
// let h3= document.createElement("h3");
// h3.innerText = "I'm a blue h3";
// document.querySelector("body").appen(h3);
// h3.classList.add("blue h3);

//3) crate a new input and button element on the page using javascript only.set the text of button to "click me"

// let button = document.createElement("button");
// let input = document.createElement("input");
// button.innerText = "click me";

// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// add the following attributes to the element
// - change placeholder value of input to "username"
//- change the id of button to "btn"

// button.setAttribute("id","btn");
// input.setAttribute("placeholder","username");

//3) Access the btn using the uerySelector and button id change the button background color to blue ad text color to white
// let btn = document.querySelector("#btn");
// btn.classList.add("btnstyle");

//4) create an h1 element on the page and set its text to "DOM pracrtice " underlined. change its color to purple.

// let h1 = document.createElement("h1");
// h1.innerHTML = "<u> DOM practice</u>";
// document.querySelector("body").append(h1);