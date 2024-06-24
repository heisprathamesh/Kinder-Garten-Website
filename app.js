
let removes = ()=>{
    var ourul =document.querySelector("#ul_tohide");

    if(ourul.style.display === "flex"){
        ourul.style.display = "none";
    }
    else{
        ourul.style.display = "flex";
    }
    
} 
var myevent = document.querySelector("#hamb").addEventListener("click", removes);

var specevent = document.querySelector("#spec").addEventListener("click", removes);
var homeevent = document.querySelector("#home").addEventListener("click", removes);

var admissionevent = document.querySelector("#adm").addEventListener("click", removes);
var resultevent = document.querySelector("#result").addEventListener("click", removes);


function aler(){
    alert("admission is full try next year");
}
function aler2(){
    window.open("https://www.hackerone.com/for-hackers/how-to-start-hacking")
}

var sub = document.querySelector("#sub_bt").addEventListener("click", aler);
var siv = document.querySelector("#sub_bt2").addEventListener("click" , aler2 );