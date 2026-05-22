import FormTopbar from "./FormTopbar";
import SelectField from "./SelectField";
import InputField from "./InputField";
import { useRef, useState } from "react";

function NewOrder(){
    const fileInput= useRef(null);
    const [image, setImage] = useState(null);

    return(
<div>
    <FormTopbar 
backText="ORDERS"
backPath="/orders"
cancelPath="/orders"
title="New Order"
saveText="Create Order"
/>

<div className="bg-white rounded-lg shadow-sm mb-6 p-6">
<h2 className="text-lg font-bold text-gray-800 mb-6">Order Details</h2>
<div className="flex gap-6 pb-6">
    {/* Customer */}
<SelectField 
labelText="Customer"
options={['J.Cole', 'Michael', 'Samuel']}
selectplaceholder="Select Customer"
width="w-1/2"
/>
{/* Date */}
<InputField 
labelText="Date"
inputPlaceHolder="mm/dd/yy"
type="date"
width="w-1/2"
/>
</div>
<div className="flex gap-6 pb-6">
    {/* Notes */}
<InputField 
labelText="Note"
inputPlaceHolder="Any Preference / Fabric Allergies / styles"
type="text"
width="w-full"
/>
</div>

<div className="flex gap-6 pb-6">
    {/* Total Price */}
<InputField 
labelText="Total Price"
type="number"
inputPlaceHolder="0.0"
width="w-1/2"
/>
{/* Amount Paid */}
<InputField 
labelText="Amount Paid"
inputPlaceHolder="0.0"
type="number"
width="w-1/2"
/>
</div>

<div className="flex gap-6 pb-6">
    {/* Status */}
<SelectField 
labelText="Status"
options={['Pending', 'In Proress', 'Ready', 'Delivered']}
selectplaceholder="pending"
width="w-1/2"
/>
{/* Fabric Supplied By */}
<SelectField 
labelText="Fabric Supplied By"
selectplaceholder="Customer"
options={['Customer', 'Seamstress']}
width="w-1/2"
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
onChange= {(e)=> {
    const file = e.target.files[0];
    if(file){
        setImage(URL.createObjectURL(file));
    }
}
}
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