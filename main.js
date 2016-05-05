/**
 * Created by opdah023 on 5/5/16.
 */

'use strict';


// Game piece that will be given a constructor to make a component.
var myGamePiece;


/*
Responsible for drawing the game area, starting the game, clearing the game area,
setting up the update rate, and more.
 */
var myGameArea = {
    canvas : document.createElement("canvas"),

    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};


/*
Kicks off the game using the start function from the game area.
Adds in the new game component.
 */
function startGame() {
    myGameArea.start();

    // Multiple components can be made in the same manner.
    myGamePiece = new component(30, 30, "red", 10, 120);
}


/*
Creates a game component object.
 */
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        var ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


/*
Is called based on the interval set in start for myGameArea.
Performs the functions within with the intent on updating the state
of the game.
 */
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1; // Causes the red square to move right.
    myGamePiece.update();
}



