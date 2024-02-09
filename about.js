console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`We have successfully recieved your submission!`)
}

function imgMouseover() {
	alert(`You just hovered over the duck...you now have his coolness`)
}

ducky.addEventListener('mouseover', imgMouseover)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);