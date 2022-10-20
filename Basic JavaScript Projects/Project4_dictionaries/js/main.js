function dicFunc(){//Dictionary function
    let car = { //dictionary key elements
        color:"black",
        brand:"BMW",
        seats:5,
        model:"X5",
        year:2019,
    };
    delete car.brand//delete the brand key
    document.getElementById("dictionary").innerHTML= car.brand;//print the brand key
}