const data = {
  pages: {
    "interactive-art": {
      name: "Interactive Art",
      pages: {
        "ancestors-gate": {
          name: "Ancestors’ Gate",
          year: "2023",
          tags: [
            "crt",
            "projection",
            "microcontroller",
            "vintage tech",
            "indigenous",
          ],
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        "dancing-light-lanterns": {
          name: "Dancing Light Lanterns",
          year: "2022",
          tags: ["microcontroller", "indigenous"],
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        "indigital-arcade": {
          name: "inDigital Arcade",
          year: "2021",
          tags: ["retro gaming", "indigenous"],
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        "trivia-phone": {
          name: "Trivia Phone",
          year: "2021",
          tags: ["projection", "microcontroller", "vintage tech"],
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
      },
    },
    "web-development": {
      name: "Web Development",
      content:
        "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
    },
    "game-development": {
      name: "Game Development",
      content:
        "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
    },
    "workshops-and-education": {
      name: "Workshops + Education",
      content:
        "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
    },
  },
};

const pages = data.pages;
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
let thisPage = "";
let lastPage = "";

function navigateTo(page) {
  //   const nextURL = "/" + page;
  const nextURL = "/";
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);

  lastPage = thisPage;
  thisPage = page;

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
}

function navigateBack() {
  //   const nextURL = "/" + lastPage;
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

  thisPage = lastPage;
  lastPage = "";
}

function createIndexPages(pages, container, parent) {
  for (const pageId in pages) {
    if (pages.hasOwnProperty(pageId)) {
      const page = pages[pageId];
      const div = document.createElement("div");
      const img = document.createElement("img");
      const year = document.createElement("div");
      const label = document.createElement("h2");

      div.className = "hero";
      year.className = "year";
      label.className = "label";

      img.setAttribute("src", "assets/" + parent + "/" + pageId + ".jpg");
      year.innerText = page.year;
      label.innerHTML = page.name;

      div.appendChild(img);
      div.appendChild(year);
      div.appendChild(label);
      div.addEventListener("click", () => navigateTo(pageId));

      container.appendChild(div);
    }
  }
}

function createPages(pages, parent) {
  for (const pageId in pages) {
    if (pages.hasOwnProperty(pageId)) {
      const page = pages[pageId];
      const div = document.createElement("div");

      div.id = pageId;

      if (page.pages) {
        div.className = "page page-lv1 " + pageId;
        createPages(page.pages, pageId);
        createIndexPages(page.pages, div, pageId);
      } else {
        const hero = document.createElement("div");
        const videoMobile = document.createElement("video");
        const videoDesktop = document.createElement("video");
        const article = document.createElement("div");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const year = document.createElement("div");
        const tags = document.createElement("div");
        const tag = document.createElement("span");
        const content = document.createElement("div");

        div.className = "page page-lv2 " + pageId;
        hero.className = "hero";
        videoMobile.className = "img mobile";
        videoMobile.setAttribute(
          "src",
          "assets/" + parent + "/" + pageId + "-mobile.mp4"
        );
        videoMobile.setAttribute("muted", "true");
        videoMobile.setAttribute("autoplay", "true");
        videoMobile.setAttribute("loop", "true");
        videoMobile.setAttribute("playsinline", "true");
        videoDesktop.className = "img desktop";
        videoDesktop.setAttribute(
          "src",
          "assets/" + parent + "/" + pageId + "-desktop.mp4"
        );
        videoDesktop.setAttribute("muted", "true");
        videoDesktop.setAttribute("autoplay", "true");
        videoDesktop.setAttribute("loop", "true");
        videoDesktop.setAttribute("playsinline", "true");
        article.className = "article";
        h1.innerText = page.name;
        h2.innerText = page.name;
        tags.className = "tags";
        tag.className = "tag";
        content.className = "content";
        content.innerHTML = page.content;

        hero.appendChild(videoMobile);
        hero.appendChild(videoDesktop);
        article.appendChild(h1);
        article.appendChild(h2);
        article.appendChild(year);
        article.appendChild(content);
        div.appendChild(hero);
        div.appendChild(article);

        // div.innerText = page.name;
      }

      main.appendChild(div);
    }
  }
}

function createNav() {
  for (const pageId in pages) {
    if (pages.hasOwnProperty(pageId)) {
      const page = pages[pageId];
      const div = document.createElement("div");
      const container = document.createElement("div");
      const label = document.createElement("span");
      const backBtn = document.createElement("span");

      label.addEventListener("click", () => navigateTo(pageId));
      backBtn.addEventListener("click", navigateBack);

      container.classList.add("container");
      label.classList.add("label");
      backBtn.classList.add("back-btn");

      label.innerText = page.name;

      nav.appendChild(div).classList.add("nav-item");
      div.appendChild(container);
      container.appendChild(backBtn);
      container.appendChild(label);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createPages(data.pages);
  createNav();
});

const page = document.querySelector("#ancestors-gate");

page.addEventListener("scroll", function () {
  const distance = page.scrollTop;
  if (distance < 0) distance = 0;
  document.querySelector(".hero .img").style.transform = `translateY(${
    distance * 0.5
  }px)`;
});

window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  if (distance < 0) distance = 0;
  document.querySelector(".hero .img").style.transform = `translateY(${
    distance * 0.5
  }px)`;
});
