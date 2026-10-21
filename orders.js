function getOrderHistory(userId, orders) {
  return orders
    .filter(o => o.userId === userId)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(o => ({ date: o.date, total: o.total, status: o.status }));
}
