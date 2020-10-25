// index

    // Verander attribute positie naar 0 voor alle .scroll elementen
	const scrollContainers = document.querySelectorAll(".scroll");
	for (let index = 0; index < scrollContainers.length; index++) {
		const element = scrollContainers[index];
		element.setAttribute("pos", 0);	
	}

	// Click op linker pijltje, 
	// get the slider element en verlaag positie atribuut met 1 als het kan
	// and call scrollToChild()
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

	// Click op recht pijltje 
	// get slider element en verhoog positie atribuut met 1 als het kan
	// and call scrollToChild()
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

	// update slider element naar juiste positie
	function scrollToChild(parent) {
		const pos = parent.getAttribute("pos");
		const child = parent.children[pos];
		child.parentNode.scrollLeft = child.offsetLeft;
	}

// product

    // Dropdown info en Product titel verzamelen van de product pagina
	const dropdown = document.querySelector("select#option");
	const productTitle = document.querySelector("h1");

	// switched id element naar actief 
	function toggleActive(id) {
		const favoriet = document.querySelector("#" + id);
		favoriet.toggleAttribute("active");
	}

	// listener voor verandering van het dropdown element
	dropdown.addEventListener("change", function () {
		var name = this.target;
		productTitle.textContent = this.value;
	});
