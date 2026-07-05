let cells = document.querySelectorAll(".cell");
let restart = document.querySelector(".restart");
let player = "X";

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gameOver = false;
for (let i = 0; i < cells.length; i++) {

    cells[i].addEventListener("click", function () {
        if (gameOver === true) {
            return;
        }
        if (cells[i].innerHTML === "") {

            cells[i].innerHTML = player;
            checkWinner();
            if (gameOver === false) {

                if (player === "X") {
                    player = "O";
                } else {
                    player = "X";
                }
            }
        }
    });
}

function checkWinner() {
    for (let i = 0; i < win.length; i++) {

        let a = win[i][0];
        let b = win[i][1];
        let c = win[i][2];

        if (
            cells[a].innerHTML !== "" &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[b].innerHTML === cells[c].innerHTML
        ) {

            alert(cells[a].innerHTML + " Wins!");
            gameOver = true;
            return;

        }

    }
    let draw = true;

    for (let i = 0; i < cells.length; i++) {

        if (cells[i].innerHTML === "") {
            draw = false;
        }

    }

    if (draw === true) {
        alert("Match Draw!");
        gameOver = true;
    }

}
restart.addEventListener("click", function () {

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }

    player = "X";
    gameOver = false;

});