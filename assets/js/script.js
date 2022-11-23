var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //Creates div for inner tiles
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
        }
    }
}
