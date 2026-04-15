document.addEventListener("DOMContentLoaded", function() {

  let myImage = document.querySelector('img');
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  // IMAGE CLICK
  myImage.onclick = function() {
    let mySrc = myImage.src;

    if(mySrc.includes('cosmetics1.jpg')) {
      myImage.src = 'images/cosmetics2.jpg';
    } else {
      myImage.src = 'images/cosmetics1.jpg';
    }
  }

  // USER NAME
  function setUserName() {
    let myName = prompt('Enter your name:');

    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to Beauty Shop, ' + myName.charAt(0).toUpperCase() + myName.slice(1);
    }
  }

  // INIT
  let storedName = localStorage.getItem('name');

  if(!storedName) {
    setUserName();
  } else {
    myHeading.textContent = 'Welcome to Beauty Shop, ' + storedName.charAt(0).toUpperCase() + storedName.slice(1);
  }

  // BUTTON
  myButton.onclick = function() {
    setUserName();
  }

});