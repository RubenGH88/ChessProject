//Creating Piece Class
class Piece {
  constructor(image,row,column) {
    this.status="alive"
    this.column=column   
    this.row=row
    this.width = canvas.width*2/24;
    this.height = canvas.height/8-20;
    this.image = image;
    //setX and setY, are the functions that gives the starting point to start drawing
    setX(this.column)
    setY(this.row)
    //posX and posY are the results from the previous functions
   this.x=posX
   this.y=posY
   this.destiny=[]  //destiny is given by the position of the mouse
   this.moves=[]  //each type of move each piece can made
   this.numberOfMovements
   this.posibleDestiny=[]
   this.naturalMovements=[]
   this.movementFiltered
   
  };

  draw(){
   if (this.status==="alive") 
    ctx.drawImage(this.image,this.x, this.y, this.width, this.height);}

  erase() 
  {ctx.clearRect(this.x-10, this.y-10, this.width+20, this.height+20);}

  move()
  {this.erase()
   
 //this is for changing coordenates for the new drawing
  this.column=this.destiny[0]
  this.row=this.destiny[1]
  setX(this.column)
  setY(this.row)
  this.x=posX
  this.y=posY



  this.draw()




  
}


// this expressions filter the movements that goes outside the board

generalFiltering(){
  
  this.movementFiltered=this.naturalMovements.filter((movement)=>{
  
    return movement[1]>0 && movement[1]<9 && movement[0] && !checkFriends(movement)
    
  })
  console.log(this)
  console.log(this.movementFiltered)
  this.naturalMovements=[]

}

//function that generate the valid movements for each piece

generatingMovements(){
  this.moves.forEach((move)=>{
    
    this.posibleDestiny=
    [numToLet(letToNum(this.column)+move[0]),this.row+move[1]];
    
    for(let i =0; i<this.numberOfMovements; i++){
      
      
      if(!checkEnemies(this.posibleDestiny) && 
      !checkFriends(this.posibleDestiny)){
        
        this.copy=JSON.parse(JSON.stringify(this.posibleDestiny))
        this.naturalMovements.push(this.copy);
        
        this.posibleDestiny[0]=numToLet(letToNum(this.posibleDestiny[0])+move[0])
        this.posibleDestiny[1]=this.posibleDestiny[1]+move[1]
        
        
        
      }
    }
    if (myPieces.includes(this)){

    if(checkEnemies(this.posibleDestiny || !checkFriends(this.posibleDestiny))){
      this.naturalMovements.push(this.posibleDestiny)}

      else if(enemyPieces.includes(this))
      {if(checkFriends(this.posibleDestiny || !checkEnemies(this.posibleDestiny))){
        this.naturalMovements.push(this.posibleDestiny)}


      }

    }
    
  })
  
}




canMove()  
{
  
  this.generatingMovements()
  
  this.generalFiltering()
  
  let var1=JSON.stringify(this.movementFiltered)
  let var2=JSON.stringify(this.destiny)
  
  
  if(var1.includes(var2)){return true}
  
  else return false
  
  
}
}




//Here i am creating every subclass needed



class Pawn extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
    this.moveToKill=[[-1,1],[1,1]]
    this.moveToWalk=[[0,1],[0,2]]
    this.killingMovement=[]
    this.walkingMovement=[]
  }
  
  
  
  generatingMovements(){
  if(enemyPieces.includes(this)){this.moveToWalk=[[0,-1],[0,-2]];
this.moveToKill=[[-1,-1],[1,-1]]}
  
    

  
    this.moveToKill.forEach((move)=>{
      this.killingMovement.push([numToLet(letToNum(this.column)+move[0]),this.row+move[1]])
    })
    
    this.killingMovement.forEach((move)=>{
    if(checkEnemies(move)){this.naturalMovements.push(move)}
    })
   
  this.moveToWalk.forEach((move)=>{
    this.walkingMovement.push([numToLet(letToNum(this.column)+move[0]),this.row+move[1]])
  })
  
  if(!checkEnemies(this.walkingMovement[0])){
    this.naturalMovements.push(this.walkingMovement[0]);
  
    if(this.row===2 || this.row===7){
      if(!checkEnemies(this.walkingMovement[1])){
  
      this.naturalMovements.push(this.walkingMovement[1])}
    }
  }
}


}




class Tower extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
  this.numberOfMovements=7
this.moves=[[1,0],[0,1],[-1,0],[0,-1]]}
}

class Horse extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
    this.numberOfMovements=1
  this.moves=[[1,2],[1,-2],[-1,2],[-1,-2],
[2,1],[2,-1],[-2,1],[-2,-1]]

}

}

class Bishop extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
  this.numberOfMovements=7
  this.moves=[[1,1],[1,-1],[-1,1],[-1,-1]]}
}

class Queen extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
  this.numberOfMovements=7
this.moves=[[1,1],[1,-1],[-1,1],[-1,-1],
[1,0],[0,1],[-1,0],[0,-1]]}
}

class King extends Piece{
  constructor(image,row,column)
  {super(image,row,column)
    
    this.numberOfMovements=1
  this.moves=[[1,0],[1,-1],[0,-1],
[-1,-1],[-1,0],[-1,1],[0,1],[1,1]]}




}

//Here i am creating each piece


let h1tower =new Tower(whiteTower,1,"H")
let a1tower =new Tower(whiteTower,1,"A")
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

