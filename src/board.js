
//making sets of total pieces, needed for setting

let pieces=[a1tower, h1tower, b1horse, g1horse,
    c1bishop, f1bishop, whiteking, whitequeen,
    a2pawn, b2pawn, c2pawn, d2pawn, e2pawn,
    f2pawn, g2pawn,  h2pawn, 
    a8tower, h8tower, b8horse, g8horse,
    c8bishop, f8bishop, blackking, blackqueen,
    a7pawn, b7pawn, c7pawn, d7pawn, e7pawn,
    f7pawn, g7pawn,  h7pawn]

//making sets of white and black pieces, needed for movements

let whitePieces=[a1tower, h1tower, b1horse, g1horse,
    c1bishop, f1bishop, whiteking, whitequeen,
    a2pawn, b2pawn, c2pawn, d2pawn, e2pawn,
    f2pawn, g2pawn,  h2pawn]
 




let blackPieces=[a8tower, h8tower, b8horse, g8horse,
    c8bishop, f8bishop, blackking, blackqueen,
    a7pawn, b7pawn, c7pawn, d7pawn, e7pawn,
    f7pawn, g7pawn,  h7pawn]



//function that invert columns, necessary for turn around the board

let changeColumn = (column)=>{
    switch (column) {
        case "A":
          return "H"
          break;
        case "B":
            return "G"
          break;  
        case "C":
            return "F"
          break;
        case "D":
            return "E"
          break;
        case "E":
            return "D"
          break;
        case "F":
            return "C"
            
          break;
        case "G":
            return "B"
          break;   
        case "H":
            return "A"
          break; 
        
    
      }
}

//function that invert rows, necessary for turn around the board

let changeRow = (row)=>{
    switch (row) {
        case 1:
          return 8
          break;
        case 2:
            return 7
          break;  
        case 3:
            return 6
          break;
        case 4:
            return 5
          break;
        case 5:
            return 4
          break;
        case 6:
            return 3
            
          break;
        case 7:
            return 2
          break;   
        case 8:
            return 1
          break; 
        
    
      }
}


//function that turn around the board

let turnAround =()=>{

   
pieces.forEach((piece)=>{
  piece.erase()
    piece.row=changeRow(piece.row);
    piece.column=changeColumn(piece.column);
    setX(piece.column);
    setY(piece.row);
piece.x=posX;
piece.y=posY;
setup()

})



}

