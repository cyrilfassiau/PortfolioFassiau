
document.addEventListener("DOMContentLoaded", function () {
  const EMAILJS_PUBLIC_KEY = "iJr-eOdLuenucLfWo";
  const EMAILJS_SERVICE = "service_qjxafwm";
  const EMAILJS_TEMPLATE = "template_6ghw7vq";

  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("form-status");
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitLabel = submitBtn.querySelector(".form-submit__label");
  const defaultLabel = submitLabel.textContent;

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const fields = [
    {
      input: document.getElementById("name"),
      validate: (v) =>
        v.length === 0
          ? "Indiquez votre nom pour que je sache qui me contacte."
          : null,
    },
    {
      input: document.getElementById("mail"),
      validate: (v) => {
        if (v.length === 0) return "Indiquez votre email pour que je puisse vous répondre.";
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
          return "Cette adresse semble incomplète. Exemple : nom@exemple.com";
        return null;
      },
    },
    {
      input: document.getElementById("message"),
      validate: (v) =>
        v.length === 0
          ? "Écrivez quelques mots sur ce que vous cherchez."
          : null,
    },
  ];

  function setFieldError(field, message) {
    const wrapper = field.input.closest(".fld");
    const errorEl = document.getElementById(field.input.id + "-error");

    if (message) {
      wrapper.dataset.invalid = "true";
      field.input.setAttribute("aria-invalid", "true");
      errorEl.textContent = message;
      errorEl.hidden = false;
    } else {
      delete wrapper.dataset.invalid;
      field.input.removeAttribute("aria-invalid");
      errorEl.textContent = "";
      errorEl.hidden = true;
    }
  }

  function setStatus(message, state) {
    status.textContent = message;
    if (state) {
      status.dataset.state = state;
    } else {
      delete status.dataset.state;
    }
  }

  
  fields.forEach((field) => {
    field.input.addEventListener("input", function () {
      if (field.input.getAttribute("aria-invalid") === "true") {
        if (!field.validate(field.input.value.trim())) setFieldError(field, null);
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let firstInvalid = null;
    fields.forEach((field) => {
      const message = field.validate(field.input.value.trim());
      setFieldError(field, message);
      if (message && !firstInvalid) firstInvalid = field.input;
    });

    if (firstInvalid) {
      setStatus("Le formulaire n’a pas pu être envoyé. Corrigez les champs signalés.", "error");
      firstInvalid.focus();
      return;
    }

    if (!window.emailjs) {
      setStatus(
        "L’envoi est indisponible pour le moment. Écrivez-moi directement à cyril.fassiau@hotmail.com.",
        "error",
      );
      return;
    }

    
    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-busy", "true");
    submitLabel.textContent = "Envoi en cours";
    setStatus("Envoi en cours…", null);

    emailjs
      .send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("mail").value.trim(),
        message: document.getElementById("message").value.trim(),
      })
      .then(() => {
        form.reset();
        setStatus("Message envoyé. Merci — je vous réponds dès que possible.", "success");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus(
          "L’envoi a échoué. Réessayez, ou écrivez-moi à cyril.fassiau@hotmail.com.",
          "error",
        );
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.removeAttribute("aria-busy");
        submitLabel.textContent = defaultLabel;
      });
  });
});
