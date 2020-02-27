window.alert("Hi, thank ya\'ll for coming here.") //alert() from page 31 altered to window.alert pg 35. including special character from pg 45.

document.write("A string of text<br><br>")//document.write ex from pg 37.
var ABBA="Take a chance on strings";
var ABBA= ABBA.fontcolor("green") //pg 52 add a color to a variable.
document.write(ABBA)//pg 40 assignment - Doc.write a variable.
var Name= last="Asherian", first="Krist", middle="Stefan";
//family variable grouping. 
var expression=10+23;
document.write("<br>" + first +" "+ last + "<br>Expression 10+23 = "+expression);//document.write ex from pg 37. including pg 47 concatenate. Stating a variable pg 50, expression from pg 54. 

window.alert(ABBA);//Challnege pg 43.

function Text_Color() {
    var str= "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}//Pg 57 talks about how but realizing not actually part of the assignment. Got it working though.

var concate= "<br>Concatenating"+" Strings"
document.write(concate)//pg 48 challenge.