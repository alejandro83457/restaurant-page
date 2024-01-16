import getHomePage from "./homePage";

let div = document.querySelector("#content");
let homePage = getHomePage();

div.appendChild(homePage);
