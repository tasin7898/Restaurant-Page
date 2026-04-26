const hoursArr = [
  { day: "Sunday", hours: "11am – 8pm" },
  { day: "Monday", hours: "10am – 9pm" },
  { day: "Tuesday", hours: "10am – 9pm" },
  { day: "Wednesday", hours: "10am – 9pm" },
  { day: "Thursday", hours: "10am – 10pm" },
  { day: "Friday", hours: "10am – 10pm" },
  { day: "Saturday", hours: "11am – 10pm" }
];


export default function createHome() {
//const content = document.getElementById("content");
const container = document.createElement("div");
container.classList.add("home");

//header
const h1 = document.createElement("h1");
h1.textContent = "Ichiraku Ramen";
const mainDescription = document.createElement("div");
mainDescription.classList.add("description");
mainDescription.textContent = "A small, cozy noodle shop tucked under warm lantern light, famous for rich broth, handmade noodles, and a welcoming atmosphere. It’s the kind of place shinobi and villagers return to after a long day for a hot bowl and good company. The favorite ramen stop of hungry shinobi since the Third Hokage’s era.";

container.appendChild(h1);
container.appendChild(mainDescription);

//hours
const hoursDiv = document.createElement("div");
const hour = document.createElement("div");
hour.classList.add("mini-titles");
hour.textContent = "Hours"
const ul = document.createElement("ul");
hoursArr.forEach(({day, hours}) => {
  const li =  document.createElement("li");
  li.classList.add("description");
  li.textContent = `${day}: ${hours}`;
  ul.appendChild(li);
})
hoursDiv.append(hour, ul);
container.appendChild(hoursDiv);

//location
const locationDiv = document.createElement("div");
const location = document.createElement("div");
location.classList.add("mini-titles");
location.textContent = "Location";
const locDescription = document.createElement("div");
locDescription.classList.add("description");
locDescription.textContent = "12 Lantern Alley, Hidden Leaf Village (Konohagakure)";
locationDiv.append(location, locDescription);
container.appendChild(locationDiv);
return container;
}