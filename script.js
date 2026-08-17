const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusEl = document.getElementById("formStatus");

const fields = {
  name: document.getElementById("name"),
  mail: document.getElementById("mail"),
  message: document.getElementById("message"),
};

function setStatus(text, state) {
  statusEl.textContent = text;
  statusEl.classList.remove("is-error", "is-success");
  if (state) statusEl.classList.add(state);
}

function markInvalid(el, invalid) {
  el.setAttribute("aria-invalid", invalid ? "true" : "false");
}

function validate() {
  let firstInvalid = null;

  Object.values(fields).forEach((el) => {
    const empty = el.value.trim() === "";
    const badEmail =
      el === fields.mail && !empty && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
    const invalid = empty || badEmail;

    markInvalid(el, invalid);
    if (invalid && !firstInvalid) firstInvalid = el;
  });

  return firstInvalid;
}

// efface l'état d'erreur dès que l'utilisateur corrige
Object.values(fields).forEach((el) => {
  el.addEventListener("input", () => {
    if (el.getAttribute("aria-invalid") === "true") markInvalid(el, false);
  });
});

form.addEventListener("submit", function sendMail(e) {
  e.preventDefault();

  const firstInvalid = validate();
  if (firstInvalid) {
    setStatus("Merci de compléter tous les champs avec une adresse valide.", "is-error");
    firstInvalid.focus();
    return;
  }

  const params = {
    name: fields.name.value.trim(),
    email: fields.mail.value.trim(),
    message: fields.message.value.trim(),
  };

  submitBtn.disabled = true;
  submitBtn.textContent = "Envoi en cours…";
  setStatus("Envoi en cours…");

  emailjs
    .send("service_qjxafwm", "template_6ghw7vq", params)
    .then(() => {
      form.reset();
      setStatus("Message envoyé. Je vous réponds au plus vite.", "is-success");
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      setStatus(
        "L’envoi a échoué. Écrivez-moi directement à cyril.fassiau@hotmail.com.",
        "is-error",
      );
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Envoyer";
    });
});
