
export function createMenuItems(title, contentDes, price){
  const wrapper = document.createElement("div");
  const heading = document.createElement("div");
  heading.classList.add("mini-titles");
  heading.textContent = title;
  const desscription = document.createElement("div");
  desscription.classList.add("description");
  desscription.textContent = contentDes;
  const itemPrice = document.createElement("div");
  itemPrice.classList.add("price");
  itemPrice.textContent = price;
  wrapper.append(heading, desscription);
  return wrapper;
}

export function createContact(title, chefX, phoneX, emailX){
  const wrapper = document.createElement("div");
  const heading = document.createElement("div");
  heading.classList.add("mini-titles");
  heading.textContent = title;
  const chef = document.createElement("div");
  chef.classList.add("description");
  chef.textContent = chefX;
  const phone = document.createElement("div");
  phone.classList.add("description");
  phone.textContent = phoneX;
  const email = document.createElement("div");
  email.classList.add("description");
  email.textContent = emailX;
  wrapper.append(heading, chef, phone, email);
  return wrapper;
}