function Ride_Function(){
    var Height, Can_Ride;
    Height=document.getElementById("Height").value;
    Can_Ride=(Height < 52) ? "It would not be safe for you":"You are accepted";
    document.getElementById("Ride").innerHTML=Can_Ride+" to ride.";
}
function Vote() {
    var Age, Can_Vote;
    Age=document.getElementById("Age").value;
    Can_Vote=(Age>17)? "You can, and should, vote!":"Not yet, but you can still help in other ways.";
    document.getElementById("Citizen").innerHTML=Can_Vote;
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "+Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function Person(Name,Age,Height,Status){
    this.Person_Name= Name;
    this.Person_Age= Age;
    this.Person_Height= Height;
    this.Person_Status= Status;
}
var Lincoln= new Person("Abraham Lincoln",56,"6'4","Deceased")
var Bernie = new Person("Bernard Sanders",73,"6'0","Living")
var Vlad = new Person("Vlad Tepes",589,"Unknown","Unknown")
function randomPerson(){
    document.getElementById("New_and_This").innerHTML = "Bernie, or his full name " + Bernie.Person_Name + " is the one of the oldest men to run for office of the president at " + Bernie.Person_Age + " though not the tallest.";
}

function BasicMath1() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 0;
        function Plus_One() {Starting_point += 1;};
        Plus_One();
        return Starting_point;
    }
}
function BasicMath2() {
    document.getElementById("Nested_Function").innerHTML = Count2();
    function Count2() {
        var Starting_point = 0;
        function Sub_One() {Starting_point -= 1;};
        Sub_One();
        return Starting_point;
    }
}
