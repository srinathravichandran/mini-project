document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const defaultUsername = "dr.goodwin";
    const defaultPassword = "dr.goodwin";
  
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
  
      const username = loginForm.querySelector("input[type='text']").value;
      const password = loginForm.querySelector("input[type='password']").value;
  
      const messageElement = loginForm.querySelector(".form_message");
  
      if (!username || !password) {
        setFormMessage(messageElement, "error", "Please enter both username and password");
      } else if (username === defaultUsername && password === defaultPassword) {
        setFormMessage(messageElement, "success", "Login successful");
        setTimeout(() => {
          window.location.href = "testo.html";
        }, 1000);
      } else {
        setFormMessage(messageElement, "error", "Invalid username/password combination");
      }
    });
  
    function setFormMessage(messageElement, type, message) {
      messageElement.textContent = message;
      messageElement.classList.remove("form_message--success", "form_message--error");
      messageElement.classList.add(`form_message--${type}`);
    }
  });
  