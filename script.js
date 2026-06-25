const form = document.getElementById("formContato");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  mensagem.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
  mensagem.style.color = "green";
  form.reset();
});