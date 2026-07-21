function OrderCards({ selectedFilter,orders, onFilterChange }) {
  const statuses = ['All', 'Pending', 'In Progress', 'Ready', 'Delivered'];

  return (
    <div className="grid grid-cols-5 gap-4 mb-4 mt-3">
      {statuses.map((status) => {
  // Count orders for this status
  const count = status === 'All' 
    ? orders.length 
    : orders.filter(order => order.status === status).length;

  return (
    <div
      key={status}
      onClick={() => onFilterChange(status)}
      className={`p-6 rounded-lg text-center shadow-md cursor-pointer transition-all ${
        selectedFilter === status 
          ? 'bg-golden text-dark' 
          : 'bg-dark text-white'
      }`}
    >
      <p className="text-sm font-medium mb-3">{status}</p>
      <h3 className="text-xl font-bold">({count})</h3>
    </div>
  );
})}
    </div>
  );
}

export default OrderCards;