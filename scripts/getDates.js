// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${lastModifiedDate}`;
