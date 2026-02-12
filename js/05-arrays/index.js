// ======================================
// Simulação simples de uma loja
// Objetivo: praticar arrays, filter, map e reduce
// ======================================

// Lista de produtos disponíveis no sistema
const products = [
  { name: "Notebook", price: 4500, inStock: true },
  { name: "Mouse", price: 150, inStock: true },
  { name: "Teclado", price: 300, inStock: false },
  { name: "Monitor", price: 1200, inStock: true },
];

// Retorna apenas os produtos que estão disponíveis em estoque
function getAvailableProducts(products) {
  const products_inStock = products.filter(function (product) {
    return product.inStock === true;
  });

  return products_inStock;
}

// Cria um novo array contendo apenas os nomes dos produtos
function getProductNames(products) {
  const product_names = products.map((product) => product.name);
  return product_names;
}

// Calcula o valor total dos produtos disponíveis em estoque
// Primeiro filtra os disponíveis e depois soma os preços usando reduce
function calculateTotalStockValue(products) {
  const available_products = getAvailableProducts(products);

  const total_stock_value = available_products.reduce(function (
    total,
    product,
  ) {
    return total + product.price;
  }, 0);

  return total_stock_value;
}

// Gera um relatório resumido da loja
function generateStoreReport(products) {
  return `
===== LOJA =====
Produtos disponíveis: ${getAvailableProducts(products).length}
Lista de nomes: ${getProductNames(products).join(", ")}
Valor total em estoque: ${calculateTotalStockValue(products)}
`;
}

// Exibe o relatório final no console
console.log(generateStoreReport(products));
