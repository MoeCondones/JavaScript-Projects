function concatFunc(){//creating a function 
    var part= "this is"//assigning a variable
    var part1= " my first"//assigning a variable
    var part2=" concatenation"//assigning a variable
    var part3=" functions"//assigning a variable
    var result=part.concat(part1,part2,part3);//assigning a variable
    document.getElementById("sentence").innerHTML=result;//calling the variable result
}

function sliceFunc(){//creating a function 
    let sentence = "this is my first slice()method function"//assigning a variable
    let section =sentence.slice(17,30)//assigning a variable
    document.getElementById("slice").innerHTML=section;//calling the variable section
}

function stringFunc(){//creating a function
    let x = 200//assigning a variable
    document.getElementById("number").innerHTML=x.toString()//calling the variable x and adding the toString() method
}

function precisionFunc(){//creaitng a function
    var x =19532.4329432//assigning a variable
    document.getElementById("precision").innerHTML=x.toPrecision(5);//calling the variable x and adding the toPrecision() method
}