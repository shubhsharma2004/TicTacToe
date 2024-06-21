let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg")
let turnO=true;


const winPattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
 };
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else {
        box.innerText="x";
        turnO=true;
    }
    box.disabled=true;

    checkWinner();
    });
});
const checkWinner= ()=>{
    for(let pattren of winPattrens){
    let pos1Val=boxes[pattren[0]].innerText;
    let pos2Val=boxes[pattren[1]].innerText;
    let pos3Val=boxes[pattren[2]].innerText;
    if(pos1Val!="" &&pos2Val!="" && pos3Val!=""){
    if(pos1Val===pos2Val && pos2Val===pos3Val)
    {
    
    showWinner(pos1Val);
    }
}
}
};
const showWinner=(winner)=>{
  msg.innerText=`congratulation the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  dsblBoxes();
};
const dsblBoxes=()=>{
    for( let box of boxes) {
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for( let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

resbtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);