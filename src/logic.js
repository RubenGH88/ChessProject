//this functions help whith the movements

/* A function that check if there is 
an enemy piece in a destiny cell*/

const checkFriends=(cell)=>{


  
    let myPiece=myPieces.filter((piece)=>{
        return piece.column===cell[0]&&piece.row===cell[1] && piece.status==="alive"
    })[0] 


   return myPiece
}

/* A function that check if there is 
an enemy piece in a destiny cell*/

const checkEnemies=(cell)=>{

    let enemyPiece=enemyPieces.filter((piece)=>{
        return piece.column===cell[0]&&piece.row===cell[1] && piece.status==="alive"
    })[0] 


   return enemyPiece
}

/*the next functions are for helping calculate the movements 
converting the letters of the columns to numbers
and reverse it*/

let letToNum=(column)=>{

    switch (column) {
      case "A":
        return 1
        break;
      case "B":
          return 2
        break;  
      case "C":
          return 3
        break;
      case "D":
          return 4
        break;
      case "E":
          return 5
        break;
      case "F":
          return 6
          
        break;
      case "G":
          return 7
        break;   
      case "H":
          return 8
        break; 
      
  
    }
  }
  
  
  
  
  let numToLet=(column)=>{
  
    switch (column) {
      case 1:
        return "A" 
        break;
      case 2:
          return "B"
        break;  
      case 3:
          return "C"
        break;
      case 4:
          return "D"
        break;
      case 5:
          return "E"
        break;
      case 6:
          return "F"
          
        break;
      case 7:
          return "G"
        break;   
      case 8:
          return "H"
        break; 
      
  
    }
  }



  let checkOpponent=()=>{
    myPieces.forEach((piece)=>{
     piece.canMove();
     if(piece.movementFiltered[0]){
      piece.movementFiltered.forEach((move=>{
        if(enemyKing.column===move[0] && 
          enemyKing.row===move[1]){
            danger="check"
            document.getElementById("check").style.visibility = "visible"
          }
      }))
     }
    })

  }
  
    let beingChecked=()=>{
      let result=false
      enemyPieces.forEach((piece)=>{
        piece.generatingMovements2();
        piece.generalFiltering2();
        
        if(piece.movementFiltered2[0])
        {piece.movementFiltered2.forEach((movement)=>{
          if(myKing.column===movement[0] && 
            myKing.row===movement[1]){
              
              result=true
            }
        })}
      })
      
        
      return result
  
    }




  let checkMate=()=>{
    let checkMate=true

    myPieces.forEach((piece)=>{

      piece.canMove();
      if(piece.movementFiltered[0]){
        let pieceColumn=piece.column;
        let pieceRow=piece.row;
            piece.movementFiltered.forEach((movement)=>{
              piece.column=movement[0];
              piece.row=movement[1];
             
              if (beingChecked()===false){ checkMate=false;}

            })

        piece.column=pieceColumn;
        piece.row=pieceRow
      }
    })
     if (checkMate===true){
      document.getElementById("mate").style.visibility = "visible"; 
      document.getElementById("checkmate").style.visibility = "visible"}


    return checkMate
  }

let avoidCheck=(piece,destiny)=>{
  let avoidCheck=true

  let originalColumn=piece.column
  let originalRow=piece.row
  piece.column=destiny[0]
  piece.row=destiny[1]
  if(beingChecked()===true){avoidCheck=false;}
  piece.column=originalColumn;
  piece.row=originalRow
  return avoidCheck
  
}


let castling=()=>{

  if(pieceSelected===whiteking && whiteking.counter===1 &&
    JSON.stringify(["G",1])===JSON.stringify(pieceSelected.destiny)
    && h1tower.counter===0){
    
  h1tower.destiny=["F",1];
  h1tower.move()}



  if(pieceSelected===whiteking && whiteking.counter===1 &&
    JSON.stringify(["C",1])===JSON.stringify(pieceSelected.destiny)
    && a1tower.counter===0){
    
      a1tower.destiny=["D",1];
      a1tower.move()
    
    }



  if(pieceSelected===blackking && blackking.counter===1 &&
    JSON.stringify(["F",1])===JSON.stringify(pieceSelected.destiny)
    && a8tower.counter===0){
    
      a8tower.destiny=["E",1];
      a8tower.move()


}




  if(pieceSelected===blackking && blackking.counter===1 &&
    JSON.stringify(["B",1])===JSON.stringify(pieceSelected.destiny)
    && h8tower.counter===0){
    
      h8tower.destiny=["C",1];
      h8tower.move()

}
 

}
  







