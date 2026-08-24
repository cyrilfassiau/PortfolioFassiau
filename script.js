
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
          ? "Enter your name so I know who's contacting me."
          : null,
    },
    {
      input: document.getElementById("mail"),
      validate: (v) => {
        if (v.length === 0) return "Enter your email so I can reply to you.";
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
          return "This address looks incomplete. Example: name@example.com";
        return null;
      },
    },
    {
      input: document.getElementById("message"),
      validate: (v) =>
        v.length === 0
          ? "Write a few words about what you're looking for."
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
      setStatus("The form couldn't be sent. Please correct the highlighted fields.", "error");
      firstInvalid.focus();
      return;
    }

    if (!window.emailjs) {
      setStatus(
        "Sending is unavailable right now. Please email me directly at cyril.fassiau@hotmail.com.",
        "error",
      );
      return;
    }

    
    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-busy", "true");
    submitLabel.textContent = "Sending";
    setStatus("Sending…", null);

    emailjs
      .send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("mail").value.trim(),
        message: document.getElementById("message").value.trim(),
      })
      .then(() => {
        form.reset();
        setStatus("Message sent. Thanks — I'll get back to you as soon as possible.", "success");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus(
          "Sending failed. Please try again, or email me at cyril.fassiau@hotmail.com.",
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
