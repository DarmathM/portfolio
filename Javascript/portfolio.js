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
const languageButtons = document.querySelectorAll("[data-lang-option]");
const availableLanguages = ["en", "fr"];

let currentLang = localStorage.getItem("portfolioLanguage") || "en";
if (!availableLanguages.includes(currentLang)) {
  currentLang = "en";
}


let x = new Date();



let startMouseX;
let startMouseY;

let isDragging = false;

function applyTranslations() {
  const dictionary = translations[currentLang] || translations.en;

  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (!dictionary[key]) return;

    element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (!dictionary[key]) return;

    element.placeholder = dictionary[key];
  });

  languageButtons.forEach(button => {
    const isActive = button.dataset.langOption === currentLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive.toString());
  });
}

function setLanguage(lang) {
  if (!availableLanguages.includes(lang)) return;

  currentLang = lang;
  localStorage.setItem("portfolioLanguage", currentLang);
  applyTranslations();

  if (currentProjectKey && projectPanel.classList.contains("show")) {
    setProjectOverlay(getLocalizedProject(currentProjectKey));
  }
}

languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langOption);
  });
});

btns.forEach(btn => {
  btn.addEventListener("click", async () => {
    if (btn.closest(".language-switch")) return;
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
    image: "img-portfolio/subseatronics.JPG",
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
    image: "img-portfolio/pizza.JPG",
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
    image: "img-portfolio/planning_SaaS.JPG",
    status: "In progress",
    access: "Private",
    purpose: [
      "Restaurant planning SaaS currently in development, built with Node.js and SQLite3. The platform is designed to manage reservations in real time through a dynamic scheduling interface.",
      "Bookings are instantly synchronized with the planning system and can be modified dynamically without interrupting the workflow.", 
      "The goal is to provide restaurants with a fast, clear, and maintainable reservation management experience.",
      "The next step is to connect the interface states with the backend logic and refine the data views."
    ],
stack: ["Figma", "Node.js", "SQLite3"],
  timeframe: "In progress",
    ctaLabel: "In Progress",
      ctaUrl: "#",
        ctaDisabled: true
  }
};

const projectTranslations = {
  fr: {
    subsea: {
      title: "Projet Gamma",
      signal: "/// FLUX DE DONNÉES ACTIF",
      status: "Déployé",
      access: "Public",
      purpose: [
        "Développement d'une interface web précise, attractive et simple à utiliser pour des solutions sous-marines, réalisée pour un client réel.",
        "Implémentation d'une API Mail fonctionnant actuellement avec Resend comme fournisseur d'e-mails.",
        "Le client souhaitait des sections claires avec un objectif net : présenter le produit ou afficher des témoignages."
      ],
      timeframe: "03 semaines",
      ctaLabel: "Lancer la séquence"
    },
    pizza: {
      title: "Projet UI Pizza",
      signal: "/// INTERFACE DE COMMANDE EN LIGNE",
      status: "Déployé",
      access: "Public",
      purpose: [
        "Création d'un site de pizza responsive avec une interface directe et appétissante, pensée pour guider rapidement les utilisateurs dans l'offre.",
        "Le projet met l'accent sur une hiérarchie visuelle propre, des sections lisibles et un parcours simple adapté à un restaurant ou une marque locale.",
        "Le build a été réalisé en trois jours avec Elementor, en gardant une mise en page facile à mettre à jour après publication."
      ],
      timeframe: "03 jours",
      ctaLabel: "En ligne"
    },
    dashboard: {
      title: "Projet UI Dashboard",
      signal: "/// SÉQUENCE DE BUILD EN COURS",
      status: "En cours",
      access: "Privé",
      purpose: [
        "SaaS de planning pour restaurant en cours de développement avec Node.js et SQLite3. La plateforme est pensée pour gérer les réservations en temps réel via une interface de planification dynamique.",
        "Les réservations sont synchronisées instantanément avec le planning et peuvent être modifiées dynamiquement sans interrompre le flux de travail.",
        "L'objectif est d'offrir aux restaurants une expérience de gestion des réservations rapide, claire et maintenable.",
        "La prochaine étape consiste à connecter les états d'interface à la logique backend et à affiner les vues de données."
      ],
      timeframe: "En cours",
      ctaLabel: "En cours"
    }
  }
};

let currentProjectKey = null;

function getLocalizedProject(projectKey) {
  const project = projectData[projectKey];
  if (!project) return null;

  return {
    ...project,
    ...(projectTranslations[currentLang]?.[projectKey] || {})
  };
}

function setProjectOverlay(project) {
  const panel = document.querySelector(".alpha-work");
  const title = panel.querySelector("h2");
  const image = panel.querySelector(".img-view img");
  const statusValues = panel.querySelectorAll(".project-status .status span");
  const purpose = panel.querySelector(".details-view .detail p");
  const stackContainer = panel.querySelector(".stack-card-container");
  
  const timeframe = panel.querySelector(".timeframe");
  const ctaButton = panel.querySelector(".detail-cta button");

  panel.style.setProperty("--color", project.color);
  title.innerHTML = `${project.title} <p>${project.signal}</p>`;
  image.src = project.image;
  image.alt = `${project.title} preview`;
  statusValues[0].textContent = project.status;
  statusValues[1].textContent = project.access;
  purpose.innerHTML = project.purpose.join("<br> <br>");
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
    const project = getLocalizedProject(button.value);
    if (!project) return;

    currentProjectKey = button.value;
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

const translations = {
  en: {
    "nav.work": "Work Node",
    "nav.stack": "Stack PROTOCOLS",
    "nav.process": "Build Process",
    "nav.contact": "COMM_LINK",
    "quick.title": "Quick access",
    "quick.work": "Work Node",
    "quick.stack": "Frontend stack",
    "quick.process": "build process",
    "quick.contact": "Contact channel",
    "hero.role": "Frontend developer · UI designer",
    "hero.title": "Interfaces with <span>sharp atmosphere.</span>",
    "hero.copy": "I create responsive web interfaces <br>with strong visual direction,<br>clean layouts, SVG systems and interactive motion.",
    "profile.id": "Profile ID",
    "profile.copy": "Developer focused on immersive frontend, UI precision and controlled cyberpunk motion.",
    "stack.kicker": "stack protocols",
    "stack.signal": "/// loading stack from archives...",
    "stack.title": "Digital systems <br>powered by <br>modern stack.",
    "stack.copy": "Portfolio concept for a developer who creates precise interfaces, responsive websites, visual systems and motion-driven user experiences.",
    "stack.viewProjects": "View projects",
    "stack.startProject": "Start a project ≥",
    "process.kicker": "Build Process",
    "process.signal": "/// mapping interface production...from design signal to live deployment.",
    "process.step1.date": "01 / discovery + figma",
    "process.step1.title": "UI/UX Design",
    "process.step1.copy": "I start by defining the interface direction in Figma: structure, user flow, visual rhythm, component states and responsive behavior before moving into code.",
    "process.step2.date": "02 / stack + build",
    "process.step2.title": "Coding Solutions",
    "process.step2.copy": "I choose the stack around the project goal, then build the interface with clean HTML, CSS and JavaScript logic, keeping motion, layout and performance under control.",
    "process.step3.date": "03 / publish + support",
    "process.step3.title": "Maintenance / Publish",
    "process.step3.copy": "After final testing, I prepare the website for hosting, publish the live version, and keep the project ready for updates, fixes and future improvements.",
    "work.kicker": "Work Node",
    "work.signal": "/// accessing deployments...classified builds and experimental protocols loaded.<br>select a node to proceed.",
    "work.card1.label": "Pizza UI Project",
    "work.card2.label": "Dashboard UI Project",
    "work.card3.label": "Subseatronics Project",
    "work.card4.label": "Interface System Project",
    "work.view": "View",
    "project.status": "Status",
    "project.accessLevel": "Access Level",
    "project.purposeTitle": "directive / purpose",
    "project.timeframeTitle": "Timeframe",
    "contact.kicker": "⪰ Contact Channel",
    "contact.signal": "/// establish secure connection...waiting for input.",
    "contact.nameLabel": "user_id / Name",
    "contact.namePlaceholder": "Name...",
    "contact.messageLabel": "Data payload / Message",
    "contact.messagePlaceholder": "Transmit Data...",
    "contact.submit": "Transmit",
    "footer.made": "Made by Darren",
    "footer.rights": "© All Right Reserved"
  },
  fr: {
    "nav.work": "Projets",
    "nav.stack": "Protocoles",
    "nav.process": "Processus",
    "nav.contact": "Contact",
    "quick.title": "Accès rapide",
    "quick.work": "Projets",
    "quick.stack": "Stack frontend",
    "quick.process": "processus",
    "quick.contact": "Canal contact",
    "hero.role": "Développeur frontend · UI designer",
    "hero.title": "Des interfaces à <span>l'atmosphère nette.</span>",
    "hero.copy": "Je crée des interfaces web responsives <br>avec une direction visuelle forte,<br>des mises en page propres, des systèmes SVG et des animations interactives.",
    "profile.id": "ID Profil",
    "profile.copy": "Développeur orienté frontend immersif, précision UI et animations cyberpunk maîtrisées.",
    "stack.kicker": "protocoles stack",
    "stack.signal": "/// chargement de la stack depuis les archives...",
    "stack.title": "Systèmes digitaux <br>propulsés par <br>stack moderne.",
    "stack.copy": "Concept de portfolio pour un développeur qui crée des interfaces précises, des sites responsives, des systèmes visuels et des expériences animées.",
    "stack.viewProjects": "Voir les projets",
    "stack.startProject": "Démarrer un projet ≥",
    "process.kicker": "Processus",
    "process.signal": "/// cartographie de production...du signal design au déploiement live.",
    "process.step1.date": "01 / découverte + figma",
    "process.step1.title": "Design UI/UX",
    "process.step1.copy": "Je commence par définir la direction de l'interface dans Figma : structure, parcours utilisateur, rythme visuel, états des composants et comportement responsive avant de passer au code.",
    "process.step2.date": "02 / stack + build",
    "process.step2.title": "Solutions de code",
    "process.step2.copy": "Je choisis la stack selon l'objectif du projet, puis je construis l'interface avec du HTML, CSS et JavaScript propres, en gardant le mouvement, la mise en page et la performance sous contrôle.",
    "process.step3.date": "03 / publication + support",
    "process.step3.title": "Maintenance / Publication",
    "process.step3.copy": "Après les derniers tests, je prépare le site pour l'hébergement, publie la version en ligne et garde le projet prêt pour les mises à jour, corrections et améliorations futures.",
    "work.kicker": "Projets",
    "work.signal": "/// accès aux déploiements...builds classifiés et protocoles expérimentaux chargés.<br>sélectionnez un noeud pour continuer.",
    "work.card1.label": "Projet UI Pizza",
    "work.card2.label": "Projet UI Dashboard",
    "work.card3.label": "Projet Subseatronics",
    "work.card4.label": "Projet Interface System",
    "work.view": "Voir",
    "project.status": "Statut",
    "project.accessLevel": "Niveau d'accès",
    "project.purposeTitle": "directive / objectif",
    "project.timeframeTitle": "Durée",
    "contact.kicker": "⪰ Canal Contact",
    "contact.signal": "/// connexion sécurisée...en attente de saisie.",
    "contact.nameLabel": "user_id / Nom",
    "contact.namePlaceholder": "Nom...",
    "contact.messageLabel": "Charge utile / Message",
    "contact.messagePlaceholder": "Transmettre les données...",
    "contact.submit": "Transmettre",
    "footer.made": "Créé par Darren",
    "footer.rights": "© Tous droits réservés"
  }
};

applyTranslations();

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

