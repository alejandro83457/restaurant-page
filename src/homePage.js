import myImg from "./main-img.jpg";

// Function creates the whole home page.
export default function getHomePage() {
  let div = document.querySelector("#content");

  let header = getHeader();
  let main = getMain();
  let footer = getFooter();

  div.appendChild(header);
  div.appendChild(main);
  div.appendChild(footer);
}

// Function creates the header element.
function getHeader() {
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
  let a1 = document.createElement("a");
  let a2 = document.createElement("a");
  let a3 = document.createElement("a");

  li1.id = "home";
  li2.id = "dishes";
  li3.id = "about";

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

function getMain() {
  let main = document.createElement("main");
  let text1 = document.createElement("p");
  let text2 = document.createElement("p");
  let text3 = document.createElement("p");
  let img = new Image();

  img.src = myImg;
  text1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque.";
  text2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque.";
  text3.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque.";

  main.appendChild(img);
  main.appendChild(text1);
  main.appendChild(text2);
  main.appendChild(text3);
  return main;
}

function getFooter() {
  let footer = document.createElement("footer");
  let imgCreds = document.createElement("div");
  let myCreds = document.createElement("div");
  let myLink = document.createElement("a");
  let imgLink = document.createElement("a");
  let unsplashLink = document.createElement("a");

  myLink.textContent = "alejandro83457";
  myLink.href = "https://github.com/alejandro83457";
  myCreds.textContent = "Made by ";
  myCreds.appendChild(myLink);

  imgLink.textContent = "Jigar Panchal";
  imgLink.href =
    "https://unsplash.com/@brave4_heart?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  unsplashLink.textContent = "Unsplash";
  unsplashLink.href =
    "https://unsplash.com/photos/a-black-and-red-background-with-wavy-lines-iV8qibFoGMQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  imgCreds.textContent = "Photo by ";
  imgCreds.appendChild(imgLink);

  footer.appendChild(imgCreds);
  footer.appendChild(myCreds);
  return footer;
}
