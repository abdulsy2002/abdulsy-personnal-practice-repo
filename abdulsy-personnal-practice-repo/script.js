// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    console.log("Saved User:", savedUser); // DEBUG

    if (!savedUser) {
      alert("❌ No account found. Register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("isLoggedIn", "true");

      console.log("Login success → redirecting..."); // DEBUG

      window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid login details");
    }
  });
}