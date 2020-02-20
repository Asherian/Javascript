function add_math() {
    var addition = 10+13;
    document.getElementById("AddMath").innerHTML="10 + 13 = "+addition;
}
function sub_math(){
    var subtraction = 40-17;
    document.getElementById("SubMath").innerHTML="40 - 17 = "+subtraction;
}
function multiply() {
    var simple_math = 2*7;
    document.getElementById("MultiMath").innerHTML = " 2 x 7 = "+ simple_math;
}
function divide() {
    var div_math = 391/23;
    document.getElementById("DivMath").innerHTML = "391 / 23 = "+div_math;
}
function Complicate() {
    var Steps = (4+2)*13-56/2;
    document.getElementById("PEMDAS").innerHTML = "(4 + 2) * 13 - 57 / 2 = "+Steps;
}

function modulus_example() {
    var simple_math = 23%4;
    document.getElementById("Modulus").innerHTML = "When you divide 23 by 4 you have a remainder of: "+simple_math
}
function unary_neg_operator() {
    var x = 23;
    document.getElementById("Unary").innerHTML=-x;
}

var f= 5;
f++;

var s=5.25;
s--
document.write("Decreasing Ex- ",s,"<br> Increasing example- ",f);
window.alert(Math.random()* 23);

function pow_ex(){
document.getElementById("Pow").innerHTML= Math.pow(23,9);
}