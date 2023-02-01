
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mis. Or. is Cool, ${myName}`; /* it will display null if remove $ sign or symbol */
}


if (!localStorage.getItem("name")) { 
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mis. Or. is Cool, ${storedName}`;
}


myButton.onclick = () => {
  setUserName();
};







const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cathedral.jpg") {
    myImage.setAttribute("src", "images/divine-mercy.jpg");
  } else {
    myImage.setAttribute("src", "images/cathedral.jpg");
  }
};




















/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Mis. Or.!"; */


/* document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
}); */

/* document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
}); */ // on click





/* alert("Pls. Click to Continue"); */




