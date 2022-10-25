function ageFunc(){
    var age, canRide;
    age= document.getElementById("age").value;
    canRide=(age>=23)?"you are old enough ":"you are too young ";
    document.getElementById("ride").innerHTML=canRide+"to get a harley "
}

function player (team, age, position, height){
    this.playerTeam=team;
    this.playerAge=age;
    this.playerPosition=position;
    this.playerHeight=height;
}

let Adam = new player (Lakers, 22, Pf,6.4)
let Davo = new player (Bucks, 21, pf, 6.5)
function playerFunc(){
    document.getElementById("playerId").innerHTML="Adam is" +Adam.playerAge+ "years old and was drafted to the LA" +Adam.playerTeam+ "in 2018"
}