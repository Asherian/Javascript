document.write(typeof "Twenty Three is a number.");
function example(){
    document.getElementById("True").innerHTML=isNaN('this is a string');
}
function divide(){
    document.getElementById("Zero").innerHTML=0/0;
}
function Bond(){
    document.getElementById("False").innerHTML=isNaN('007');
}
function not_function() {
    document.getElementById("Not").innerHTML=!(23>17);
}
X=10
Y=10
Z="10"
W=4
U="23"

document.write("<Br> A large number is: ",4e310, "<br> A small number is: ",-3e405,"<br>Boolean test 10>2: ",10>2, "<BR>Boolean test 10<2:",10<2,"<br>Coercion sample: ","2"+5,"<br> Equals = = test true: ",23==(10+13),"<BR>Equales = = test false: ",10==(2+21),"<br><br> Triple equals:<Br> Two values that match all: ",X===Y,"<br> Two values that don't match type: ",X===Z,"<br>Two values same type different values: ",Y===W,"<br>Two values that have nothing in common: ",X===U, "<BR><br>Boolean Logic test:<br>Boolean And: ",23>17&&12>5,"<BR>Boolean Or: ",23>17||5>12);

