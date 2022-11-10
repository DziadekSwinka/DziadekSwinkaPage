var item1=document.getElementById('menu1');
var item2=document.getElementById('menu2');
var item3=document.getElementsByClassName('.menu3');

if(item1){
	item1.addEventListener("mouseover",function(){document.getElementById("dymek").style.display = "block";});
}
if(item2){
	item2.addEventListener("mouseover",function(){document.getElementById("dymek").style.display = "block";});
}
//if(item3){
	//item3.addEventListener("mouseover",function(){document.getElementById("dymek").style.display = "block";});
//}