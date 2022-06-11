//this is for making the setup and draw all the pieces

let cellwidth=canvas.width/8

let initialX=cellwidth/6
let initialY=10


//setX is for setting the initial x positions
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

//setY is for setting the initial y positions
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


//This are variables for simplify the next codes
let start8 =0
let end8=cellwidth
let start7=end8
let end7=start7+cellwidth
let start6 =end7
let end6=start6+cellwidth
let start5=end6
let end5=start5+cellwidth
let start4 =end5
let end4=start4+cellwidth
let start3=end4
let end3=start3+cellwidth
let start2 =end3
let end2=start2+cellwidth
let start1=end2
let end1=start1+cellwidth


let startA =0
let endA=cellwidth
let startB=end8
let endB=start7+cellwidth
let startC =end7
let endC=start6+cellwidth
let startD=end6
let endD=start5+cellwidth
let startE =end5
let endE=start4+cellwidth
let startF=end4
let endF=start3+cellwidth
let startG =end3
let endG=start2+cellwidth
let startH=end2
let endH=start1+cellwidth



//the functions for locate a



let locateColumn=(e)=>{

  if(e.clientX>startA&&e.clientX<endA)
  {return "A"}
  if(e.clientX>startB&&e.clientX<endB)
  {return "B"}
  if(e.clientX>startC&&e.clientX<endC)
  {return "C"}
  if(e.clientX>startD&&e.clientX<endD)
  {return "D"}
  if(e.clientX>startE&&e.clientX<endE)
  {return "E"}
  if(e.clientX>startF&&e.clientX<endF)
  {return "F"}
  if(e.clientX>startG&&e.clientX<endG)
  {return "G"}
  if(e.clientX>startH&&e.clientX<endH)
  {return "H"}
}


let locateRow=(e)=>{
 
  if(e.clientY>start1&&e.clientY<end1)
  {return 1}
  if(e.clientY>start2&&e.clientY<end2)
  {return 2}
  if(e.clientY>start3&&e.clientY<end3)
  {return 3}
  if(e.clientY>start4&&e.clientY<end4)
  {return 4}
  if(e.clientY>start5&&e.clientY<end5)
  {return 5}
  if(e.clientY>start6&&e.clientY<end6)
  {return 6}
  if(e.clientY>start7&&e.clientY<end7)
  {return 7}
  if(e.clientY>start8&&e.clientY<end8)
  {return 8}
}
