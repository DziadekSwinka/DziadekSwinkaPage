var timeouts= [];
function loadImage()
{
	var number=Math.floor(Math.random()*11);
	setImage(number);
}
function setImage(number)
{
	for (var i=0; i<timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}
	var element=document.getElementById("mainImage");
	element.setAttribute("src","Graphics//g"+number+".PNG");
	number=number+1;
	if(number>11)
		number=1;
	timeouts.push(setTimeout(setImage,4000,number));
}