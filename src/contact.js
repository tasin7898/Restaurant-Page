import {createContact} from "./helper.js";

export default function createContactInfo() {
  
  const container = document.createElement("div");
  container.classList.add("contact");
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";

  const p1 = createContact("Taro", "Owner", "6767-6767-69", "taro@ichikawa.com");
  const p2 = createContact("Mika", "Head Chef", "555-555-0102", "mika@ichikawa.com");
  const p3 = createContact("Ren", "Server", "555-555-0103", "ren@ichikawa.com");
  container.append(h1, p1, p2, p3);
  return container;
}