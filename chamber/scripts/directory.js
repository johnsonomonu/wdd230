document.addEventListener("DOMContentLoaded", function () {
  const membersContainer = document.getElementById("members-container");

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
});
