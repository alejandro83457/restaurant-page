// Function creates the whole home page.
export default function getHomePage() {
  let div = document.createElement("div");
  let main = document.createElement("main");
  let footer = document.createElement("footer");

  let header = getHeader();

  div.appendChild(header);
  div.appendChild(main);
  div.appendChild(footer);

  return div;
}

// Function creates the header element.
function getHeader() {
  let header = document.createElement("header");
  let heading = document.createElement("h1");
  let nav = getNavBar();

  heading.textContent = "Restaurant Name";

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
  let a1 = document.createElement("a");
  let a2 = document.createElement("a");
  let a3 = document.createElement("a");

  a1.href = "";
  a2.href = "";
  a3.href = "";
  a1.textContent = "link 1";
  a2.textContent = "link 2";
  a3.textContent = "link 3";

  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  nav.appendChild(ul);

  return nav;
}
