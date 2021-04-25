setTimeout(myFunc, 2000);

function myFunc() {
	let el = document.createElement('p');
	el.innerHTML = 'This is my first Github project';
	el.style.color = '#2F4F4F';
	document.body.append(el);
}