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




document.addEventListener("DOMContentLoaded", function () {
  // Check localStorage for the last visit date
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    // First visit
    displayMessage("Welcome! Let us know if you have any questions.");
  } else {
    const daysBetween = calculateDaysBetween(lastVisit);

    if (daysBetween < 1) {
      // Less than a day
      displayMessage("Back so soon! Awesome!");
    } else {
      // Display number of days between visits
      const daysText = daysBetween === 1 ? "day" : "days";
      displayMessage(`You last visited ${daysBetween} ${daysText} ago.`);
    }
  }
});

function displayMessage(message) {
  // Display the message in the sidebar
  const sidebar = document.querySelector(".sidebar");
  sidebar.innerHTML = `<p>${message}</p>`;
}

function calculateDaysBetween(lastVisit) {
  // Calculate the number of days between visits
  const currentDate = new Date();
  const lastVisitDate = new Date(parseInt(lastVisit));

  const timeDifference = currentDate - lastVisitDate;
  const daysBetween = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  return daysBetween;
}


const msToDays = 84600000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#today");
const christmasElement = document.querySelector("#christmas");
const christmasDateElement = document.querySelector("#christmasDate");
const daysElement = document.querySelector("#daysleft");

// processing
const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
  christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;

