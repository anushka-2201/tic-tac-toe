let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#rst");
let new_btn = document.querySelector("#new-btn");
let msgC = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = true;


const winP = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5],
    [2, 5, 8],
];

const resetGame = () => {
    turn = true;    
    enableB();
    msgC.classList.add("hide");
}

const enableB = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("clicked");
        if(turn == true) {
            box.innerText = "X";
            box.style.color = "black";
            turn = false;
        }else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
let winr = false;
let w = "$";
const checkWinner = () => {
    for(let p of winP) {
        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;

        if(p1!="" && p2 !="" && p3!="") {
            if(p1 === p2 && p2 === p3) {
                console.log("winner");
                winr = true;
                w = p1;
                disableB();
                showWinner(w);
            }
        }
    }
}
const disableB = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (w) => {

    if(winr) {
        msg.innerText = `Congratulations! Winner is ${w}`;
        msgC.classList.remove("hide");
    }
    
}

new_btn.addEventListener("click", resetGame);
rst.addEventListener("click", resetGame);