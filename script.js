console.log("javascipt is running");

let boxes=document.querySelector(".container").children

function getRandomColor()
{
    let r=Math.random()*255;
    let g=Math.random()*255;
    let b=Math.random()*255;
    return `rgb(${r},${g},${b})`
}

Array.from(boxes).forEach(e=>
    {
        e.style.backgroundColor=getRandomColor()
        e.style.color=getRandomColor()
    }
)

let button =document.getElementById("btn")
button.addEventListener("click",()=>{
    document.querySelector(".btn").innerHTML="dhemna lawde ka baal"
})

