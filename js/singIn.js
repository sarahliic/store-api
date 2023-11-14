let username = document.querySelector(".username");
let password = document.querySelector(".password");
let loginBtn = document.querySelector(".linkbtn");
let validation = document.querySelector(".validation");

// Event Listener
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let usernameValue = username.value;
  let passwordValue = password.value;

  let api = "https://6552fbeb5449cfda0f2df919.mockapi.io/login";
  fetch(api, {
    method: "POST",
    body: JSON.stringify({
      username: usernameValue,
      password: passwordValue,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Login successful, redirect to the desired page
        window.location.href = "index.html"; // Replace with your desired page
      } else {
        // Login failed, show error message
        validation.innerHTML = "Invalid username or password";
        validation.style.color = "red";
      }
    })
    .catch((error) => {
      console.error(error);
      // Handle any errors that occurred during the login process
    });
});
