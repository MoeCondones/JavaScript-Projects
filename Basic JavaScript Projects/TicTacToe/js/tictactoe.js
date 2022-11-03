// this variable keeps track of whos turn it is.
let activePlayer = "x";
//this array stores an arry of moves. we use this to determine win conditions.
let selectSquares = [];

//this function is for placing an x or o in a square.
function placeXoro(squareNumber) {
    //this condition ensures a square hasnt been placed already.
    //this .some() method is used to check each element of selectSquare array to see if it contains the square number clicked on.
    if (!selectedSquare.some(Element => Element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is.
        if (activePlayer === "x") {
            //if activePlayer is equal to "x", the x.png is placed in html.
            select.style.backgroundImage = 'url ("images/x.png")';
            //active player may only be "x" or "o" so, if not "x" it must be "o". 
        } else {
            //if activePlayer is equal to "o", the 0.png is placed in HTML.
            select.style.backgroundImage= 'url "images/o.png"';
        }
        //squareNumber and activePLayer are concatenated together and added to array.
        selectSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player.
        if (activePlayer === "x"){
            //if active player is "x" change it to "o".
            activePlayer="o";
            //if active player is anything other than "x".
        } else {
            //change the active player to "x".
            activePlayer = "x";
        }
        //this function plays placement sound.
        Audio('/media/place.mp3');
        //this condition check to see if it is computers turn.
        if(activePlayer === "o"){
            //this funciton waits 1 second before placing the image
            //and enabling click.
            setTimeout(function(){ computersTurn();}, 1000);
        }
        //returning true is needed for out computersTurn() function to work.
        return true;
    }
    //this function results in a random square being selected.
    function computersTurn() {
        //this boolean is needed for out while loop.
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number between 0 and 8 is selected
            pickASquare = string(Math.floor(Math.random() * 9));
            //if the random number evaluates returns true, the square hasent been selected yet
            if (placeXoro(pickASquare)){
                //this line calls the function.
                placeXoro(pickASquare);
                //this changes our boolean and ends the loop.
                success=true;
            }
        }
    }
}

//this function parses the selectedSquares arrat to search for win conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    //c 0, 1, 2, conditon.
    if (arrayincludes('0x', '1x', '2x')) {drawWinLine(50,100,558,100); }
    // x3, 4, 5 conditons.
    else if (arrayincludes('3x','4x','2x')) {drawWinLine(50, 304, 558, 304); }
    // x6, 7, 8 conditions
    else if (arrayincludes('3x','7x','5x')) {drawWinLine(50, 508, 558, 508); }
    // x0, 3, 6 conditions
    else if (arrayincludes('6x','3x','8x')) {drawWinLine(100, 50, 100, 558); }
    // x1, 4, 7 conditions
    else if (arrayincludes('0x','4x','6x')) {drawWinLine(304, 50, 304, 558); }
    // x2, 5, 8 conditions
    else if (arrayincludes('1x','5x','7x')) {drawWinLine(508, 50, 508, 558); }
    // x6, 4, 2 conditions
    else if (arrayincludes('2x','4x','8x')) {drawWinLine(100, 508, 510, 90); }
    // x0, 4, 8 conditions
    else if (arrayincludes('6x','4x','2x')) {drawWinLine(100, 100, 520, 520); }
    // o0, 1, 2 conditions
    else if (arrayincludes('0o','1o','8o')) {drawWinLine(50, 100, 558, 100); }
    // o3, 4, 5 conditions
    else if (arrayincludes('0o','4o','2o')) {drawWinLine(50, 230, 558, 204); }
    // o6, 7, 8 conditions
    else if (arrayincludes('3o','7o','5o')) {drawWinLine(50, 508, 558, 508); }
    // o0, 3, 6 conditions
    else if (arrayincludes('6o','3o','6o')) {drawWinLine(100, 50, 100, 558); }
    // o1, 4, 7 conditions
    else if (arrayincludes('0o','4o','7o')) {drawWinLine(304, 50, 304, 558); }
    // o2, 5 ,8 conditions
    else if (arrayincludes('1o','5o','8o')) {drawWinLine(508, 50, 508, 558); }
    // o6, 4, 2 conditions
    else if (arrayincludes('2o','4o','2o')) {drawWinLine(100, 508, 520, 90); }
    // o0, 4, 8 conditions
    else if (arrayincludes('6o','4o','8o')) {drawWinLine(100, 100, 520, 520); }
    //this condition checks for tie, if one of the above conditions register
    // and 9 squares are selected, the code executes.
    else if (selectSquares.length >= 9) {
        //this function plays the tie game sound.
        Audio('./media/tie.mp3');
        //this funciton sets a .3 second timer before resetGame is called.
        setTimeout(function(){ resetGame();}, 1000);
    }
    //this function checks if an array includes 3 strings. 
    //it is used to check for each win condition.
    function arrayincludes(squareA, squareB, squareC){
        //the next 3 variables will be used to check for 3 in a row.
        const a = selectSquares.includes(squareA);
        const b = selectSquares.includes(squareB);
        const c = selectSquares.includes(squareC);
        //if the 3 variable we pass are all included in our array true is
        // returned and our condition executes the drawWinLine function.
        if (a === true && b == true && c === true){return true;}
    }
}
