//var cellColors = ["bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info","bg-info","bg-warning", "bg-danger", "bg-success","bg-secondary","bg-primary"];
var cellColors = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info",];
var found;

// fill the event click for all the cards
let cells = document.getElementsByClassName("cell");
for (cell of cells) {
    cell.addEventListener("click", cellClick);
    cell.classList.add("disabled");
}

// init the game
function initGame() {
    let cells = document.getElementsByClassName("cell");
    for (cell of cells) {
        cell.classList.toggle("bg-dark");
        cell.classList.toggle("disabled");
    }
    found = 0;
}

// Table to fill the id of cards
var cellClick = [];

function cellClick() {
    // only 2 cards turned over
    if (cellClick.length < 2) {
        //this.classList.toggle("bg-dark");
        //this.classList.toggle(cellColors[parseInt(this.id)-1]);
        // prevent filling the same card twice
        this.className = "cell disabled " + cellColors[parseInt(this.id) - 1];
        cellClick.push(this.id);
        if (cellClick.length === 2) {
            // if cards have same color
            if (cellColors[cellClick[0] - 1] === cellColors[cellClick[1] - 1]) {
                found++;
                cellClick = [];
                if (found === cellColors.length/2) {
                    endGame();
                }
            } else {
                setTimeout(function () {
                    // initialize again the className of the card
                    let element1 = document.getElementById(cellClick[0]);
                    let element2 = document.getElementById(cellClick[1]);
                    element1.className = "cell bg-dark";
                    element2.className = "cell bg-dark";
                    cellClick = [];
                }, 850);
            }
        }
    }
}

// Button start
let start = document.getElementById("start");
start.addEventListener('click', startGame);

function startGame() {
    start.classList.add("disabled");
    initGame();
}

function endGame() {
    start.classList.remove("disabled");
    
}
