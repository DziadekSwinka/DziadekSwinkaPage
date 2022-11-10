window.addEventListener('scroll',function()
{
	var scroll=window.scrollY;
	var domek=document.querySelector('#domek');
	domek.style.transform='translateX('+scroll+'px)';
});