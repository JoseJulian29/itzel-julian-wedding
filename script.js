/*
 * Google Apps Script endpoint goes here after deploying the Apps Script.
 * Example:
 * const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/XXXXXXXX/exec";
 */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTa0-AeSyVMlk8YWZ1yhdJ-dxhlQy0D5xMnTDezEhCtI7BwclTv_osjKZRnQ8T9pM/exec";

const invitationView = document.getElementById("invitation");
const rsvpView = document.getElementById("rsvp");
const openRsvpButton = document.getElementById("open-rsvp");
const backButton = document.getElementById("back-to-invitation");
const returnHomeButton = document.getElementById("return-home");
const form = document.getElementById("rsvp-form");
const statusMessage = document.getElementById("form-status");
const successMessage = document.getElementById("success-message");

function showRsvp() {
  invitationView.hidden = true;
  rsvpView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("guest-name").focus();
}

function showInvitation() {
  rsvpView.hidden = true;
  invitationView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showStatus(message) {
  statusMessage.textContent = message;
}

openRsvpButton.addEventListener("click", showRsvp);
backButton.addEventListener("click", showInvitation);
returnHomeButton.addEventListener("click", showInvitation);

form.addEventListener("submit", (event) => {
  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  const attendance = String(formData.get("attendance") || "");

  if (!name || !attendance) {
    event.preventDefault();

    showStatus(
      "Por favor completa los datos para continuar."
    );

    return;
  }

  const submitButton = form.querySelector(
    "button[type='submit']"
  );

  submitButton.disabled = true;
  submitButton.textContent = "ENVIANDO...";

  showStatus("Registrando tu respuesta...");

  document.getElementById("submitted-at").value =
    new Date().toISOString();

  /*
   * NO usamos preventDefault().
   *
   * El navegador hará el POST nativo hacia el iframe.
   */

  setTimeout(() => {
    completeRegistration();
  }, 700);
});

function completeRegistration() {
  form.hidden = true;
  successMessage.hidden = false;
}
