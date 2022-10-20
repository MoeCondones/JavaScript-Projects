function addFunc(){
    var add = 38 + 10;
    document.getElementById("add").innerHTML="38 + 10="+add;//addition of 38+10
}

function subFunc(){
    var sub = 25 - 5;
    document.getElementById("sub").innerHTML="25 - 5="+sub;//substraction of 25-25
}

function multiFunc(){
    var multi = 8 * 3;
    document.getElementById("multi").innerHTML="8 * 3="+multi//multiplication of 8*3
}

function divFunc(){ 
    var div = 10 / 5;
    document.getElementById("div").innerHTML="10 / 5="+div//divition of 10/5
}


function modFunc(){
    var simpleMath= 290 % 32;
    document.getElementById("modulus").innerHTML="290 % 32="+simpleMath
}

let x=5;
x++;
document.write(x);//generates a incrementation of 5

let z=8;
z--;
document.write(z);//generates a decremenation of 8

let random = Math.random().toFixed(1)*100;
document.write(random)//generates random number
