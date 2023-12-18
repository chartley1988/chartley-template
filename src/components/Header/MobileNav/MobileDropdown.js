const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("mobile-menu");
const menuOptions = JSON.parse(menu.dataset.options);

let isOpen = false;

menuButton?.addEventListener("click", handleClickMenuButton);

// Gets any menu options that have children and require a dropdown
const submenus = menuOptions.filter((entry) =>
	entry.hasOwnProperty("children")
);

submenus.forEach((entry) => {
	const button = document.getElementById(`${entry.title}-dropdown`);
	const submenu = button.parentElement.children[1];

	console.log(button, submenu);

	button.addEventListener("click", (event) => {
		submenu.classList.toggle("hidden");
	});
});

function handleClickMenuButton(e) {
	e.stopPropagation();
	if (isOpen) {
		menu?.classList.add("mobile-hidden");
		isOpen = false;
	} else {
		document.addEventListener("click", handleClickOutside);
		menu?.classList.remove("mobile-hidden");
		isOpen = true;
	}
}

function handleClickOutside(event) {
	event.stopPropagation();
	console.log(event.target.closest("#mobile-menu"));
	if (isOpen) {
		if (
			event.target.closest("#mobile-menu") === null &&
			event.target.closest("#menu-button") === null
		) {
			document.removeEventListener("click", handleClickOutside);
			menu.classList.add("mobile-hidden");
			isOpen = false;
		}
	}
}
