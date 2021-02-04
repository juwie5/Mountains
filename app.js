var y = document.querySelector(".mybtn").onclick = function(){myFunction()};
 
 function myFunction(){
     var x = document.querySelector(".view")
     if(x.style.display === "none"){
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
 }
