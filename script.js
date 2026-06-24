// open.js//

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. SELECT DOM ELEMENTS ---
  const reviewForm = document.getElementById("review-form");
  const titleInput = document.getElementById("movie-title-input");
  const ratingInput = document.getElementById("movie-rating-input");
  const reviewInput = document.getElementById("movie-review-input");
  const reviewsList = document.getElementById("reviews-list");

  // --- 2. ATTACH EVENT LISTENER TO THE FORM ---
  reviewForm.addEventListener("submit", (event) => {
    // Stop the default browser action of reloading the page on submit
    event.preventDefault();

    // --- 3. GET VALUES FROM THE FORM ---
    const title = titleInput.value.trim();
    const rating = ratingInput.value;
    const reviewText = reviewInput.value.trim();

    // --- 4. BASIC VALIDATION ---
    if (title === "" || reviewText === "") {
      alert("Please fill out all fields.");
      return; // Stop the function execution if validation fails
    }

    // --- 5. CREATE THE NEW REVIEW CARD ---
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card"); // Add the CSS class for styling

    // Generate star string based on the rating value
    const starRating = "★".repeat(rating) + "☆".repeat(5 - rating);

    // Use innerHTML to structure the content of the card
    reviewCard.innerHTML = `
            <h3>${title}</h3>
            <p class="rating">${starRating}</p>
            <p class="review-text">${reviewText}</p>
        `;

    // --- 6. APPEND THE NEW CARD TO THE LIST ---
    reviewsList.appendChild(reviewCard);

    // --- 7. CLEAR THE FORM FOR THE NEXT SUBMISSION ---
    reviewForm.reset();
  });
});



