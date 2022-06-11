//Creating Piece Class
class Piece {
  constructor(image,row,column) {
    this.column=column
    this.row=row
    this.width = canvas.width*2/24;
    this.height = canvas.height/8-20;
    this.image = image;
    setX(this.column)
    setY(this.row)
   this.x=posX
   this.y=posY
   this.destiny=[]
   this.naturalMovements=[]
   this.moves=[]
   this.status="live"
   this.posibleMoves=[]
   this.movementFiltered
  };

  draw()
  {ctx.drawImage(this.image,this.x, this.y, this.width, this.height);}

  erase()
  {ctx.clearRect(this.x-10, this.y-10, this.width+20, this.height+20);}

  move()
  {this.erase()
   
 //this is for changing coordenates   
  this.column=this.destiny[0]
  this.row=this.destiny[1]
  setX(this.column)
  setY(this.row)
  this.x=posX
  this.y=posY
  this.draw()
  
}

canMove()
{
return true

}
}




//Creating subclasses
class Pawn extends Piece{
  constructor(image,row,column)
  {super(image,row,column)}

}






class Tower extends Piece{
  constructor(image,row,column)
  {super(image,row,column)}
}

class Horse extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
  this.moves=[[1,2],[1,-2],[-1,2],[-1,-2],
[2,1],[2,-1],[-2,1],[-2,-1]]

}
canMove(){
  this.moves.forEach((move)=>{
    this.naturalMovements.push([numToLet(letToNum(this.column)+move[0]),this.row+move[1]])
  })
    this.movementFiltered=this.naturalMovements.filter((movement)=>{
     
      return this.destiny[0]==movement[0]&&this.destiny[1]==movement[1]
      
   })
   if(this.movementFiltered[0]===undefined){return false}
    return true
    this.naturalMovements=[]
      }
    
}

class Bishop extends Piece{
  constructor(image,row,column)
  {super(image,row,column)}
}

class Queen extends Piece{
  constructor(image,row,column)
  {super(image,row,column)}
}

class King extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
  this.moves=[[1,0],[1,-1],[0,-1],
[-1,-1],[-1,0],[-1,1],[0,1],[1,1]]}
}

//Creating the proper Pieces
let a1tower =new Tower(whiteTower,1,"A")
let h1tower =new Tower(whiteTower,1,"H")
let b1horse =new Horse(whiteHorse,1,"B")
let g1horse =new Horse(whiteHorse,1,"G")
let c1bishop =new Bishop(whiteBishop,1,"C")
let f1bishop =new Bishop(whiteBishop,1,"F")
let whiteking =new King(whiteKing,1,"E")
let whitequeen =new Queen(whiteQueen,1,"D")
let a2pawn =new Pawn(whitePawn,2,"A")
let b2pawn =new Pawn(whitePawn,2,"B")
let c2pawn =new Pawn(whitePawn,2,"C")
let d2pawn =new Pawn(whitePawn,2,"D")
let e2pawn =new Pawn(whitePawn,2,"E")
let f2pawn =new Pawn(whitePawn,2,"F")
let g2pawn =new Pawn(whitePawn,2,"G")
let h2pawn =new Pawn(whitePawn,2,"H")


let a8tower =new Tower(blackTower,8,"A")
let h8tower =new Tower(blackTower,8,"H")
let b8horse =new Horse(blackHorse,8,"B")
let g8horse =new Horse(blackHorse,8,"G")
let c8bishop =new Bishop(blackBishop,8,"C")
let f8bishop =new Bishop(blackBishop,8,"F")
let blackking =new King(blackKing,8,"E")
let blackqueen =new Queen(blackQueen,8,"D")
let a7pawn =new Pawn(blackPawn,7,"A")
let b7pawn =new Pawn(blackPawn,7,"B")
let c7pawn =new Pawn(blackPawn,7,"C")
let d7pawn =new Pawn(blackPawn,7,"D")
let e7pawn =new Pawn(blackPawn,7,"E")
let f7pawn =new Pawn(blackPawn,7,"F")
let g7pawn =new Pawn(blackPawn,7,"G")
let h7pawn =new Pawn(blackPawn,7,"H")

