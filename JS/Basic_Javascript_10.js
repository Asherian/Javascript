function count() {
    var Digit = "";
    var X = 17;
    while (X<24) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function leng() {
    var string = "This is a test of the string length tool in javascript.";
    var n= string.length
    document.getElementById("StrLength").innerHTML = n;
}

var Instruments= ["Guitar", "Drums","Harpsicord", "Viola", "Lyre"];
var Content = "";
var Y;
function for_Loop() {
    for (Y= 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<BR>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_function() {
    var cat_pictures = [];
    cat_pictures[0] = "sleeping";
    cat_pictures[1] = "playing";
    cat_pictures[2] = "eating";
    cat_pictures[3] = "purring";
    cat_pictures[4] = "nibbling";
    document.getElementById("Array").innerHTML = "In this picture, the cat is "+cat_pictures[3]+".";
}

function constant_function() {
    const Musical_Instrument = {type:"Harpsicord", brand:"Fender", color:"white"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1,200";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type +" was " + Musical_Instrument.price + "<br> The " + Musical_Instrument.type + " is the color " + Musical_Instrument.color + ".";
}
var Kovacs = "Envoy";

function let_func() {
    let Kovacs = "Protectorate Solider"
    document.getElementById("Let_Ex").innerHTML = Kovacs;
}
document.write("<BR>" + Kovacs);
function ReturnPi() {
    return Math.PI;
}
//Challenge pg 195- Return function.
document.getElementById("return_ex").innerHTML = ReturnPi();


let book = {
    author: "Steven Brust",
    year: 2004,
    length: 256,
    title: "Agyar",
    Genre: "Horror",
    description : function() {
        return "A book I enjoyed was " + this.title + " by " + this.author + " it is " + this.length + " pages long.";
    }
};
document.getElementById("assign198").innerHTML = book.description();

var text = "";
var i;
for (i = 0; i < 5; i++) {
    if (i === 2) {break;}
    text += "The number is " + i + "<br>";
  }
document.getElementById("chall199").innerHTML = text;
function loop_break() {

}

var Author= ["Steven Brust", "Lois McMasters Bujold", "Terry Prachett", "Brandon Sanderson", "Robert A Heinlein"];
var AuthContent= "";
var F;
function Cont_Loop() {
    for (F= 0; F < Author.length; F++) {
        if (F === 2)  {continue;}
        AuthContent += Author[F] + "<BR>";
    }
    document.getElementById("ContinueChall").innerHTML = AuthContent;
}