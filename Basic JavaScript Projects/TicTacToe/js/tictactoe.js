// this variable keeps track of whos turn it is.
let activePlayer = "x";
//this array stores an arry of moves. we use this to determine win conditions.
let selectSquares = [];

//this function is for placing an x or o in a square.
function placeXoro(squareNumber) {
    //this condition ensures a square hasnt been placed already.
    //this .some() method is used to check each element of selectSquare array to see if it contains the square number clicked on.
    if (!selectSquares.some(Element => Element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is.
        if (activePlayer === "x") {
            //if activePlayer is equal to "x", the x.png is placed in html.
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be "x" or "o" so, if not "x" it must be "o". 
        } else {
            //if activePlayer is equal to "o", the 0.png is placed in HTML.
            select.style.backgroundImage= 'url("images/o.png")';
        }
        //squareNumber and activePLayer are concatenated together and added to array.
        selectSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player.
        if (activePlayer === "x"){
            //if active player is "x" change it to "o".
            activePlayer= "o";
            //if active player is anything other than "x".
        } else {
            //change the active player to "x".
            activePlayer = "x";
        }
        //this function plays placement sound.
        audio('./media/cam.mp3');
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
            pickASquare = String(Math.floor(Math.random() * 9));
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
    else if (arrayincludes('3x','4x','5x')) {drawWinLine(50, 304, 558, 304); }
    // x6, 7, 8 conditions
    else if (arrayincludes('6x','7x','8x')) {drawWinLine(50, 508, 558, 508); }
    // x0, 3, 6 conditions
    else if (arrayincludes('0x','3x','6x')) {drawWinLine(100, 50, 100, 558); }
    // x1, 4, 7 conditions
    else if (arrayincludes('1x','4x','7x')) {drawWinLine(304, 50, 304, 558); }
    // x2, 5, 8 conditions
    else if (arrayincludes('2x','5x','8x')) {drawWinLine(508, 50, 508, 558); }
    // x6, 4, 2 conditions
    else if (arrayincludes('6x','4x','2x')) {drawWinLine(100, 508, 510, 90); }
    // x0, 4, 8 conditions
    else if (arrayincludes('0x','4x','8x')) {drawWinLine(100, 100, 520, 520); }
    // o0, 1, 2 conditions
    else if (arrayincludes('0o','1o','2o')) {drawWinLine(50, 100, 558, 100); }
    // o3, 4, 5 conditions
    else if (arrayincludes('3o','4o','5o')) {drawWinLine(50, 230, 558, 204); }
    // o6, 7, 8 conditions
    else if (arrayincludes('6o','7o','8o')) {drawWinLine(50, 508, 558, 508); }
    // o0, 3, 6 conditions
    else if (arrayincludes('0o','3o','6o')) {drawWinLine(100, 50, 100, 558); }
    // o1, 4, 7 conditions
    else if (arrayincludes('1o','4o','7o')) {drawWinLine(304, 50, 304, 558); }
    // o2, 5 ,8 conditions
    else if (arrayincludes('2o','5o','8o')) {drawWinLine(508, 50, 508, 558); }
    // o6, 4, 2 conditions
    else if (arrayincludes('6o','4o','2o')) {drawWinLine(100, 508, 520, 90); }
    // o0, 4, 8 conditions
    else if (arrayincludes('0o','4o','8o')) {drawWinLine(100, 100, 520, 520); }
    //this condition checks for tie, if one of the above conditions register
    // and 9 squares are selected, the code executes.
    else if (selectSquares.length >= 9) {
        //this function plays the tie game sound.
        audio('./media/yawn.mp3');
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

//this function makes our body element temporarily unclickable.
function disableClick(){
    //this makes our body unclickable.
    body.style.pointerEvents="none";
    //this makes our body clickable again after 1 second.
    setTimeout(function(){body.style.pointerEvents="auto";}, 1000);
}

//this function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
}

//this function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses out html canvas element.
    const canvas= document.getElementById("win-lines");
    //this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext("2d");
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
    //this line indicates where the start of a lines y axis is.
    y1 = coordY1,
    //this line indicates where the end of a lines x axis is.
    x2 = coordX2,
    //this line indicates where the end of a lines y axis is.
    y2 = coordY2,
    //this variable stores temporary x axis data we update in our animation loop.
    x = x1,
    //this variable stores temporary y axix data we update in out animation loop.
    y= y1;

    //this function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates the loop for when the game ends it restarts.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //this method moves us to a starting point in out line.
        c.moveTo(x1, y1);
        //this method indicates the end point in out line.
        c.lineTo(x, y);
        //this method sets the width of the lines.
        c.lineWidth=10;
        //this method sets the color of out line.
        c.strokeStyle= 'rgba(70, 255, 33, .8)';
        //this method drawsw everything we laid out above.
        c.stroke();
        //this condition checks if weve reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point.
            if (x < x2) {x += 10;}
            //this condition adds 10 to the previous end y point.
            if (y < y2) {y += 10;}
            //this conditon cancels out animation loop if reach the end point.
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        //this condition is similar to the one above.
        //it was necessary for the 6, 4, 2 win conditions.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2){cancelAnimationFrame(animationLoop);}
        }
    }

    //this function clears out canvas after our win line is drawn.
    function clear() {
        //this line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //this line stops out animation loop.
        cancelAnimationFrame(animationLoop)
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds.
    audio('./media/win.mp3');
    //this line calls our main animation loop.
    animateLineDrawing();
    //this line waits 1 second
    //then, clears canvas, resets game, and allows clicking again.
    setTimeout(function(){clear(); resetGame();}, 1000)
}

//this funciton resets the game in a tie or a win. 
function resetGame() {
    //this for loop iterates through each html element of i.
    for (let i = 0; i < 9; i++){
        //this vairable gets the html element for i.
        let square = document.getElementById(String(i));
        //this removes our element background image.
        square.style.backgroundImage= "";
    }
    //this resets our array so it is empty and we can start over.
    selectSquares = [];
}