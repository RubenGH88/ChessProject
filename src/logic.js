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