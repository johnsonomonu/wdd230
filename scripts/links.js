const baseURL = "https://johnsonomonu.github.io/wdd230/";
const linksURL = "https://johnsonomonu.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log("Fetched data:", data);
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

getLinks();

function displayLinks(weeks) {
  console.log("Weeks data:", weeks);

  const linksContainer = document.getElementById("activity-links");

  weeks.forEach((week) => {
    const weekHeader = document.createElement("h4");
    weekHeader.textContent = week.week;
    linksContainer.appendChild(weekHeader);

    const linksList = document.createElement("ul");

    week.links.forEach((link) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    linksContainer.appendChild(linksList);
  });
}



