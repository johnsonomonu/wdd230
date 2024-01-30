const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleDarkModeButton = document.getElementById("toggleDarkMode");
  const body = document.body;
}
);

const lastModifiedDate = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${lastModifiedDate}`;