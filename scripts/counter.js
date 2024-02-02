if (typeof Storage !== "undefined") {
  // Retrieve the current visit count from localStorage
  let visitCount = localStorage.getItem("pageVisitCount");

  // If it's the first visit, set the count to 1
  if (visitCount === null) {
    visitCount = 1;
  } else {
    // If not the first visit, increment the count
    visitCount = parseInt(visitCount) + 1;
  }

  // Update the localStorage with the new count
  localStorage.setItem("pageVisitCount", visitCount);

  // Display the visit count on the page
  document.getElementById("visitCounter").textContent = visitCount;
} else {
  // If localStorage is not supported, display a message
  document.getElementById("visitCounter").textContent =
    "LocalStorage not supported";
}
