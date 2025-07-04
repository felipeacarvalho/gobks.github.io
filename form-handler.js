const form = document.getElementById("join-form");
const thankYou = document.getElementById("thank-you-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.style.display = "none";
      thankYou.style.display = "block";
    } else {
      alert("Ocorreu um erro. Tente novamente.");
    }
  }).catch(error => {
    alert("Erro de rede. Verifique sua conexão.");
  });
});
