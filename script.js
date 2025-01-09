

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
  const isMenuOpen = dropdownMenu.style.display === "flex";

  if (isMenuOpen) {
    hideMenu();
  } else {
    dropdownMenu.style.display = "flex";

    // Add an event listener to close the menu when clicking outside
    document.addEventListener("click", outsideClickHandler);
  }
}

// Function to close the menu
function hideMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display = "none";

  // Remove the event listener when the menu is closed
  document.removeEventListener("click", outsideClickHandler);
}

// Function to handle clicks outside the dropdown menu
function outsideClickHandler(event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  // Check if the click is outside the menu and the hamburger button
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

