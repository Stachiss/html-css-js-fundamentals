// ================================
// Simulação de Cadastro de Usuário
// Objetivo: praticar variáveis e manipulação de objetos
// ================================

// Teste inicial do console
console.log("Hello World!");
console.log("Hello World 2!");

// Dados iniciais do usuário
const user = {
  name: "Carlos",
  age: 23,
  isStudent: true,
  skills: ["HTML", "CSS", "JavaScript"],
};

// Simulando aniversário do usuário
user.age = 24;

// Exibindo perfil formatado no console
console.log("===== USER PROFILE =====");
console.log(`Nome: ${user.name}`);
console.log(`Idade: ${user.age}`);
console.log(`Estudante: ${user.isStudent ? "Sim" : "Não"}`);
console.log(`Habilidades: ${user.skills.join(", ")}`);
