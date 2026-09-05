/* In Focus Production — progressive enhancement only. The page works without it. */
(function () {
  "use strict";

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- brief form --------------------------------------------------------
     The form posts to whatever endpoint is set on the <form action>. Until one
     is configured we say so plainly rather than pretending the message sent.
     See README, "Wiring up the form".
  ------------------------------------------------------------------------- */
  var form = document.getElementById("brief-form");
  var msg = document.getElementById("form-msg");
  if (!form || !msg) return;

  var say = function (text, ok) {
    msg.textContent = text;
    msg.className = "form__msg " + (ok ? "form__msg--ok" : "form__msg--err");
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.reportValidity()) return;

    var endpoint = form.getAttribute("action");
    if (!endpoint) {
      say("This form isn't connected yet — please email info@infocusmedia.site.", false);
      return;
    }

    var button = form.querySelector("button[type=submit]");
    button.disabled = true;
    button.textContent = "Sending…";

    fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        say("Got it. We'll be in touch within one business day.", true);
      })
      .catch(function () {
        say("That didn't send. Try again, or email us at info@infocusmedia.site.", false);
      })
      .then(function () {
        button.disabled = false;
        button.textContent = "Send brief";
      });
  });
})();
