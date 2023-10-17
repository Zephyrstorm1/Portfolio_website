// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const darkModeSwitch = document.getElementById("dark-mode-switch");
const body = document.body;

darkModeSwitch.addEventListener("change", () => {
  if (darkModeSwitch.checked) {
    // Enable dark mode
    body.classList.add("dark-mode");
  } else {
    // Disable dark mode
    body.classList.remove("dark-mode");
  }
});
