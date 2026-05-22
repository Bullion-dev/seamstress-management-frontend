import FormTopbar from "./FormTopbar";
import InputField from "./InputField";

function AddCustomers(){
    return(
        <div className="flex-col gap-6">
<FormTopbar 
backText="CUSTOMERS"
backPath="/customers"
cancelPath="/customers"
title="Add Customer"
saveText="Save Customer"
/>
<div className="bg-white rounded-lg shadow-sm mb-6 p-6">
<h2 className="text-lg font-bold text-gray-800 mb-6">Basic Info</h2>
<div className="flex gap-6 pb-6">
    {/* Full name */}
<InputField 
labelText="Full Name"
inputPlaceHolder="John Doe"
type="text"
width="w-1/2"
/>
{/* contact */}
<InputField 
labelText="Phone Number"
inputPlaceHolder="0550994211"
type="number"
width="w-1/2"
/>
</div>
<div className="flex gap-6 pb-6">
    {/* Location */}
<InputField 
labelText="Location"
inputPlaceHolder="Adenta"
type="text"
width="w-1/2"
/>
{/* Whatsapp Number */}
<InputField 
labelText="Whatsapp Number"
inputPlaceHolder="0550994211"
type="number"
width="w-1/2"
/>
</div>

{/* Notes */}
<InputField 
labelText="Notes"
inputPlaceHolder="Any Preference / Fabric Allergies / styles"
type="text"
width="w-full"
/>
</div>

<div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-lg font-bold text-gray-800 mb-6">Body Measurement (Inches)</h2>
<div className="flex gap-6 pb-6">
    {/* Chest */}
<InputField 
labelText="Chest/Bust"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
{/* Waist */}
<InputField 
labelText="Waist"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
  {/* Hips */}
<InputField 
labelText="Hips"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
{/* Shoulder */}
<InputField 
labelText="Shoulder Width"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
</div>
{/*Row 2 */}
<div className="flex gap-6 pb-6">
    {/* Full Length */}
<InputField 
labelText="Full Length"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
{/* Sleeve Length */}
<InputField 
labelText="Sleeve Length"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
  {/* Thigh */}
<InputField 
labelText="Thigh"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
{/* Inseam */}
<InputField 
labelText="Inseam"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
/>
</div>
</div>

</div>
    );
}


export default AddCustomers;