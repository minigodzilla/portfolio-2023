// data object of the site's content
const data = {
  pages: {
    "interactive-art": {
      title: "Interactive Art",
      pages: {
        "ancestors-gate": {
          title: "Ancestors’ Gate",
          formattedTitle: "Ancestors’<br/>Gate",
          subtitle: "A portal<br/>for past generations<br/>to speak to us",
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
            "<p>The story of Indigenous language and cultural near-extinction, and later renaissance, has played out in parallel among the Indigenous peoples in North and South America, Australia and the Pacific, and elsewhere around the world. We can all point to a past generation of our respective peoples, within memory, who spoke our languages maternally.</p><p>Imagine yourself as one of the people of that generation -- perhaps someone in your own family who you knew, or know about, or someone in the Native community where you're from, or even their ancestors beyond that.</p><p>Imagine you're gifted with a time portal you can use to send something through to our generation. A way to communicate directly with us.</p><p>What kind of story, song, message or knowledge would you send to us?</p><p>My new art installation, Ancestors' Gate, will be this bridge across generations. It will be an exercise in immersion using vintage technology. It will be a new way to share Indigenous language, culture and storytelling using technology and interactive art -- a way which is meant to leave a lasting impression.</p><p>I will be collecting old recordings of storytelling, folk songs, spoken word, and the like from past generations of First Nations and Indigenous peoples worldwide, with the collaboration of co-researchers from those communities. I'm also collecting old photos, film footage, and other visuals.</p><p>I'm combining these vintage audio and visuals together artistically, and creating video clips of 1-3 mins length. I anticipate creating from 6 to 20 of these videos, depending on budget considerations.</p><p>The videos will be presented at random on a vintage CRT TV, when someone picks up a vintage telephone placed in front of it. After a short countdown, kaleidoscopic time-travel effects are projection-mapped all around the TV, creating a sense of awe and scale. Audio then plays through the receiver, exclusively for the listener, while the video plays on the TV.</p><p>At the end of the video, the listener is left with a writeup explaining what they just saw and heard, and a QR code they can scan to research further.</p><p>The scope of this art installation, particularly the research, is ambitious. Most of the time and effort will be spent working with co-researchers in other Indigenous communities, to create a compilation of folklore and knowledge which most people have never heard or seen before.</p><p>Ancestors' Gate is already slated to be exhibited at the ImagineNATIVE Festival in October 2023, as well as the Honolulu Museum of Art in November 2024. This version will be an initial presentation of the work, but the work will extend into 2024 and beyond with additional co-research and video production.</p><p>In an earlier phase of this project I completed the software build, produced one short video, and began the co-researching phase.</p>",
        },
        "dancing-light-lanterns": {
          title: "Dancing Light Lanterns",
          formattedTitle: "Dancing Light<br/>Lanterns",
          subtitle: "An interactive maker<br/>workshop for families",
          year: "2022",
          tags: ["microcontroller", "workshop", "education", "indigenous"],
          heroVideo: false,
          content:
            "<p>A maker workshop designed for the ImagineNATIVE Film + Media Arts Festival’s Maker Masterclass, Dancing Light Lanterns invited family-centred teams to design, program and build their own customized jar lanterns, with multicoloured LED lights.</p><p>Each lantern kit came with an <a href='https://learn.adafruit.com/introducing-circuit-playground/overview' target='_blank'>Adafruit Circuit Playground</a>, a battery pack and a USB cable. A central table in the room was stocked with craft materials, reflective surfaces, tinselly objects and other things that would react interestingly with the LED light.</p><p>The first half of the workshop was a group programming session, where I explained what programmable microcontrollers like the Circuit Playground are and what they can be used for, how to connect the Circuit Playground to a laptop, and how to write code for it.</p><p>The second half of the workshop involved the teams constructing their lanterns using the Circuit Playground, an ImagineNATIVE-branded jar, and the physical crafting materials.</p><p>We had about 10 teams participating in the workshop, and the results speak for themselves &mdash; everyone had a great time, novices did some of their very first computer programming, and each lantern turned out completely unique and beautiful.</p>",
        },
        "indigital-arcade": {
          title: "inDigital Arcade",
          formattedTitle: "<span>inDigital</span><br/>Arcade",
          subtitle: "A whole arcade<br/>with an Indigenous twist",
          year: "2022",
          tags: ["creative technologist", "retro gaming", "indigenous"],
          heroVideo: false,
          content:
            "<p>In late 2022 was commissioned to build 5 arcade cabinets for ImagineNATIVE and the iNDigital Youth Collective (iYC). These cabinets were to be used for the inDigital Arcade, a travelling arcade that would be set up at various events and locations, and would feature games made by Indigenous youth and other Indigenous game developers.</p><p>Each arcade cabinet features a Lenovo ThinkCentre all-in-one PC, hidden behind a plexiglass bezel. The system boots into a custom menu interface where you can select a game.</p><p>All of the games were created in the Bitsy engine by participants in the iYC.</p><p>It was an honour to help create a platform to host these games and to support young Indigneous developers.</p>",
        },
        "trivia-phone": {
          title: "Trivia Phone",
          formattedTitle: "Trivia<br/>Phone",
          subtitle: "An Arduino phone that<br/>plays games with you",
          year: "2021",
          tags: ["microcontroller", "vintage tech"],
          heroVideo: false,
          content:
            "<p>Arduino was the first maker-friendly programmable microcontroller platform to hit the market in 2014. Since then, many other platforms have been introduced, like Teensy and Adafruit Feather.</p><p>This 1950s vintage Model 500 rotary telephone features an Arduino, with an audio shield.</p><p>When someone picks up the phone, an announcer tells them over the receiver that they're about to play Trivia Phone.</p><p>Trivia Phone is a 5-question quiz with numerical answers you can enter using the rotary dial.</p><p>After answering all 5 questions, Trivia Phone will tell you your score.</p><p>I originally built Trivia Phone for our wedding in 2021. The 5 questions were all related to knowledge of the couple.</p><p>People had a blast playing Trivia Phone at our wedding, and it was especially fun to see younger children figuring out the rotary dial.</p>",
        },
      },
    },
    "web-development": {
      title: "Web Development",
      pages: {
        "red-nucleus": {
          title: "Red Nucleus",
          year: "2022",
          tags: ["vue", "react", "team lead", "web dev", "touch screen"],
          bezel: "4ktv",
          content:
            "<p>Red Nucleus is a healthcare communication and medical education company. They work with pharmaceutical, biotechnology, and medical device companies to create interactive educational and marketing experiences and materials for healthcare professionals, patients, and the general public.</p><p>As the Senior Developer Team Lead in their Toronto office, I oversaw projects, produced estimates, onboarded and trained new developers, helped establish new dev ops infrastructure, mentored junior developers, and developed experiences for touch screen and web.</p>",
        },
        "klick-health": {
          title: "Klick Health",
          year: "2021",
          tags: ["web dev", "GSAP", "jQuery"],
          bezel: "ipad-pro-2020",
          content:
            "<p>Klick Health is a medical communications company that works with pharmaceutical, biotechnology and life sciences companies for their digital marketing and educational materials needs.</p><p>As a Senior Front End Developer, I developed websites, digital experiences and emails, helping coordinate the design and dev effort.</p><p>I wrote documentation for development, testing and deployment processes. I also trained designers and developers in the GSAP library, and how to cohesively design and develop animated websites.</p>",
        },
        stackadapt: {
          title: "StackAdapt",
          year: "2019",
          tags: ["GSAP", "jQuery", "web dev", "crm", "marketing"],
          bezel: ["macbook-pro-2016", "iphone-11"],
          content:
            "<p>StackAdapt is one of the fastest-growing tech startups in Toronto, with an innovative native advertising platform that enables brands to accelerate customer engagement and acquisition.</p><p>At their rate of growth, they saw a need to build a digital marketing team and elevate their online presence. In 2017, they hired me as a Front End Engineer to give much-needed focus to their homepage and blog.</p><p>I worked closely with the newly-created Design and Marketing teams to revamp the company homepage, introduce new product pages and industry pages tailored to specific verticals, an interactive Ad Format Showcase, and make many other additions and tweaks along the way.</p><p>I overhauled their lead generation form at the bottom of each page, enabling A/B testing with measurable performance comparison, adding new layers of in-browser validation and anti-spam measures, and improving the integration with Slack API and Pardot that powers their pipeline from user signup to lead qualification and live product demo.</p><p>I set up a new WordPress installation, migrated their old blog posts, and developed a custom WordPress theme that integrates seamlessly with their homepage.</p><p>StackAdapt's rapid market growth over my time there was the product of a cross-team effort&mdash;but the projects I executed to expand their online reach, and the technical capacity gained by having a developer like myself on their marketing team, helped to deliver tangible results.</p>",
        },
        diply: {
          title: "Diply",
          year: "2017",
          tags: ["jQuery", "web dev", "prototyping"],
          bezel: ["macbook-pro-2016", "iphone-7-plus"],
          content:
            "<p>Diply was one of the leading social news/entertainment websites in the world and among the top 20 most visited websites in Canada, publishing articles on internet culture, food, fashion, celebrity news, user-generated content and much more.</p><p>In 2016, they were in the early stages of creating self-publishing tools and user dashboard web applications, and experimenting with new designs for their homepage. In addition, they were growing their staff and opening a new Toronto office. They were growing and scaling, and betting big on a new design-focused direction for their products.</p><p>I was hired as a design technologist to augment their growing Design team. One of my first tasks was to work closely with the designers to develop rapid prototypes, which we used for user and stakeholder testing, internal demos and design review. A few of these prototypes are shown here.</p><p>Using a lightweight Node/SASS/JS tech stack, I produced high-fidelity prototypes to help realize a new look and feel for Diply's homepage, on both mobile and desktop, and helped refine the user flows and experience for their new self-publishing tools. I continued working on these interfaces and tools in the production environment, building and styling components in Angular for the final product.</p><p>Diply's new rapid iteration and prototype-driven design process enabled them to move quickly on experimental UI and evaluation, collecting feedback early in the process, and reducing the need for changes during development. Their newfound agility resulted in a more up-to-date user experience across all of their online offerings.</p>",
        },
        infusion: {
          title: "Infusion",
          year: "2016",
          tags: [
            "jQuery",
            "Angular",
            "creative technologist",
            "touch screen",
            "web dev",
          ],
          bezel: "4ktv",
          content:
            "<p>Infusion (now Avanade) is a global engineering, design and digital strategy firm with an emphasis on solutions built with Microsoft technologies. Their clients included retail, education, healthcare, financial services, the energy sector and others. Their projects ranged from customer-facing digital experiences to enterprise-level application software.</p><p>In 2013, their client, Richtree Natural Markets, was developing a brand-new food court concept at the Toronto Eaton Centre. Infusion was tasked with providing digital ordering touch screens, overhead menus and interactive installations for the new food court space.</p><p>With my prior experience in XAML, I was hired to develop UI for the various Windows WPF applications that powered these experiences.</p><p>Later, as Infusion was incubating a digital marketing agency within the firm, I continued as a member of their Interactive Development team, a multidisciplinary group of design-aware, marketing-savvy creative technologists, developers and designers.</p><p>In my time there, I helped produce innovative and exciting digital experiences for various clients, pitch work, rapid prototypes, UX design, front end and UI development on various platforms including: Web, Windows, Android, Samsung Gear wearables, Unity, Microsoft Hololens and more.</p><p>Working at Infusion was a wonderful experience for me, as I got to learn and play with many new technologies and to build experiences on various platforms, particularly VR/AR.</p>",
        },
        nventive: {
          title: "nventive",
          year: "2013",
          tags: ["windows", "windows phone", "XAML"],
          bezel: ["win-tablet", "win-phone"],
          content:
            "<p>nventive is an agile mobile and web application studio, which in 2012-2013 was designing and building apps on Windows Phone and Windows 8 devices.</p><p>At the time I started there, Microsoft was investing heavily in the Windows Phone app ecosystem, and nventive was one of the studios that produced full-featured Windows Phone and Windows 8 apps for clients such as ABC News, AllRecipes, Bloomberg, Expedia and others.</p><p>Their need for a Windows XAML front end developer was so urgent, and the hiring pool so small, that they hired me based on my skill level with HTML/CSS and started training me on XAML development on the first day.</p><p>After two weeks, I was competent enough to work on production codebases, and with the rest of my time there, I learned much more.</p><p>I introduced a practice of producing app-level style guides early in the design process, which outlined colour resources, font sizes and styles, etc. helping the Design and Development teams work together more effectively.</p>",
        },
      },
    },
    "game-development": {
      title: "Game Development",
      pages: {
        onenhsto: {
          title: "Onénhsto",
          subtitle: "A portal for past generations to speak to us",
          year: "2022",
          tags: ["educational", "indigenous", "gaming"],
          bezel: "tablet",
          content:
            "<p>Onénhsto, or &quot;Corn Soup&quot;, is a fun game that teaches Kanien'kéha language, culture and traditions by replicating elder, family and community teaching experiences.</p><p>In this game, you are cast into the role of a young Mohawk boy, spending time with his To'ta (Grandmother). Around her house, and in the garden, are all the ingredients necessary to make her famous corn soup. Forage and collect all of the ingredients, and don't forget to find the recipe book too!</p><p>As you explore the level, you will come across corn and beans in the garden, wild strawberries in the woods, and much more. As you approach these items, the word for the item appears in Kanien'kéha.</p><p>By collecting all of the ingredients and the recipe book, you can learn how to make Mohawk corn soup, based on traditional recipes handed down over generations. Additional items found in the level, like strawberries, can unlock additional surprises!</p><p>The vision for this game was conceived during ImagineNATIVE's Land Jam game hackathon in June 2022. Myself and a team of others all happened to have roots in different Mohawk communities, which led us to think about ways to propagate and teach our language, culture and traditions to other Mohawks displaced from communities, especially children. The idea to create an educational children's adventure game was born.</p><p>I undertook a lot of learning to leverage my web development skill set for the new task of building a 3D game. This involved code review, tutorial consumption, experimentation and prototyping. What I couldn't fully develop on my own, I broke down into manageable tasks and enlisted help from some Unity developer friends and colleagues. In turn, I gleaned additional learning from reviewing the approaches they took and the code they wrote. I reached out to my partner Jenn to create some art for the characters and items in the game.</p><p>For more information or to download a demo of Onénhsto, visit the <a target='_blank' href='https://onenhsto.com/''>official website</a>.</p>",
        },
      },
    },
    "workshops-and-education": {
      title: "Workshops + Education",
      pages: {
        "iyc-bitsy-games-workshop": {
          title: "iYC Bitsy Games Workshop",
          formattedTitle: "<span>iYC</span><br/>Bitsy Games<br/>Workshop",
          subtitle: "A game dev workshop<br/>to make tiny games",
          year: "2023",
          tags: [
            "bitsy",
            "retro gaming",
            "game dev",
            "workshop",
            "education",
            "indigenous",
          ],
          heroVideo: true,
          content:
            "<p><a href='https://bitsy.org/' target='_blank'>Bitsy</a> is a browser-based tool for making little narrative games in a pixel art style.</p><p>Members of the iNDigital Youth Collective (iYC) gathered together on a Discord server for a series of workshops run by myself and <a href='https://www.kaapeha.org/linktree' target='_blank'>Pōhaikealoha Panoke</a>. In 5 workshops, we introduced them to the Bitsy engine, taught them the essentials of narrative storytelling and game design, and how to build their own game top-to-bottom in Bitsy.</p><p>At the end of the workshop, participants exported their games as HTML files so that others could download and play them on their browsers.</p><p>It was a delightful experience mentoring and teaching these inspiring young First Nations community members to create their first games.</p><p>This October 2023 at the ImagineNATIVE iNDigital Space, the iYC cohort’s completed Bitsy games will be showcased on the <a href='/indigital-arcade'>iNDigital Arcade</a>, another one of my build projects, for the public to enjoy.</p>",
        },
        "dancing-light-lanterns-workshop": {
          title: "Dancing Light Lanterns",
          formattedTitle: "Dancing Light<br/>Lanterns",
          subtitle: "An interactive maker<br/>workshop for families",
          year: "2022",
          tags: ["microcontroller", "workshop", "education", "indigenous"],
          heroVideo: false,
          content:
            "<p>A maker workshop designed for the ImagineNATIVE Film + Media Arts Festival’s Maker Masterclass, Dancing Light Lanterns invited family-centred teams to design, program and build their own customized jar lanterns, with multicoloured LED lights.</p><p>Each lantern kit came with an <a href='https://learn.adafruit.com/introducing-circuit-playground/overview' target='_blank'>Adafruit Circuit Playground</a>, a battery pack and a USB cable. A central table in the room was stocked with craft materials, reflective surfaces, tinselly objects and other things that would react interestingly with the LED light.</p><p>The first half of the workshop was a group programming session, where I explained what programmable microcontrollers like the Circuit Playground are and what they can be used for, how to connect the Circuit Playground to a laptop, and how to write code for it.</p><p>The second half of the workshop involved the teams constructing their lanterns using the Circuit Playground, an ImagineNATIVE-branded jar, and the physical crafting materials.</p><p>We had about 10 teams participating in the workshop, and the results speak for themselves &mdash; everyone had a great time, novices did some of their very first computer programming, and each lantern turned out completely unique and beautiful.</p>",
        },
      },
    },
  },
};

// create an array of all level 1 page names
const lv1Array = Object.keys(data.pages);

// create an array of all level 2 page names
const lv2Array = [];
for (const pageId in data.pages) {
  if (data.pages.hasOwnProperty(pageId)) {
    const page = data.pages[pageId];
    if (page.pages) {
      for (const pageId in page.pages) {
        if (page.pages.hasOwnProperty(pageId)) {
          lv2Array.push(pageId);
        }
      }
    }
  }
}

// DOM elements
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

// state variables
let userClicked = false;
let lv1Page = "";
let lv2Page = "";
let thisPage = "";
let lastPage = "";

function createIndexPages(pages, container, parent) {
  for (const pageId in pages) {
    if (pages.hasOwnProperty(pageId)) {
      const page = pages[pageId];
      const a = document.createElement("a");
      const img = document.createElement("img");
      const year = document.createElement("div");
      const label = document.createElement("h2");

      a.className = "hero";
      year.className = "year";
      label.className = "label";

      img.setAttribute("src", "assets/" + parent + "/" + pageId + ".jpg");
      img.setAttribute("loading", "lazy");
      year.innerText = page.year;
      label.innerHTML = page.title;

      a.setAttribute("href", "#" + pageId);

      a.appendChild(img);
      a.appendChild(year);
      a.appendChild(label);
      a.addEventListener("click", (e) => {
        userClicked = true;
      });

      container.appendChild(a);
    }
  }
}

function createPages(pages, parent) {
  for (const pageId in pages) {
    if (pages.hasOwnProperty(pageId)) {
      const page = pages[pageId];
      const div = document.createElement("div");
      div.id = pageId;

      if (page.tags) {
        tags = page.tags.map((tag) => `<div class="tag">${tag}</div>`);
        tags = tags.join("");
      }

      if (page.pages) {
        div.className = `page page-lv1 ${pageId}`;
        createPages(page.pages, pageId);
        createIndexPages(page.pages, div, pageId);
      } else {
        div.className = `page page-lv2 ${parent}`;

        const createBezel = (bezelName) => `
          <div class="bezel bezel-${bezelName}">
            <img loading="lazy" class="img" src="assets/bezel-${bezelName}-mobile.png" widths="90vw" srcset="assets/bezel-${bezelName}-mobile.png 768w,assets/bezel-${bezelName}-desktop.png 1024w"/>
            <video preload="none" class="screen-content screen-content-video" muted loop playsinline src="assets/${parent}/${pageId}-${bezelName}.mp4" poster="assets/${parent}/${pageId}-${bezelName}.jpg" type="video/mp4"></video>
            <div class="overlay">
              <svg class="svg svg-icon svg-play-icon" viewBox="0 0 40 35"><use xlink:href="#play-btn" /></svg>
              <svg class="svg svg-icon svg-pause-icon" viewBox="0 0 40 35"><use xlink:href="#pause-btn" /></svg>
              <svg class="svg svg-icon svg-loading" viewBox="0 0 80 80"><use xlink:href="#spinner" /></svg>
            </div>
          </div>`;

        const createHeroWithVideo = (id) => `
          <div class="hero">
            <video preload="none" class="img mobile" src="assets/${parent}/${id}-mobile.mp4" poster="assets/${parent}/${id}-mobile.jpg" muted loop playsinline autoplay></video>
            <video preload="none" class="img desktop" src="assets/${parent}/${id}-desktop.mp4" poster="assets/${parent}/${id}-desktop.jpg" muted loop playsinline autoplay></video>
          </div>`;

        const createHeroWithImg = (src, classes) => `
          <div class="hero">
            <img loading="lazy" class="${classes}" src="${src}" />
          </div>`;

        const createArticle = (title, subtitle, year, tags, content) => `
          <div class="article">
            <h1>${title}</h1>
            ${subtitle ? `<h2><span>${subtitle}</span></h2>` : ""}
            <div class="year">${year}</div>
            <div class="tags">${tags}</div>
            <div class="content">${content}</div>
          </div>`;

        let hero;
        let article;

        if (parent === "web-development" || parent === "game-development") {
          if (Array.isArray(page.bezel)) {
            hero = `
              <div class="hero hero-interactive-art">
                ${page.bezel.map((bezel) => createBezel(bezel)).join("")}
              </div>`;
          } else {
            hero = `<div class="hero hero-interactive-art">${createBezel(
              page.bezel
            )}</div>`;
          }
          article = createArticle(
            page.title,
            null,
            page.year,
            tags,
            page.content
          );
        } else if (
          parent === "interactive-art" ||
          parent === "workshops-and-education"
        ) {
          if (page.heroVideo) {
            hero = createHeroWithVideo(pageId);
          } else {
            hero = createHeroWithImg(
              `assets/${parent}/${pageId}.jpg`,
              "img mobile desktop"
            );
          }
          article = createArticle(
            page.formattedTitle,
            page.subtitle,
            page.year,
            tags,
            page.content
          );
        } else {
          hero = createHeroWithImg(
            `assets/${parent}/${pageId}.jpg`,
            "img mobile desktop"
          );
          article = createArticle(
            page.title,
            null,
            page.year,
            tags,
            page.content
          );
        }

        div.innerHTML += hero + article;
      }
      main.appendChild(div);
    }
  }
}

function createNav() {
  // for each lv1 page, create a nav item
  for (const pageId in data.pages) {
    if (data.pages.hasOwnProperty(pageId)) {
      const page = data.pages[pageId];
      const div = document.createElement("div");
      const container = document.createElement("div");
      const label = document.createElement("a");
      const backBtn = document.createElement("a");

      label.setAttribute("href", "#" + pageId);
      label.addEventListener("click", (e) => {
        userClicked = true;
      });
      backBtn.setAttribute("href", "#");
      backBtn.addEventListener("click", (e) => {
        userClicked = true;
      });

      container.classList.add("container");
      label.classList.add("label");
      backBtn.classList.add("back-btn");

      label.innerText = page.title;

      div.classList.add("nav-item");
      div.classList.add(pageId);
      nav.appendChild(div);
      div.appendChild(container);
      container.appendChild(backBtn);
      container.appendChild(label);
    }
  }
}

function urlCheck() {
  const hash = window.location.hash.slice(1);

  if (hash) {
    body.className = "ext-ref";

    findMatchingPage(data.pages, hash);

    if (lastPage) {
      const lastPageElement = document.querySelector("#" + lv1Page);
      const thisPageElement = document.querySelector("#" + thisPage);
      const backBtn = document.querySelector(
        ".nav-item." + lv1Page + " .back-btn"
      );
      backBtn.setAttribute("href", "#" + lastPage);
      lastPageElement.classList.add("visited");
      if (lastPage === "interactive-art") {
        thisPageElement.addEventListener("scroll", handlePageScroll);
        window.addEventListener("scroll", handleWindowScroll);
      }
    }

    const nextURL = "/" + hash;
    const nextTitle = "";
    const nextState = {};

    window.history.replaceState(nextState, nextTitle, nextURL);

    header.classList.add("navigated");
    nav.classList.add("show-" + lv1Page);
    main.classList.add("show-lv2");
    document.querySelector("#" + hash).classList.add("active");
    gtag("send", "pageview", { page_title: thisPage });
  }
}

function findMatchingPage(pages, hash) {
  // if hash is empty, return to home page
  if (!hash) {
    lv1Page = "";
    lv2Page = "";
    thisPage = "";
    lastPage = "";
    updatePageTitle();
    return;
  }

  // if hash is a lv1 page, return that page
  if (lv1Array.includes(hash)) {
    lv1Page = hash;
    lv2Page = "";
    thisPage = lv1Page;
    lastPage = "";
    updatePageTitle(pages[hash].title);
    return;
  }

  // if hash is a lv2 page, return that page
  if (lv2Array.includes(hash)) {
    for (const key in data.pages) {
      const page = pages[key];
      if (typeof page === "object" && page.pages) {
        if (page.pages.hasOwnProperty(hash)) {
          lv1Page = key;
          lv2Page = hash;
          thisPage = lv2Page;
          lastPage = lv1Page;
          updatePageTitle(page.pages[hash].title);
          return;
        }

        findMatchingPage(page.pages, hash, key);
      }
    }
  }

  // if hash is not a lv1 or lv2 page, return 404
  if (hash) {
    lv1Page = "";
    lv2Page = "";
    thisPage = "";
    lastPage = "";
    updatePageTitle();
    return;
  }
  console.log("404: " + hash);
  return;
}

function updatePageTitle(title) {
  if (title) {
    formattedTitle = `${title} - Steve Diabo`;
  } else {
    formattedTitle = "Steve Diabo - Interactive Artist + Creative Technologist";
  }
  document.querySelector("title").innerText = formattedTitle;
}

function showPage(pageId) {
  if (thisPage) {
    const thisPageElement = document.querySelector("#" + thisPage);
    thisPageElement.classList.remove("active");
    thisPageElement.classList.add("visited");
    thisPageElement.removeEventListener("scroll", handlePageScroll);
    window.removeEventListener("scroll", handleWindowScroll);
  }

  findMatchingPage(data.pages, pageId);

  const thisPageElement = document.querySelector("#" + thisPage);
  const backBtn = document.querySelector(".nav-item." + lv1Page + " .back-btn");
  backBtn.addEventListener("click", () => {
    userClicked = true;
  });
  body.classList = "";
  header.classList.add("navigated");
  nav.className = "";
  nav.classList.add("show-" + lv1Page);
  if (lastPage) {
    main.classList.remove("show-lv1");
    main.classList.add("show-lv2");
    backBtn.setAttribute("href", "#" + lastPage);
    if (lastPage === "interactive-art") {
      thisPageElement.addEventListener("scroll", handlePageScroll);
      window.addEventListener("scroll", handleWindowScroll);
    }
  } else {
    main.classList.remove("show-lv2");
    main.classList.add("show-lv1");
    backBtn.setAttribute("href", "#");
  }
  thisPageElement.classList.add("active");
  gtag("send", "pageview", { page_title: thisPage });
}

function setupVideo(video) {
  video.removeEventListener("click", function () {
    setupVideo(video);
  });
  video.play();
  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  video.addEventListener("loadstart", function () {
    video.nextElementSibling.classList.add("loading");
    video.classList.add("loading");
  });
  video.addEventListener("play", function () {
    video.nextElementSibling.classList.remove("paused", "loading");
    video.nextElementSibling.classList.add("playing");
    video.classList.remove("paused", "loading");
    video.classList.add("playing");
  });

  video.addEventListener("pause", function () {
    video.nextElementSibling.classList.remove("playing");
    video.nextElementSibling.classList.add("paused");
    video.classList.remove("playing");
    video.classList.add("paused");
  });
}

function videoHandler() {
  const videos = document.querySelectorAll(".screen-content-video");

  function clickHandler(event) {
    const video = event.target;
    setupVideo(video);
    video.removeEventListener("click", clickHandler);
  }

  videos.forEach((video) => {
    video.addEventListener("click", clickHandler, { once: true });
  });
}

function handleWindowScroll() {
  const distance = window.scrollY;
  if (distance < 0) distance = 0;
  if (thisPage) {
    document.querySelector(
      "#" + thisPage + ".page-lv2 .hero .img.desktop"
    ).style.transform = `translateY(${distance * 0.5}px)`;
  }
}

function handlePageScroll() {
  const thisPageElement = document.querySelector("#" + thisPage);
  const distance = thisPageElement.scrollTop;
  if (distance < 0) distance = 0;
  if (thisPage) {
    document.querySelector(
      "#" + thisPage + ".page-lv2 .hero .img.mobile"
    ).style.transform = `translateY(${distance * 0.5}px)`;
  }
}

function backToHome() {
  if (thisPage) {
    const thisPageElement = document.querySelector("#" + thisPage);
    thisPageElement.classList.remove("active");
    nav.className = "";
    nav.classList.add("from-" + lv1Page);
  }

  findMatchingPage(data.pages, pageId);

  header.classList.remove("navigated");
  main.className = "";

  const visitedPages = document.querySelectorAll(".visited");
  visitedPages.forEach((page) => {
    page.classList.remove("visited");
  });
}

function handleHashChange() {
  pageId = window.location.hash.slice(1);

  const nextURL = "/" + pageId;
  const nextTitle = "";
  const nextState = {};

  window.history.replaceState(nextState, nextTitle, nextURL);
  if (pageId) {
    showPage(pageId);
  } else {
    backToHome();
  }
}

function handlePopState(event) {
  pageId = window.location.pathname.slice(1);
  if (!userClicked) {
    if (pageId) {
      showPage(pageId);
    } else {
      backToHome();
    }
  }
  userClicked = false;
}

document.addEventListener("DOMContentLoaded", () => {
  createPages(data.pages);
  createNav();
  urlCheck();
  videoHandler();
});

window.addEventListener("hashchange", () => {
  handleHashChange();
});
window.addEventListener("popstate", () => {
  handlePopState();
});
