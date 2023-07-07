const data = {
  pages: [
    {
      name: "Interactive Art",
      slug: "interactive-art",
      content: "Lorem ipsum",
    },
    {
      name: "Web Development",
      slug: "web-development",
      content: "Lorem ipsum",
    },
    {
      name: "Game Development",
      slug: "game-development",
      content: "Lorem ipsum",
    },
    {
      name: "Workshops + Education",
      slug: "workshops-and-education",
      content: "Lorem ipsum",
    },
  ],
};

const body = document.querySelector("body");
const nav = document.querySelector("nav");
let lastPage = 0;

function navigateTo(i) {
  const pageID = i - 1;
  const nextURL = "/" + data.pages[pageID].slug;
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);
  body.className = "navigated show-page-" + i;
  lastPage = i;
}

function navigateToHome() {
  const nextURL = "/";
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);
  body.className = "navigated-back from-page-" + lastPage;
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < data.pages.length; i++) {
    let pageID = i + 1;
    let div = document.createElement("div");
    let container = document.createElement("div");
    let label = document.createElement("span");
    let backBtn = document.createElement("span");
    label.setAttribute("onclick", "navigateTo(" + pageID + ")");
    backBtn.setAttribute("onclick", "navigateToHome()");
    container.classList.add("container");
    label.classList.add("label");
    backBtn.classList.add("back-btn");
    label.innerHTML = data.pages[i].name;
    nav.appendChild(div).classList.add("nav-item");
    div.appendChild(container);
    container.appendChild(backBtn);
    container.appendChild(label);
  }
});
