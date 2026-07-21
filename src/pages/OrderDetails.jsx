import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Sidebar from "../components/Sidebar";
import FormTopbar from "../components/FormTopbar";


function OrderDetails(){

        // Get the index from the URL e.g /order-details/0 → id = '0'
        // reads that number from the URL and gives it to you. 
        // It's a React Router hook — just like useNavigate lets you navigate, useParams lets you read the URL
const {id} = useParams();
// Get orders from Context
const {orders, setOrders} = useContext(AppContext);
// Find the specific order using the index
const order = orders[id];

// calculation
const percentage = Math.min(
  Math.round((order?.amountPaid / order?.totalPrice) * 100), 
  100
);

const handleStatusChange = (newStatus) => {
  // Go through every order in the list
  // If it's the current order (matching id) → update its status
  // If it's not the current order → keep it exactly the same
  const updated = orders.map((o, i) => 
    // parseInt converts id from string '1' to number 1
    // so we can compare it to i which is also a number
    i === parseInt(id) 
      ? { ...o, status: newStatus } // copy the order but update the status
      : o // keep the order as is
  );
  console.log('updated orders:', updated);
  // Update Context so all pages see the new status immediately
  setOrders(updated);
  
  // Save to Local Storage so it persists after refresh
  localStorage.setItem('orders', JSON.stringify(updated));
};

const handleRecordPayment = () => {
  // Ask user how much was paid
  const amount = prompt('Enter amount paid:');
  
  // If user cancelled or entered nothing, stop
  if (!amount) return;
  
  // Add new payment to existing amount paid
  const newAmountPaid = parseFloat(order?.amountPaid) + parseFloat(amount);
  
  // Go through every order and update this one's amountPaid
  const updated = orders.map((o, i) => 
    i === parseInt(id) 
      ? { ...o, amountPaid: newAmountPaid } // update amountPaid
      : o
  );
  
  // Update Context
  setOrders(updated);
  
  // Save to Local Storage
  localStorage.setItem('orders', JSON.stringify(updated));
};

return(
    <div>
        <FormTopbar
      backText="ORDERS"
      backPath="/orders"
      cancelPath="/orders"
      title={`${order?.notes} - ${order?.customerNames}`}
      saveText="Edit"
    />

    <div className="flex gap-6">
  {/* LEFT SECTION */}
  <div className="flex-1">
    
    {/* Customer Info Card */}
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      {/* Customer name and status */}
      <div className="flex items-center gap-4 mb-10">
        {/* Avatar circle with initials */}
        <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-white text-sm font-bold">
          {order?.customerNames?.charAt(0)}
        </div>
        <div>
          <h2 className="font-bold text-gray-800">{order?.customerNames}</h2>
        </div>
        {/* Status capsule */}
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
          {order?.status}
        </span>
      </div>

      {/* Order details */}
      <div className="flex flex-col gap-4">
        <div className="border-b pb-4">
          <p className="text-gray-400 text-sm">Description</p>
          <p className="font-bold">{order?.notes}</p>
        </div>
        <div className="border-b pb-4">
          <p className="text-gray-400 text-sm">Due Date</p>
          <p className="text-golden font-bold">{order?.date}</p>
        </div>
        <div className="border-b pb-4">
          <p className="text-gray-400 text-sm">Fabric</p>
          <p className="font-bold">{order?.fabricSupply}</p>
        </div>
      </div>
    </div>


  </div>
  {/* RIGHT SECTION */}
<div className="w-80 flex flex-col gap-2">
  
{/* Style reference image container block */}
<div 
  className="bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden" 
  style={{ height: '200px' }} // Restricts the entire container to a fixed height of 200px
>
  {/* TERNARY OPERATOR (? :) 
    Condition: Does the order exist, and does it have an image string?
  */}
  {order?.image ? (
    
    // IF TRUE: Render the actual image using the saved Base64 string data
    <img 
      src={order.image}              // The source is the Base64 image data string from Local Storage
      alt="Style preference" 
      className="w-full h-full object-cover" // object-cover scales the image nicely without stretching it
    />
    
  ) : (
    
    // IF FALSE: Render this placeholder text so the user doesn't see a blank grey box
    <p className="text-gray-500 text-sm">
      No style reference image uploaded
    </p>
    
  )}
</div>

  {/* Action buttons */}
  {/* Only show Mark as Ready if status is NOT Ready or Delivered */}
{order?.status !== 'Ready' && order?.status !== 'Delivered' && (
  <button 
    onClick={() => handleStatusChange('Ready')}
    className="w-full bg-white border border-gray-200 rounded-lg py-3 font-medium hover:bg-gray-50 transition-all">
    Mark as Ready
  </button>
)}

{/* Only show Mark as Delivered if status is NOT Delivered */}
{order?.status !== 'Delivered' && (
  <button 
    onClick={() => handleStatusChange('Delivered')}
    className="w-full bg-white border border-gray-200 rounded-lg py-3 font-medium hover:bg-gray-50 transition-all">
    Mark as Delivered
  </button>
)}

{/* Record Payment always shows */}
<button 
onClick={handleRecordPayment}
className="w-full bg-white border border-golden rounded-lg py-3 font-medium text-golden hover:bg-golden hover:text-white transition-all">
  Record Payment
</button>
</div>
</div>
{/* PAYMENT SECTION */}
<div className="bg-white rounded-lg shadow-sm p-6 mt-6">
  <h2 className="text-lg font-bold text-gray-800 mb-6">PAYMENT</h2>
  
  <div className="flex flex-col gap-4">
    {/* Total Price */}
    <div className="border-b pb-4">
      <p className="text-gray-400 text-sm">Total Price</p>
      <p className="font-bold">GH₵ {order?.totalPrice}</p>
    </div>

    {/* Amount Paid */}
    <div className="border-b pb-4">
      <p className="text-gray-400 text-sm">Amount Paid</p>
      <p className="font-bold text-green-500">GH₵ {order?.amountPaid}</p>
    </div>

    {/* Outstanding Balance */}
    <div className="border-b pb-4">
      <p className="text-gray-400 text-sm">Outstanding Balance</p>
      <p className="font-bold text-red-500">GH₵ {order?.totalPrice - order?.amountPaid}</p>
    </div>

    {/* Progress bar */}
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span>{percentage}% paid</span>
        <span>{100 - percentage}% remaining</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  </div>
</div>
</div>

    );
}

export default OrderDetails;