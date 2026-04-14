const countryGrid = document.getElementById("country-grid");
const regionGrid = document.getElementById("region-grid");

const regionsByCountry = {
  africa: [
    {
      name: "Ghana",
      functional: true,
      url: "ghana-dashboard.html"
    }
  ],
  "central-america": [
    {
      name: "Mexico",
      functional: true,
      url: "mexico-dashboard.html"
    }
  ],
  caribbean: [
    {
      name: "Coming soon",
      functional: false
    }
  ],
  brazil: [
    {
      name: "Coming soon",
      functional: false
    }
  ]
};

countryGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-country]");
  if (!card) return;

  document.querySelectorAll(".location-card").forEach(item => {
    item.classList.remove("selected");
  });

  card.classList.add("selected");

  const selectedCountry = card.dataset.country;
  renderRegions(selectedCountry);
});

function renderRegions(countryKey) {
  const regions = regionsByCountry[countryKey];

  if (!regions || regions.length === 0) {
    regionGrid.innerHTML = `
      <div class="empty-state">No regions available yet.</div>
    `;
    return;
  }

  regionGrid.innerHTML = regions.map(region => {
    if (region.functional) {
      return `
        <button class="region-card" onclick="goToDashboard('${region.url}')">
          ${region.name}
        </button>
      `;
    }

    return `
      <div class="region-card placeholder">
        ${region.name}
      </div>
    `;
  }).join("");
}

function goToDashboard(url) {
  window.location.href = url;
}