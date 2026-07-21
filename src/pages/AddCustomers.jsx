import FormTopbar from "../components/FormTopbar";
import InputField from "../components/InputField";
import {useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AddCustomers(){
    //useContext is like a card that gives you access to AppContext which is a book. so the whole context is like
    //borrowing from a library
const {customers,setCustomers} = useContext(AppContext);
const navigate = useNavigate();
// function for when save button is clicked //
function handleSave(){
  // Check if required fields are filled
  if (!fullName || !phoneNumber) {
    alert('Please fill in Full Name and Phone Number');
    return; // stop here, don't save
  }
    // the information in object form //
    const newCustomers={
        fullName,
  phoneNumber,
  location,
  whatsappNumber,
  notes,
  status : 'No Orders',
   measurements: {
    chest,
    waist,
    hips,
    shoulder,
    fullLength,
    sleeveLength,
    thigh,
    inseam,
  }
    }
    // saving to localStorage //
    localStorage.getItem('customers')
    // Adding the new info to the notebook, also if there's nothing in the object, open a new empty object //
    const existing = JSON.parse(localStorage.getItem('customers') || '[]')
    existing.push(newCustomers)
    setCustomers(existing); //update context
    // when you're finally reading from the notebook //
    localStorage.setItem('customers', JSON.stringify(existing))
    navigate('/customers')
}

const [fullName, setName] = useState("");
const [phoneNumber, setNumber] = useState("");
const [location, setLocation] = useState("");
const [whatsappNumber, setwhatsappNumber] = useState("");
const [notes, setNotes] = useState("");
const [chest, setChest] = useState('');
const [waist, setWaist] = useState('');
const [hips, setHips] = useState('');
const [shoulder, setShoulder] = useState('');
const [fullLength, setFullLength] = useState('');
const [sleeveLength, setSleeveLength] = useState('');
const [thigh, setThigh] = useState('');
const [inseam, setInseam] = useState('');
    return(
        <div className="flex-col gap-6">
<FormTopbar 
backText="CUSTOMERS"
backPath="/customers"
cancelPath="/customers"
title="Add Customer"
saveText="Save Customer"
onSave={handleSave}
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
value={fullName}
onChange={(e) => setName (e.target.value) }
/>
{/* contact */}
<InputField 
labelText="Phone Number"
inputPlaceHolder="0550994211"
type="number"
width="w-1/2"
value={phoneNumber}
onChange={(e) => setNumber (e.target.value) }
/>
</div>
<div className="flex gap-6 pb-6">
    {/* Location */}
<InputField 
labelText="Location"
inputPlaceHolder="Adenta"
type="text"
width="w-1/2"
value={location}
onChange={(e) => setLocation (e.target.value) }
/>
{/* Whatsapp Number */}
<InputField 
labelText="Whatsapp Number"
inputPlaceHolder="0550994211"
type="number"
width="w-1/2"
value={whatsappNumber}
onChange={(e) => setwhatsappNumber (e.target.value) }
/>
</div>

{/* Notes */}
<InputField 
labelText="Notes"
inputPlaceHolder="Any Preference / Fabric Allergies / styles"
type="text"
width="w-full"
value={notes}
onChange={(e) => setNotes (e.target.value) }
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
value={chest}
onChange={(e) => setChest (e.target.value) }
/>
{/* Waist */}
<InputField 
labelText="Waist"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
value={waist}
onChange={(e) => setWaist (e.target.value) }
/>
  {/* Hips */}
<InputField 
labelText="Hips"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
value={hips}
onChange={(e) => setHips (e.target.value) }
/>
{/* Shoulder */}
<InputField 
labelText="Shoulder Width"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
value={shoulder}
onChange={(e) => setShoulder (e.target.value) }
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
value={fullLength}
onChange={(e) => setFullLength (e.target.value) }
/>
{/* Sleeve Length */}
<InputField 
labelText="Sleeve Length"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
value={sleeveLength}
onChange={(e) => setSleeveLength (e.target.value) }
/>
  {/* Thigh */}
<InputField 
labelText="Thigh"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
value={thigh}
onChange={(e) => setThigh (e.target.value) }
/>
{/* Inseam */}
<InputField 
labelText="Inseam"
inputPlaceHolder="0.0"
type="number"
width="w-1/4"
value={inseam}
onChange={(e) => setInseam (e.target.value) }
/>
</div>
</div>

</div>
    );
}


export default AddCustomers;