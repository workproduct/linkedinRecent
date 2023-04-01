const dropdownSelector = "[aria-label='Sort order dropdown button']";

const clickDropdown = () => {
  const dropdown = document.querySelector(dropdownSelector);
  if (dropdown) {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    dropdown.dispatchEvent(event);
  }
};

const selectRecentOption = () => {
  const dropdown = document.querySelector('.artdeco-dropdown__content-inner');
  if (dropdown) {
    const items = dropdown.querySelectorAll('.artdeco-dropdown__item');
    for (let i = 0; i < items.length; i++) {
      if (items[i].textContent.includes('Recent')) {
        const event = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        items[i].dispatchEvent(event);
        break;
      }
    }
  }
};

window.addEventListener("load", () => {
  clickDropdown();
  setTimeout(selectRecentOption, 2000); // Wait for the dropdown to open before clicking on "recent"
});