// dice game
function check(){


   var b=Math.random()*6+1
   var a= Math.floor(b)
   var loc1='img/img'+a+ '.jpg'
   document.querySelectorAll("img")[0].src = loc1



   var c=Math.random()*6+1
   var d= Math.floor(c)
      var loc2='img/img'+ d+ '.jpg'
   document.querySelectorAll("img")[1].src = loc2

   if(a>d){
    document.querySelector("#h2").innerHTML = "a wins"
   }
   else if(a<d){
    document.querySelector("#h2").innerHTML = "b wins"
    }
    else {
        document.querySelector("#h2").innerHTML = "draw"
    }

}