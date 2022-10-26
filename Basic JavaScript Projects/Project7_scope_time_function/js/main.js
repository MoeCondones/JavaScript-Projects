x=10
function globalFunc(){
    document.write(20*x+"<br>")
}
function globalFunc1(){
    document.write(12-x+"<br>")
}
globalFunc();
globalFunc1();

y=25
z=50
function ifFunc(){
    if (y<z){
        console.log("25 is less than 50 ")
    }
    else{
        console.log("25 is not bigger than 50")
    }
}

function func1(){
    var k = 10
    document.write(20+k);
}

function func2(){
    document.write(29*k);
}
func1();
func2();