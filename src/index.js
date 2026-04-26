import "./styles.css";
import createContactInfo from "./contact.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
//console.log("ggs");
//alert("ready?");


//const clear = () => content.innerHTML = "";

const buttonIds = ["home", "menu", "contact"];
const renderHeader = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  buttonIds.forEach(item => {
    const button = document.createElement("button");
    button.type= "button";
    button.value = item;
    button.id = item;
    button.textContent = item[0].toUpperCase() + item.slice(1);
    nav.appendChild(button);
  });
  header.appendChild(nav);
  return header;
}

document.body.appendChild(renderHeader());

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

const el = {
  homeBtn: document.getElementById("home"),
  menuBtn: document.getElementById("menu"),
  contactBtn: document.getElementById("contact"),
}
el.homeBtn.addEventListener("click", () => content.replaceChildren(createHome()));

el.menuBtn.addEventListener("click", () => content.replaceChildren(createMenu()));

el.contactBtn.addEventListener("click", () => content.replaceChildren(createContactInfo()));