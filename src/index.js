const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");



let setup=()=>{
pieces.forEach((piece)=>{piece.draw()})

}

let movement=(e)=>{
//piece i want to move
let selected=["D",2];
let pieceSelectedArray = pieces.filter((piece)=>{return piece.column===selected[0]&&piece.row===selected[1]})
let pieceSelected=pieceSelectedArray[0]

//where i want to go
let destiny=["D",4]
pieceSelected.destiny=destiny
//order to move
pieceSelected.move()
console.log(e)
console.log(locateRow(e))
console.log(locateColumn(e))
canvas.addEventListener("click",movement);

}


canvas.addEventListener("click",(e)=>{locateRow(e)});

canvas.addEventListener("click",(e)=>{locateColumn(e)});
//canvas.addEventListener("mouseDown",movement);
canvas.addEventListener("click",movement);
window.addEventListener("load",setup);
