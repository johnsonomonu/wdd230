// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${lastModifiedDate}`;



const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleDarkModeButton = document.getElementById("toggleDarkMode");
  const body = document.body;

  // Check if user has a dark mode preference stored
  const darkMode = localStorage.getItem("darkMode") === "enabled";

  // Set initial theme based on user's preference
  if (darkMode) {
    body.classList.add("dark-mode");
  }

  // Toggle dark mode when the button is clicked
  toggleDarkModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    // Save user preference to localStorage
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  });
});



