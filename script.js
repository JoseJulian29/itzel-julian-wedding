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

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  document.getElementById("guest-name").focus();
}

function showInvitation() {
  rsvpView.hidden = true;
  invitationView.hidden = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showStatus(message) {
  statusMessage.textContent = message;
}

openRsvpButton.addEventListener("click", showRsvp);
backButton.addEventListener("click", showInvitation);
returnHomeButton.addEventListener("click", showInvitation);

/*
 * IMPORTANTE:
 *
 * NO interceptamos el submit.
 *
 * El navegador hará directamente el POST
 * nativo hacia Google Apps Script.
 */
form.addEventListener("submit", () => {
  const submittedAt = document.getElementById("submitted-at");

  submittedAt.value = new Date().toISOString();

  const submitButton = form.querySelector(
    "button[type='submit']"
  );

  submitButton.disabled = true;
  submitButton.textContent = "ENVIANDO...";

  showStatus("Registrando tu respuesta...");

  /*
   * No usamos:
   * - event.preventDefault()
   * - fetch()
   * - sendBeacon()
   * - iframe
   *
   * El POST nativo continúa.
   */
});
