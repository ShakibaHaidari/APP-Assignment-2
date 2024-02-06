document.querySelector("#image1").onclick = function(){
    let total = document.querySelector("#total").textContent;
    total = parseInt(total)
    total = total + 200;
    document.querySelector("#total").textContent = total;
   }
  
    document.querySelector("#image2").onclick = function(){
    let total = document.querySelector("#total").textContent;
    total = parseInt(total)
    total = total +300;
    document.querySelector("#total").textContent = total;
    }
   
    document.querySelector("#image3").onclick = function(){
    let total = document.querySelector("#total").textContent;
    total = parseInt(total)
    total = total + 230;
    console.log(total)
    document.querySelector("#total").textContent = total;
   }