var timeouts= [];
function loadImage()
{
	var number=Math.floor(Math.random()*8);
	setImage(number);
}
function setImage(number)
{
	for (var i=0; i<timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}
	var element=document.getElementById("mainImage");
	element.style.backgroundImage='url("Graphics//g'+number+'.PNG")';
	number=number+1;
	if(number>8)
		number=1;
	timeouts.push(setTimeout(setImage,3000,number));
}