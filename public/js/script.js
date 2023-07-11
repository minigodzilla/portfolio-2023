const data = {
  pages: {
    "interactive-art": {
      title: "Interactive Art",
      pages: {
        "ancestors-gate": {
          title: "Ancestors’ Gate",
          subtitle: "A portal for past generations to speak to us",
          year: "2023",
          tags: [
            "crt",
            "projection",
            "microcontroller",
            "vintage tech",
            "indigenous",
          ],
          heroVideo: true,
          content:
            "<p>The story of Indigenous language and cultural near-extinction, and later renaissance, has played out in parallel among Indigenous tribes, nations and peoples in North and South America, Australia and the Pacific, and elsewhere around the world. We can all point to a past generation of our respective peoples, within memory, who spoke our languages maternally.</p><p>Imagine yourself as one of the people of that generation -- perhaps someone in your own family who you knew, or know about, or someone in the Native community where you're from, or even their ancestors beyond that.</p><p>Imagine you're gifted with a time portal they can use to send something through to this generation. A way to communicate directly with us.</p><p>What kind of story, song, message or knowledge would you send?</p>",
        },
        "dancing-light-lanterns": {
          title: "Dancing Light Lanterns",
          subtitle: "A portal for past generations to speak to us",
          year: "2022",
          tags: ["microcontroller", "indigenous"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        "indigital-arcade": {
          title: "inDigital Arcade",
          subtitle: "A portal for past generations to speak to us",
          year: "2021",
          tags: ["retro gaming", "indigenous"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        "trivia-phone": {
          title: "Trivia Phone",
          subtitle: "A portal for past generations to speak to us",
          year: "2021",
          tags: ["projection", "microcontroller", "vintage tech"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
      },
    },
    "web-development": {
      title: "Web Development",
      pages: {
        "red-nucleus": {
          title: "Red Nucleus",
          subtitle: "A portal for past generations to speak to us",
          year: "2022",
          tags: ["microcontroller", "indigenous"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        "klick-health": {
          title: "Klick Health",
          subtitle: "A portal for past generations to speak to us",
          year: "2021",
          tags: ["retro gaming", "indigenous"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        stackadapt: {
          title: "StackAdapt",
          subtitle: "A portal for past generations to speak to us",
          year: "2019",
          tags: ["projection", "microcontroller", "vintage tech"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        diply: {
          title: "Diply",
          subtitle: "A portal for past generations to speak to us",
          year: "2017",
          tags: ["projection", "microcontroller", "vintage tech"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        infusion: {
          title: "Infusion",
          subtitle: "A portal for past generations to speak to us",
          year: "2016",
          tags: ["projection", "microcontroller", "vintage tech"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
        nventive: {
          title: "nventive",
          subtitle: "A portal for past generations to speak to us",
          year: "2013",
          tags: ["projection", "microcontroller", "vintage tech"],
          heroVideo: false,
          content:
            "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
        },
      },
    },
    "game-development": {
      title: "Game Development",
      content:
        "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos itaque labore optio nulla qui laboriosam, reprehenderit a deserunt! Eius nesciunt fugit ad neque assumenda doloribus voluptatum vitae praesentium dolorem.</p>",
    },
    "workshops-and-education": {
      title: "Workshops + Education",
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
  const nextURL = "/" + page;
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
  if (lastPage) {
    document.querySelector("#" + lastPage).classList.remove("active");
    document.querySelector("#" + lastPage).classList.add("visited");
  }
  document.querySelector("#" + thisPage).classList.add("active");
  console.log("thisPage:", thisPage);
  console.log("lastPage:", lastPage);
}

function navigateBack() {
  const nextURL = "/" + lastPage;
  const nextTitle = "";
  const nextState = {};

  window.history.pushState(nextState, nextTitle, nextURL);

  body.className = "";
  if (!lastPage) {
    header.classList.remove("navigated");
    nav.className = "";
    nav.classList.add("from-" + thisPage);
    main.classList.remove("show-lv1");
  } else {
    main.classList.remove("show-lv2");
    main.classList.add("show-lv1", "from-lv2");
    document.querySelector("#" + lastPage).classList.add("active");
  }
  document.querySelector("#" + thisPage).classList.remove("active");
  document.querySelector("#" + thisPage).classList.add("visited");

  console.log("thisPage:", thisPage);
  console.log("lastPage:", lastPage);

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
      label.innerHTML = page.title;

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
        div.className = "page page-lv2 " + pageId;

        if (page.heroVideo) {
          hero = `
            <div class="hero">
              <video class="img mobile" src="assets/${parent}/${pageId}.mp4" muted autoplay loop playsinline></video>
              <video class="img desktop" src="assets/${parent}/${pageId}-desktop.mp4" muted autoplay loop playsinline></video>
            </div>
            `;
        } else {
          hero = `
            <div class="hero">
              <img class="img" src="assets/${parent}/${pageId}.jpg" />
            </div>
            `;
        }

        const article = `
          <div class="article">
            <h1>${page.title}</h1>
            <h2>${page.subtitle}</h2>
            <div class="year">${page.year}</div>
            <div class="tags">
              <span class="tag">crt</span>
              <span class="tag">projector</span>
              <span class="tag">microcontroller</span>
              <span class="tag">vintage tech</span>
              <span class="tag">indigenous</span>
            </div>
            <div class="content">
              ${page.content}
            </div>
          </div>
        `;
        div.insertAdjacentHTML("afterbegin", hero);
        div.insertAdjacentHTML("beforeend", article);
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

      label.innerText = page.title;

      nav.appendChild(div).classList.add("nav-item");
      div.appendChild(container);
      container.appendChild(backBtn);
      container.appendChild(label);
    }
  }
}

function addEventListeners() {
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
}

function urlCheck() {
  const urlParam = new URLSearchParams(window.location.search)
    .toString()
    .split("=")[0];

  if (urlParam) {
    let lv1Page;
    let lv2Page;
    body.className = "ext-ref";

    function findMatchingPage(pages, urlParam) {
      if (pages.hasOwnProperty(urlParam)) {
        lv1Page = urlParam;
        thisPage = lv1Page;
        return;
      }

      for (const key in pages) {
        const page = pages[key];
        if (typeof page === "object" && page.pages) {
          if (page.pages.hasOwnProperty(urlParam)) {
            lv1Page = key;
            lv2Page = urlParam;
            thisPage = lv2Page;
            lastPage = lv1Page;
            return;
          }

          findMatchingPage(page.pages, urlParam, key);
        }
      }
    }

    findMatchingPage(data.pages, urlParam);

    console.log("lv1Page:", lv1Page);
    console.log("lv2Page:", lv2Page);
    console.log("thisPage:", thisPage);
    console.log("lastPage:", lastPage);

    // replace address bar URL
    const nextURL = "/" + urlParam;
    const nextTitle = "";
    const nextState = {};

    window.history.replaceState(nextState, nextTitle, nextURL);

    // populate all appropriate classes
    header.classList.add("navigated");
    nav.classList.add("show-" + lv1Page);
    main.classList.add("show-lv2");
    document.querySelector("#" + urlParam).classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createPages(data.pages);
  createNav();
  urlCheck();
  addEventListeners();
});
