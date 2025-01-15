const bodyConst = document.body;

function themeChanger() {
  if(bodyConst.classList.contains("lightTheme")){
    bodyConst.classList.remove("lightTheme")
    bodyConst.classList.add("darkTheme")
  }
  else{
    bodyConst.classList.remove("darkTheme")
    bodyConst.classList.add("lightTheme")
  }
}

let fontCounter = 0;

function fontChanger() {
  console.log("Função que muda fontes sendo ativada")
  if(fontCounter == 0){
    bodyConst.classList.remove("Libre")
    bodyConst.classList.add("Lobster")
    fontCounter++;
  }
  else if(fontCounter == 1){
    bodyConst.classList.remove("Lobster")
    bodyConst.classList.add("Arial")
    fontCounter++;
  }
  else if(fontCounter == 2){
    bodyConst.classList.remove("Arial")
    bodyConst.classList.add("Bebas")
    fontCounter++;
  }
  else if(fontCounter == 3){
    bodyConst.classList.remove("Bebas")
    bodyConst.classList.add("Times")
    fontCounter++;
  }
  else {
    bodyConst.classList.remove("Times")
    bodyConst.classList.add("Libre")
    fontCounter = 0;
  }
}

const positiveIntegerLevels = [
{
className: "peacefullLevel",
title: "Level 227 - My Friends Are Out There",
image: "./src/lonlyIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chan-sTinyLevel/",
},
{
className: "horrorLevel",
title: "Level 604 - Among Flowers and Shadows",
image: "./src/amongFlowersIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chanAmongFlowersAndShadows/",
},
{
className: "peacefullLevel",
title: "Level 704 - Near Rain Downtown",
image: "./src/nearRainIcon.png",
link: "https://guilherme-porto-silva.github.io/704byGuigui-chan/",
},
{
className: "forestLevel",
title: "Level 607 - The Forest of the Spider Flyes",
image: "./src/forestIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chan-sForestLevel/",
},
{
className: "legendLevel",
title: "Level 626 - Gold and Wood Stylefull",
image: "./src/stylishIcon.png",
link: "https://guilherme-porto-silva.github.io/stylishBackroomsGuiguichan/",
},
{
className: "horrorLevel",
title: "Level 985 - Embry's Basement",
image: "./src/basementIcon.jpeg",
link: "https://guilherme-porto-silva.github.io/Guigui-chan-sBasement/",
},
{
className: "purpleLevel",
title: "Level 1095 - Wine With The Black Princess",
image: "./src/blackPrincessIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chanAndTheBlackPrincess/",
},
{
className: "horrorLevel",
title: "Level 1925 - Singer Girl's Playtime",
image: "./src/singerGirlIcon.png",
link: "https://guilherme-porto-silva.github.io/GuiguichanAndSingerGirl/",
},
{
className: "funnyLevel",
title: "Level 1926 - FUNomental Daycare",
image: "./src/daycareIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chanFUNomental/",
},
{
className: "tecnoLevel",
title: "Level 2017 - Tecnoland",
image: "./src/tecnoIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chan-sRevolution/",
},
{
className: "horrorLevel",
title: "Level 9604 - Fields of Dath",
image: "./src/",
link: "https://guilherme-porto-silva.github.io/Guigui-chan-sGreaveyard/",
},
{
className: "horrorLevel",
title: "Level 101010 - Wispers From The Poisoned Ones",
image: "./src/poisonesIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chanAndThePoisonedOnes/",
},
// Add more levels here...
];

const negativeIntegerLevels = [
{
className: "peacefullLevel",
title: "Level -250 - Silent Library",
image: "./src/bookIcon.png",
link: "https://guilherme-porto-silva.github.io/silentLibraryLevel/",
},
{
className: "snowyLevel",
title: "Level -273 - When The Winter Comes",
image: "./src/winterIcon.png",
link: "https://guilherme-porto-silva.github.io/snowyGuiguichanBackrooms/",
},
// Add more levels here...
];

const positiveSublevels = [
{
className: "peacefullLevel",
title: "Sublevel 13.13 - The Redstone Halls",
image: "./src/redsIcon.png",
link: "https://guilherme-porto-silva.github.io/GuiguichansAutomaticSublevel/",
},
{
className: "tecnoLevel",
title: "Sublevel 83.5 - Squid Dodging Game",
image: "./src/squidIcon.jpeg",
link: "https://guilherme-porto-silva.github.io/GuiguichansSquidGame/",
},
{
className: "foodLevel",
title: "Sublevel 611.7 - Cooking Up Some Liminality",
image: "./src/kitchenIcon.png",
link: "https://guilherme-porto-silva.github.io/Guigui-chan-sKichenBackrooms/",
},
// Add more levels here...
];

const enigmaticLevels = [
{
className: "purpleLevel",
title: "The Origen Of The Shadows",
image: "./src/",
link: "https://guilherme-porto-silva.github.io/GuiguichanAndTheShadows/",
},
{
className: "horrorLevel",
title: "The Blood Rooms",
image: "./src/bloodyIcon.png",
link: "https://guilherme-porto-silva.github.io/BloodRoomsGuigui-chan/",
},
// Add more levels here...
];

function createLevel({ className, title, image, link }) {
    const div = document.createElement("div");
    div.className = `${className} level-container`;
  
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "level-link";
  
    const img = document.createElement("img");
    img.src = image;
    img.alt = title;
    img.loading = "lazy";
  
    const overlay = document.createElement("div");
    overlay.className = "level-overlay";
    overlay.textContent = title;
  
    a.appendChild(img);
    a.appendChild(overlay);
    div.appendChild(a);
  
    return div;
  }  

function populateLevels(containerId, levels) {
const container = document.getElementById(containerId);
levels.forEach(level => {
const levelElement = createLevel(level);
container.appendChild(levelElement);
});
}

// Populate each section:
document.addEventListener("DOMContentLoaded", () => {
populateLevels("positive-integer-levels", positiveIntegerLevels);
populateLevels("positive-sublevels", positiveSublevels);
populateLevels("negative-integer-levels", negativeIntegerLevels);
populateLevels("enigmatic-levels", enigmaticLevels);
});

document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('backgroundMusic');
  const toggle = document.getElementById('toggleMusic');

  toggle.addEventListener('click', () => {
      if (music.paused) {
          music.play();
          toggle.textContent = 'Pause Music';
          toggle.classList.add('playing');
      } else {
          music.pause();
          toggle.textContent = 'Play Music';
          toggle.classList.remove('playing');
      }
  });
});