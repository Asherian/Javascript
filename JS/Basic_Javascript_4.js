function ex_dict() {
    var Fruit= {
        Name: "Orange",
        weight:131,
        color:"Orange",
        Source:"Tree",
        TasteFam:"Citrus",
    };
    delete Fruit.Source;
    document.getElementById("Dictionary").innerHTML=Fruit.Source;
}