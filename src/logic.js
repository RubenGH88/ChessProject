//all logic necessary for movements

//selecting a correct piece for moving

const check=(cell)=>{

    let myPiece=myPieces.filter((piece)=>{
        return piece.column===cell[0]&&piece.row===cell[1]
    })[0]


   return myPiece
}