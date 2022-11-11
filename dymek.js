const item1=document.getElementById('menu1');
const item2=document.getElementById('menu2');
const item3=document.getElementsByClassName('.menu3');

if(item1){
	alert("BBB");
	item1.addEventListener("mouseover",function(){document.getElementById("dymek").style.display = "block";});
}
if(item2){
	item2.addEventListener("mouseover",function(){document.getElementById("dymek").style.display = "block";});
}
//if(item3){
	//item3.addEventListener("mouseover",function(){document.getElementById("dymek").style.display = "block";});
//}