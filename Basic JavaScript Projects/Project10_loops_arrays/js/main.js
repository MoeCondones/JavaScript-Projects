function whileFunc(){//creating a fucntion
    var digit="";//creating a variable 
    var x=1;//creating a variable and assigning it the value 1
    while (x<=10){//creating a while loop that says while x is less than or equal to 10 increment by 1
        digit+="<br>"+x;
        x++
    }   
    document.getElementById("while").innerHTML=digit;//calling the function so that it can display in the browser
}

var sports=["football", "basketball", "hockey", "tennis"];//creating a variable with an array as a value
    var result = "";//creating a variable that can be used later
    let i;//creating a variable for later use
function forFunc(){//initializing a function
    for (i=0; i<sports.length; i++){//creating a for loop for the array
        result+=sports[i]+"<br>";
    }
    document.getElementById("for").innerHTML=result;//displaying the result on the browser
}
