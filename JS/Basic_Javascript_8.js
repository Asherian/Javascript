function Greetings() {
    var pt_1 = "Hello, "
    var pt_2 = "welcome to  "
    var pt_3 = "my Javascript "
    var pt_4 = "Assignment "
    var pt_5 = "Eight."
    var whole_sentence = pt_1.concat(pt_2, pt_3, pt_4, pt_5)
    document.getElementById("Hola").innerHTML = whole_sentence;
}//pg 142 assignment concat method use- start of Assign8

var Sentence= "This whole sentence is only to remove a portion of it.";

function Slicing(){
   var Section= Sentence.slice(27,37);
    document.getElementById("slice_ex").innerHTML = Section;
}//pg 144 slice method assignment.

function challenge1 () {
    var restore = Sentence.toUpperCase();
    document.getElementById("Chall1").innerHTML = restore;
}//Challenge 1 pg 145 slice.

function searching() {
    var searched = Sentence.search("only")
    document.getElementById("sea").innerHTML = searched;
}//Challenge 1 pg 145 search.

function string_ex() {
    var twenty_three = 23;
    document.getElementById("num_string").innerHTML = twenty_three.toString();
}//Assignment pg 147 number to string conversion.
var Prec = 23.242156151592;
function nice_accurate() {
    document.getElementById("Precise").innerHTML = Prec.toPrecision(4);
}//Assignment pg 149 precision numbering - force rounding.

function chall2(){
var fix=Prec.toFixed(3);//Challenge 2 pg 150 toFixed() method
var Vof=Prec.valueOf();//Challenge 2 pg 150 valueof() method

document.getElementById("Chall2").innerHTML = fix +"<br>" + Vof;
}