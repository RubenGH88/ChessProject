const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");



let setup=()=>{
pieces.forEach((piece)=>{piece.draw()})

}



let originRow=0
let originColumn
let destinyRow
let destinyColumn

let pieceSelected


let onclick =(e)=>{
    if(originRow!==0){
      console.log("Aqui si tengo origin")
        
        //where i want to go
        destinyRow=locateRow(e)
        destinyColumn=locateColumn(e)
        
        let destiny=[destinyRow,destinyColumn]
     
        pieceSelected.destiny=destiny
       
        
        pieceSelected.move()
        
        console.log(originRow)    
     
        originRow=0;
        originColumn=undefined
        destinyRow=undefined
        destinyColumn=undefined
         
        

       

    }
    
    else if(originRow===0)
    {console.log(originRow)
    {console.log("aqui no tengo origin")
        originRow=locateRow(e)
        originColumn=locateColumn(e)
        
        let selected=[originRow,originColumn];
        
        let pieceSelectedArray = pieces.filter((piece)=>{return piece.column===selected[0]&&piece.row===selected[1]})
       
        pieceSelected=pieceSelectedArray[0]
       console.log("selecciono pieza")
       console.log(originRow)
       console.log(originColumn)}
    }
    

    

}
canvas.addEventListener("click",(e)=>{onclick(e)});

window.addEventListener("load",setup);
