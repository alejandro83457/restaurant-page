import getHomePage from "./homePage";
import getDishesPage from "./dishesPage";

// Call initial home page.
getHomePage();

// Get elements from DOM
let content = document.querySelector("#content");
let homeLink = document.querySelector("#home");
let dishesLink = document.querySelector("#dishes");
let aboutLink = document.querySelector("#about");

// ---------Event listeners for links ---------
homeLink.addEventListener("click", (e) => {
  console.log("Home clicked");
  removeElements();
  getHomePage();
});

dishesLink.addEventListener("click", (e) => {
  console.log("Dishes clicked");
  removeElements();
  getDishesPage();
});

aboutLink.addEventListener("click", () => {
  console.log("About clicked");
  removeElements();
});
// ---------------------------------------------

// Will remove all children on the page.
function removeElements() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
