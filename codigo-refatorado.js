/**
 * Shopping List (Clean Code / ES6)
 * - Dados imutáveis por padrão
 * - Funções puras (sem efeitos colaterais)
 * - Nomes claros
 * - Total correto (corrige bug do legado)
 */

const initialItems = [
  { name: "Arroz", unitPrice: 20, quantity: 2 },
  { name: "Feijao", unitPrice: 8, quantity: 3 },
  { name: "Macarrao", unitPrice: 5, quantity: 1 },
];

// Valida e normaliza um item antes de usar
const createItem = ({ name, unitPrice, quantity }) => {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Item inválido: 'name' deve ser uma string não vazia.");
  }

  const price = Number(unitPrice);
  const qty = Number(quantity);

  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Item inválido: 'unitPrice' deve ser um número >= 0.");
  }
  if (!Number.isInteger(qty) || qty < 0) {
    throw new Error("Item inválido: 'quantity' deve ser um inteiro >= 0.");
  }

  return { name: name.trim(), unitPrice: price, quantity: qty };
};

// Soma total corretamente (usa reduce)
const calculateTotal = (items) =>
  items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

// Retorna uma nova lista com o item adicionado (imutável)
const addItem = (items, newItem) => [...items, createItem(newItem)];

/**
 * Exemplo de uso (funcional)
 */
const itemsAfterAdd = addItem(initialItems, {
  name: "Cafe",
  unitPrice: 12.5,
  quantity: 2,
});

console.log("Itens:", itemsAfterAdd);
console.log("Total da compra:", calculateTotal(itemsAfterAdd));
