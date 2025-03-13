console.log("Homepage script loaded successfully!");

// DOM elements
const searchButton = document.getElementById("searchButton");
const reservationButton = document.getElementById("reservationButton");
const filterSelect = document.getElementById("izvelerek");
const locationSelect = document.getElementById("meklesanarek");
const searchSubmitButton = document.getElementById("mekletpoga");

// Ensure paths work on GitHub Pages
function getPagePath(page) {
  return "html/" + page;
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");
  console.log("Search button found:", searchButton !== null);
  console.log("Reservation button found:", reservationButton !== null);
  console.log("Search submit button found:", searchSubmitButton !== null);

  // Search button functionality
  if (searchButton) {
    searchButton.addEventListener("click", function () {
      console.log("Search button clicked");
      window.location.href = getPagePath("SearchResultPage.html");
    });
  }

  if (reservationButton) {
    reservationButton.addEventListener("click", function () {
      console.log("Reservation button clicked");
      window.location.href = getPagePath("CarReservation.html");
    });
  }

  if (searchSubmitButton) {
    searchSubmitButton.addEventListener("click", function () {
      console.log("Search submit button clicked");
      const selectedFilter = filterSelect ? filterSelect.value : "";
      const selectedLocation = locationSelect ? locationSelect.value : "";
      console.log("Filter:", selectedFilter, "Location:", selectedLocation);

      window.location.href = getPagePath("SearchResultPage.html");
    });
  }
});
