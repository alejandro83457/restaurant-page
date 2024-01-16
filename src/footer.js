export default function getFooter() {
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
