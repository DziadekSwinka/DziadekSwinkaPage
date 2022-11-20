window.addEventListener('scroll',function()
{
	var scroll=window.scrollY;
	var domek=document.querySelector('#domek');
	domek.style.transform='translateX('+scroll+'px)';
});
function wczytajGalerie()
{
	for(var i=1;i<9;i++)
	{
		$("#g"+i).style="background-image: url('Images/g"+i+".png');";
		$("#g"+i).style="background-size: contain;";
		$("#g"+i).style="background-repeat: no-repeat;";
	}
}