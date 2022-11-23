var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    // board = [
    //     [0,0,0,0],
    //     [0,0,0,0],
    //     [0,0,0,0],
    //     [0,0,0,0]
    board = [
        [2,2,2,2],
        [2,2,2,2],
        [4,4,8,8],
        [4,4,8,8]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //Creates div for inner tiles
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; //clear the classlist so tiles dont have multiple classes
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096)  {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }
    }

}

document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft():
    }
})

function filterZero(row) {
    return row.filter(num => num != 0); //create new arraw without zero

}

function slide() {
    // [0,2,2,2]
    row = filterZero(row); //get rid of zero >> [2,2,2]

    //slide
    for (let i = 0; i < row.length-1; i++) {
        //check every 2
        if (row[i] == row[i+1]) {
            row[i] *=2;
            row[i+1] = 0;
            score += row[i];
        } //>> [2,2,2] is going to be [4,0,2]
    }

    row = filterZero(row); //[4,2]
    //add zero
    while (row.length < column) {
        row.push(0);
    } //[4,2,0,0]

    return row;
}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;
    }
}