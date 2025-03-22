// getdates.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();
  
    // Format the date as "Day, Month DD, YYYY"
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    // Insert the formatted date in the element with id "currentDate"
    const dateElement = document.getElementById("currentDate");
    if (dateElement) {
      dateElement.textContent = formattedDate;
    }
  
    // Get the current year for the footer
    const currentYear = currentDate.getFullYear();
  
    // Insert the current year in the element with id "footerYear"
    const footerYearElement = document.getElementById("footerYear");
    if (footerYearElement) {
      footerYearElement.textContent = currentYear;
    }
  });
  