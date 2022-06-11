//all logic necessary for movements

//selecting a correct piece for moving

const checkFriends=(cell)=>{

    let myPiece=myPieces.filter((piece)=>{
        return piece.column===cell[0]&&piece.row===cell[1]
    })[0]


   return myPiece
}

const checkEnemies=(cell)=>{

    let enemyPiece=enemyPieces.filter((piece)=>{
        return piece.column===cell[0]&&piece.row===cell[1]
    })[0]


   return enemyPiece
}



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