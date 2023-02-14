// Set Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Close Links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// Fixed navbar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const logo = document.getElementById('logoImg');
const menuBars = document.getElementById('menuBars');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // Fixed nav
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
    navbar.classList.remove('reg-nav');
    menuBars.classList.remove('white');
    logo.src = "/logos/logogrey.png";
  } else {
    navbar.classList.remove('fixed-nav');
    navbar.classList.add('reg-nav');
    menuBars.classList.add('white');
    logo.src = "/logos/logowhite.png";
  }
  // Back to top button
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// Smooth Scrolling to sections
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault();

    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 92) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // Close toggle NAV when scrolling on mobile
    linksContainer.style.height = 0;
  });
});

// Project Section

// const btns = document.querySelectorAll('.tab-btn');
// const project = document.querySelector('.project');
// const articles = document.querySelectorAll('.content');

// project.addEventListener('click', function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // Remove active from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove('active');
//       e.target.classList.add('active');
//     });
//     // Hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove('active');
//     });

//     const element = document.getElementById(id);
//     element.classList.add('active');
//   }
// });

const codeProject = [
  {
    id: 1,
    projTitle: "React / .NET Web App",
    projText:
      "Full stack web application created with a React based front end that serves C# code on a .NET framework back end with a MSQL Server database. Simple application that serves as a forum or bulletin board that multiple users can access and view, create and answer questions posed by themselves and/or others. Some functionality is only available when logged in, authentication is handled with a service called Auth0, and data is updated dynamically as it is added and stored live. Hosting is down as of 01/2023, likely will rebuild on something other than Azure.",
    projLink: "",
    projVideo: "/videos/qareact-project.mp4",
    projIcon1: "icons/react.svg",
    projIcon2: "icons/microsoft-dotnet.svg",
    projIcon3: "icons/sql.svg",
  },
  {
    id: 2,
    projTitle: "Android / Java Mobile App",
    projText:
      "Android mobile application written in Java code with SQLite used to handle database duties. Timer / Lap tracking app with added functionality like profiles to track progress between sessions, automatic or manual lap tracking, estimating calories burned and session statistic tracking.",
    projLink: "",
    projVideo: "/videos/android-project.mp4",
    projIcon1: "icons/java.svg",
    projIcon2: "icons/android.svg",
    projIcon3: "icons/sqlite.svg",
  },
  {
    id: 3,
    projTitle: "Javascript / HTML Browser Game",
    projText:
      "Small proof of concept game developed using just Javascript code with a HTML5 framework called Phaser. Most concepts with this project are very Phaser specific but presented a fun alternative to typical useages with Javascipt. The game itself is a typical 'endless' jump type game where carrots and platforms will continue to generate above the character as they jump and the goal is to get a high score without falling off the screen or a game over will be presented and the user is prompted to restart. ",
    projLink: "https://infinite-jumping-game.netlify.app/",
    projVideo: "/videos/jsgame-project.mp4",
    projIcon1: "icons/javascript.svg",
    projIcon2: "icons/html5.svg",
    projIcon3: "icons/phaser.png",
  },
];

const webProject = [
  {
    id: 1,
    projTitle: "Salon Boutique WordPress Website",
    projText:
      "Proof of concept WordPress website not attached to any real world business but done for experimentation and learning purposes. Implementing certain business needs, like a scheduling system in the case of this project, are made simple when compared to creating a project from scratch.",
    projLink: "http://taylora15.sg-host.com/",
    projVideo: "/videos/salon-project.mp4",
    projIcon1: "icons/wordpress.svg",
    projIcon2: "icons/html5.svg",
    projIcon3: "icons/css3.svg",
  },
  {
    id: 2,
    projTitle: "Industrial Sales WordPress Website",
    projText:
      "Proof of concept WordPress website not attached to any real world business but done for experimentation and learning purposes. Implementing certain business needs, like inventory and shop in the case of this project, are made simple when compared to creating a project from scratch.",
    projLink: "http://taylora16.sg-host.com/",
    projVideo: "/videos/industry-project.mp4",
    projIcon1: "icons/wordpress.svg",
    projIcon2: "icons/html5.svg",
    projIcon3: "icons/css3.svg",
  },
  {
    id: 3,
    projTitle: "Portfolio Custom Javascript Website",
    projText:
      "This website! The video shows an old version of the site, this portfolio has served as a fun project to revisit as I learn new things or look to experiment over time. The site itself is created from scratch and uses just HTML, 800 plus lines of CSS and Javascript code to achieve all the functionality. A few noteables that this includes are the dynamic scrolling (after calculating screen position) from the NAV, the fixed NAV based on screen position, and querying for each of my projects from their objects then dynamically displaying them in the HTML with a function based on a selection.",
    projLink: "",
    projVideo: "/videos/portfolio-project.mp4",
    projIcon1: "icons/javascript.svg",
    projIcon2: "icons/html5.svg",
    projIcon3: "icons/css3.svg",
  },
];

const title = document.getElementById('proj-Title');
const text = document.getElementById('proj-Text');
const link = document.getElementById('proj-Link');
const video = document.getElementById('proj-Video');
const icon1 = document.getElementById('proj-Icon1');
const icon2 = document.getElementById('proj-Icon2');
const icon3 = document.getElementById('proj-Icon3');

const codeClick = document.querySelector('#code-pick');
const webClick = document.querySelector("#web-pick");

let currentItem = 0;

function showWeb(project) {
  const item = webProject[project];
  title.textContent = item.projTitle;
  text.textContent = item.projText;
  if (project == 2) {
    link.classList.add("hidden");
  } else if (project == 0 || project == 1) {
    link.classList.remove("hidden");
  }
  link.href = item.projLink;
  video.src = item.projVideo;
  icon1.src = item.projIcon1;
  icon2.src = item.projIcon2;
  icon3.src = item.projIcon3;
}

function showCode(project) {
  const item = codeProject[project];
  title.textContent = item.projTitle;
  text.textContent = item.projText;
  if (project == 0 || project == 1) {
    link.classList.add("hidden");
  } else if (project == 2) {
    link.classList.remove("hidden");
  }
  link.href = item.projLink;
  video.src = item.projVideo;
  icon1.src = item.projIcon1;
  icon2.src = item.projIcon2;
  icon3.src = item.projIcon3;
}

// Default Project 
window.addEventListener('DOMContentLoaded', function () {
  showCode(currentItem);
});

codeClick.addEventListener('click', function (e) {
  console.log(e.target.id);
  showCode(e.target.id);
});

webClick.addEventListener("click", function (e) {
  console.log(e.target.id);
  showWeb(e.target.id);
});

