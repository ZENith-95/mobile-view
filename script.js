document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const playIcon = document.getElementById("play-icon");

  playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playIcon.src = "./Assets/pause.png";
    } else {
      video.pause();
      playIcon.src = "./Assets/play.png";
    }
  });
});

// Function to toggle the dropdown menu
function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  // Toggle the dropdown menu visibility
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
    document.removeEventListener("click", outsideClickHandler);
  } else {
    dropdownMenu.style.display = "flex";
    setTimeout(() => {
      document.addEventListener("click", outsideClickHandler);
    }, 0); // Delay to ensure event listener doesn't immediately close the menu
  }
}

// Function to close the menu
function hideMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
    document.removeEventListener("click", outsideClickHandler);
  }
}

// Function to handle clicks outside the dropdown menu
function outsideClickHandler(event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  if (
    !dropdownMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    hideMenu();
  }
}

// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Select elements
const selectMenuHead = document.getElementById("selectMenuHead");
const selectMenuDropdown = document.getElementById("selectMenuDropdown");

// Toggle the dropdown menu visibility
selectMenuHead.addEventListener("click", () => {
  const isVisible = selectMenuDropdown.style.display === "block";
  selectMenuDropdown.style.display = isVisible ? "none" : "block";
});

// Close dropdown when clicking outside
window.addEventListener("click", (event) => {
  if (!event.target.closest(".select-menu")) {
    selectMenuDropdown.style.display = "none";
  }
});

let currentIndex = 0;
const images = document.querySelectorAll("#destinationImages .destination-box");
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

function autoScroll() {
  nextImage();
  setTimeout(autoScroll, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
  autoScroll();
});
