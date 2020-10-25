// Variabelen aangeven
const scrollContainers = document.querySelectorAll(".scroll");
for (let index = 0; index < scrollContainers.length; index++) {
	const element = scrollContainers[index];
	element.setAttribute("pos", 0);	
}

const dropdown = document.querySelector("select#option");
const productTitle = document.querySelector("h1");

// Postitie 1 lager zetten op de scrollToChild()
function scrollToLeft(id) {
	var parent = document.querySelector('#' + id);
	console.log(parent);
	var pos = parent.getAttribute("pos");
	pos = parseInt(pos);
	if (pos > 0) {
		parent.setAttribute("pos", pos - 1);
		scrollToChild(parent);
	}
}

// Postitie 1 hoger zetten op de scrollToChild()
function scrollToRight(id) {
	var parent = document.querySelector('#' + id);
	console.log(parent);
	var pos = parent.getAttribute("pos");
	pos = parseInt(pos);
	if (pos < parent.children.length - 2) {
		parent.setAttribute("pos", pos + 1);
		scrollToChild(parent);
	}
}

// Naar het huidige element scrollen
function scrollToChild(parent) {
	const pos = parent.getAttribute("pos");
	const child = parent.children[pos];
	child.parentNode.scrollLeft = child.offsetLeft;
}

// toggles active for given id
function toggleActive(id) {
	const favoriet = document.querySelector("#" + id);
	favoriet.toggleAttribute("active");
}

dropdown.addEventListener("change", function () {
	var name = this.target;
	productTitle.textContent = this.value;
});

