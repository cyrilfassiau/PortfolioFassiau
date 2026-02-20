document.getElementById("contactForm").addEventListener("submit", sendMail);

function sendMail(e) {
  e.preventDefault(); // empêche le reload

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_qjxafwm", "template_6ghw7vq", params)
    .then(() => {
        alert("Email sent!");
         location.reload();
    
    })


    .catch((err) => {
      console.error("EmailJS error:", err);
      alert("Erreur lors de l’envoi. Regarde la console (F12).");
    });
}