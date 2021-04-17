var cellColors = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info"];
var found;

// fill the event click for all the cards
let cells = document.getElementsByClassName("cell");
for (cell of cells) {
    cell.addEventListener("click", cellClick);
    cell.classList.add("disabled");
}

// Create a random color table
function randomColor() {
    let index = random(cellColors.length -1);
    //alert(index);
    let temp;
    //alert((cellColors.length)/2);
    for(let i=0; i < (cellColors.length)/2; i++) {
        temp = cellColors[i];
        cellColors[i] = cellColors[cellColors.length - i -1]  ;
        cellColors[cellColors.length - i -1] = temp;
    }
}
// init the game
function initGame() {
    let cells = document.getElementsByClassName("cell");
    for (cell of cells) {
        cell.classList.toggle("bg-dark");
        cell.classList.toggle("disabled");
    }
    found = 0;
    randomColor();
}

// Table to fill the id of chosen cards
var cellChoose = [];

function cellClick() {
    // only 2 cards turned over
    if (cellChoose.length < 2) {
        //this.classList.toggle("bg-dark");
        //this.classList.toggle(cellColors[parseInt(this.id)-1]);
        // prevent filling the same card twice
        this.className = "cell disabled " + cellColors[parseInt(this.id) - 1];
        cellChoose.push(this.id);
        if (cellChoose.length === 2) {
            // if cards have same color
            if (cellColors[cellChoose[0] - 1] === cellColors[cellChoose[1] - 1]) {
                found++;
                cellChoose = [];
                if (found === cellColors.length / 2) {
                    endGame();
                }
            } else {
                setTimeout(function () {
                    // initialize again the className of the card
                    let element1 = document.getElementById(cellChoose[0]);
                    let element2 = document.getElementById(cellChoose[1]);
                    element1.className = "cell bg-dark";
                    element2.className = "cell bg-dark";
                    cellChoose = [];
                }, 850);
            }
        }
    }
}

// Button start
let start = document.getElementById("start");
start.addEventListener('click', startGame);
// Start the game
function startGame() {
    start.classList.add("disabled");
    initGame();
}
// end the game
function endGame() {
    start.classList.remove("disabled");
}

// Return a Random number 
function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}