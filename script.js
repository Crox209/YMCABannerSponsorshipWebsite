const bannerOptions = [
  {
    zone: "A",
    title: "Single Outfield Banner",
    price: 1000,
    displayPrice: "$1,000",
    description: "Custom full-color banner with annual commitment. Placement in a single outfield location.",
    badge: null,
    zoneClass: "zone-a"
  },
  {
    zone: "C",
    title: "High Traffic Area",
    price: 1500,
    displayPrice: "$1,500",
    description: "Choose from: Main walkway to Pod 1, Main walkway to Pod 2, or Main walkway from batting cage to fields.",
    badge: "High Visibility",
    zoneClass: "zone-c"
  },
  {
    zone: "D",
    title: "Premium Parking Lot Placement",
    price: 2000,
    displayPrice: "$2,000",
    description: "Premium fence placement along the parking lot — visible to everyone entering through the main gate.",
    badge: "Premium",
    zoneClass: "zone-d"
  },
  {
    zone: "B",
    title: "Full Pod Package",
    price: 3200,
    displayPrice: "$3,200",
    description: "A banner in every field within a pod. Includes a 20% discount — effectively $800 per banner.",
    badge: "Best Value",
    zoneClass: "zone-b"
  }
];

const container = document.getElementById("options");

bannerOptions.forEach(option => {
  const card = document.createElement("div");
  card.className = `card ${option.zoneClass}`;

  card.innerHTML = `
    <div class="zone-letter">${option.zone}</div>
    ${option.badge ? `<span class="badge">${option.badge}</span>` : ""}
    <h3>${option.title}</h3>
    <p class="price">${option.displayPrice} <span>/ year</span></p>
    <p>${option.description}</p>
  `;

  container.appendChild(card);
});