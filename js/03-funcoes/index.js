// ======================================
// Simulação simples de avaliação de usuário
// Objetivo: praticar funções e lógica condicional
// ======================================

// Dados base do usuário
const user = {
  name: "Carlos",
  age: 23,
  score: 75,
  isStudent: true,
};

// Verifica se o usuário é maior ou menor de idade
function checkAge(user) {
  return user.age >= 18 ? "Maior de idade" : "Menor de idade";
}

// Classifica o desempenho com base na pontuação
// A ordem das condições é importante para garantir a classificação correta
function classifyScore(score) {
  if (score >= 90) {
    return "Excelente";
  } else if (score >= 70) {
    return "Boa";
  } else if (score >= 50) {
    return "Regular";
  } else {
    return "Insuficiente";
  }
}

// Define se o usuário foi aprovado ou reprovado
// Regra: nota mínima para aprovação é 60
function getApprovalStatus(score) {
  if (score >= 60) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

// Exibe o resultado final chamando as funções criadas acima
console.log("===== RESULTADO =====");
console.log(`Nome: ${user.name}`);
console.log(`Idade: ${checkAge(user)}`);
console.log(`Desempenho: ${classifyScore(user.score)}`);
console.log(`Status: ${getApprovalStatus(user.score)}`);
