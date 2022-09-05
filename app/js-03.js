const myDoc = document;
console.log(myDoc);

let mySpan = myDoc.getElementById("mySpan");
console.log(mySpan);

const myButtonStr = "<br><ul class='nobull'><li> <iframe width='560' height='315' src='https://www.youtube.com/embed/E_kYbVHdBGo?start=24' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe> </ul></li>";
let myBtn = myDoc.getElementById("myBtn");
myBtn.addEventListener("click", myFunction);


function myFunction() {
    mySpan.innerHTML = "";
    let cantReps = document.getElementById("myNumber").value
    for (let index = 0; index < cantReps; index++) {
    mySpan.innerHTML += myButtonStr;
    }
}





