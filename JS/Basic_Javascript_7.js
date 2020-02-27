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
    if (new Date().getHours() < 18) {
        document.getElementById("Greets").innerHTML = "How are you today?";
    }
//    else (new Date().getHours() > 18){
//        document.getElementById("Greets").innerHTML = "Hope it was a good day."
//    }//else statement pg 135
}
function if_what() {
    if (2 > 1) {
       document.getElementById("Say_It").innerHTML = "Is this true?"
   }
}

function Number_Compare() {
    twelve= document.getElementById("twelve").value;
    if (twelve > 12) {
            Vote = "What a large number!";
    }
    else {
        Vote = "A great number!";
    }
    document.getElementById("Response").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evenin time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}//Assign pg 138 - as written.