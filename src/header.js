// Function creates the header element.
export default function getHeader() {
  let header = document.createElement("header");
  let heading = document.createElement("h1");
  let nav = getNavBar();

  heading.textContent = "Page Name";

  header.appendChild(heading);
  header.appendChild(nav);

  return header;
}

// Function creates the nav bar element.
function getNavBar() {
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  li1.id = "home";
  li2.id = "dishes";
  li3.id = "about";

  li1.textContent = "Home";
  li2.textContent = "Dishes";
  li3.textContent = "About";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  nav.appendChild(ul);

  return nav;
}
