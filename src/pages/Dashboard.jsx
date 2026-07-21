import Topbar from "../components/Topbar";
import SummaryCards from "../components/SummaryCards";
import RecentOrders from "../components/RecentOrders";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Dashboard(){
 const { customers, orders } = useContext(AppContext);

 // Count total customers
const totalCustomers = customers.length;

// Count customers who have at least 1 order
const activeCustomers = customers.filter(customer => 
  orders.some(order => order.customerNames === customer.fullName)
).length;

// Count orders that are NOT delivered
const pendingPayments = orders.filter(order => order.status !== 'Delivered').length;

    return(
        <div>
<Topbar 
title="Welcome Back Akwele" 
buttonText="+ Add Customer" 
buttonPath="/add-customers" 
/>
<SummaryCards 
  cards={[
    {title:'Total Customers', value: totalCustomers},
    {title:'Active Customers', value: activeCustomers},
    {title:'Pending Payments', value: pendingPayments},
  ]}
/>
<RecentOrders 
title="Recent Orders"
                columns={['Customer', 'Description', 'Status', 'Balance', 'Due Date']}
                statusIndex={2}
               rows={orders.slice(0, 3).map((order) => [
  order.customerNames,
  order.notes,
  order.status,
  `${order.amountPaid}/${order.totalPrice}`,
  order.date,
])} />
</div>
    );
}

export default Dashboard;