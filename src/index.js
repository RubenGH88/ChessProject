const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");




let setup=()=>{
pieces.forEach((piece)=>{piece.draw()})

}

let movement=(e)=>{
//piece i want to move
let selected=["E",2];
let pieceSelectedArray = pieces.filter((piece)=>{return piece.column===selected[0]&&piece.row===selected[1]})
let pieceSelected=pieceSelectedArray[0]

//where i want to go
let destiny=["E",4]


pieceSelected.move()

console.log(e.screenX)
}





canvas.addEventListener("click",(e)=>{movement(e)});
window.addEventListener("load",setup);
