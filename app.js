
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnO = true; 
let gameOver = false;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "" || gameOver) return;

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        checkWinner();
    });
});
function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
      
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            gameOver = true;
            setTimeout(() => {
                alert("Winner is " + pos1);
            }, 100);
            disableBoxes();
            return;
        }
    }
    let filled = [...boxes].every(box => box.innerText !== "");
    if (filled && !gameOver) {
        setTimeout(() => {
            alert("It's a Draw!");
        }, 100);
        gameOver = true;
    }
}
function disableBoxes() {
    boxes.forEach(box => box.disabled = true);
}
resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    gameOver = false;
});