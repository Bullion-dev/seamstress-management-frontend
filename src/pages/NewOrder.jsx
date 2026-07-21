import FormTopbar from "../components/FormTopbar";
import SelectField from "../components/SelectField";
import InputField from "../components/InputField";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function NewOrder(){
const {orders,customers, setOrders} = useContext(AppContext);

    const fileInput= useRef(null);
    const [image, setImage] = useState(null);//This will now hold the Base64 string
    const [customerNames, setCustomerNames] = useState("")
    const [date, setDate] = useState("")
    const [notes, setNotes] = useState("")
    const [totalPrice, setTotalPrice] = useState('')
    const [amountPaid, setAmountPaid] = useState('')
    const [status, setStatus] = useState("")
    const [fabricSupply, setFabricSupply] = useState("")


    const navigate = useNavigate()

    //To save an uploaded image to localStorage and display it later on the OrderDetails page, 
    // you need to convert the image file into a persistent format.
//Using URL.createObjectURL(file) only creates a temporary URL string that points to the browser's memory for that specific tab session.
//  If you refresh or open a new page, that URL breaks. Instead, you can convert the image file into a Base64 data URL string,
//  which is a plain string representation of the image data that can be safely saved to localStorage.

    // Helper function to handle image file conversion
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // reader.result contains the base64 data string
        setImage(reader.result);
      };
      reader.readAsDataURL(file); // Convert the file to data URL
    }
  };

function handleSave(){
  // Check if required fields are filled
  if (!customerNames || !date || totalPrice === '') {
    alert('Please fill in Customer Name, Date, and Total Price');
    return; // stop here, don't save
  }
  
   const newOrder= {
        customerNames,
        date,
        notes,
        totalPrice,
        amountPaid,
        status,
        fabricSupply,
        image,
    }

   // Read existing orders from Local Storage
// If nothing is saved yet, start with an empty array []
const existing = JSON.parse(localStorage.getItem("orders") || '[]')

// Add the new order to the list
existing.push(newOrder)

// Update the Context so all pages see the new order immediately
setOrders(existing);

// Save the updated list to Local Storage permanently
localStorage.setItem('orders', JSON.stringify(existing))

// Take user back to Orders page
navigate('/orders')
}
    return(
<div>
    <FormTopbar 
backText="ORDERS"
backPath="/orders"
cancelPath="/orders"
title="New Order"
saveText="Create Order"
onSave={handleSave}
/>

<div className="bg-white rounded-lg shadow-sm mb-6 p-6">
<h2 className="text-lg font-bold text-gray-800 mb-6">Order Details</h2>
<div className="flex gap-6 pb-6">
    {/* Customer */}
<SelectField 
labelText="Customer"
options={customers.map(customer => customer.fullName)}
selectplaceholder="Select Customer"
width="w-1/2"
value={customerNames}
onChange={(e) => setCustomerNames(e.target.value)}
/>
{/* Date */}
<InputField 
labelText="Date"
inputPlaceHolder="mm/dd/yy"
type="date"
width="w-1/2"
value={date}
onChange={(e) => setDate(e.target.value)}
/>
</div>
<div className="flex gap-6 pb-6">
    {/* Notes */}
<InputField 
labelText="Note"
inputPlaceHolder="Any Preference / Fabric Allergies / styles"
type="text"
width="w-full"
value={notes}
onChange={(e) => setNotes(e.target.value)}
/>
</div>

<div className="flex gap-6 pb-6">
    {/* Total Price */}
<InputField 
labelText="Total Price"
type="number"
inputPlaceHolder="0.0"
width="w-1/2"
value={totalPrice}
onChange={(e) => setTotalPrice(e.target.value)}
/>
{/* Amount Paid */}
<InputField 
labelText="Amount Paid"
inputPlaceHolder="0.0"
type="number"
width="w-1/2"
value={amountPaid}
onChange={(e) => setAmountPaid(e.target.value)}
/>
</div>

<div className="flex gap-6 pb-6">
    {/* Status */}
<SelectField 
labelText="Status"
options={['Pending', 'In Progress', 'Ready', 'Delivered']}
selectplaceholder="pending"
width="w-1/2"
value={status}
onChange={(e) => setStatus(e.target.value)}
/>
{/* Fabric Supplied By */}
<SelectField 
labelText="Fabric Supplied By"
selectplaceholder="Customer"
options={['Customer', 'Seamstress']}
width="w-1/2"
value={fabricSupply}
onChange={(e) => setFabricSupply(e.target.value)}
/>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-lg font-bold text-gray-800 mb-6">Style Preference</h2>
<input 
ref={fileInput}
type="file"
accept="image/*"
className="hidden"
onChange={handleImageChange}// <-- Linked to the new helper function
/>
<div 
onClick={() => fileInput.current.click()}
  className="bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400 transition-all duration-200 overflow-hidden w-full flex items-center justify-center"
  style={{ height: '400px' }}
>
  {image ? (
    <img 
      src={image} 
      alt="style reference" 
      style={{ maxHeight: '400px', maxWidth: '100%', objectFit: 'contain' }}
    />
  ) : (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <p className="text-gray-600 text-sm">Attach Image</p>
 </>
 )}
  </div>
</div>

</div>
    );
}


export default NewOrder;