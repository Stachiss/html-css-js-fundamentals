// =====================================
// Pequeno sistema para treinar condições
// =====================================

// Criando um usuário para testar as regras
const user = {
  name: "Carlos",
  age: 23,
  isStudent: true,
  subscription: "premium", // pode ser: free, basic ou premium
  score: 82,
};

console.log("===== SISTEMA DE ACESSO =====");

// Verificando se o usuário é maior de idade
if (user.age >= 18) {
  console.log("Usuário é maior de idade.");
} else {
  console.log("Usuário é menor de idade.");
}

// Avaliando a pontuação do usuário
if (user.score >= 90) {
  console.log("Classificação: Excelente");
} else if (user.score >= 70) {
  console.log("Classificação: Boa");
} else if (user.score >= 50) {
  console.log("Classificação: Regular");
} else {
  console.log("Classificação: Insuficiente");
}

// Liberando acesso com base no plano
switch (user.subscription) {
  case "premium":
    console.log("Acesso total liberado.");
    break;
  case "basic":
    console.log("Acesso parcial liberado.");
    break;
  case "free":
    console.log("Acesso limitado.");
    break;
  default:
    console.log("Plano inválido.");
}

// Verificando se pode receber desconto
// Regra: ser estudante e ter menos de 25 anos
if (user.isStudent && user.age < 25) {
  console.log("Elegível para desconto estudantil.");
}

// Definindo o status final de aprovação
const status = user.score >= 60 ? "Aprovado" : "Reprovado";
console.log(`Status final: ${status}`);
