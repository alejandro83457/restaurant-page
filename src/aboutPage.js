import myImg from "./about-img.jpg";
import getFooter from "./footer";

export default function getAboutPage() {
  let content = document.querySelector("#content");
  let main = getMain();
  let footer = getFooter();
  content.appendChild(main);
  content.appendChild(footer);
}

function getMain() {
  let main = document.createElement("main");
  main.id = "main-about";
  let textDiv = document.createElement("div");
  let text1 = document.createElement("p");
  let text2 = document.createElement("p");
  let text3 = document.createElement("p");
  let img = new Image();

  img.src = myImg;
  text1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eius nemo cum ipsa, ipsum, porro eum alias doloribus aliquam aut itaque illo dolorem quas! Inventore reprehenderit error eaque nam doloremque.";

  main.appendChild(img);
  textDiv.appendChild(text1);
  textDiv.appendChild(text2);
  textDiv.appendChild(text3);
  main.appendChild(textDiv);
  return main;
}
