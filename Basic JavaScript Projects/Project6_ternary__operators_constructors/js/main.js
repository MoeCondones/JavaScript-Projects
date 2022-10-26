function ageFunc(){ //creating a function
    var age, canRide; // setting a variable
    age= document.getElementById("age").value;// setting a value to the variable age
    canRide=(age>=23)?"you are old enough ":"you are too young ";// setting values to the variable canRide
    document.getElementById("ride").innerHTML=canRide+"to get a harley "// calling the element ride
}

function player (team, age, position, height){ // creating a fucntion for player
    this.playerTeam=team;//creating the value playerTeam
    this.playerAge=age;// creating the value playerAge
    this.playerPosition=position;//creating the value playerPosition
    this.playerHeight=height;//creating the value playerHeight
}

let Adam = new player ("Lakers", 22, "Pf",6.4)// setting a value for the variable Adam
let Davo = new player ("Bucks", 21, "pf", 6.5)// setting a value for the variable Davo
function playerFunc(){//creating a function for the button
    document.getElementById("playerId").innerHTML="Adam is "+Adam.playerAge+" years old and was drafted to the LA "+Adam.playerTeam+" in 2018"//calling the element playerID so the text can be displayed
}

function a(x){//creating a function for a
    function b(y){//creating a function for b
        function c(z){//creating a function for c
            console.log(x+y+z);//pushing the functions to console.log
        }
        c(3);//assigning c a value
    }
    b(8);//assigning b a value
}
a(2);//assigning a a value
