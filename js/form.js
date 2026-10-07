(() => {
  const form = document.getElementById("contact-form");

  if (!form) {
    return;
  }

  const status = document.getElementById("form-status");
  const nameInput = document.getElementById("contact-name");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      if (status) {
        status.dataset.state = "error";
        status.textContent = "Please fix the highlighted fields.";

        window.setTimeout(() => {
          status.dataset.state = "idle";
          status.textContent = "";
        }, 2000);
      }

      return;
    }

    const name = nameInput ? nameInput.value : "";

    if (status) {
      status.dataset.state = "submitting";
      status.textContent = "Sending…";
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    window.setTimeout(() => {
      if (status) {
        status.dataset.state = "success";
        status.textContent = `Thanks, ${name}! Message received.`;
      }

      form.reset();

      if (submitButton) {
        submitButton.disabled = false;
      }

      window.setTimeout(() => {
        if (status) {
          status.dataset.state = "idle";
          status.textContent = "";
        }
      }, 3000);
    }, 800);
  });
})();
