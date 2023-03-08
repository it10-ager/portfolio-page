var lamp = document.querySelector('.lamp-light')
var body = document.querySelector('body')
var borderImg = document.querySelector('.avatar > img')
var parent = document.querySelector('.skills .projects div')

lamp.addEventListener('click', ()=>{
	body.classList.toggle('white')
	lamp.classList.toggle('orange')
	borderImg.classList.toggle('border')
	parent.querySelectorAll('.container').forEach(container => container.classList.toggle('lighter'))
})