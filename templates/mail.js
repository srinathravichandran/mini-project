document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const defaultUsername = "rambo99";
    const defaultPassword = "rambo99";
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '124004308@sastra.ac.in', // replace with your email address
        pass: 'srinathR2003@' // replace with your email password
      }
    });
  
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
  
      const username = loginForm.querySelector("input[type='text']").value;
      const password = loginForm.querySelector("input[type='password']").value;
  
      if (!username || !password) {
        setFormMessage(loginForm, "error", "Please enter both username and password");
      } else if (username === defaultUsername && password === defaultPassword) {
        setFormMessage(loginForm, "success", "Login successful");
  
        // Send email notification
        const mailOptions = {
          from: '124004308@sastra.ac.in', // replace with your email address
          to: '124004118@sastra.ac.in', // replace with recipient email address
          subject: 'Successful login notification',
          text: 'You have successfully logged into your MEDDOC account.'
        };
  
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
  
        // Redirect to dashboard.html after a short delay
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      } else {
        setFormMessage(loginForm, "error", "Invalid username/password combination");
      }
    });
  
    function setFormMessage(formElement, type, message) {
      const messageElement = formElement.querySelector(".form__message");
  
      messageElement.textContent = message;
      messageElement.classList.remove("form__message--success", "form__message--error");
      messageElement.classList.add(`form__message--${type}`);
    }
  });
  