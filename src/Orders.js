import Topbar from "./Topbar";
import OrderCards from "./OrderCards";
import RecentOrders from "./RecentOrders";

function Orders() {
  return (
    <div>
      <Topbar
        title="ORDERS"
        buttonText="+ New Order"
        buttonPath="/new-order"
      />
      <OrderCards />
      <RecentOrders
        title="Recent Orders"
        columns={['Customer', 'Description', 'Status', 'Balance', 'Due Date']}
        statusIndex={2}
        rows={[
          ['Mary Johnson', 'Wedding Dress - alterations', 'Pending', 'GH₵250', 'May 15, 2026'],
          ['Mary Johnson', 'Wedding Dress - alterations', 'In Progress', 'GH₵250', 'May 10, 2026'],
          ['J.Cole', 'Suit', 'Ready', 'GH₵80', 'May 15, 2026'],
        ]}
      />
    </div>
  );
}

export default Orders;