const data = {
  pages: {
    "interactive-art": {
      name: "Interactive Art",
      pages: {
        "ancestors-gate": {
          name: "Ancestors' Gate",
          year: "2023",
          tags: [
            "crt",
            "projection",
            "microcontroller",
            "vintage tech",
            "indigenous",
          ],
          content: "Lorem ipsum",
        },
      },
    },
    "web-development": {
      name: "Web Development",
      content: "Lorem ipsum",
    },
    "game-development": {
      name: "Game Development",
      content: "Lorem ipsum",
    },
    "workshops-and-education": {
      name: "Workshops + Education",
      content: "Lorem ipsum",
    },
  },
};

const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
let thisPage = "";
let lastPage = "";

function navigateTo(i) {
  const nextURL = "/";
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);

  lastPage = thisPage;
  thisPage = i;

  body.className = "";
  header.classList.add("navigated");
  if (lastPage) {
    body.classList.remove("navigated-back");
    body.classList.add("show-page-lv2");
  } else {
    nav.classList.add("show-" + thisPage);
  }
  body.classList.add("show-" + thisPage);

  console.log("thisPage: " + thisPage + ", lastPage: " + lastPage);
}

function navigateBack() {
  const nextURL = "/";
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);

  body.classList.add("show-" + lastPage);
  body.classList.remove("show-" + thisPage);
  body.classList.remove("show-page-lv2");
  if (!lastPage) {
    header.classList.remove("navigated");
    body.classList.add("navigated-back");
    body.classList.add("from-" + thisPage);
    nav.className = "";
  }
  thisPage = lastPage;
  lastPage = "";
  console.log("thisPage: " + thisPage + ", lastPage: " + lastPage);
}

document.addEventListener("DOMContentLoaded", () => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === "object") {
        for (let nestedKey in data[key]) {
          if (data[key].hasOwnProperty(nestedKey)) {
            // console.log(nestedKey + ": " + data[key][nestedKey].name);
            let name = data[key][nestedKey].name;
            let div = document.createElement("div");
            let container = document.createElement("div");
            let label = document.createElement("span");
            let backBtn = document.createElement("span");
            label.setAttribute("onclick", "navigateTo('" + nestedKey + "')");
            container.classList.add("container");
            label.classList.add("label");
            backBtn.classList.add("back-btn");
            backBtn.setAttribute("onclick", "navigateBack()");
            label.innerHTML = name;
            nav.appendChild(div).classList.add("nav-item");
            div.appendChild(container);
            container.appendChild(backBtn);
            container.appendChild(label);
          }
        }
      } else {
        console.log(key + ": " + data[key]);
      }
    }
  }
});
