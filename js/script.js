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

function navigateTo(i) {
  const nextURL = "/" + data.pages[i].slug;
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);
  body.className = "navigated step-" + i;
}

function navigateToHome() {
  const nextURL = "/";
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);
  body.className = "";
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i < data.pages.length; i++) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    let backBtn = document.createElement("span");
    span.setAttribute("onclick", "navigateTo(" + i + ")");
    backBtn.setAttribute("onclick", "navigateToHome()");
    span.classList.add("label");
    backBtn.classList.add("back-btn");
    span.innerHTML = data.pages[i].name;
    nav.appendChild(div).classList.add("nav-item");
    div.appendChild(backBtn);
    div.appendChild(span);
  }
});
