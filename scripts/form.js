function checkPassword() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords must match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

function updateRating() {
  var ratingDisplay = document.getElementById("ratingDisplay");
  var pageRating = document.getElementById("pageRating").value;
  ratingDisplay.textContent = pageRating;
}
