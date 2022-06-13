const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


// the function setup draws all the pieces in the chess board
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
let myPieces=whitePieces
let turn="whites"

let changeTurn=()=>{
    if (turn==="whites")
    {turn="black";enemyPieces=whitePieces;myPieces=blackPieces}
    else{turn="whites";enemyPieces=blackPieces;myPieces=whitePieces}

}


let onclick =(e)=>{
    pieces.forEach((piece)=>{
      piece.canMove();
    })
    
    if(originRow!==0){
        
        cellSelected=[locateColumn(e),locateRow(e)]
        if(checkFriends(cellSelected)===undefined){
            
            
            destinyColumn=cellSelected[0]
            destinyRow=cellSelected[1]
            
            
            
            let destiny=[destinyColumn,destinyRow]
            
            
            
            pieceSelected.destiny=destiny

            
            
            if(pieceSelected.canMove())
            {pieceSelected.move()
                let dyingPiece=enemyPieces.filter((piece)=>{
                    return piece.column===destiny[0] && piece.row===destiny[1]
                  });
                 
                  if(dyingPiece[0]){dyingPiece[0].status==="dead";
                dyingPiece=[]}
                 
           
           changeTurn()
          
           

           
          turnAround()  }
           
        
        originRow=0;
        originColumn=undefined
        destinyRow=undefined
        destinyColumn=undefined
        cellSelected=[]}
        
        originRow=0
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
