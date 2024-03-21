let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomco = getcolor();
    h3.innerText = randomco; 
    console.log("color updated");

    let div = document.querySelector("div");
    div.style.backgroundColor = randomco;
});

function getcolor(){
    let red = Math.floor(Math.random() *225);
    let blue = Math.floor(Math.random() *225);
    let green = Math.floor(Math.random() *225);

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}