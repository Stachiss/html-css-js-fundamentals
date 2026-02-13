function createUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const nome = formData.get("name");
  const idade = formData.get("age");

  const liTag = document.createElement("li");
  liTag.textContent = `${nome}: ${idade}`;

  const userList = document.getElementById("userlist");

  userList.append(liTag);

  event.target.reset();
}
