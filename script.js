/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Funktion til at opdatere åbningstiden
function updateOpenStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const currentTime = hours * 60 + minutes;
  const openTime = 10 * 60; // 10:00

  //   vis i klassen ved at ændre 17 til et tidpunkt før din nuværende tid
  const closeTime = 17 * 60 + 30; // 17:30

  const heroOpen = document.querySelector(".hero-open");
  const heroHours = document.querySelector(".hero-hours");

  if (currentTime >= openTime && currentTime < closeTime) {
    heroOpen.textContent = "Åbent";
    heroOpen.style.color = "white";
  } else {
    heroOpen.textContent = "Lukket";
    heroOpen.style.color = "#e44747ff";
  }
}

updateOpenStatus();

let currentCard = 0;
const cards = document.querySelectorAll(".card");

// show the first card on load
cards[currentCard].classList.add("active");

function nextCard() {
  cards[currentCard].classList.remove("active");
  currentCard = (currentCard + 1) % cards.length; // loops back to first
  cards[currentCard].classList.add("active");
}

function prevCard() {
  cards[currentCard].classList.remove("active");
  currentCard = (currentCard - 1 + cards.length) % cards.length; // loops back to last
  cards[currentCard].classList.add("active");
}

// FAQ Accordion
var acc = document.getElementsByClassName("faq-accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("faq-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
