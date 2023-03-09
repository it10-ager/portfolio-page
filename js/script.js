var lamp = document.querySelector('.lamp-light')
var body = document.querySelector('body')
var borderImg = document.querySelector('.avatar > img')
var parent = document.querySelector('.skills .projects div')
var social = document.querySelector('.contact .social')
var saveTheme = localStorage.getItem('theme');

if (saveTheme){
	body.classList.add(saveTheme);
	lamp.classList.toggle('white', saveTheme === 'dark');
	borderImg.classList.toggle('border', saveTheme === 'dark');
	parent.querySelectorAll('.container').forEach(container => container.classList.toggle('darker', saveTheme === 'dark'));
	parent.querySelectorAll('.container .links .proj-btn').forEach(btn => btn.classList.toggle('lighter', saveTheme === 'dark'));
	social.querySelectorAll('.contact .social div').forEach(hover => hover.classList.toggle('hover-light', saveTheme === 'dark'));
}

lamp.addEventListener('click', ()=>{
	body.classList.toggle('dark')
	lamp.classList.toggle('white')
	borderImg.classList.toggle('border')
	parent.querySelectorAll('.container').forEach(container => container.classList.toggle('darker'))
	parent.querySelectorAll('.container .links .proj-btn').forEach(btn => btn.classList.toggle('lighter'))
	social.querySelectorAll('.contact .social div').forEach(hover => hover.classList.toggle('hover-light'))
	
	var currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
	localStorage.setItem('theme', currentTheme);
})