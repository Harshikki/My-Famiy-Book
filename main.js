var familyimages= ["Book Cover.png","Rajesh.jpg","Bhargavi.jpg","Harshika.jpg","Bittu.jpg"]
var familynames=  ["My Family","Father name: Rajesh","Mother name: Bhargavi","Me: Harshika","Brother name: Hitesh"]
var next1=0;
function next(){
  if (next1 ==5){
   
     next1=0;
  } 
  
  document.getElementById("family").src=
  familyimages[next1] ;
  document.getElementById("familyNames").innerHTML=
  familynames[next1] ;
   next1++ ; 
}
