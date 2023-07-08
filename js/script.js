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
  main.className = "";
  header.classList.add("navigated");
  if (lastPage) {
    main.classList.add("show-lv2");
  } else {
    nav.className = "";
    nav.classList.add("show-" + thisPage);
    main.classList.add("show-lv1");
  }
  main.classList.add("show-" + thisPage);

  console.log("thisPage: " + thisPage + ", lastPage: " + lastPage);
}

function navigateBack() {
  const nextURL = "/";
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);

  if (!lastPage) {
    header.classList.remove("navigated");
    nav.className = "";
    nav.classList.add("from-" + thisPage);
    main.classList.remove("show-lv1");
  } else {
    main.classList.remove("show-lv2");
    main.classList.add("show-lv1", "from-lv2");
    main.classList.add("show-" + lastPage);
  }
  main.classList.remove("show-" + thisPage);
  //   document.querySelector("#" + thisPage).classList.add("visited");

  thisPage = lastPage;
  lastPage = "";

  console.log("thisPage: " + thisPage + ", lastPage: " + lastPage);
}

document.addEventListener("DOMContentLoaded", () => {
  for (const key in data.pages) {
    if (Object.prototype.hasOwnProperty.call(data.pages, key)) {
      const { name } = data.pages[key];
      const div = document.createElement("div");
      const container = document.createElement("div");
      const label = document.createElement("span");
      const backBtn = document.createElement("span");

      label.addEventListener("click", () => navigateTo(key));
      backBtn.addEventListener("click", navigateBack);

      container.classList.add("container");
      label.classList.add("label");
      backBtn.classList.add("back-btn");

      label.innerHTML = name;

      nav.appendChild(div).classList.add("nav-item");
      div.appendChild(container);
      container.appendChild(backBtn);
      container.appendChild(label);
    }
  }
});
