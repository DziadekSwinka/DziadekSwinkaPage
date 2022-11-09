var item1=document.getElementById('menu1');
var item2=document.getElementById('menu2');
var item3=document.getElementById('menu3');

item1.addEventListener("mouseover",func(),false);
item2.addEventListener("mouseover",func(),false);
item3.addEventListener("mouseover",func(),false);

function func()
{
	document.getElementById("dymek").style.display = "block";
}