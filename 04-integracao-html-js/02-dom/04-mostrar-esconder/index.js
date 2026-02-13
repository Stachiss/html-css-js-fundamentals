function esconderTexto() {
  const texto = document.getElementById("paragrafo");

  if (texto.style.display == "block") {
    texto.style.display = "none";
  } else {
    texto.style.display = "block";
  }
}
