let cellwidth=canvas.width/8

let rows=[1,2,3,4,5,6,7,8]

let columns=["A","B","C","D","E","F","G","H"]


let initialX=cellwidth/6
let initialY=10

let setX=(column)=>{
    switch (column) {
        case "A":
          posX=initialX
          break;
        case "B":
            posX=initialX+cellwidth
          break;  
        case "C":
            posX=initialX+cellwidth*2
          break;
        case "D":
            posX=initialX+cellwidth*3
          break;
        case "E":
            posX=initialX+cellwidth*4
          break;
        case "F":
            posX=initialX+cellwidth*5
            
          break;
        case "G":
            posX=initialX+cellwidth*6
          break;   
        case "H":
            posX=initialX+cellwidth*7
          break; 
        
    
      }
}


let setY=(row)=>{
    switch (row) {
        case 8:
          posY=initialY
          break;
        case 7:
            posY=initialY+cellwidth
          break;  
        case 6:
            posY=initialY+cellwidth*2
          break;
        case 5:
            posY=initialY+cellwidth*3
          break;
        case 4:
            posY=initialY+cellwidth*4
          break;
        case 3:
            posY=initialY+cellwidth*5
          break;
        case 2:
            posY=initialY+cellwidth*6
          break;   
        case 1:
            posY=initialY+cellwidth*7
          break; 
        
    
      }
}



