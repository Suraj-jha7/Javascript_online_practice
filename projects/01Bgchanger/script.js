const red=document.getElementById("red");
const body=document.getElementsByTagName("body");
const green=document.getElementById("green");
const blue=document.getElementById("blue");
const btndiv=document.getElementById("btndiv");





function changebg(e){
console.log(e.target.innerText,"this is ");
    // document.body.removeAttribute('class');
    // document.body.classList.add(e.target.innerText);
    document.body.style.backgroundColor = e.target.innerText;
}

// red.addEventListener("click",changebg)
// green.addEventListener("click",changebg)
// blue.addEventListener("click",changebg)
btndiv.addEventListener("click",changebg)


