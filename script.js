// Data for each architectural feat
const feats = [
  {
    name: "Taj Mahal",
    location: "Agra, India",
    built: "1632–1653",
    style: "Mughal",
    image: "images/taj-mahal.jpg",
    description:
      "An ivory-white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. A UNESCO World Heritage Site and one of the New Seven Wonders of the World."
  },
  {
    name: "Colosseum",
    location: "Rome, Italy",
    built: "70–80 AD",
    style: "Roman",
    image: "images/colosseum.jpg",
    description:
      "The largest amphitheatre ever built, capable of holding 50,000–80,000 spectators. Used for gladiatorial contests and public spectacles in ancient Rome."
  },
  {
    name: "Burj Khalifa",
    location: "Dubai, UAE",
    built: "2004–2010",
    style: "Neo-futurist",
    image: "images/burj-khalifa.jpg",
    description:
      "The world's tallest building at 828 metres. Features 163 floors and was designed by Adrian Smith of Skidmore, Owings & Merrill."
  },
  {
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    built: "1959–1973",
    style: "Expressionist",
    image: "images/sydney-opera-house.jpg",
    description:
      "Designed by Danish architect Jørn Utzon, its sail-like shells have become an icon of Australia. A UNESCO World Heritage Site and one of the most distinctive buildings of the 20th century."
  },
  {
    name: "Great Wall of China",
    location: "China",
    built: "7th century BC – 17th century AD",
    style: "Fortification",
    image: "images/great-wall.jpg",
    description:
      "A series of fortifications built across the historical northern borders of China to protect against invasions. Stretches over 21,000 km and is a UNESCO World Heritage Site."
  },
  {
    name: "Sagrada Família",
    location: "Barcelona, Spain",
    built: "1882 – present",
    style: "Catalan Modernism",
    image: "images/sagrada-familia.jpg",
    description:
      "Antoni Gaudí's magnum opus, still under construction after more than 140 years. Its intricate façades and towering spires blend Gothic and Art Nouveau styles."
  }
];

// Render all feats into the gallery
const gallery = document.getElementById("gallery");

feats.forEach(feat => {
  const card = document.createElement("div");
  card.className = "feat";

  card.innerHTML = `
    <img src="${feat.image}" alt="${feat.name}" onerror="this.src='https://via.placeholder.com/400x220?text=Image+Coming+Soon'">
    <div class="feat-content">
      <h2>${feat.name}</h2>
      <p class="feat-meta">📍 ${feat.location} &nbsp;·&nbsp; 🏗️ ${feat.built} &nbsp;·&nbsp; 🎨 ${feat.style}</p>
      <p>${feat.description}</p>
    </div>
  `;

  gallery.appendChild(card);
});
