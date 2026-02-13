// ======================================
// Simulação simples de análise de produto
// Objetivo: praticar manipulação de objetos e funções
// ======================================

// Produto que será processado pelo sistema
const product = {
  name: "Notebook",
  price: 4500,
  discount: 10, // desconto aplicado em porcentagem
  inStock: true,
};

// Calcula o preço final aplicando o desconto percentual
function calculateFinalPrice(product) {
  return product.price - (product.price * product.discount) / 100;
}

// Verifica se o produto está disponível para compra
function checkAvailability(product) {
  return product.inStock ? "Produto disponível" : "Produto indisponível";
}

// Gera um resumo formatado do produto
function generateProductReport(product) {
  return `
===== PRODUTO =====
Nome: ${product.name}
Preço original: ${product.price}
Preço com desconto: ${calculateFinalPrice(product)}
Status: ${checkAvailability(product)}
`;
}

// Exibe no console o relatório completo gerado acima
console.log(generateProductReport(product));
