console.log("Homepage script loaded successfully!");

// DOM elements
const searchButton = document.getElementById("poga1");
const reservationButton = document.querySelectorAll("#poga1")[1];
const filterSelect = document.getElementById("izvelerek");
const locationSelect = document.getElementById("meklesanarek");
const searchSubmitButton = document.getElementById("mekletpoga");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // Search button functionality
  if (searchButton) {
    searchButton.addEventListener("click", function () {
      console.log("Search button clicked");
      window.location.href = "SearchResultPage.html";
    });
  }

  if (reservationButton) {
    reservationButton.addEventListener("click", function () {
      console.log("Reservation button clicked");
      window.location.href = "CarReservation.html";
    });
  }

  if (searchSubmitButton) {
    searchSubmitButton.addEventListener("click", function () {
      console.log("Search submit button clicked");
      const selectedFilter = filterSelect ? filterSelect.value : "";
      const selectedLocation = locationSelect ? locationSelect.value : "";
      console.log("Filter:", selectedFilter, "Location:", selectedLocation);

      window.location.href = "SearchResultPage.html";
    });
  }
});
