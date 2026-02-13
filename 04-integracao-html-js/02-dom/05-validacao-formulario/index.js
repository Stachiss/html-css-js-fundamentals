function createUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordCheck = formData.get("password-check");

  if (!name || !email || !password || !passwordCheck) {
    alert("Campos não preenchidos");
  }

  if (password !== passwordCheck) {
    alert("Senhas diferentes");
  }
}
