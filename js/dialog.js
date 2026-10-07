(() => {
  const dialog = document.getElementById("a11y-dialog");

  if (!dialog) {
    return;
  }

  const trigger = document.getElementById("open-a11y-dialog");
  const closeButton = dialog.querySelector("[data-close-dialog]");

  if (trigger) {
    trigger.addEventListener("click", () => {
      dialog.showModal();
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
})();
