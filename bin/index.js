#!/usr/bin/env node

const { dir } = require('console');
const fileName = "input.txt";

var dirtCount = 0;
var xLen = 0;
var yLen = 0;
var posX = 0;
var posY = 0;
var board = [];
var moves = "";


init();
for(var i = 0; i < moves.length; i++){
    moveRoomba(moves.charAt(i));
}
console.log (posX + " " + posY);
console.log(dirtCount);


function moveRoomba(direction){
    // Make movement in proper cardinal direction if legal
    switch (direction){
        case 'N': if(posY != yLen -1) {posY++;} break;
        case 'S': if(posY != 0){ posY--;} break;
        case 'E': if(posX != xLen -1) {posX++;} break;
        case 'W': if(posX != 0) {posX--;} break;
        default: console.error("Bad Input:", direction, "\nmoving to next command.");
    }
    // Check if dirt exists in new position. If it does, take note of it and remove it.
    if(board[posX][posY]){
        dirtCount++;
        board[posX][posY] = false;
    }
}

function init() {
    try{
        // Read all content of input.txt file and set components with it.
        let fs = require('fs');
        let file = fs.readFileSync(fileName, 'UTF-8');
        let lines = file.split(/\r?\n/);
        
        for(let i = 0; i < lines.length; i++){
            
            let lineNum = parseInt(i);
            let coordinates = [];

            if(lineNum < lines.length -1){
                    coordinates = lines[i].split(" ");
                if(coordinates == null || coordinates.length < 2){
                    console.error(lines[i]);
                    console.error("Improper formatting");
                }
                else{
                    if(lineNum == 0){
                        // set grid dimentions
                        xLen = parseInt(coordinates[0]);
                        yLen = parseInt(coordinates[1]);
                        
                        // Define a multi-dimentional array (the grid) of type boolean. True indicates dirt.
                        board = new Array(xLen).fill(false); 
                        for(let j = 0; j < board.length; j++){
                            board[j] = new Array(yLen).fill(false); 
                        }
                    }
                    else if(lineNum == 1){
                        // Set initial roomba position
                        posX = parseInt(coordinates[0]);
                        posY = parseInt(coordinates[1]);
                        if (posX > xLen -1 || posY > yLen -1){
                            console.error("Roomba position error: Out of range\nPlease update file.");
                            return;
                        }
                    }
                    else{
                        // this is lines 3 to (n-1)
                        let dirtX = parseInt(coordinates[0]);
                        let dirtY = parseInt(coordinates[1]);
                        if (dirtX > xLen -1 || dirtY > yLen -1){
                            console.error("Dirt position error: Out of range\nPlease update file.");
                            return;
                        }
                        if(board.length >= dirtX -1 && board[dirtX].length >= dirtY -1){
                            board[dirtX][dirtY] = true;
                        }
                    }
                }
            }
            else{
                // This is the last line of the txt file. This line includes the movement string.
                moves = lines[i];
            }  
        }
    }
    catch(e){
        console.error(e);
    }
}


