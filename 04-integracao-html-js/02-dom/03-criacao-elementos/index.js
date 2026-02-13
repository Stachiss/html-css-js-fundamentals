function adicionarComida() {
  const listaComidas = document.getElementById("comidas");

  const comidaTag = document.createElement("li");
  comidaTag.textContent = "Pera";

  listaComidas.append(comidaTag);
}
