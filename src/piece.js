//Creating Piece Class
class Piece {
  constructor(image,row,column) {
    this.row=row
    this.column=column
    this.width = canvas.width*2/24;
    this.height = canvas.height/8-20;
    this.image = image;
    setX(this.column)
    setY(this.row)
   this.x=posX
   this.y=posY
   this.destiny=[]
  };

  draw()
  {ctx.drawImage(this.image,this.x, this.y, this.width, this.height);}

  erase()
  {ctx.clearRect(this.x, this.y, this.width, this.height);}

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
  {super(image,row,column)}
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
  {super(image,row,column)}
}

//Creating the proper Pieces
let a1tower =new Piece(whiteTower,1,"A")
let h1tower =new Piece(whiteTower,1,"H")
let b1horse =new Piece(whiteHorse,1,"B")
let g1horse =new Piece(whiteHorse,1,"G")
let c1bishop =new Piece(whiteBishop,1,"C")
let f1bishop =new Piece(whiteBishop,1,"F")
let whiteking =new Piece(whiteKing,1,"E")
let whitequeen =new Piece(whiteQueen,1,"D")
let a2pawn =new Piece(whitePawn,2,"A")
let b2pawn =new Piece(whitePawn,2,"B")
let c2pawn =new Piece(whitePawn,2,"C")
let d2pawn =new Piece(whitePawn,2,"D")
let e2pawn =new Piece(whitePawn,2,"E")
let f2pawn =new Piece(whitePawn,2,"F")
let g2pawn =new Piece(whitePawn,2,"G")
let h2pawn =new Piece(whitePawn,2,"H")


let a8tower =new Piece(blackTower,8,"A")
let h8tower =new Piece(blackTower,8,"H")
let b8horse =new Piece(blackHorse,8,"B")
let g8horse =new Piece(blackHorse,8,"G")
let c8bishop =new Piece(blackBishop,8,"C")
let f8bishop =new Piece(blackBishop,8,"F")
let blackking =new Piece(blackKing,8,"E")
let blackqueen =new Piece(blackQueen,8,"D")
let a7pawn =new Piece(blackPawn,7,"A")
let b7pawn =new Piece(blackPawn,7,"B")
let c7pawn =new Piece(blackPawn,7,"C")
let d7pawn =new Piece(blackPawn,7,"D")
let e7pawn =new Piece(blackPawn,7,"E")
let f7pawn =new Piece(blackPawn,7,"F")
let g7pawn =new Piece(blackPawn,7,"G")
let h7pawn =new Piece(blackPawn,7,"H")

