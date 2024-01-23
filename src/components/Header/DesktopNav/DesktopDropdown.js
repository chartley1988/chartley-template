const menu = document.getElementById("desktop-menu");
const menuOptions = JSON.parse(menu.dataset.options);

// Gets any menu options that have children and require a dropdown
const submenus = menuOptions.filter((entry) =>
  entry.hasOwnProperty("children"),
);

closeAllMenus();

submenus.forEach((entry) => {
  const button = document.getElementById(`${entry.title}-dropdown-desktop`);
  const submenu = document.getElementById(`${entry.title}-menu-desktop`);
  submenu.classList.add("hidden");
  entry.isOpen = false;

  button.addEventListener("click", (event) => {
    handleClickMenuButton(event, entry);
  });
});

function handleClickMenuButton(e, entry) {
  e.stopPropagation();
  const menuElement = document.getElementById(`${entry.title}-menu-desktop`);
  if (entry.isOpen) {
    closeAllMenus();
  } else {
    closeAllMenus();
    document.addEventListener("click", (e) => {
      handleClickOutside(e, entry);
    });
    document.addEventListener("keydown", (event) => {
      handleEscapeKey(event, entry);
    });
    menuElement?.classList.remove("hidden");
    entry.isOpen = true;
  }
}

function handleClickOutside(event, entry) {
  event.stopPropagation();
  if (entry.isOpen) {
    if (
      event.target.closest(`#${entry.title}-menu-desktop`) === null &&
      event.target.closest(`#${entry.title}-dropdown-desktop`) === null
    ) {
      closeAllMenus();
      document.removeEventListener("click", (e) => {
        handleClickOutside(e, entry);
      });
    }
  }
}

function handleEscapeKey(event, entry) {
  event.stopPropagation();
  const menuButton = document.getElementById(`${entry.title}-dropdown-desktop`);
  if (event.key === "Escape") {
    closeAllMenus();
    document.removeEventListener("keydown", handleEscapeKey);
    menuButton.focus();
  }
}

function closeAllMenus() {
  submenus.forEach((entry) => {
    const button = document.getElementById(`${entry.title}-dropdown-desktop`);
    const submenu = button.parentElement.children[1];
    submenu.classList.add("hidden");
    entry.isOpen = false;
  });

  document.removeEventListener("click", handleClickOutside);
}
