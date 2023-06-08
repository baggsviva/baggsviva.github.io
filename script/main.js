// alert("Hello World");

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/gabb-mockgreen.png") {
    myImage.setAttribute("src", "images/gabb-mockhighridge.png");
  } else {
    myImage.setAttribute("src", "images/gabb-mockgreen.png");
    // prompt("Click Me!");
  }
};

document.querySelector('a[href="blog.html"]').addEventListener('click', function(event) {
      event.preventDefault();
    });


/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Mis. Or.!"; */

/* document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
}); */

/* document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
}); */ // on click

/* alert("Pls. Click to Continue"); */
