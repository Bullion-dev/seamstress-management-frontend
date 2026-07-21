import Topbar from "../components/Topbar";
import OrderCards from "../components/OrderCards";
import RecentOrders from "../components/RecentOrders";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


function Orders() {
const navigate = useNavigate();



const {orders, setOrders} = useContext(AppContext);
const [selectedFilter, setSelectedFilter] = useState('All');

// DELETE FUNCTION - removes a orders from the list
  const handleDelete = (index) => {
    // Filter through orders and keep only the ones NOT at this index
    const updated = orders.filter((_, i) => i !== index);
    
    // Update Context so all pages see the change immediately
    setOrders(updated);
    
    // Save to Local Storage so it persists even after refresh
    localStorage.setItem('orders', JSON.stringify(updated));
  };
  

  return (
    <div>
      <Topbar
        title="ORDERS"
        buttonText="+ New Order"
        buttonPath="/new-order"
      />
      <OrderCards
      orders={orders}
      selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <RecentOrders
        title="Recent Orders"
        columns={['Customer', 'Description', 'Status', 'Balance', 'Due Date']}
        statusIndex={2}
        onDelete={handleDelete}
        // When a row is clicked, navigate to the order details page
  // using the row index as the URL parameter
        onRowClick = {(index) => navigate(`/order-details/${index}`)}
        
rows={orders
  .filter(order => selectedFilter === 'All' || order.status === selectedFilter)
  .map((order) => [
    order.customerNames,
    order.notes,
    order.status,
    `${order.amountPaid}/${order.totalPrice}`,
    order.date,
  ])}     
      />
    </div>
  );
}

export default Orders;