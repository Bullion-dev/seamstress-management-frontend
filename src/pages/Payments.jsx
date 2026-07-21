import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCards from "../components/SummaryCards";
import RecentOrders from "../components/RecentOrders";
import Topbar from "../components/Topbar";

function Payments() {
  // 1. Fetch dynamic orders array from global context
  const { orders } = useContext(AppContext);

  // 2. RUN CALCULATIONS FOR METRICS
  let totalReceived = 0;
  let totalOutstanding = 0;
  let fullyPaidCount = 0;

  orders.forEach((order) => {
    // Convert string inputs safely to numbers (fallback to 0 if empty/invalid)
    const price = parseFloat(order.totalPrice) || 0;
    const paid = parseFloat(order.amountPaid) || 0;
    const balance = price - paid;

    totalReceived += paid;
    totalOutstanding += balance;

    // An order is fully paid if its price is greater than 0 and outstanding balance is 0 or less
    if (price > 0 && balance <= 0) {
      fullyPaidCount += 1;
    }
  });

  // 3. MAP THE ORDERS INTO THE TABLE ROW FORMAT
  const tableRows = orders.map((order) => {
    const price = parseFloat(order.totalPrice) || 0;
    const paid = parseFloat(order.amountPaid) || 0;
    const balance = price - paid;

    return [
      order.customerNames || "N/A",                     // Names column
      order.notes || "No Description",                 // Order column
      `${paid} / ${price}`,                            // Paid/Total column
      balance <= 0 ? "Paid" : `GH₵ ${balance}`         // Balance column (displays "Paid" if balance is 0)
    ];
  });

  return (
    <div>
      {/* Dynamic Topbar showing total outstanding balance */}
      <Topbar 
        title="PAYMENTS" 
        topText="Total Outstanding:" 
        numText={` GH₵ ${totalOutstanding.toLocaleString()}`}
      />
      
      {/* Dynamic Summary Cards */}
      <SummaryCards 
        cards={[
          { title: 'Total Received', value: `GH₵ ${totalReceived.toLocaleString()}` },
          { title: 'Outstanding', value: `GH₵ ${totalOutstanding.toLocaleString()}` },
          { title: 'Fully Paid Orders', value: String(fullyPaidCount) },
        ]} 
      />
      
      {/* Dynamic Recent Orders Table */}
      <RecentOrders 
        columns={['Names', 'Order', 'Paid/Total', 'Balance']}
        rows={tableRows}
      />
    </div>
  );
}

export default Payments;