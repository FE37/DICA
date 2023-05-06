const loginForm = document.getElementById("login-form");
const errorText = document.getElementById("error-text")

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  if (
    username.trim() == "" ||
    password.trim() == ""
  ) {
        errorText.innerHTML = "Semua form harus diisi!";
    return false;
  }
    errorText.innerHTML = "";
  fetch("https://6451c9d6a2860c9ed4fae68b.mockapi.io/api/login")
    .then((response) => response.json())
    .then((data) => {
      const user = data.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        window.location.href = "home.html"
      } else {
        alert("Username atau password salah");
      }
    })
    .catch((error) => console.error(error));
  });
