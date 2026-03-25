const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const year = document.getElementById("year");
  const membership = document.getElementById("membership");

  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach(error => error.textContent = "");

  // Name validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  // Email validation
  if (!email.value.includes("@")) {
    showError(email, "Enter a valid email");
    isValid = false;
  }

  // Phone validation
  if (phone.value.length < 10) {
    showError(phone, "Enter a valid phone number");
    isValid = false;
  }

  // Year validation
  if (year.value === "" || year.value < 1900 || year.value > 2026) {
    showError(year, "Enter a valid year");
    isValid = false;
  }

  // Membership validation
  if (membership.value === "") {
    showError(membership, "Select membership type");
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent =
      "Registration Successful ✅";

    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}
const enrollment = document.getElementById("enrollment");
const school = document.getElementById("school");
const pssType = document.querySelector('input[name="pssType"]:checked');

// Enrollment validation
if (enrollment.value === "") {
  showError(enrollment, "Enter enrollment year");
  isValid = false;
}

// School validation
if (school.value === "") {
  showError(school, "Select a school");
  isValid = false;
}

// Radio validation
if (!pssType) {
  document.querySelector(".form-group small.error").textContent =
    "Select PSS category";
  isValid = false;
}