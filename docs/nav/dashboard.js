const roleSelect = document.getElementById("user-role");
const fisherPanel = document.getElementById("fisher-panel");
const touristGuidePanel = document.getElementById("tourist-guide-panel");
const othersPanel = document.getElementById("others-panel");
const emptyRoleState = document.getElementById("empty-role-state");

const toggleButtons = document.querySelectorAll(".toggle-btn");
const currentMapPanel = document.getElementById("current-map-panel");
const outlookMapPanel = document.getElementById("outlook-map-panel");

roleSelect.addEventListener("change", (event) => {
  const value = event.target.value;

  fisherPanel.classList.add("hidden");
  touristGuidePanel.classList.add("hidden");
  othersPanel.classList.add("hidden");
  emptyRoleState.classList.add("hidden");

  if (value === "fisher") {
    fisherPanel.classList.remove("hidden");

    // 👇 SCROLL AUTOMÁTICO
    fisherPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  } else if (value === "tourist-guide") {
    touristGuidePanel.classList.remove("hidden");

  } else if (value === "others") {
    othersPanel.classList.remove("hidden");

  } else {
    emptyRoleState.classList.remove("hidden");
  }
});

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedMap = button.dataset.map;

    if (selectedMap === "current") {
      currentMapPanel.classList.remove("hidden");
      outlookMapPanel.classList.add("hidden");
    } else {
      currentMapPanel.classList.add("hidden");
      outlookMapPanel.classList.remove("hidden");
    }
  });
});

const map = L.map("regional-map").setView([5.5, -1.0], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const lowIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="width:14px;height:14px;background:#7fc98f;border-radius:50%;border:2px solid white;"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

const moderateIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="width:14px;height:14px;background:#f1c75b;border-radius:50%;border:2px solid white;"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

const highIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="width:14px;height:14px;background:#e67272;border-radius:50%;border:2px solid white;"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9]
});

L.marker([19.2, -96.1], { icon: moderateIcon })
  .addTo(map)
  .bindTooltip("Moderate conditions near coast");

L.marker([20.9, -89.6], { icon: highIcon })
  .addTo(map)
  .bindTooltip("High accumulation concept");

L.marker([18.5, -88.3], { icon: lowIcon })
  .addTo(map)
  .bindTooltip("Low current presence");