var colorIndex = 0;

function changeColor(){
    let colors = ["red", "skyblue", "blue", "green", "black"];
    var box = document.getElementById("box");
    document.getElementById("box-text").innerHTML = "Background Color: " + colors[colorIndex];
    box.style.backgroundColor = colors[colorIndex++];
    if(colorIndex == colors.length-1){
        colorIndex = 0;
    }
}