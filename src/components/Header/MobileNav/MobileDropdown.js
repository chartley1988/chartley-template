const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("mobile-menu");
const menuOptions = JSON.parse(menu.dataset.options);

let isOpen = false;

menuButton?.addEventListener("click", handleClickMenuButton);

// Gets any menu options that have children and require a dropdown
const submenus = menuOptions.filter((entry) =>
  entry.hasOwnProperty("children"),
);

submenus.forEach((entry) => {
  const button = document.getElementById(`${entry.title}-dropdown`);
  const submenu = button.parentElement.children[1];

  button.addEventListener("click", (event) => {
    submenu.classList.toggle("hidden");
  });
});

function handleClickMenuButton(e) {
  e.stopPropagation();
  if (isOpen) {
    closeAllMenus();
  } else {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    menu?.classList.remove("hidden");
    isOpen = true;
  }
}

function handleClickOutside(event) {
  event.stopPropagation();
  if (isOpen) {
    if (
      event.target.closest("#mobile-menu") === null &&
      event.target.closest("#menu-button") === null
    ) {
      closeAllMenus();
    }
  }
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    closeAllMenus();
    document.removeEventListener("keydown", handleEscapeKey);
    menuButton.focus();
  }
}

function closeAllMenus() {
  submenus.forEach((entry) => {
    const button = document.getElementById(`${entry.title}-dropdown`);
    const submenu = button.parentElement.children[1];
    submenu.classList.add("hidden");
  });

  document.removeEventListener("click", handleClickOutside);
  menu.classList.add("hidden");
  isOpen = false;
}
