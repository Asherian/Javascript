var container = bottle="32oz", bucket="5gal", drum="55gal";
function changeColor(newColor) {
    var elem= document.getElementById('Water');
    elem.style.color = newColor;
}
function myFunction() {
    var sentence = "It's important to find balance to stay healthy.";
    sentence += " Our bodies are worth putting the effort into.";
    document.getElementById("Concatenate").innerHTML = sentence;
}
function OztoGal(f) {
    return(f/128);
}
document.getElementById("Gallons").innerHTML=OztoGal(32);
function reset(){
location.reload(true);
}