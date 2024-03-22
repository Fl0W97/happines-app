document.addEventListener("DOMContentLoaded", () => {
  handleDeleteButton();

  const themeToggle = document.querySelector(".theme-toggle");
  const html = document.querySelector("html");

  themeToggle.addEventListener("click", () => {
    // change `data-bs-theme="dark"` of to light if it is dark in html
    // update the innerText of the themeToggle to 🌚

    if (html.getAttribute("data-bs-theme") === "dark") {
      html.setAttribute("data-bs-theme", "light");
      themeToggle.innerText = "🌞";
    } else {
      html.setAttribute("data-bs-theme", "dark");
      themeToggle.innerText = "🌚";
    }
  });
});

/**
 * Check for delete buttons and add event listener to display modal
 * @returns {void}
 */
const handleDeleteButton = () => {
  const deleteButtons = document?.querySelectorAll(".delete-link");
  const deleteModal = document?.getElementById("delete-modal");
  const deleteModalForm = deleteModal?.querySelector("form");
  const deleteModalMessage = deleteModal?.querySelector(
    "#delete-modal-message"
  );
  const deleteCancelButton = deleteModal?.querySelector(
    ".delete-cancel-button"
  );

  if (deleteButtons.length === 0 || !deleteModal) return;

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();

      const isProfile = deleteButton.classList.contains("profile-delete-link");

      let message = "Are you sure you want to delete this item?";

      if (isProfile) {
        message = "Are you sure you want to delete your account?";
      }

      // Update the modal message
      deleteModalMessage.textContent = message;

      // Update the form action to the href of the delete button
      deleteModalForm.setAttribute("action", deleteButton.getAttribute("href"));

      // Show the modal
      deleteModal.showModal();
    });
  });

  // Handle the cancel button click
  if (deleteCancelButton) {
    deleteCancelButton.addEventListener("click", (event) => {
      event.preventDefault();
      deleteModal.close();
    });
  }
};
