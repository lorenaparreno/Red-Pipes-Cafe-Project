// JavaScript for the image gallery functionality

// Array of image paths
const images = [
  "images/latte-croissant.png",
  "images/cappuccino-books.png",
  "images/counter-culture-coffee.png",
  "images/salad.png",
  "images/cupcakes.png",
];

let currentIndex = 0;

// Reference to the gallery image element
const galleryImage = document.getElementById("galleryImage");

// Reference to the buttons
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to update the displayed image
function updateImage() {
  galleryImage.src = images[currentIndex];
}

// Add event listeners to the buttons
prevButton.addEventListener("click", () => {
  // Move to the previous image
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  updateImage();
});

nextButton.addEventListener("click", () => {
  // Move to the next image
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  updateImage();
});

// Initialize the gallery with the first image
updateImage();
