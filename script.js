var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByClassName('clickable-item');
var removeButtons = document.querySelectorAll(".remove-item-button");

document.addEventListener('DOMContentLoaded', updateClickable);
document.addEventListener('DOMContentLoaded', removeButton);

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


function removeButton() {
	removeButtons = document.querySelectorAll('.remove-item-button');
	removeButtons.forEach(val => val.addEventListener('click', function() {
		val.parentElement.remove();
	}));
}

function updateClickable() {
	listItems = document.querySelectorAll('.clickable-item');
	listItems.forEach(val => {
		if (!val.hasEventListner) {
			val.hasEventListner = true;
			val.addEventListener("click", toggleClass('done'));
		}
	})
}

function createListElement() {
	var li = document.createElement("li");
	var p = document.createElement('p');
	var button = document.createElement('button');

	p.appendChild(document.createTextNode(input.value));
	p.classList.add('inline-element');
	p.classList.add('clickable-item');

	button.appendChild(document.createTextNode('Remove'));
	button.classList.add('remove-item-button');

	li.appendChild(p);
	li.appendChild(button);
	ul.appendChild(li);

	updateClickable();
	removeButton();

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function inputLength() {
	return input.value.length;
}

function toggleDoneClass() {
	this.classList.toggle('done');
}

function toggleClass(className) {
	return function () {
		this.classList.toggle(className);
	}
}