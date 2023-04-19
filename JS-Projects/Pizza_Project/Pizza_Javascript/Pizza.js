function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt

    //assigning variables
    var text1 = "<h3>You Ordered:</h3>"
    var runningTotal= 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //if i is less than the pizza size array increment by 1
    for (var i = 0; i < sizeArray.length; i++) {
        //if a pizza size is checked create the variable selectedSize and make it
        //equals to the value of the array of sizeArray 
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //if you select set size, create the price of the size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Vegan Pizza") {
        sizeTotal = 13;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //size total is equals to the runningtotal
    runningTotal = sizeTotal;
    //console.log the selected side + $ +sizetotal + .00 to show the price
    console.log(selectedSize+" = $"+sizeTotal+".00");
    //console.log the size of the selected item
    console.log("size text1:"+text1);
    //console.log the subtotal of the price
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1)
};

//create a function with the arguments runningTotal and text1
function getTopping(runningTotal, text1) {
    //create variables 
    var toppingTotal = 0;
    var selectedTopping = [];
    //call the element by id from the html file
    var toppingArray = document.getElementsByClassName("topping");
    //for each j if its less than the toppingArray length increment by 1
    for (var j = 0; j < toppingArray.length; j++) {
        //if the array of toppings is checked push the value to the consol log
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")")
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    
    //create a variable for the topping count
    var toppingCount = selectedTopping.length;
    // if the topping count is more than 1 add 1 else the topping total is 0
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal+toppingTotal);
    //consol.log the order 
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="</h3>Total: <strong>$"+
    runningTotal+".00"+"</strong></h3>"
}