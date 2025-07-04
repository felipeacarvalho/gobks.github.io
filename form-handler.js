document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("join-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      alert("Obrigado pelo envio! Nossa equipe analisará sua proposta.");
      form.reset();
    })
    .catch(() => {
      alert("Ocorreu um erro. Tente novamente.");
    });
  });
});
