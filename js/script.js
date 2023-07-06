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
      name: "Workshops &amp; Education",
      slug: "workshops-and-education",
      content: "Lorem ipsum",
    },
  ],
};

const body = document.querySelector("body");
const nav = document.querySelector("nav");

function navigateTo(i) {
  // window.history.pushState = '/' + data.pages[i].slug;
  // Current URL: https://my-website.com/page_a
  const nextURL = "/" + data.pages[i].slug;
  const nextTitle = "";
  const nextState = {};

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, nextURL);
  body.className = "step-" + i;
}

document.addEventListener("DOMContentLoaded", () => {
  body.className = "step-0";
  for (let i = 0; i < data.pages.length; i++) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    div.setAttribute("onclick", "navigateTo(" + i + ")");
    nav.appendChild(div).classList.add("nav-item");
    div.appendChild(span).innerHTML = data.pages[i].name;
  }
});
