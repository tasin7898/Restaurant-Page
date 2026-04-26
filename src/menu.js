import {createMenuItems} from "./helper.js";

export default function createMenu() {

  const container = document.createElement("div");
  container.classList.add("menu");
  const h1 = document.createElement("h1");
  h1.textContent = "MENU";

  //Broths
  const h21 = document.createElement("h2");
  h21.textContent = "Broths";

  const Shoyu = createMenuItems("Shoyu Ramen", "Savory soy-based broth with springy noodles, scallions, bamboo shoots, and a soft-boiled egg.", "$9");
  const Miso = createMenuItems("Miso Ramen", "A rich, hearty broth with corn, bean sprouts, butter, and pork slices.", "$10");
  const Garlic = createMenuItems("Spicy Garlic Ramen", "Deep broth with chili oil, garlic, greens, and sliced pork.", "$11");


  //Small Plates
  const h22 = document.createElement("h2");
  h22.textContent = "Small Plates";

  const Gyoza = createMenuItems("Gyoza", "Pan-fried dumplings served with dipping sauce.", "$5");
  const Edamame = createMenuItems("Edamame", "Lightly salted soybeans.", "$4");
  const Tofu = createMenuItems("Spicy Garlic Ramen", "Golden tofu with a savory glaze.", "$5");


  //Drinks
  const h23 = document.createElement("h2");
  h23.textContent = "Drinks";

  const tea = createMenuItems("Green Tea", "Fresh and calming.", "$2");
  const soda = createMenuItems("Ramune Soda", "Cold, fizzy, and sweet.", "$4");
  const lemonade = createMenuItems("House Lemonade", "Bright and refreshing.", "$5");

  container.append(h1, h21, Shoyu, Miso, Garlic, h22, Gyoza, Edamame, h23, tea, soda, lemonade);
  return container;
}