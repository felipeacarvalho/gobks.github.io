document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("join-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert("✅ Obrigado pelo envio! Nossa equipe analisará sua proposta.");
        form.reset();
      } else {
        alert("❌ Ocorreu um erro. Tente novamente.");
      }
    }).catch(error => {
      alert("⚠️ Erro de rede. Verifique sua conexão.");
    });
  });
});
