// Array of image filenames in your folder
const images = [
  "pics(1).jpeg",
  "pics (2).jpeg",
  "pics (3).jpeg",
  // ... you can add all 318 filenames here
];

// Folder path where images are stored
const folderPath = "expols 3rd agm reunion/";

// Reference to the gallery div
const gallery = document.getElementById("gallery");

// Generate image elements dynamically
images.forEach(filename => {
  const img = document.createElement("img");
  // Use encodeURIComponent to handle spaces and special characters
  img.src = folderPath + encodeURIComponent(filename);
  img.alt = filename;
  gallery.appendChild(img);
});