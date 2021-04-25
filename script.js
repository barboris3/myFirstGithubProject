setTimeout(myFunc, 2000);

function myFunc() {
	let el = document.createElement('p');
	el.innerHTML = 'This is my first Github project';
	document.body.append(el);
}