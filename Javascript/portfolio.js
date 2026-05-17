const navi = document.getElementById("demo");

const navMenu = document.getElementById("navigation");
const navBar = document.querySelector(".hero-nav");
const cardHero = document.querySelectorAll(".card");
const modalContainer = document.querySelectorAll(".modal");

const backModal = document.querySelectorAll(".dark-background");
const nightMode = document.getElementById("night-mode");
const hero = document.getElementById("hero");
const body = document.querySelector("body");
const closeNav = document.querySelector(".close-nav");
const targetSVG = document.getElementById("eaAjDmpUyXz1");
const cyberFrame = document.querySelector(".cyber-frame-container");
const cyberOutline = document.querySelectorAll(".cyber-card-outline");
const cercle3d = document.querySelectorAll(".cercle-card");
const btns = document.querySelectorAll("button");


let x = new Date();



let startMouseX;
let startMouseY;

let isDragging = false;

btns.forEach(btn => {
  btn.addEventListener("click", async () => {
    if (btn.closest(".card")) return;

    await panelDisplayer();
  })
});

async function panelDisplayer() {
  const panel = document.querySelector(".loading-panel");

  panel.style.display = "flex";
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      panel.style.display = "none";
      resolve(true);
    }, 500)
  })
  return true;
}

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

let currentIndex = 0;


function updateCards() {

  cercle3d.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.transform = "translateZ(0)";
      card.style.display = "flex";
    }
    else {
      card.style.display = "none";
    }
  });
}

updateCards();

rightArrow.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= cercle3d.length) {
    currentIndex = 0;
  }

  updateCards();
});

leftArrow.addEventListener("click", () => {

  currentIndex--;
  if (currentIndex <= cercle3d.length) {
    currentIndex = 0;
  }

  updateCards();
});



/*
cyberOutline.forEach(path =>{
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
})*/


/*
cercle3d.forEach((el, index) => {
  const length = cercle3d.length;
  const calc = ((index + 1) - 1) * (360 / length);
  el.style.transform = `rotateY(${calc}deg) translateZ(-400px)`;

})*/

/*
cyberFrame.addEventListener("pointerdown", (e)=>{
  isDragging = true;
  cyberFrame.classList.add("grabbing");
  const rectHero = hero.getBoundingClientRect();

  startMouseX = e.clientX;
  startMouseY = e.clientY;
  
  cyberFrame.style.left = startMouseX - rectHero.left + "px";
  cyberFrame.style.top = startMouseY - rectHero.top + "px";
  targetSVG.style.left = startMouseX - rectHero.left + "px";
  targetSVG.style.top = startMouseY - rectHero.top + "px";

  cyberFrame.setPointerCapture(e.pointerId);
});

cyberFrame.addEventListener("pointermove", (e) =>{
  if (!isDragging) return;
  const heroRect = hero.getBoundingClientRect();
  const deltaX = e.clientX - startMouseX - heroRect.left;
  const deltaY = e.clientY - startMouseY - heroRect.top;
  

  targetSVG.style.left = startMouseX + deltaX + "px";
  targetSVG.style.top = startMouseY + deltaY + "px";
  cyberFrame.style.left = startMouseX + deltaX + "px";
  cyberFrame.style.top = startMouseY + deltaY + "px";
});

cyberFrame.addEventListener("pointerup", (e)=>{
  isDragging = false;
  cyberFrame.classList.remove("grabbing");
  cyberFrame.style.top = "";
  cyberFrame.style.left = "";
  cyberFrame.releasePointerCapture(e.pointerId);

});*/



/*
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    navMenu.classList.remove("show");
  }
});*/



const projectPanel = document.querySelector(".overlay-project");

function openOverlay() {
  projectPanel.classList.add("show");
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");
}

function closeOverlay() {
  projectPanel.classList.remove("show");
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}


const projectData = {
  subsea: {
    color: "hsl(107, 100%, 63%)",
    title: "Project Gamma",
    signal: "/// DATASTREAM ACTIVE",
    image: "/img-portfolio/subseatronics.JPG",
    status: "Deployed",
    access: "Public",
    purpose: [
      "Developed a precise, appealing, and easy to use subsea solutions web interface for a real client.",
      "API Mail implementation which currently work with Resend (API Mail provider).",
      "The client wanted to have clear sections with a clear purpose, either demonstrate the product or show testimonials."
    ],
    stack: ["Figma", "Node.js", "Mail API", "Front-end"],
    timeframe: "03 weeks",
    ctaLabel: "Initiate Sequence",
    ctaUrl: "https://darmathm.github.io/subseatronics_project/",
    ctaDisabled: false
  },
  pizza: {
    color: "hsl(180, 100%, 50%)",
    title: "Pizza UI Project",
    signal: "/// ORDER INTERFACE ONLINE",
    image: "/img-portfolio/pizza.JPG",
    status: "deployed",
    access: "Public",
    purpose: [
      "Built a responsive pizza website with a direct, appetizing interface designed to guide users quickly through the offer.",
      "The project focused on clean visual hierarchy, readable sections, and a simple user flow suitable for a restaurant or local food brand.",
      "The build was completed in three days with Elementor, keeping the layout easy to update after publishing."
    ],
    stack: ["Elementor"],
    timeframe: "03 days",
    ctaLabel: "Online",
    ctaUrl: "https://demo-restaurant.eu",
    ctaDisabled: false
  },
  dashboard: {
    color: "hsl(300, 100%, 58%)",
    title: "Dashboard UI Project",
    signal: "/// BUILD SEQUENCE IN PROGRESS",
    image: "/img-portfolio/card-two.png",
    status: "In progress",
    access: "Private",
    purpose: [
      "Dashboard interface currently in progress, designed first in Figma to lock the structure, data rhythm, and main user flows.",
      "The technical direction is built around Node.js and SQLite3, with the goal of creating a clear, fast, and maintainable admin experience.",
      "The next step is to connect the interface states with the backend logic and refine the data views."
    ],
    stack: ["Figma", "Node.js", "SQLite3"],
    timeframe: "In progress",
    ctaLabel: "In Progress",
    ctaUrl: "#",
    ctaDisabled: true
  }
};

function setProjectOverlay(project) {
  const panel = document.querySelector(".alpha-work");
  const title = panel.querySelector("h2");
  const image = panel.querySelector(".img-view img");
  const statusValues = panel.querySelectorAll(".project-status .status span");
  const purpose = panel.querySelector(".details-view .detail p");
  const stackContainer = panel.querySelector(".stack-card-container");
  const timeframe = panel.querySelector(".detail:nth-child(3) span:not(.material-symbols-outlined)");
  const ctaButton = panel.querySelector(".detail-cta button");

  panel.style.setProperty("--color", project.color);
  title.innerHTML = `${project.title} <p>${project.signal}</p>`;
  image.src = project.image;
  image.alt = `${project.title} preview`;
  statusValues[0].textContent = project.status;
  statusValues[1].textContent = project.access;
  purpose.innerHTML = project.purpose.join("<br>");
  stackContainer.innerHTML = project.stack.map(item => `<div>${item}</div>`).join("");
  timeframe.textContent = project.timeframe;

  ctaButton.disabled = project.ctaDisabled;
  ctaButton.innerHTML = project.ctaDisabled
    ? project.ctaLabel
    : project.ctaUrl
      ? `<a href="${project.ctaUrl}" target="_blank">${project.ctaLabel}</a>`
      : project.ctaLabel;
}

document.querySelectorAll(".card button[value]").forEach(button => {
  button.addEventListener("click", async () => {
    const project = projectData[button.value];
    if (!project) return;

    setProjectOverlay(project);
    const isReady = await panelDisplayer();
    if (isReady) {
      openOverlay();
    }
  });
});

projectPanel.addEventListener("click", (e) => {
  const panel = document.querySelector(".alpha-work");
  if (panel && !panel.contains(e.target) || e.target.closest(".close-project")) {
    closeOverlay();
  }
});




window.addEventListener("scroll", (e) => {
  const navBar = document.querySelector(".hero-nav");

  const hero = document.querySelector(".hero");
  const rect = hero.getBoundingClientRect();

  if (window.scrollY > (rect.bottom + 500) && window.innerWidth > 800) {
    if (navBar.classList.contains("hide")) {
      return;
    }

    navBar.classList.add("sticky");
  }
  else {
    navBar.classList.remove("sticky");
  }
})


const miniNav = document.querySelector(".mini-nav");
navBar.addEventListener("click", (e) => {
  const closeNav = e.target.closest(".close-nav");
  const miniNav = document.querySelector(".mini-nav");
  if (closeNav) {
    navBar.classList.add("hide");
    miniNav.classList.add("show");
  }

});

miniNav.addEventListener("click", (e) => {
  const showNav = e.target.closest(".show-nav");
  console.log(showNav);
  if (showNav) {
    miniNav.classList.remove("show");
    navBar.classList.remove("hide");
  }
})








const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });

},
  {
    rootMargin: "20% 0px 0px 0px",
    threshold: 0.2
  });

const build = document.querySelector(".build-system");
const node = document.querySelectorAll(".node");
const processLogs = document.querySelectorAll(".process-log");

node.forEach(el => {
  observer.observe(el);
})

processLogs.forEach(log => {
  observer.observe(log);
})


observer.observe(build);

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  rootMargin: "0px 0px -12% 0px",
  threshold: 0.18
});

cardHero.forEach(card => {
  cardObserver.observe(card);
});


const currentPage = window.location.pathname;

console.log("Page visitée:", currentPage);

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1];
}

let userId = getCookie("userId");

if (!userId) {
  userId = crypto.randomUUID(); // ID unique
  setCookie("userId", userId, 365);
}
let visits = getCookie("visits");

if (!visits) {
  visits = 1;
} else {
  visits = Number(visits) + 1;
}

setCookie("visits", visits, 365);

console.log("Nombre de visites:", visits);
console.log("User ID:", userId);

