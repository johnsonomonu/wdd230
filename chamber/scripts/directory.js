document.addEventListener("DOMContentLoaded", function () {
  const membersContainer = document.getElementById("members-container");
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");

  let isGridView = true; // Flag to track current view state

  // Load members data from JSON
  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
      // Populate member cards or list items
      renderMembers(data);
    })
    .catch((error) => console.error("Error loading members:", error));

  function renderMembers(members) {
    membersContainer.innerHTML = ""; // Clear previous content

    members.forEach((member) => {
      const memberElement = document.createElement("div");
      memberElement.classList.add("member");

      // Customize member display according to your needs
      memberElement.innerHTML = `
        <h2>${member.name}</h2>
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
        <!-- Add other member information here -->
      `;

      membersContainer.appendChild(memberElement);
    });
  }

  // Function to toggle between grid and list views
  function toggleView() {
    if (isGridView) {
      membersContainer.classList.remove("members-list");
      membersContainer.classList.add("members-grid");
    } else {
      membersContainer.classList.remove("members-grid");
      membersContainer.classList.add("members-list");
    }
    isGridView = !isGridView; // Toggle the view state
  }

  // Add event listener to the toggle buttons
  gridViewBtn.addEventListener("click", toggleView);
  listViewBtn.addEventListener("click", toggleView);
});
