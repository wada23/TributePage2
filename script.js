let myImage = document.querySelector('img');

myImage.onclick = function() {

    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'marcus-aurelius-4-640x320.png') {
        myImage.setAttribute('src', 'marcus.jpg');
    }   else {
        myImage.setAttribute('src', 'marcus-aurelius-4-640x320.png');
    }
}

