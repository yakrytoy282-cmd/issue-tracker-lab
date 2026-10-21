test('сумма заказа из нескольких товаров', () => {
  expect(checkout({ items: [{ price: 100 }, { price: 250 }] })).toBe(350);
});
test('пустая корзина — ошибка', () => {
  expect(() => checkout({ items: [] })).toThrow('Корзина пуста');
});
