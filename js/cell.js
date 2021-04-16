//var cellColors = ["bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info","bg-info","bg-warning", "bg-danger", "bg-success","bg-secondary","bg-primary"];
var cellColors = ["bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info","bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info",];
var found = 0;

let cells = document.getElementsByClassName("cell");
for (cell of cells) {
    cell.addEventListener("click",cellClick);
}
// Table to fill the id of cards
var numberClick = [];

function cellClick() {
    // 
    if (numberClick.length < 2) {
        //this.classList.toggle("bg-dark");
        //this.classList.toggle(cellColors[parseInt(this.id)-1]);
        // prevent filling the same card twice
        this.className = "cell disabled " + cellColors[parseInt(this.id)-1];
        numberClick.push(this.id);
        if (numberClick.length === 2) {
            // if cards have same color
            if (cellColors[numberClick[0] -1] === cellColors[numberClick[1] -1]) {
                found++;
                numberClick = [];
            } else {
                setTimeout(function(){
                    // initialize again the className of the card
                    let element1 = document.getElementById(numberClick[0]);
                    let element2 = document.getElementById(numberClick[1]);
                    element1.className = "cell bg-dark";
                    element2.className = "cell bg-dark";
                    numberClick = [];
                }, 850);
            }
        }
    }
}