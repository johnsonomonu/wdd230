// Function to validate the join form
function validateJoinForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var position = document.getElementById("position").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var organization = document.getElementById("organization").value;
  var membershipLevel = document.getElementById("membershipLevel").value;

  // Validate each field
  if (
    firstName === "" ||
    lastName === "" ||
    position === "" ||
    email === "" ||
    mobile === "" ||
    organization === "" ||
    membershipLevel === ""
  ) {
    alert("Please fill out all required fields.");
    return false;
  }

  // Additional validation logic can be added here if needed

  return true;
}

// Function to add timestamp to hidden field before form submission
function addTimestamp() {
  var timestampField = document.getElementById("timestamp");
  timestampField.value = new Date().toISOString();
}

// Add event listener to the form for form submission
document
  .getElementById("joinForm")
  .addEventListener("submit", function (event) {
    if (!validateJoinForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    } else {
      addTimestamp(); // Add timestamp before form submission
    }
  });

// Function to fetch and display dynamic weather information
function displayWeather() {
  // Example API endpoint for fetching weather data
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=yourcity&appid=2944340db1fb5d54954628ec3a9b354f";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract relevant weather information from the API response
      var temperature = data.main.temp;
      var weatherDescription = data.weather[0].description;
      var forecast = data.weather[0].main;

      // Display the weather information on the website
      document.getElementById("temperature").textContent = temperature;
      document.getElementById("weatherDescription").textContent =
        weatherDescription;
      document.getElementById("forecast").textContent = forecast;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Function to fetch and display current events
function displayCurrentEvents() {
  // Example code to fetch current events data from an API or database
  var currentEvents = [
    { title: "Event 1", description: "Description for Event 1" },
    { title: "Event 2", description: "Description for Event 2" },
    { title: "Event 3", description: "Description for Event 3" },
  ];

  // Display current events on the website
  var eventsList = document.getElementById("currentEventsList");
  currentEvents.forEach((event) => {
    var listItem = document.createElement("li");
    listItem.textContent = `${event.title}: ${event.description}`;
    eventsList.appendChild(listItem);
  });
}

// Function to load and display member spotlights from a JSON data source
function displayMemberSpotlights() {
  // Example JSON data for member spotlights
  var memberSpotlights = [
    {
      name: "Member 1",
      description: "Description for Member 1",
      image: "image1.jpg",
    },
    {
      name: "Member 2",
      description: "Description for Member 2",
      image: "image2.jpg",
    },
    {
      name: "Member 3",
      description: "Description for Member 3",
      image: "image3.jpg",
    },
  ];

  // Display member spotlights on the website
  var spotlightsContainer = document.getElementById("memberSpotlights");
  memberSpotlights.forEach((member) => {
    var spotlightCard = document.createElement("div");
    spotlightCard.classList.add("spotlight-card");

    var image = document.createElement("img");
    image.src = member.image;
    image.alt = member.name;
    spotlightCard.appendChild(image);

    var details = document.createElement("div");
    details.classList.add("spotlight-details");

    var name = document.createElement("h3");
    name.textContent = member.name;
    details.appendChild(name);

    var description = document.createElement("p");
    description.textContent = member.description;
    details.appendChild(description);

    spotlightCard.appendChild(details);

    spotlightsContainer.appendChild(spotlightCard);
  });
}

// Function to handle user visits and display days between visits
function handleUserVisits() {
  var lastVisitDate = localStorage.getItem("lastVisitDate");
  var currentDate = new Date().toLocaleDateString();

  if (lastVisitDate) {
    var daysBetweenVisits = Math.floor(
      (new Date(currentDate) - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24)
    );
    document.getElementById("daysBetweenVisits").textContent =
      daysBetweenVisits;
  } else {
    document.getElementById("daysBetweenVisits").textContent = "First visit!";
  }

  localStorage.setItem("lastVisitDate", currentDate);
}

// Function to initialize the website
function initializeWebsite() {
  validateJoinForm(); // Validate join form on submit
  displayWeather(); // Display weather information
  displayCurrentEvents(); // Display current events
  displayMemberSpotlights(); // Display member spotlights
  handleUserVisits(); // Handle user visits
}

// Call initializeWebsite() when the page is fully loaded
window.onload = initializeWebsite;
