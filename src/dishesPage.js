import myImg from "./dishes-img.jpg";
import getFooter from "./footer";

export default function getDishesPage() {
  let content = document.querySelector("#content");
  let main = getMain();
  let footer = getFooter();
  content.appendChild(main);
  content.appendChild(footer);
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
