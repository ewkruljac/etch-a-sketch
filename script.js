var createGrid = function(){
   for(i=0; i<=255; i++){
       var grids = document.createElement("Div");
       grids.id = "gridID";

        grids.style.width = "64px";
        grids.style.height = "64px";
        grids.style.background = "red";
        grids.style.display = "inline-block";
        grids.style.padding = "0px";

       document.getElementById("container").appendChild(grids);
        }
        
        $("div div").mouseover(function(){
        $(this).css("background-color", "yellow");
        });
}

var resetGrid = function(){

document.getElementById("container").innerHTML = "";

  for(i=0; i<=255; i++){
        var grids = document.createElement("Div");
        grids.id = "gridID";
        
        grids.style.width = "64px";
        grids.style.height = "64px";
        grids.style.background = "red";
        grids.style.display = "inline-block";
        grids.style.padding = "0px";
        
        document.getElementById("container").appendChild(grids);    
        
        $("div div").mouseover(function(){
        $(this).css("background-color", "yellow");
        });  
   }
}

var customGrid = function(){

document.getElementById("container").innerHTML = "";

var numSquares = prompt("Create a new X by X grid.  What size for X? (max 18)");

    while(numSquares > 24 || numSquares < 1){
        var numSquares = prompt("Please choose a valid number: 1-24")
    }
    
    var totalSquares = numSquares * numSquares;
    var gridSize = 100/numSquares;
    
        for(i=0; i<totalSquares; i++){

            var grids = document.createElement("Div");
            grids.id = "gridID";

            grids.style.width = (gridSize) + "%";
            grids.style.height = (gridSize) + "%";
            grids.style.background = "red";
            grids.style.display = "inline-block";
            grids.style.padding = "0px";

            document.getElementById("container").appendChild(grids); 
       
            $("div div").mouseover(function(){
            $(this).css("background-color", "yellow");
            });       
        }  
}

var randomColors = function(){

document.getElementById("container").innerHTML = "";

var numSquares = prompt("Create a new X by X grid.  What size for X? (max 18)");

    while(numSquares > 24 || numSquares < 1){
        var numSquares = prompt("Please choose a valid number: 1-24")
    }
    
    var totalSquares = numSquares * numSquares;
    var gridSize = 100/numSquares;
    
        for(i=0; i<totalSquares; i++){

            var grids = document.createElement("Div");
            grids.id = "gridID";

            grids.style.width = (gridSize) + "%";
            grids.style.height = (gridSize) + "%";
            grids.style.background = "red";
            grids.style.display = "inline-block";
            grids.style.padding = "0px";

            document.getElementById("container").appendChild(grids); 
       
            $("div div").mouseover(function(){
            $(this).css("background-color", createRandomColors());
            });       
        }
}

var createRandomColors = function(){
    return '#'+(Math.floor(Math.random()*16777216)&0xFFFFFF).toString(16);    
}
