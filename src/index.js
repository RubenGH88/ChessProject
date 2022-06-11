const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");



let setup=()=>{
pieces.forEach((piece)=>{piece.draw()})

}
let cellSelected
let originRow=0
let originColumn
let destinyRow
let destinyColumn
let pieceSelected
let enemyPieces=blackPieces
let turn="whites"

let changeTurn=()=>{
    if (turn==="whites")
    {turn="black";enemyPieces=whitePieces}
    else{turn="whites";enemyPieces=blackPieces}

}



let onclick =(e)=>{
    
    
    
    if(originRow!==0){
        cellSelected=[locateColumn(e),locateRow(e)]
        console.log(cellSelected)
        //where i want to go
        destinyColumn=cellSelected[0]
        destinyRow=cellSelected[1]
        console.log(destinyColumn)
        console.log(destinyRow)
        
        
        let destiny=[destinyColumn,destinyRow]
        
        pieceSelected.destiny=destiny
        
        
        pieceSelected.move()
        changeTurn()
        
        turnAround()  
        
        
        originRow=0;
        originColumn=undefined
        destinyRow=undefined
        destinyColumn=undefined
        cellSelected=[]
        
        
    }
    
    else if(originRow===0)
    
    {cellSelected=[locateColumn(e),locateRow(e)]
        
        
        originColumn=cellSelected[0]
        originRow=cellSelected[1]

        
        let selected=[originColumn,originRow];
      
        let pieceSelectedArray = pieces.filter((piece)=>{return piece.column===selected[0]&&piece.row===selected[1]})
       
        pieceSelected=pieceSelectedArray[0]
        if(pieceSelected===undefined){originRow=0}
        if(enemyPieces.includes(pieceSelected)){originRow=0}
      cellSelected=[]
    }
    

}
canvas.addEventListener("click",(e)=>{onclick(e)});

window.addEventListener("load",setup);
