let isPaused = false;

function toggleControlPanel() {
  const controlPanel = document.getElementById("control-panel");
  if (
    controlPanel.style.display === "none" ||
    controlPanel.style.display === ""
  ) {
    controlPanel.style.display = "block";
  } else {
    controlPanel.style.display = "none";
  }
}

function toggleLogin() {
  alert("Login feature coming soon!"); // Placeholder function
}

function toggleSignup() {
  alert("Signup feature coming soon!"); // Placeholder function
}

function changeFontSize(size) {
  document.body.style.fontSize = size + "px";
}

function changeFontColor(color) {
  document.body.style.color = color;
}

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}

function changeTextSpacing(spacing) {
  document.body.style.letterSpacing = spacing + "em";
}

function changeContrast(value) {
  document.body.style.filter = `contrast(${value})`;
}

function changeBrightness(value) {
  document.body.style.filter = `brightness(${value})`;
}

function changeFontStyle(font) {
  document.body.style.fontFamily = font;
}

function togglePauseAnimation() {
  isPaused = !isPaused;
  if (isPaused) {
    clearTimeout(typingTimeout);
  } else {
    typeText();
  }
}

let typingTimeout;
const text = "The adaptive learning platform for dyslexic students!";
const typingSpeed = 150; // Adjust the speed of typing here
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    typingTimeout = setTimeout(typeText, typingSpeed);
  } else {
    // Restart the animation after a delay
    setTimeout(() => {
      index = 0; // Reset index to start from the beginning
      document.getElementById("typed-text").innerHTML = ""; // Clear the text
      typeText(); // Restart the typing animation
    }, 1000); // Adjust delay before restart
  }
}

// Load settings from local storage on page load
window.onload = function () {
  const fontSize = localStorage.getItem("fontSize");
  const fontColor = localStorage.getItem("fontColor");
  const bgColor = localStorage.getItem("bgColor");
  const textSpacing = localStorage.getItem("textSpacing");
  const contrast = localStorage.getItem("contrast");
  const brightness = localStorage.getItem("brightness");
  const fontStyle = localStorage.getItem("fontStyle");
  const saturation = localStorage.getItem("saturation");
  const alignment = localStorage.getItem("textAlignment");
  const theme = localStorage.getItem("theme");

  if (fontSize) changeFontSize(fontSize);
  if (fontColor) changeFontColor(fontColor);
  if (bgColor) changeBgColor(bgColor);
  if (textSpacing) changeTextSpacing(textSpacing);
  if (contrast) changeContrast(contrast);
  if (brightness) changeBrightness(brightness);
  if (fontStyle) changeFontStyle(fontStyle);
  if (saturation) changeSaturation(saturation);
  if (alignment) setAlignment(alignment);
  if (theme === "dark") toggleTheme(); // Set theme if saved
};

document.querySelector(".btn-subscribe").addEventListener("click", function () {
  const emailInput = document.querySelector('.footer input[type="email"]');
  const email = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(emailPattern)) {
    alert("Thank you for subscribing!");
  } else {
    alert("Please enter a valid email address.");
    emailInput.focus();
  }
});

typeText();

// Toggle Dark/Light Theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const elements = document.querySelectorAll(".navbar, .footer");
  elements.forEach((element) => element.classList.toggle("dark-theme"));
}

// Change Saturation
function changeSaturation(value) {
  document.body.style.filter = `saturate(${value})`;
}

// Alignment Functions
function setAlignment(alignment) {
  document.querySelector(
    ".main-content"
  ).className = `main-content ${alignment}`;
}

function speakText() {
  const text = "The adaptive learning platform for dyslexic students!"; // Text to be spoken
  const utterance = new SpeechSynthesisUtterance(text);

  // Optional: Set voice and properties
  utterance.lang = "en-US"; // Language
  utterance.pitch = 1; // Pitch
  utterance.rate = 1; // Speed

  speechSynthesis.speak(utterance);
}

function showDetails(course) {
  const details = document.getElementById(`${course}-details`);
  details.style.display = "block";
}

function hideDetails(course) {
  const details = document.getElementById(`${course}-details`);
  details.style.display = "none";
}

function readCourse(title, details) {
  const utterance = new SpeechSynthesisUtterance(`${title}. ${details}`);
  utterance.lang = "en-US";
  utterance.pitch = 1; // Pitch
  utterance.rate = 1; // Speed
  speechSynthesis.speak(utterance);
}

function toggleTheme() {
  const body = document.body;
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector(".footer");
  const mainContent = document.querySelector(".main-content");
  const navLinks = document.querySelectorAll(".nav-links li a"); // Ensure this is defined

  // Toggle class based on current theme
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    navbar.classList.remove("dark-theme");
    navbar.classList.add("light-theme");
    footer.classList.remove("dark-theme");
    footer.classList.add("light-theme");
    mainContent.classList.remove("dark-theme");
    mainContent.classList.add("light-theme");

    // Set navbar link colors for light theme
    navLinks.forEach((link) => {
      link.style.color = "#000000"; // Dark text color for light theme
    });
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    navbar.classList.remove("light-theme");
    navbar.classList.add("dark-theme");
    footer.classList.remove("light-theme");
    footer.classList.add("dark-theme");
    mainContent.classList.remove("light-theme");
    mainContent.classList.add("dark-theme");

    // Set navbar link colors for dark theme
    navLinks.forEach((link) => {
      link.style.color = "#f8f8f8"; // Light text color for dark theme
    });
  }
}

function changeSaturation(value) {
  document.body.style.filter = `saturate(${value})`;
}

function changeTextAlign(value) {
  document.body.style.textAlign = value;
}

function toggleControlPanel() {
  const panel = document.getElementById("control-panel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

function highlightTitles() {
  const titles = document.querySelectorAll(".card h3");
  titles.forEach((title) => {
    title.classList.toggle("highlight"); // Toggle the highlight class
  });
}
