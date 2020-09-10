
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'http://mdn.github.io/beginner-html-site/images/firefox-icon.png') {
      myImage.setAttribute('src','https://mdn.github.io/beginner-html-site-scripted/images/firefox2.png');
    } else {
      myImage.setAttribute('src','http://mdn.github.io/beginner-html-site/images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }