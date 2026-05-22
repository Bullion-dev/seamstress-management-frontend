import Topbar from "./Topbar";


function Settings(){
    return(
<div className="flex flex-col gap-6 ">
    <Topbar 
    title="SETTINGS" 
    />
    {/* Studio Profile */}
     <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Studio Profile</h2>
<div className="flex gap-6 mb-6">
    {/*Studio Name*/}
<div className="flex flex-col gap-2 w-1/2">
 <label className="text-sm text-gray-700">Studio Name</label>
            <input
              type="text"
              placeholder="SEAM-LESS"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-400 outline-none focus:border-golden"
            />
</div>
{/* Phone Number */}
<div className="flex flex-col gap-2 w-1/2">
 <label className="text-sm text-gray-700">Phone Number</label>
            <input
              type="number"
              placeholder="0550010301"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-400 outline-none focus:border-golden"
            />
</div>
</div>
{/*Location */}
<div className="flex flex-col gap-2 w-1/2">
 <label className="text-sm text-gray-700">Location</label>
            <input
              type="text"
              placeholder="ADENTA"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-400 outline-none focus:border-golden"
            />
    </div>
    </div>

{/* Preferences */}
<div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Preferences</h2>
<div className="flex gap-6 mb-6">
    {/*Currency*/}
<div className="flex flex-col gap-2 w-1/2">
 <label className="text-sm text-gray-700">Studio Name</label>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-400 outline-none focus:border-golden">
                <option>Ghanaian Cedi</option>
                <option>US Dollar</option>
            </select>
</div>
{/* Measurement Unit */}
<div className="flex flex-col gap-2 w-1/2">
 <label className="text-sm text-gray-700">Measurement Unit</label>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-400 outline-none focus:border-golden">
                <option>Inches (In)</option>
                <option>Centimeters (Cm)</option>
            </select>
</div>
</div>

    </div>
</div>
    );
}

export default Settings;