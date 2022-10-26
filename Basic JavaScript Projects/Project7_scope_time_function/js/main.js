x=10// assigning a value to x
function globalFunc(){//creating a function 
    document.write(20*x+"<br>")//printing 20*x
}
function globalFunc1(){//creating a new function
    document.write(12-x+"<br>")//printing 12-x
}
globalFunc();//calling the functions
globalFunc1();//calling the functions

y=25//assigning a value to y
z=50// assigning a vlaue to z
function ifFunc(){//creating a new function
    if (y<z){//creating an if steatement
        console.log("25 is less than 50 ")//printing the result
    }
    else{//creating an else statement
        console.log("25 is not bigger than 50")//printing the result of the else statement
    }
}

function func1(){//creating a new function
    var k = 10//assigning a value to k
    document.write(20+k);//printing 20+k
}

function func2(){//creating a new function
    document.write(29*k);//printing 29*k
}
func1();//calling func1
func2();// calling func2