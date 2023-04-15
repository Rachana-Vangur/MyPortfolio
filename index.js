let myTextEle = document.querySelector("h1");

let ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

myTextEle.onmouseover = (e) => {

    let myText = document.querySelector("h1").dataset.value;
    let myTextEle = e.target;
    let iter = 0;
    let maxIter = (myText.length) * 3;

    let hackerEffect = () => {

        let s = "";

        for(let i = 0; i < myText.length; i++) {
            if((iter/3) <= i){
                s += ALPHABETS[Math.floor(Math.random() * 26)]; 
            } else {
                s += myText[i];
            }
        }

        myTextEle.innerHTML = s;

        iter++;
        if(iter < maxIter) 
            setTimeout(hackerEffect, 30);
    }
    setTimeout(hackerEffect,30);

}