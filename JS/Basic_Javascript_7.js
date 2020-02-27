var X = 19;
function Add_num_1() {
    var Y = 23
    document.write(Y+X+"<br>");
}
function Add_num_2() {
    document.write(X+100);
}
function Add_num_Error() {
    document.write(Y+100);
    console.log(Y+100)
}
Add_num_1();
Add_num_2();
Add_num_Error();

function date_function() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greets").innerHTML = "How are you today?";
    }
}
var MD= new Date();
document.getElementById("Whatif").innerHTML = "Happy March!";
