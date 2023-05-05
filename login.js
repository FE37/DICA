const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  fetch("https://6451c9d6a2860c9ed4fae68b.mockapi.io/api/login/login")
    .then((response) => response.json())
    .then((data) => {
      const user = data.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        window.location.href = "home.html";
      } else {
        alert("Username atau password salah");
      }
    })
    .catch((error) => console.error(error));
});
